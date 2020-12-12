import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      {/* <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </head> */}
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href='/LandingPage'>
              <a>Main Page</a>
            </Link>
          </li>
          <li>
            <Link href='/AllJobs' >
              <a>All Jobs</a>
            </Link>
          </li>
          <li>
            <Link href='/Rankings'>Rankings</Link>
          </li>
          <li>
            <Link href='/Register'>Register</Link>
          </li>
          <li>
            <Link href='/Login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;