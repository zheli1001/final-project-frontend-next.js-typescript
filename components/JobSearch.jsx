import React, { useState } from 'react';
import { Form, Col, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Job from './Job';
import Axios from 'axios';
import styles from '../components/AllJobs.module.css';

var des;
var loc;
var curPage;
const BASE_URL =
  'https://ancient-chamber-73045.herokuapp.com/https://jobs.github.com/positions.json?';
// const BASE_URL = 'http://localhost:8010/proxy/';
var real = 'jobs.github.com/positions.json';
var url = BASE_URL;
//positions?description=python&location=new+york
class JobSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      description: '',
      location: '',
      page: 1,
      hasNextPage: true
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  myChangeHandlerfordes = event => {
    des = event.target.value;

    this.setState({ description: des });
    // console.log(this.state.description);
  };

  myChangeHandlerforloc = event => {
    loc = event.target.value;
    this.setState({ location: loc });
  };

  clickPagePlus = () => {
    url = BASE_URL;
    console.log(this.state.page);
    if (this.state.jobs != null && this.state.jobs.length > 0) {
      var curpage = this.state.page + 1;
      console.log(curpage);
      this.setState({ page: curpage });
      console.log(this.state.page);
      if (loc != null) {
        this.setState({ location: loc });
        url += '&location=' + this.state.location;
      }
      if (des != null) {
        // console.log(des);
        this.setState({ description: des });
        url += '&description=' + this.state.description;
        // console.log(this.state.description);
      }
      url += '&page=' + curpage;
      console.log(url);
      Axios.get(url).then(response => {
        this.setState({ jobs: response.data });
        if (response.data != null && response.data.length > 0) {
          this.setState({ hasNextPage: true });
        } else {
          this.setState({ hasNextPage: false });
        }
        // console.log(response.data);
      });
    }
  };

  clickPageMinus = () => {
    url = BASE_URL;
    if (this.state.page > 1) {
      var curpage = this.state.page - 1;
      this.setState({ page: curpage });
      if (loc != null) {
        this.setState({
          location: loc,
          page: 1
        });
        url += '&location=' + this.state.location;
      }
      if (des != null) {
        // console.log(des);
        this.setState({
          description: des,
          page: 1
        });
        url += '&description=' + this.state.description;
        // console.log(this.state.description);
      }
      url += '&page=' + curpage;
      console.log(url);
      Axios.get(url).then(response => {
        this.setState({ jobs: response.data });
        this.setState({ hasNextPage: true });
        // console.log(response.data);
      });
    }
  };

  handleClick = () => {
    url = BASE_URL;

    if (loc != null) {
      this.setState({
        location: loc,
        page: 1
      });
    }
    if (des != null) {
      // console.log(des);
      this.setState({
        description: des,
        page: 1
      });
      // console.log(this.state.description);
    }
    url +=
      '&description=' +
      this.state.description +
      '&location=' +
      this.state.location;
    real +=
      '?description=' +
      this.state.description +
      '&location=' +
      this.state.location;
    console.log(real);
    Axios.get(url).then(response => {
      this.setState({ jobs: response.data });
      // console.log(response.data);
    });
  };
  componentWillMount() {
    var url = BASE_URL;

    Axios.get(url).then(response => {
      this.setState({ jobs: response.data });
      // console.log(response.data);
    });
  }

  render() {
    console.log('Again');
    return (
      <div>
        {/* <div className={styles.container}> */}
        <div className={styles.landing}>
          <div className={styles.darkoverlay}>
            <form className='mb-4'>
              <Form.Row className='align-items'>
                <Col sm={5} className='my-1'>
                  <Form.Label style={{ marginLeft: '15px' }}>
                    Description
                  </Form.Label>
                  <Form.Control
                    style={{ marginLeft: '15px' }}
                    placeholder='description'
                    onChange={this.myChangeHandlerfordes}
                    name='description'
                    type='text'
                  />
                </Col>
                <Col sm={5} className='my-1'>
                  <Form.Label style={{ marginLeft: '15px' }}>
                    Location
                  </Form.Label>
                  <Form.Control
                    style={{ marginLeft: '15px' }}
                    onChange={this.myChangeHandlerforloc}
                    name='location'
                    type='text'
                  />
                </Col>
                <button
                  style={{ marginLeft: '15px' }}
                  type='button'
                  class='btn btn-primary'
                  onClick={this.handleClick}
                >
                  Search
                </button>
              </Form.Row>
            </form>
            <Pagination>
              {this.state.page > 1 && (
                <Pagination.Prev onClick={this.clickPageMinus}>
                  {this.state.page - 1}
                </Pagination.Prev>
              )}
              <Pagination.Item active>{this.state.page}</Pagination.Item>
              {this.state.hasNextPage && (
                <Pagination.Next onClick={this.clickPagePlus}>
                  {this.state.page + 1}
                </Pagination.Next>
              )}
            </Pagination>
            {this.state.jobs.map(job => {
              return <Job key={job.id} job={job} />;
            })}
            <Pagination></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default JobSearch;