import React, { ChangeEvent, useState } from "react";
import styles from "../components/Register.module.css";
import Navbar from "../components/Navbar";
import Router from "next/router";
import { url } from "../components/config";
import Link from 'next/link';

const Index = () => {
  const [form, useform] = useState({
    email: "",
    password: "",
    isEmployer: false,
  });

  function submit() {
    var data = form;
    console.log("data ->> ", data);
    var emailRus = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!emailRus.test(data.email)) {
      alert("Please include a valid email");
      return;
    }
    if (data.password.length < 6) {
      alert("Please enter a password with 6 or more characters");
      return;
    }
    if (data.isEmployer) {
      employerReg(data);
    } else {
      userReg(data);
    }
  }

  function userReg(data: any) {
    fetch(url+"/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (res.token) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", res.token);
          Router.push("/LandingPage");
        }
        if (res.errors) {
          res.errors.map((item: any) => {
            alert(item.msg);
          });
        }
      });
  }
  function employerReg(data: any) {
    fetch(url+"/api/authRecruiters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (res.token) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", res.token);
          Router.push("/LandingPage");
        }
        if (res.errors) {
          res.errors.map((item: any) => {
            alert(item.msg);
          });
        }
      });
  }

  function change(val: string | boolean, type: string) {
    var old = { ...form, [type]: val };
    useform(old);
  }

  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
            <div className={styles.container}>
              <form className={styles.signup}>
              <Link href='/LandingPage'>
              <button type="button" className="close" aria-label="Close" style = {{marginTop: '20px', float: 'right'}} >
              
              <span aria-hidden="true">&times;</span>
              </button>
              
              </Link>
                <div className={styles.header}>
                  <h3>Log In</h3>
                </div>
                <div className={styles.sep}></div>
                <div className={styles.inputs}>
                  <input
                    className={styles.emailinput}
                    type="email"
                    placeholder="e-mail"
                    value={form.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      change(e.target.value, "email")
                    }
                  />
                  <input
                    className={styles.passwordinput}
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      change(e.target.value, "password")
                    }
                  />
                  <div className={styles.checkboxy}>
                    <input
                      name="cecky"
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        change(e.target.checked, "isEmployer")
                      }
                    />
                    <label className={styles.usertype}>I am an employer</label>
                  </div>

                  <a className={styles.submit} onClick={submit}>
                    Log In
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
