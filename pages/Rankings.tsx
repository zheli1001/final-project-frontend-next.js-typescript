import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/Register.module.css';
import Navbar from '../components/Navbar';

const Rankings = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
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
                      <h4 className='media-heading'>Better.com</h4>
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
                      <h4 className='media-heading'>DoorDash</h4>
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
                      <h4 className='media-heading'>Robinhood</h4>
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
                      <h4 className='media-heading'>Samsara</h4>
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
                      <h4 className='media-heading'>Databricks</h4>
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
                      <h4 className='media-heading'>Outreach</h4>
                      Computer software
                    </div>
                  </div>
                </div>
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
                      <h4 className='media-heading'>Brooklinen</h4>
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
                      <h4 className='media-heading'>Attentive</h4>
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
                      <h4 className='media-heading'>Loom</h4>
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
                      <h4 className='media-heading'>Verkada</h4>
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

export default Rankings;