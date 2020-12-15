import React from 'react';
import { Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

var title;
var sum;
var sar;
var res;
var ski;
const HOST = 'http://localhost:5000/api/jobs';
class PostJob extends React.Component {
    constructor() {
        super();
        this.State = {
            token: '',
            jobtitle: '',
            summary: '',
            salary: '',
            responsibility: '',
            skills: ''
        } 
    }

    // componentDidMount() {
    //   Axios.get(HOST).then(response => {
    //     this.setState({ url: response.data });
    //   });
    // }
    myChangeHandlerforTitle = event => {
      title = event.target.value;

      this.setState({ jobtitle: title });
      // console.log(this.state.description);
    };
  
    myChangeHandlerforSummary = event => {
      sum = event.target.value;
  
      this.setState({ summary: sum });
      // console.log(this.state.description);
    };

    myChangeHandlerforSkill = event => {
      ski = event.target.value;
  
      this.setState({ skills: ski });
      // console.log(this.state.description);
    };

    onSubmit() {
      Axios.post(HOST, {
          jobtitle: this.state.jobtitle,
          summary: this.state.summary,
          salary: this.state.salary,
          responsibility: this.state.responsibility,
          skills: this.state.skills
      })
          // .then(function () {
          //     return Axios.get(HOST);
          // })
          // .then(response => {
          //     this.setState({ url: response.data });
          // })
          // .catch(err => {
          //     console.log(err.response.data);
          //     //this.setState({ errorMessage: err.response.data });
          //     //setInterval(this.refreshPage(), 60000);
          // })
          .finally(() =>
              this.setState({
                jobtitle: '',
                summary: '',
                salary: '',
                responsibility: '',
                skills: ''
              })
          );
  }

    render() {
      return (
        <div>
          <br></br>
            <h1 style = {{margin:'auto', width: '50%', textAlign: 'center'}}>Post a Job</h1>
            <br></br>
            <br></br>
            <Form className='mb-4' style = {{margin:'auto', width: '50%', }}>
              <Form.Row className='align-items'>
                <Col sm={4} className='my-1'>
                  <Form.Control
                    style={{ marginLeft: '15px' }}
                    placeholder='job title'
                    name='jobtitle'
                    type='text'
                    onChange = {this.myChangeHandlerforTitle}
                  />
                </Col>
                <Col sm={3} className='my-1'>
                  <Form.Control
                    style={{ marginLeft: '50px' }}
                    placeholder='salary'
                    //onChange={this.myChangeHandlerforloc}
                    name='location'
                    type='text'
                  />
                  

                  
                </Col>
            

                <Form.Control
                    style={{ marginTop: '30px', marginLeft: '20px'}}
                    placeholder='Skills'
                    onChange={this.myChangeHandlerforSkill}
                    name='skills'
                    type='text'
                  />

                  <br></br>
                
                <Form.Control 
                    as="textarea" rows={2} 
                    style={{ marginLeft: '20px' }}
                    placeholder='Responsibility'
                />

                <br></br>

                <Form.Control 
                    as="textarea" rows={3} 
                    style={{ marginLeft: '20px' }}
                    placeholder='summary'
                    onChange = {this.myChangeHandlerforSummary}
                />
            
                <button
                  style={{ marginTop: '30px', marginLeft: '15px', textAlign: 'center' }}
                  type='button'
                  className='btn btn-primary'
                  onClick={() => this.onSubmit()}
                
                >
                  Submit
                </button>
              </Form.Row>
            </Form>
        </div>
      );
    }
  }

  export default PostJob;

