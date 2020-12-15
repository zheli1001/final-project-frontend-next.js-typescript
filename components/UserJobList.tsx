import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { url } from "./config";
import Link from "next/link";

const index = () => {
  const [list, setlist] = useState<any>([]);
  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      getjobs();
    }
  }, []);

  function getjobs() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };

    fetch(url + "/api/viewJobs", { headers: requestHeaders })
      .then((res) => res.json())
      .then((res) => {
        setlist(res);
      });
  }

  return (
    <>
      <table className={styles["tables-job"]}>
        <thead>
          <tr>
            <th>jobtitle</th>
            <th>summary</th>
            <th>responsibilites</th>
            <th>salary</th>
            <th>skills</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, index: number) => (
            <tr key={index}>
              <td>
                <Link href={"/JobInfo?_id=" + item._id}>{item.jobtitle}</Link>
              </td>
              <td>{item.summary}</td>
              <td>{item.responsibilites}</td>
              <td>{item.salary}</td>
              <td>{item.skills}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default index;
