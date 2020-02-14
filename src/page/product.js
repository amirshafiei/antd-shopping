import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import {Col , Row,Layout,Table,InputNumber,Button} from 'antd';
import data from "../data.json";
import Head from "../component/head.js";
import Foot from "../component/foot.js";
const Content = Layout.Content;

const columns = [
	{
		title: 'Parms Name',
		dataIndex: 'name',
	},
	{
		title: 'Parms Value',
		dataIndex: 'parms',
	}
];

const tableData = [
	{
		key: '1',
		name: 'Model',
		parms: 'E1 537 g',
	},
	{
		key: '2',
		name: 'year production',
		parms: '2015',
	},
	{
		key: '3',
		name: 'year expiration',
		parms: '2025',
	},
	{
		key: '4',
		name: 'seller',
		parms: 'acer company',
	},
	{
		key: '5',
		name: 'accesories',
		parms: 'mouse , keyboard , pad',
	},
];

class Product extends Component {
	setPic(e){
		var s=e.currentTarget.getAttribute("data-big-pic");
		document.getElementById("product-pic-title").setAttribute("src", s);
	}
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Content className="content">
						<Row>
							<Col lg={8} md={8} sm={12} xs={24} span={8}>
								<div id="product-pics">
									<Row>
										<Col lg={24} md={24} sm={24} xs={24} span={8}>
											<img alt="p1" src={data.product.pic1} id="product-pic-title" />
										</Col>
									</Row>
									<Row>
										<Col lg={6} md={6} sm={6} xs={6} span={8}>
											<img alt="p1" src={data.product.pic1} className="product-pic-tumb" data-big-pic={data.product.pic1} onClick={this.setPic} />
										</Col>
										<Col lg={6} md={6} sm={6} xs={6} span={8}>
											<img alt="p2" src={data.product.pic2} className="product-pic-tumb" data-big-pic={data.product.pic2} onClick={this.setPic} />
										</Col>
										<Col lg={6} md={6} sm={6} xs={6} span={8}>
											<img alt="p3" src={data.product.pic3} className="product-pic-tumb" data-big-pic={data.product.pic3} onClick={this.setPic} />
										</Col>
										<Col lg={6} md={6} sm={6} xs={6} span={8}>
											<img alt="p4" src={data.product.pic4} className="product-pic-tumb" data-big-pic={data.product.pic4} onClick={this.setPic} />
										</Col>
									</Row>
								</div>
							</Col>
							<Col lg={16} md={16} sm={12} xs={24} span={8}>
								<div id="product-title">
									<h1>
										{data.product.title}
									</h1>
									<p>
										{data.product.des}
									</p>
									<Table id="product-table" columns={columns} dataSource={tableData} bordered  pagination={false} />
								</div>
								<Row>
									<Col lg={24} md={24} sm={24} xs={24} span={8}>
										<span className="price">
											Price :
										</span>
										<span className="price">
											{data.product.price}
										</span>
										<InputNumber min={1} max={10} defaultValue={1} className="price" />
										<Button type="primary" className="price" id="add-to-card-button">
											Add To Card
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Content>
					<Foot />
				</Layout>
			</div>
		);
	}
}

export default Product;
