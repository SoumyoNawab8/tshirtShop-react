import React, { Component } from 'react'
import { Layout,Input,Icon } from 'antd';
import { Menu, Dropdown } from 'antd';
import axios from 'axios';
import { Link,withRouter } from 'react-router-dom';





class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          menuListings: []
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount(){
        var self=this;
        axios.get('http://localhost:5001/categories/by_department').then(res=>{
          // if(res.status===200){
            console.log(res)
            self.setState({menuListings:res.data});
            console.log(self.state.menuListings)
          // }

        })
      }

      render() {

        console.log(this.state.menuListings)
        const menu =(category)=>(
          <Menu style={{marginTop:'-1em'}}>
          {category.map(item=>{
            return <Menu.Item >
                    <Link to={"/category/"+item.name}>{item.name}</Link>
                  </Menu.Item>
          })}
          </Menu>
        );
        return (
          
            <Layout.Header style={{backgroundColor:'white',borderBottomStyle:'solid',borderBottomWidth:'1px'}}>
              <div style={{display:'flex'}}>
              <img src="/images/tshirtshop.png" style={{height:'4em'}} alt="tshirtshop" />
                <div style={{paddingLeft:'31%'}}>
                <ul style={{display:'inline-flex'}}>
                {this.state.menuListings.map((item,indx)=>{
                  
                  return <Dropdown  overlay={menu(item.category)}>
                            <a style={{margin:'0 1em',color:'black',listStyle:'none',fontWeight:700,fontSize:'1.2em',cursor:'pointer'}} className="ant-dropdown-link" href="#">
                              {item.name}
                            </a>
                          </Dropdown>
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

export default  withRouter(Header)