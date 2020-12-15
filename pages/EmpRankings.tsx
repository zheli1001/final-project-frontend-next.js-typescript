import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/Register.module.css';
import Navbar from '../components/Navbar';
import Axios from 'axios';

const HOST = 'http://localhost:5000/api/rankByRecruiter';

const EmpRankings = () => {
  function onclick(com: String) {
    Axios.put(
      HOST,
      {
        company: com
      },
      { headers: { 'x-auth-token': window.localStorage.getItem('token') } }
    )
      .then(function () {
        Axios.get(HOST, {
          headers: { 'x-auth-token': window.localStorage.getItem('token') }
        });
      })
      .catch(err => {
        console.log(err.response);
      });
    window.location.href = '/Stat';
  }
  return (
    <div>
      <Navbar />

      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
            <h1>Which one will be the next Tech giant?</h1>
            <br></br>
            <br></br>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://better.com/'>
                        <Image
                          className='media-object'
                          src='/1.png'
                          alt='1'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Better.com')}
                          style={{ marginBottom: '10px' }}
                        >
                          Better.com
                        </button>
                      </div>
                      Financial services
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.doordash.com/en-US'>
                        <Image
                          className='media-object'
                          src='/2.png'
                          alt='2'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('DoorDash')}
                          style={{ marginBottom: '10px' }}
                        >
                          DoorDash
                        </button>
                      </div>
                      Internet
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://robinhood.com/us/en/'>
                        <Image
                          className='media-object'
                          src='/3.png'
                          alt='3'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Robinhood')}
                          style={{ marginBottom: '10px' }}
                        >
                          Robinhood
                        </button>
                      </div>
                      Financial services
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.samsara.com/'>
                        <Image
                          className='media-object'
                          src='/4.png'
                          alt='4'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Samsara')}
                          style={{ marginBottom: '10px' }}
                        >
                          Samsara
                        </button>
                      </div>
                      Computer software
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://databricks.com/'>
                        <Image
                          className='media-object'
                          src='/5.png'
                          alt='5'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Databricks')}
                          style={{ marginBottom: '10px' }}
                        >
                          Databricks
                        </button>
                      </div>
                      Computer software
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.outreach.io/'>
                        <Image
                          className='media-object'
                          src='/6.png'
                          alt='6'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Outreach')}
                          style={{ marginBottom: '10px' }}
                        >
                          Outreach
                        </button>
                      </div>
                      Computer software
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.brooklinen.com/'>
                        <Image
                          className='media-object'
                          src='/7.png'
                          alt='7'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Brooklinen')}
                          style={{ marginBottom: '10px' }}
                        >
                          Brooklinen
                        </button>
                      </div>
                      Retail
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.attentivemobile.com/'>
                        <Image
                          className='media-object'
                          src='/8.png'
                          alt='8'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Attentive')}
                          style={{ marginBottom: '10px' }}
                        >
                          Attentive
                        </button>
                      </div>
                      Marketing and advertising
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.loom.com/'>
                        <Image
                          className='media-object'
                          src='/9.png'
                          alt='9'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Loom')}
                          style={{ marginBottom: '10px' }}
                        >
                          Loom
                        </button>
                      </div>
                      Information technology and services
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <div className='media-left'>
                      <a href='https://www.verkada.com/'>
                        <Image
                          className='media-object'
                          src='/10.png'
                          alt='10'
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                    <div className='media-body'>
                      <div>
                        <button
                          className='btn btn-secondary'
                          onClick={() => onclick('Verkada')}
                          style={{ marginBottom: '10px' }}
                        >
                          Verkada
                        </button>
                      </div>
                      Computer software
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpRankings;
