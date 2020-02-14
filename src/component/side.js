import React, { Component } from "react";
import {Layout,Menu } from 'antd';
import productapi from "../product.json";
const Sider  = Layout.Sider ;



export default class side extends Component {
	
	render() {
		const {value,onClick} = this.props;
		return (
			<Sider>
				<div id="sider-menu">
					<Menu defaultSelectedKeys={['1']}  mode="inline"  theme="dark" >
						{productapi.category.map ( cat => {
							return(
								<Menu.Item catkey={cat.catKey} catTitle={cat.title} onClick={onClick} value={value} className="cat-item" > 
									{cat.title} 
								</Menu.Item>
							);
						})}	
					</Menu>
				</div>
			</Sider>
		);
	}
}
