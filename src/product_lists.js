import React, { Component } from 'react'
import Header from './components/header';
import { Row, Col, Layout, Card, Slider } from 'antd';
import { withRouter } from 'react-router-dom';


 class product_lists extends Component {
  render() {
    return (
    <Layout >

      <Header/>
      <Layout.Content style={{marginTop:'1em'}}>
      <Row>
      <Col span={18} push={6}>
     <div style={{display:'flex'}}>
     <Card
          hoverable
          style={{ width: 240,marginRight:'1em' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <h4>Heya</h4>
      </Card>
      <Card
          hoverable
          style={{ width: 240,marginRight:'1em' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <h4>Heya</h4>
      </Card>
      <Card
          hoverable
          style={{ width: 240,marginRight:'1em' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <h4>Heya</h4>
      </Card>
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <h4>Heya</h4>
      </Card>
     </div>
      
      </Col>


      <Col span={6} pull={18}>
        <Card style={{width:300}}>
            <label>Price Range</label>
            <Slider range defaultValue={[20, 50]} disabled={false} /><br/>
            <label>Size</label>
            <Slider range defaultValue={[10, 90]} disabled={false} />
        </Card>
      </Col>

    </Row>
      </Layout.Content>
    
    </Layout>)
    
    
  }
}

export default withRouter(product_lists);