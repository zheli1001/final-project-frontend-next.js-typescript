import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import Router from "next/router";
import { url } from "../components/config";

const UserProfile = () => {
  const [info, setinfo] = useState<any>({
    location: "",
    skills: "",
    bio: "",
    githubusername: "",
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

    fetch(url + "/api/profile/me", {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (!res.msg) {
          var obj = { ...res, skills: res.skills.join(",") };
          setinfo(obj);
        }
      });
  }
  function del() {
    const requestHeaders: any = {
      "x-auth-token": window.localStorage.getItem("token"),
    };
    if (confirm("Are you sure you want to delete")) {
      fetch(url + "/api/profile", {
        method: "DELETE",
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res ->> ", res);
          if (res.msg) {
            localStorage.clear();
            Router.push("/Login");
          }
        });
    }
  }
  function toEdit() {
    Router.push("/UserProfile");
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <h1>User Profile</h1>
          <p style={{ textAlign: "right" }}>
            <button onClick={toEdit}>Add Or Update Profile</button>
            &nbsp;
            <button onClick={del}>deleted Profile</button>
          </p>
          <p>location: {info.location}</p>
          <p>skills: {info.skills}</p>
          <p>bio: {info.bio}</p>
          <p>githubname: {info.githubusername}</p>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
