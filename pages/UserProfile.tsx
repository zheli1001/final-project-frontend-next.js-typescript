import React, { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import Router from "next/router";
import { url } from "./../components/config";

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

  function valChange(val: string, type: string) {
    var od = { ...info, [type]: val };
    setinfo(od);
  }

  function submit() {
    var data = info;
    if (data.location === undefined) {
      alert("Location is required");
      return;
    }
    if (data.skills === undefined) {
      alert("Skills is required");
      return;
    }

    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    fetch(url + "/api/profile", {
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
        Router.push("/UserProfileInfo");
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
          <p>
            location:
            <input
              type="text"
              value={info.location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "location")
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
            bio:
            <input
              type="text"
              value={info.bio}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "bio")
              }
            />
          </p>
          <p>
            githubname:
            <input
              type="text"
              value={info.githubusername}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "githubusername")
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
export default UserProfile;
