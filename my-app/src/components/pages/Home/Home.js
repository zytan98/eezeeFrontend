import React from 'react'
import { Layout, Card, Row, Col, Divider } from 'antd'
import banner from '../../../Assets/banner.png'
import mk from '../../../Assets/MK.svg'
import abb from '../../../Assets/ABB.png'
import auralight from '../../../Assets/Auralight.png'
import bluescope from '../../../Assets/bluescope.png'
import eaton from '../../../Assets/eaton.png'
import pelican from '../../../Assets/pelican.png'
import item1 from '../../../Assets/1.png'
import item2 from '../../../Assets/2.png'
import item3 from '../../../Assets/3.png'
import item4 from '../../../Assets/4.png'
import item5 from '../../../Assets/5.png'
import item6 from '../../../Assets/blackchoke.png'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import Navbar from '../../navbar/Navbar'
import './Home.css'

const Home = () => {
  const { Content } = Layout
  const { Meta } = Card
  return (
    <Layout style={{ backgroundColor: '#F7F7F8' }}>
      <Navbar />
      <Content>
        <Row style={{ padding: 20 }}>
          <Col offset={5} span={14}>
            <img style={{ height: '100%', width: '100%' }} src={banner} />
          </Col>
        </Row>
        <Row>
          <Col offset={5} span={14}>
            <Card
              title={
                <>
                  <h1>Featured Brands</h1>
                  <h4> Browse the full catalog of brands today</h4>
                </>
              }
              style={{ height: '158', backgroundColor: '#F7F7F8', border: 0 }}
              headStyle={{ border: 0 }}
              extra={
                <a href='#'>
                  View All
                  <RightOutlined />
                </a>
              }
            >
              <Row gutter={8}>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }} bodyStyle={{}}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={abb}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>
                    <Meta title='ABB' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={auralight}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>
                    <Meta title='AURA LIGHT' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={pelican}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>

                    <Meta title='PELICAN' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={mk}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>

                    <Meta title='MK' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={bluescope}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>
                    <Meta title='LYSAGHT' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ textAlign: 'center' }}>
                    <div
                      style={{ height: '60px', width: '135px', margin: 'auto' }}
                    >
                      <img
                        src={eaton}
                        style={{
                          height: '100%',
                          width: '100%',
                          paddingBottom: '20px'
                        }}
                      />
                    </div>

                    <Meta title='EATON' description='321 Products' />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col offset={5} span={14}>
            <Card
              title={
                <>
                  <h1>Our Most Popular Products</h1>
                  <h4>Trusted by the best companies in Asia</h4>
                </>
              }
              style={{ backgroundColor: '#F7F7F8', border: 0 }}
              headStyle={{ border: 0 }}
            >
              <Row gutter={8}>
                <Col span={4}>
                  <Link to='/product/1'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item1}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>

                      <Meta
                        title='S$ 120.22'
                        description='Philips S10 Starter Fluo 4-65w 220-240v 350332'
                      />
                    </Card>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='/product/2'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item2}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <Meta
                        title='S$ 94.34'
                        description='04900008100 Philips Mhn-td 70w/842 Rx7s'
                      />
                    </Card>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='/product/3'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item3}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <Meta
                        title='S$ 23.00'
                        description='Pelican 2755 3xaaa Headlight C1d1'
                      />
                    </Card>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='/product/4'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item4}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <Meta
                        title='S$ 3.04'
                        description='Led Indicator Bulb Ba9s Red'
                      />
                    </Card>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='/product/5'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item5}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <Meta
                        title='S$ 85.00'
                        description='Safety Jogger Safety Shoe Dakar S3'
                      />
                    </Card>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link to='/product/6'>
                    <Card style={{ height: '350px' }}>
                      <div
                        style={{
                          height: '150px',
                          width: '120px',
                          margin: 'auto',
                          padding: 10
                        }}
                      >
                        <img
                          src={item6}
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                        />
                      </div>
                      <Meta
                        title='S$ 53.93'
                        description='Portable Lightweight Plastic Curb Ramps Heavy Duty Plastic Kit Set for Driveway Car Truck'
                      />
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Home
