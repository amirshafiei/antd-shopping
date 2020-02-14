import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import data from "../data.json";
import {Col , Row,Layout,Button,Form,Input,Icon} from 'antd';
import Head from "../component/head.js";
import Foot from "../component/foot.js";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const FormItem = Form.Item;
const { TextArea } = Input;
const Content = Layout.Content;

class About extends Component {
	static defaultProps = {
		center: {lat: 32.647432,lng: 51.669021},
		zoom: 15
	};
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Content className="content">
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div id="About-title">
									<div id="About-title2">	
										<h1 id="About-h1">
											{data.about.title}
										</h1>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={12} md={12} sm={24} xs={24} span={8}>
								<div>
									<img alt="about" src={data.about.pic} id="about-img" />
								</div>
							</Col>
							<Col lg={12} md={12} sm={24} xs={24} span={8}>
								<div id="about-p1">
									<p>
										{data.about.description1}
									</p>
									<p>
										{data.about.description2}
									</p>
									<p>
										{data.about.description3}
									</p>
								</div>
							</Col>
						</Row>
						<Row id="row2">
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div className="row2-title">
									<h2 id="choose-title">
										{data.choose.title}
									</h2>
								</div>
							</Col>
							{data.choose.ability.map ( acard => {
								return(
									<Col lg={8} md={8} sm={8} xs={8} span={8}>
										<div className="row2-content">
											<Icon type={acard.type} className="about-icon"/>
											<h3>
												{acard.type}
											</h3>
											<p>
												{acard.des}
											</p>
										</div>
									</Col>
								);
							})}	
						</Row>
						<Row id="form-row">
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div className="form-text">
									<h2 className="form-text">
										Contact Us
									</h2>
									<p>
										for contact us , please fill form in below
									</p>
								</div>
							</Col>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div id="form-div">
									<Form id="form">
										<FormItem>
											<Input type='text' placeholder="Name" />
										</FormItem>
										<FormItem>
											<Input type='text' placeholder="Family" />
										</FormItem>
										<FormItem>
											<Input type='text' placeholder="Phone number" />
										</FormItem>
										<FormItem>
											<Input type='text' placeholder="Email" />
										</FormItem>
										<FormItem>
											<TextArea rows={4} placeholder="message" />
										</FormItem>
										<FormItem>
											<Button type="primary" >
												Send
											</Button>
										</FormItem>
									</Form> 
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div id="map">
									<GoogleMapReact	bootstrapURLKeys={{ key: "AIzaSyAzrzY0PomLZx3tocjPXqia6mQkK8oeY2g" }}	defaultCenter={this.props.center} defaultZoom={this.props.zoom}	>
										<AnyReactComponent lat={32.647432} lng={51.669021} text="HERE" />
									</GoogleMapReact>
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

export default About;
