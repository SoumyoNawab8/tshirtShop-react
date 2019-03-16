import React, { Component } from 'react'
import Header from './components/header';
import { Row, Col, Layout, Card, Slider } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


 class product_lists extends Component {

  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }

  componentWillMount(){
    axios.get('http://localhost:5000/products/'+this.props.match.params.name).then(res=>{
      console.log(res)
      this.setState({products:res.data});
    })
  }

  render() {

    return (
    <Layout >

      <Header/>
      <Layout.Content style={{marginTop:'1em'}}>
      <Row>
      <Col span={18} push={6}>
     
     {
       this.state.products.map(item=>{
         return <Col className="gutter-row" span={6}>
         <Card
          hoverable
          style={{ width: 240,marginRight:'1em' }}
          cover={<img alt="example" src={'http://localhost:3000/images/product_images/'+item.image} />}
        >
        <h4>{item.name}</h4>
      </Card>
      </Col>
       })
     }
     
      
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