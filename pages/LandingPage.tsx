import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../components/LandingPage.module.css';

const LandingPage = () => (
  <div>
    <Navbar />
    <div className={styles.landing}>
      <div className={styles.darkoverlay}>
        <div className={styles.landinginner}>
          <h1 className={styles.xlarge}>Searching For Jobs</h1>
          <p className={styles.lead}>Search For Your Dream Jobs!</p>
          <div className={styles.buttons}>
            <Link href='/Register'>
              Sign Up
            </Link>
            <Link href='/Login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;