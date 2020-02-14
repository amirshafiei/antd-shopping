import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import {Col , Row,Layout } from 'antd';
import Head from "../component/head.js";
import Foot from "../component/foot.js";
import Side from "../component/side.js";
import ProductList from "../component/productList.js";
import data from "../data.json";
const Content = Layout.Content;

class Category extends Component {
	constructor(){
		super();
		this.state={
			categoryKey:0,
			categoryTitle:"All Categories"
		};
		this.changeCat = this.changeCat.bind(this);
		this.showP = this.showP.bind(this);
	}
	
	changeCat(e){
		console.log(e);
		this.setState({categoryKey:e.item.props.catkey});
		this.setState({categoryTitle:e.item.props.catTitle});
		console.log(this.state.categoryKey);
	}
	showP(e){
		console.log(e);
	}
	
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Side value={this.state.categoryKey} onClick={this.changeCat}/>
					<Content className="content">
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div id="category-title">
									<h1>
										{this.state.categoryTitle}
									</h1>
									<span id="cat-span">
										{data.cat1.des}
									</span>
								</div>
							</Col>
						</Row>
						<ProductList onClick={this.showP} catkey={this.state.categoryKey}/>
					</Content>
				</Layout>
				<Foot />
			</div>
		);
	}
}

export default Category;
