import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import data from "../data.json";
import productapi from "../product.json";
import {Link} from 'react-router-dom';
import {Col , Row,Layout,Input ,Icon ,Carousel,Card,Button } from 'antd';
import Head from "../component/head.js";
import Foot from "../component/foot.js";
const Content = Layout.Content;

class Home extends Component {
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Content>
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<Carousel autoplay effect="fade" dots={false} id="carousel">
									{data.section[0].items.map ( pics => {
										return(
											<div>
												<img alt="slidei-pic" src={pics.content.image} id="slider-pic" />
											</div>
										);
									})}		
								</Carousel>
							</Col>
						</Row>
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<h1>
									{data.home1.title}
								</h1>
								<p id="p1">
									{data.home1.content}
								</p>
							</Col>
						</Row>
						<Row className="off" >
							<Col lg={24} md={24} sm={24} xs={24} span={8} id="offer-col">
								<div id="offer-div">	
									<h1 id="offer-title" >
										{data.home2.title}
									</h1>
								</div>
							</Col>
							{data.home2.cards.map ( scard => {
								return(
									<Col lg={4} md={8} sm={12} xs={12} span={8} >
										<div >
											<Card
												cover={
													<img alt="example" src={scard.pic} />
												}
												actions={[
													<Icon type="like" key="setting" />,
													<Icon type="shopping-cart" key="edit" />,
													<span><Link to="/product"> See More  </Link></span>
												]}>
												<Card.Meta	title={scard.name} description={scard.des} />
											</Card>
										</div>
									</Col>
								);
							})}	
						</Row>
						<Row className="" >
							<Col lg={24} md={24} sm={24} xs={24} span={8} >
								<div id="category-div">
									<h2 id="category-title-div">
										{data.home3.title}
									</h2>
								</div>
							</Col>
							{productapi.category.map ( scat => {
								return(
									<Col lg={6} md={12} sm={12} xs={12} span={8} >
										<div>
											<Card
												cover={
													<img alt="example" src={scat.cover} />
												}
												actions={[
													<span>{scat.title}</span>
												]}>
											</Card>
										</div>
									</Col>
								);
							})}	
						</Row>
						<Row className="row3" >
							<Col lg={12} md={12} sm={24} xs={24} span={8} >
								<div>
									<img alt="pic1" src={data.home4.pic} id="pic1" className="pic1"/>
								</div>
							</Col>
							<Col lg={12} md={12} sm={24} xs={24} span={8} >
								<div id="p3">
									<h2>
										{data.home4.title}
									</h2>
									<p>
										{data.home4.des}
									</p>
								</div>
							</Col>
						</Row>
						<Row id="register-row" >
							<Col lg={24} md={24} sm={24} xs={24} span={8} >
								<div id="register-div" >
									<h2 id="register-title" >
										{data.home5.title}
									</h2>
									<p id="p2">
										{data.home5.des}
									</p>
									<Input placeholder=" Email " size="large" id="sub-input"/>
									<Button size="large" shape="round">
										Subscribe
									</Button>
								</div>
							</Col>
						</Row>
					</Content>
				</Layout>
				<Foot />
			</div>
		);		
	}
}

export default Home;
