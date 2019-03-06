import React, { Component } from 'react'
import { Layout,Input,Icon } from 'antd';


export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          menuListings: ["Women","Men","Kids","Shoes","Brands"]
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          
            <Layout.Header style={{backgroundColor:'white',borderBottomStyle:'solid',borderBottomWidth:'1px'}}>
              <div style={{display:'flex'}}>
              {/* <span style={{fontSize:'1.6em',fontWeight:'800'}}>reactmarket</span> */}
              <img src="/images/tshirtshop.png" style={{height:'4em'}} />
                <div style={{paddingLeft:'31%'}}>
                <ul style={{display:'inline-flex'}}>
                {this.state.menuListings.map((item,indx)=>{
                  return <li style={{margin:'0 1em',listStyle:'none',fontWeight:700,fontSize:'1.2em',cursor:'pointer'}} key={indx}>{item}</li>
                })}
                </ul>
                <Input.Search
      placeholder="Search item..."
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <Icon type="shopping-cart" title="cart" style={{marginLeft:'2em',fontSize:'1.5em',cursor:'pointer'}} />
                </div>
              </div>
            </Layout.Header>
         
          
          
        );
      }
}
