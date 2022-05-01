import React from 'react'
import {
  Descriptions,
  Layout,
  Card,
  Row,
  Col,
  Badge,
  Button,
  Input,
  Carousel
} from 'antd'
import flag from '../../../Assets/Flag.png'
import logo from '../../../Assets/Logo.png'
import banner from '../../../Assets/banner.png'
import cart from '../../../Assets/Cart.svg'
import abb from '../../../Assets/ABB.png'
import auralight from '../../../Assets/Auralight.png'
import bluescope from '../../../Assets/bluescope.png'
import eaton from '../../../Assets/eaton.png'
import mk from '../../../Assets/mk.png'
import pelican from '../../../Assets/pelican.png'
import item1 from '../../../Assets/1.png'
import item2 from '../../../Assets/2.png'
import item3 from '../../../Assets/3.png'
import item4 from '../../../Assets/4.png'
import item5 from '../../../Assets/5.png'
import item6 from '../../../Assets/6.png'
import Icon, {
  PhoneOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  RightOutlined
} from '@ant-design/icons'
import './Home.css'

const home = () => {
  const { Header, Content } = Layout
  const { Meta } = Card
  function onIconClick () {
    alert('clicked!')
  }
  return (
    <Layout className='layout' style={{ backgroundColor: '#F7F7F8' }}>
      <Row gutter={16} style={{ backgroundColor: '#F7F7F8' }}>
        <Col offset={5} span={2}>
          <img src={flag} width='21' height='14' />
          Singapore
        </Col>
        <Col>
          <PhoneOutlined />
          +65 6797 9688
        </Col>
      </Row>
      <Header style={{ backgroundColor: 'white', height: '110px' }}>
        <Row>
          <Col offset={5} span={3}>
            <img src={logo} />
          </Col>
          <Col span={6}>
            <Input
              style={{ borderRadius: '25px' }}
              allowClear
              suffix={
                <Button
                  style={{ background: '#2A64DB' }}
                  type='primary'
                  shape='circle'
                  icon={<SearchOutlined />}
                />
              }
            />
          </Col>
          <Col offset={5} span={2}>
            <Badge style={{ backgroundColor: '#2A64DB' }} count={0} showZero>
              <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col offset={5} span={3}>
            <Button type='link'>View all items</Button>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row>
          <Col offset={5} span={14}>
            <img style={{ height: '385px', width: '100%' }} src={banner} />
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
              style={{ backgroundColor: '#F7F7F8', border: 0 }}
              extra={
                <a href='#'>
                  View All
                  <RightOutlined />
                </a>
              }
            >
              <Row gutter={8}>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={abb} />}
                  >
                    <Meta title='ABB' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={auralight} />}
                  >
                    <Meta title='AURA LIGHT' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={pelican} />}
                  >
                    <Meta title='PELICAN' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={mk} />}
                  >
                    <Meta title='MK' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={bluescope} />}
                  >
                    <Meta title='LYSAGHT' description='321 Products' />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card
                    style={{ textAlign: 'center' }}
                    cover={<img src={eaton} />}
                  >
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
            >
              <Row gutter={8}>
                <Col span={4}>
                  <Card cover={<img src={item1} />}>
                    <Meta
                      title='S$ 120.22'
                      description='Philips S10 Starter Fluo 4-65w 220-240v 350332
                      product name super long'
                    />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card cover={<img src={item2} />}>
                    <Meta
                      title='S$ 94.34'
                      description='04900008100 Philips Mhn-td 70w/842 Rx7s'
                    />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card cover={<img src={item3} />}>
                    <Meta
                      title='S$ 23.00'
                      description='Pelican 2755 3xaaa Headlight C1d1'
                    />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card cover={<img src={item4} />}>
                    <Meta
                      title='S$ 3.04'
                      description='Led Indicator Bulb Ba9s Red'
                    />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card cover={<img src={item5} />}>
                    <Meta
                      title='S$ 85.00'
                      description='Safety Jogger Safety Shoe Dakar S3'
                    />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card cover={<img src={item6} />}>
                    <Meta
                      title='S$ 23.00'
                      description='Worksafe Disposable Powder Free Nitrile Gloves 9Inch'
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default home
