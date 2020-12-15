import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import EmpJobList from "../components/EmpJobList";
import UserJobList from "../components/UserJobList";

const index = () => {
  const [user, setuser] = useState<any>({});
  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      setuser(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <h1>Jobs Lists </h1>
          {user.isEmployer ? <EmpJobList /> : <UserJobList />}
        </div>
      </div>
    </>
  );
};
export default index;
