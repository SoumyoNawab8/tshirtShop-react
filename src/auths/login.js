import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Checkbox, 
  } from 'antd';
  import {withRouter} from 'react-router-dom';

import { loginUser } from './../actions/loginUser';
import { connect } from 'react-redux';
import  Cookies  from 'universal-cookie';

const cookies = new Cookies();


class Login extends Component {

  
    componentWillMount(){
      document.title="LOGIN"
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.userLogin(values)
            if(cookies.get('token')){
              this.props.history.push('/');
            }
            else{
              console.log(cookies.get('token'))
            }
          }
        });
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
         <div style={{justifyContent:'center',display:'flex'}}>
              <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a><br/>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <br/>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
         </div>
        );
      }
    }


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps=(state)=>{
  return{
    values:state
  }
}

const mapDispatchToProps=(dispatch)=>{
 return {
   userLogin:function(values){
    dispatch(loginUser(values));
   }
 }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm));