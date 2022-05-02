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
  const brandInfo = [
    [abb, 'ABB', '321 Products'],
    [auralight, 'AURA LIGHT', '321 Products'],
    [pelican, 'PELICAN', '321 Products'],
    [mk, 'MK', '321 Products'],
    [bluescope, 'LYSAGHT', '321 Products'],
    [eaton, 'EATON', '321 Products']
  ]
  const productInfo = [
    [
      '/product/1',
      item1,
      '120.22',
      'Philips S10 Starter Fluo 4-65w 220-240v 350332'
    ],
    ['/product/2', item2, '94.34', '04900008100 Philips Mhn-td 70w/842 Rx7s'],
    ['/product/3', item3, '23.00', 'Pelican 2755 3xaaa Headlight C1d1'],
    ['/product/4', item4, '3.04', 'Led Indicator Bulb Ba9s Red'],
    ['/product/5', item5, '85.00', 'Safety Jogger Safety Shoe Dakar S3'],
    [
      '/product/6',
      item6,
      '53.93',
      'Portable Lightweight Plastic Curb Ramps Heavy Duty Plastic Kit Set for Driveway Car Truck'
    ]
  ]
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
                {brandInfo.map(brands => {
                  return (
                    <Col span={4}>
                      <Card style={{ textAlign: 'center' }} bodyStyle={{}}>
                        <div
                          style={{
                            height: '60px',
                            margin: 'auto'
                          }}
                        >
                          <img
                            src={brands[0]}
                            style={{
                              height: '100%',
                              width: '100%',
                              paddingBottom: '20px'
                            }}
                          />
                        </div>
                        <Meta title={brands[1]} description={brands[2]} />
                      </Card>
                    </Col>
                  )
                })}
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
                {productInfo.map(products => {
                  return (
                    <Col span={4}>
                      <Link to={products[0]}>
                        <Card style={{ height: '350px',minHeight:'350px' }}>
                          <div
                            style={{
                              height: '150px',
                              margin: 'auto',
                              padding: 10
                            }}
                          >
                            <img
                              src={products[1]}
                              style={{
                                height: '100%',
                                width: '100%'
                              }}
                            />
                          </div>
                          <Meta
                            title={
                              <div>
                                <Row>
                                  <h6
                                    style={{
                                      color: '#2A64DB',
                                      paddingRight: 5
                                    }}
                                  >
                                    <b>S$</b>
                                  </h6>
                                  <div style={{ color: '#2A64DB' }}>
                                    <b>{products[2]}</b>
                                  </div>
                                </Row>
                              </div>
                            }
                            description={products[3]}
                          />
                        </Card>
                      </Link>
                    </Col>
                  )
                })}
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Home
