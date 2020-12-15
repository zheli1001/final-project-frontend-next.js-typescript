import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import Router from "next/router";
import { url } from "./../components/config";

const index = () => {
  const [info, setinfo] = useState<any>({
    company: "",
    title: "",
  });
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    var user = localStorage.getItem("user");
    if (user) {
      getProfile();
    }
  }

  function getProfile() {
    const requestHeaders: any = {
      "x-auth-token": window.localStorage.getItem("token"),
    };

    fetch(url + "/api/recruiterProfile/me", {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (!res.msg) {
          var obj = { ...res, title: res.title.join(",") };
          setinfo(obj);
        }
      });
  }

  function valChange(val: string, type: string) {
    var od = { ...info, [type]: val };
    setinfo(od);
  }

  function submit() {
    var data = info;
    if (data.company === undefined) {
      alert("Company is required");
      return;
    }
    if (data.title === undefined) {
      alert("Title is required");
      return;
    }

    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    fetch(url + "/api/recruiterProfile", {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (res.msg) {
          alert(res.msg);
        }
        Router.push("/EmpProfileInfo");
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <p>
            company:
            <input
              type="text"
              value={info.company}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "company")
              }
            />
          </p>
          <p>
            title:
            <input
              type="text"
              value={info.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "title")
              }
            />
          </p>

          <p>
            <button onClick={submit}>submit</button>
          </p>
        </div>
      </div>
    </>
  );
};
export default index;
