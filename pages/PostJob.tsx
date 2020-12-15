import React, { ChangeEvent, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import Router from "next/router";
import { url } from "../components/config";

const index = () => {
  const [info, setinfo] = useState<any>({
    jobtitle: "",
    summary: "",
    responsibilites: "",
    skills: "",
    salary: "",
  });

  function valChange(val: string, type: string) {
    var od = { ...info, [type]: val };
    setinfo(od);
  }

  function submit() {
    var data = info;

    if (data.jobtitle === undefined) {
      alert("Jobtitle is required");
      return;
    }
    if (data.skills === undefined) {
      alert("Skills is required");
      return;
    }
    if (data.summary === undefined) {
      alert("Summary is required");
      return;
    }

    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    fetch(url + "/api/jobs", {
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
        Router.push("/JobList");
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <h1>Post Jobs</h1>
          <p>
            jobtitle:
            <input
              type="text"
              value={info.jobtitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "jobtitle")
              }
            />
          </p>
          <p>
            summary:
            <input
              type="text"
              value={info.summary}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "summary")
              }
            />
          </p>
          <p>
            responsibilites:
            <input
              type="text"
              value={info.responsibilites}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "responsibilites")
              }
            />
          </p>
          <p>
            skills:
            <input
              type="text"
              value={info.skills}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "skills")
              }
            />
          </p>
          <p>
            salary:
            <input
              type="text"
              value={info.salary}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "salary")
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
