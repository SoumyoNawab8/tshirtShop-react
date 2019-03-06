import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addMessage } from './actions/addingStuff';
import { removeMessage } from './actions/removingStuffs';
import Header from './components/header';
import { Layout,Button, Row, Col, Card } from 'antd';


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
              <Col span={12}><Button size="large" type="primary">VIEW ALL</Button></Col>
            </Row>
              
            </div>
          </Layout.Content>
          <Layout.Content>
            <Card
            title="Sale"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}>
              <p>On Sale</p>
            </Card>
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
