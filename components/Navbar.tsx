import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [user, setuser] = useState<any>({});
  if (typeof window !== 'undefined') {
    console.log('we are running on the client');
  } else {
    console.log('we are running on the server');
  }

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    var user = localStorage.getItem('user');
    if (user) {
      setuser(JSON.parse(user));
    }
  }

  function logout() {
    localStorage.clear();
    Router.push('/LandingPage');
  }

  function topage() {
    console.log('user ->> ', user);
    if (user.isEmployer) {
      Router.push('/EmpProfileInfo');
    } else {
      Router.push('/UserProfileInfo');
    }
  }

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
            <Link href='/AllJobs'>
              <a>All Jobs</a>
            </Link>
          </li>
          {user.email && (
            <>
              {(user.isEmployer && (
                <li>
                  <Link href='/EmpRankings'>Ranking</Link>
                </li>
              )) || (
                <li>
                  <Link href='/Rankings'>Ranking</Link>
                </li>
              )}
            </>
          )}
          || (
          <li>
            <Link href='/AnonyRankings'>Ranking</Link>
          </li>
          )
          {/* <li>
            <Link href='/Rankings'>Rankings</Link>
          </li> */}
          <li>
            <Link href='/Register'>Register</Link>
          </li>
          <li>
            <Link href='/Login'>Login</Link>
          </li>
          {user.email && (
            <>
              <li>
                <Link href='/JobList'>JobList</Link>
              </li>
              {user.isEmployer && (
                <li>
                  <Link href='/PostJob'>PostJob</Link>
                </li>
              )}
              <li onClick={topage}>
                <a>
                  <span>hello ,</span>
                  <span>{user.email} </span>
                </a>
              </li>
              <li onClick={logout}>
                <a>
                  <span>Logout</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
