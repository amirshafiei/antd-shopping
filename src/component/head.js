import React, { Component } from "react";
import {Col , Row,Layout,Menu,Input ,Icon,Drawer } from 'antd';
import data from "../data.json";
import {Link} from 'react-router-dom';
import Cardmin from './cardmin.js';
const Header = Layout.Header;


export default class head extends Component {
	constructor(props){
		super(props);
		this.state={
			visibleDrawer : false ,
		}
		this.showDrawer = this.showDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
	}
	showDrawer(e){
		this.setState({
			visibleDrawer : true
		});
	}
	closeDrawer(){
		this.setState({
			visibleDrawer : false 
		});
	}
	render() {
		return (
			<Layout>
				<Drawer title="Card" placement="left" width={840} maskClosable={false} closable={true} onClose={this.closeDrawer} visible={this.state.visibleDrawer}>
					<Cardmin />
				</Drawer>
				<Header className="header">
					<Row>
						<Col lg={4} md={16} sm={24} xs={24} span={8} >
							<div className="logo-div">
								<img alt="logo" src={data.header.logo} id="logo" />
							</div>
						</Col>
						<Col lg={10} md={16} sm={24} xs={24} span={8} >
							<div className="col1">
								<div className="menu">
									<Menu mode={'horizontal'} theme="dark">
										{data.header.menu.map ( mheader => {
											return(
												<Menu.Item><Link to={mheader.link}> {mheader.title} </Link></Menu.Item>
											);
										})}	
										<Menu.Item selectable={false}	 onClick={this.showDrawer}> Card </Menu.Item>
									</Menu>
								</div>
							</div>
						</Col>
						<Col lg={6} md={16} sm={24} xs={24} span={8} >
							<div >
								<Input placeholder="Search" />
							</div>
						</Col>
						<Col lg={4} md={16} sm={24} xs={24} span={8} >
							<div >
								<Icon type="phone" theme="filled" id="call-icon"/>
								<span id="call">
									+989354041320
								</span>
							</div>
						</Col>
					</Row>
				</Header>
			</Layout>
		);
	}
}
