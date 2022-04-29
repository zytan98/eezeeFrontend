import React from 'react'
import { Layout, Row, Col, Badge, Avatar, Button, Input } from 'antd'
import flag from '../../../Assets/Flag.png'
import logo from '../../../Assets/Logo.png'
import {
  PhoneOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons'
import './Home.css'

const home = () => {
  const { Header, Content } = Layout
  const { Search } = Input
  function onIconClick () {
    alert('clicked!')
  }
  return (
    <Layout className='layout' style={{ backgroundColor: '#F7F7F8' }}>
      <Row gutter={16} style={{ backgroundColor: '#F7F7F8' }}>
        <Col>
          <img src={flag} width='21' height='14' />
          Singapore
        </Col>
        <Col>
          <PhoneOutlined />
          +65 6797 9688
        </Col>
      </Row>
      <Header style={{ backgroundColor: 'white' }}>
        <Row>
          <Col>
            <img src={logo} />
          </Col>
          <Col>
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
          <Col>
            <Badge style={{ backgroundColor: '#2A64DB' }} count={0} showZero>
              <ShoppingCartOutlined
                style={{ fontSize: '30px' }}
                onClick={onIconClick}
              />
            </Badge>
          </Col>
        </Row>
        <Row>
            <Button type='link'>View all items</Button>
        </Row>
      </Header>
      <Content style={{ backgroundColor: '#F7F7F8', padding: '0 50px' }}>
        HELLO
      </Content>
    </Layout>
  )
}

export default home
