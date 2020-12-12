import React, { useState } from 'react';
import { Form, Col, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Job from '../components/Job';
import Axios from 'axios';
import Navbar from '../components/Navbar';
import JobSearch from '../components/JobSearch';
import styles from '../components/AllJobs.module.css';

class AllJobs extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <JobSearch />
      </div>
    );
  }
}

export default AllJobs;
