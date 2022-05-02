import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Badge, Button, Input } from 'antd'
import Icon, { PhoneOutlined, SearchOutlined } from '@ant-design/icons'
import flag from '../../Assets/Flag.png'
import logo from '../../Assets/Logo.png'
import { ReactComponent as Cart } from '../../Assets/Cart.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = props => {
  //Check if there is a counter for cart in session storage
  if (sessionStorage.getItem('cart') == null) {
    sessionStorage.setItem('cart', 0)
  }
  //set counter'scount to session storage's cart information
  const [counter, setCounter] = useState(JSON.parse(sessionStorage.cart))
  //if product has been added to cart, update cart's counter value
  useEffect(() => {
    const item = sessionStorage.getItem('cart')
    if (item) {
      setCounter(item)
    }
  }, [props.reload])
  return (
    <>
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
      <div style={{ backgroundColor: 'white', height: '110px', padding: 20 }}>
        <Row>
          <Col offset={5} span={3}>
            <Link to='/'>
              <img src={logo} />
            </Link>
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
          <Col offset={4} span={2}>
            <Badge
              style={{ backgroundColor: '#2A64DB' }}
              count={counter}
              showZero
            >
              <Icon
                component={() => {
                  return <Cart />
                }}
                style={{
                  verticalAlign: 'middle'
                }}
              />
            </Badge>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col offset={5} span={3}>
            <a href='#'>View All items</a>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Navbar
