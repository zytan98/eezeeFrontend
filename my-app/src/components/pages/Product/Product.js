import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import item1 from '../../../Assets/1.png'
import item2 from '../../../Assets/2.png'
import item3 from '../../../Assets/3.png'
import item4 from '../../../Assets/4.png'
import item51 from '../../../Assets/5.png'
import item52 from '../../../Assets/52.png'
import item53 from '../../../Assets/53.png'
import item54 from '../../../Assets/54.png'
import item61 from '../../../Assets/blackchoke.png'
import item62 from '../../../Assets/yellowchoke.png'
import {
  Layout,
  Card,
  Row,
  Col,
  Divider,
  Input,
  Button,
  Carousel,
  Skeleton,
  Form
} from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const Product = () => {
  const { id } = useParams()
  const productCrumbs = true
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)
  const [reload, setReload] = useState(false)
  const [pictures, setPictures] = useState()
  const [price, setPrice] = useState()
  const [desc, setDesc] = useState()
  const [title, setTitle] = useState()
  const [model, setModel] = useState()
  const [desc2, setDesc2] = useState(false)
  const [desc3, setDesc3] = useState(false)
  const { Meta } = Card
  useEffect(() => {
    switch (id) {
      case '1':
        setDesc('Philips S10 Starter Fluo 4-65w 220-240v 350332')
        setTitle('Philips S10 Starter Fluo 4-65w 220-240v 350332')
        setModel(['350332', 'Philips'])
        setPictures([item1])
        setPrice('S$ 120.22')
        break
      case '2':
        setDesc('04900008100 Philips Mhn-td 70w/842 Rx7s')
        setTitle('04900008100 Philips Mhn-td 70w/842 Rx7s')
        setModel(['LKH-5', 'Philips'])
        setPictures([item2])
        setPrice('S$ 94.34')
        break
      case '3':
        setDesc('Pelican 2755 3xaaa Headlight C1d1')
        setTitle('Pelican 2755 3xaaa Headlight C1d1')
        setModel(['LKH-321', 'Pelican'])
        setPictures([item3])
        setPrice('S$ 23.00')
        break
      case '4':
        setDesc(['LAMP,BULB,LED,230V,BA9S,RED', 'Lead Time 3 Day'])
        setTitle('Led Indicator Bulb Ba9s Red')
        setModel(['360178', 'OEM'])
        setPictures([item4])
        setPrice('S$ 3.04')
        break
      case '5':
        setDesc(['Safety Jogger Safety Shoe Dakar S3\nHI\nLOL'])
        setTitle('Safety Jogger Safety Shoe Dakar S3')
        setModel(['Dakar-S3', 'SAFETY JOGGER'])
        setPictures([item51, item52, item53, item54])
        setPrice('S$ 85.00')
        break
      case '6':
        setDesc([
          'Portable Lightweight Plastic Curb Ramps Heavy Duty Plastic Kit Set for Driveway Car Truck'
        ])
        setTitle(
          'Portable Lightweight Plastic Curb Ramps Heavy Duty Plastic Kit Set for Driveway Car Truck'
        )
        setModel(['SP-PLP0', 'OEM'])
        setPictures([item61, item62])
        setPrice('S$ 53.93')
        break
      default:
        break
    }
  }, [])

  const ref = useRef()
  const goTo = slide => {
    ref.current.goTo(slide, true)
  }
  function addQuantity () {
    setQuantity(quantity + 1)
  }
  function minusQuantity () {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  function addtoCart () {
    const currentQuantity = JSON.parse(sessionStorage.getItem('cart'))
    sessionStorage.setItem('cart', currentQuantity + 1)
  }

  const btnNorm = {
    width: '60px',
    height: '40px',
    margin: '20px',
    border: 0
  }
  const btnSelected = {
    width: '60px',
    height: '40px',
    margin: '20px',
    border: 'solid 1px blue'
  }
  const { Content } = Layout
  return (
    <>
      <Layout style={{ backgroundColor: '#F7F7F8' }}>
        <Navbar reload={reload} product={productCrumbs} />
        <Content style={{ height: '100vh' }}>
          <Row gutter={14} style={{ paddingTop: 20 }}>
            <Col offset={5} span={9}>
              <Card
                title={
                  <>
                    <h1>{title}</h1>
                    <h5>
                      Model:<a href='#'>{model ? model[0] : <Skeleton />}</a>
                    </h5>
                    <h5>
                      Brand:<a href='#'>{model ? model[1] : <Skeleton />}</a>
                    </h5>
                  </>
                }
              >
                <div
                  style={{
                    height: '300px',
                    width: '300px',
                    margin: 'auto'
                  }}
                >
                  <Carousel ref={ref} dots={false}>
                    {pictures ? (
                      pictures.map(pics => {
                        return (
                          <div>
                            <img
                              alt=''
                              src={pics}
                              style={{
                                height: '100%',
                                width: '100%',
                                maxHeight: '300px',
                                maxWidth: '300px'
                              }}
                            />
                          </div>
                        )
                      })
                    ) : (
                      <Skeleton />
                    )}
                  </Carousel>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {pictures ? (
                    pictures.map((pics, index) => {
                      return (
                        <img
                          alt=''
                          src={pics}
                          style={selected === index ? btnSelected : btnNorm}
                          onClick={() => {
                            goTo(index)
                            setSelected(index)
                          }}
                        />
                      )
                    })
                  ) : (
                    <Skeleton />
                  )}
                </div>
                <Meta title='Product Description' description={desc} />
              </Card>
            </Col>
            <Col span={5}>
              <Card>
                <h1 style={{ color: '#2A64DB', fontSize: 35 }}>{price}</h1>
                <Divider dashed />
                <Form>
                  <Form.Item label='Quantity'>
                    <Input.Group compact>
                      <Button
                        style={{ verticalAlign: 'middle' }}
                        onClick={() => minusQuantity()}
                        icon={<MinusOutlined style={{ color: '#2A64DB' }} />}
                      ></Button>
                      <Input
                        style={{ textAlign: 'center', width: '20%' }}
                        value={quantity}
                      />
                      <Button
                        style={{ verticalAlign: 'middle' }}
                        onClick={() => addQuantity()}
                        icon={<PlusOutlined style={{ color: '#2A64DB' }} />}
                      ></Button>
                    </Input.Group>
                  </Form.Item>
                </Form>
                <Row>
                  <Button
                    type='primary'
                    onClick={() => {
                      addtoCart()
                      setReload(!reload)
                    }}
                    style={{ width: '100%' }}
                  >
                    Add to Cart
                  </Button>
                </Row>
                <Row style={{ paddingTop: 10 }}>
                  <Button style={{ width: '100%', color: '#1890ff' }}>
                    Add to Favorites
                  </Button>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export default Product
