import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addMessage } from './actions/addingStuff';
import { removeMessage } from './actions/removingStuffs';
import Header from './components/header';
import { Layout,Button, Row, Col, Card, Tag, Input } from 'antd';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      input:""
    }
    this.removeData=this.removeData.bind(this);
  }
  submitData(){
    this.setState({
      input:'',
      
    });
    this.props.submitMessages(this.state.input)
  }

  removeData(message){
    this.props.removeMessage(message);
  }

  render() {
    // console.log(this.props.messages)
    return [
      <Layout>
          <Header />
          <Layout.Content style={{height:'632px',backgroundSize:'cover',backgroundPosition:'center',backgroundImage:'url(http://www.capsla.biz/images/nakedshirtad.jpg)'}}>
            <div style={{justifyContent:'center',marginTop:'25em',}}>
            <Row>
              <Col span={12}></Col>
              <Col span={12}><Button className="default_button" size="large">VIEW ALL</Button></Col>
            </Row>
              
            </div>
          </Layout.Content>

          <Layout.Content style={{margin:'3% 3em'}}>
            <Card
            title=""

           style={{ width: '100%' }}>
              <Tag color="#87d068">Sale</Tag><br/>
              <Row>
                <Col span={8} style={{marginLeft:'5em'}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0ior2yL_UPzczNYI7vF7jsqxpQ_2b6vRtxVRqOZq5yRkiM8H" alt="*" />
                </Col>
                <Col span={14}>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/><br/><Button type="primary">SHOP NOW</Button></p>
                </Col>
              </Row>
            </Card>
          </Layout.Content>

          <Layout.Content style={{margin:'0% 3em'}}>
            <Row>
              <Col span={6}>
                <Card title="" style={{width:'fit-content'}} cover={<img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/5500121/580/387/m1/fpnw/wm0/cover-.jpg?1543990857&s=b7217e6d06210a12188c9911f5fd0fcf" alt="" />}>
                  <span>on stock</span>
                </Card>
              </Col>
              <Col span={16} style={{marginLeft:'2em'}}>
                <Card title="">
                <Row>
                <Col span={17}>
                <span style={{fontWeight:'700',fontSize:'2.5em',color:'deepskyblue'}}>10% Discount for your subscription</span><br/>
                <span style={{fontSize:'1.3em',wordBreak:'break-word',fontWeight:'600',justifyContent:'center',display:'flex'}}>
                    <p style={{width:'21em',textAlign:'center'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </span>
                </Col>
                  <Col span={2} style={{float:'right',marginRight:'6em'}}>
                    <img style={{width:'9em'}} src="https://i.pinimg.com/originals/70/69/08/706908198bd2c43432002a567e6f229b.jpg" alt="" /><br/>
                  </Col>
                  
                </Row>

                  <Row>
                    <Col span={16}><Input style={{height:'3.5em'}} onChange={(e)=>{console.log(e.target.value)}} /></Col>
                    <Col span={4}><Button style={{height:'3.5em',fontWeight:'600',fontSize:'1em'}} type="primary">Subscribe</Button></Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Layout.Content>
      </Layout>
      ,
      
      // <div className="App">
      // <h1>Send Message </h1>
      //   <input type="text" value={this.state.input} onChange={(e)=>{this.setState({input:e.target.value})}} />
      //   <Button color="primary" onClick={this.submitData.bind(this)}>Submit</Button>

      //   {this.props.messages.map((message,idx)=>{
      //     return [<p key={idx}>{message}</p>,<Button  color="danger" onClick={()=>{this.removeData(message)}}>Remove</Button>]
      //   })}
      // </div>
    ];
  }
}


const mapStateToProps=(state)=>{
  console.log(state)
  return {
    messages:state
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    submitMessages:function(newMessage){
      dispatch(addMessage(newMessage));
    },
    removeMessage:function(messageToDelete){
      dispatch(removeMessage(messageToDelete));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
