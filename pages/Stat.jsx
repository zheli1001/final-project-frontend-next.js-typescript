import React from 'react';
import { Pie } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import Axios from 'axios';
import { liveBarChar } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
// const headers = {
//   'Content-Type': 'application/json',
//   'x-auth-token': window.localStorage.getItem('token')
// };

var la = [];
var da = [];
const HOST = 'http://localhost:5000/api/rank';
function getData() {
  var ranks;
  Axios.get(HOST, {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': window.localStorage.getItem('token')
    }
  }).then(response => {
    this.setState({ ranks: response.data });
    if (ranks != null && ranks.length > 0) {
      ranks.map(item => {
        la.push(item.company.toString());
        da.push(item.count);
      });
    }
    this.setState({
      dataPie: {
        labels: la,
        data: da
      }
    });

    //console.log(da.length);
  });
}
class Stat extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      ranks: [],
      da: [],
      la: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    //this.setState({ranks: Axios.get(HOST)});
    Axios.get(HOST, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.getItem('token')
      }
    }).then(response => {
      this.setState({ ranks: response.data });
      if (this.state.ranks != null && this.state.ranks.length > 0) {
        this.state.ranks.map(item => {
          la.push(item.company.toString());
          da.push(item.count);
        });
      }
    });

    //console.log(da.length);
  }

  //     //console.log(this.state.ranks);

  // }
  // componentWillUnmount() {
  //     this._isMounted = false;
  //     //console.log(this.state.ranks.length);
  //   }

  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.ranks !== this.state.ranks) {
  //         Axios.get(HOST, {headers}).then(response => {
  //             this.setState({ranks: response.data});
  //             //ranks = response.data;
  //         });
  //         //this.setState({ranks: Axios.get(HOST)});
  //     }

  // }

  render() {
    console.log(this.state.dataPie);
    return (
      //   <MDBContainer>
      //     <h3 className="mt-5">Pie chart</h3>
      //     <Pie data={this.state.dataPie} onKeyUp={this.componentDidMount} options={{ responsive: true }} />
      //   </MDBContainer>
      <div>
        <div className='d-flex justify-content-center'>
          <table className='table table-sm'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Company</th>
                <th scope='col'>Vote</th>
              </tr>
            </thead>
            {this.state.ranks.map(item => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th scope='row'>{item.company}</th>
                <td>{item.count}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Stat;
