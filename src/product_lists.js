import React, { Component } from 'react'
import Header from './components/header';
import { Row, Col, Layout, Card, Slider,Select } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Option = Select.Option;

 class product_lists extends Component {

  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }

  getproducts(){
    axios.get('http://localhost:5000/products/'+this.props.match.params.name).then(res=>{
      console.log(res)
      this.setState({products:res.data});
    })
  }

  componentWillMount(){
    this.getproducts();
  }

  componentWillReceiveProps(){
    this.getproducts()
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
         return <Col className="gutter-row" style={{marginTop:'0.5em'}} span={6}>
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
            <label>Size</label><br/>
            <Select defaultValue="" style={{ width: 120 }} onChange={()=>{console.log()}}>
              <Option value="">Select Size</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select><br/>
            <label>Color</label><br/>
            <Select defaultValue="" style={{ width: 120 }} onChange={()=>{console.log()}}>
              <Option value="">Select Color</Option>
              <Option style={{backgroundColor:'yellow'}} value="yellow">Yellow</Option>
              <Option value="M">White</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select><br/>
        </Card>
      </Col>

    </Row>
      </Layout.Content>
    
    </Layout>)
    
    
  }
}

export default withRouter(product_lists);