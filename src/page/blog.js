import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import {Col , Row,Layout} from 'antd';
import Head from "../component/head.js";
import Foot from "../component/foot.js";
import {Link} from 'react-router-dom';
import data from "../data.json";
const Content = Layout.Content;

class Blog extends Component {
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Content className="content">
						<Row>
							<Col lg={24} md={24} sm={24} xs={24} span={8}>
								<div id="blog-title">
									<div id="blog-title2">	
										<h1 id="blog-h1">
											{data.blog1.title}
										</h1>
									</div>
								</div>
							</Col>
						</Row>
							{data.blog1.blogs.map ( bs => {
								return(
									<Row className="blog-row">
										<Col lg={8} md={8} sm={12} xs={12}>
											<div className="blog-img-div">
												<img alt="blog1" src={bs.pic} className="blog-img" />
											</div>
										</Col>
										<Col lg={16} md={16} sm={12} xs={12}>
											<div className="blog-txt">
												<h2>
													{bs.title}
												</h2>
												<p>
													{bs.des}
												</p>
												<Link to="/article"> Read more </Link>
											</div>
										</Col>
									</Row>
								);
							})}	
					</Content>
				</Layout>
				<Foot />
			</div>
		);
	}
}

export default Blog;
