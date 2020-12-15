import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import Router from "next/router";
import { url } from "../components/config";

const Index = () => {
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
          var obj = { ...res };
          setinfo(obj);
        }
      });
  }
  function del() {
    const requestHeaders: any = {
      "x-auth-token": window.localStorage.getItem("token"),
    };
    if (confirm("Are you sure you want to delete")) {
      fetch(url + "/api/recruiterProfile", {
        method: "DELETE",
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res ->> ", res);
          if (res.msg) {
            localStorage.clear();
            Router.push("/LandingPage");
          }
        });
    }
  }
  function toEdit() {
    Router.push("/EmpProfile");
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <h1>Employer Profile</h1>
          <p style={{ textAlign: "right" }}>
            <button onClick={toEdit}>Add Or Update Profile</button>
            &nbsp;
            <button onClick={del}>deleted Profile</button>
          </p>
          <p>company: {info.company}</p>
          <p>title: {info.title}</p>
        </div>
      </div>
    </>
  );
};
export default Index;
