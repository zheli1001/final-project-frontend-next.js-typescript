import React from 'react';
import styles from '../components/Register.module.css';
import Navbar from '../components/Navbar';

// Reference : https://cssdeck.com/labs/sleek-sign-up

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
            <div className={styles.container}>
              <form className={styles.signup}>
                <div className={styles.header}>
                  <h3>Sign Up</h3>
                </div>
                <div className={styles.sep}></div>
                <div className={styles.inputs}>
                  <input
                    className={styles.emailinput}
                    type='email'
                    placeholder='e-mail'
                    // autofocus
                  />
                  <input
                    className={styles.passwordinput}
                    type='password'
                    placeholder='Password'
                  />

                  <div className={styles.checkboxy}>
                    <input name='cecky' id='checky' value='1' type='checkbox' />
                    <label className={styles.usertype}>I am an employer</label>
                  </div>
                  <a className={styles.submit} href='#'>
                    SIGN UP NOW
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

export default Register;