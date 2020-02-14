import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import {Col , Row,Layout,Comment, Avatar,Input,Form,Button} from 'antd';
import data from "../data.json";
import Head from "../component/head.js";
import Foot from "../component/foot.js";
const Content = Layout.Content;
const { TextArea } = Input;
const FormItem = Form.Item;

const ExampleComment = ({ children }) => (
	<Comment
		actions={[<span>Reply</span>]}
		author="Author"
		avatar={
			<Avatar	icon="user"	alt="Author" />
		}
		content={
			<p>
				We supply a series of design principles, practical patterns and high quality design
				resources (Sketch and Axure).
			</p>
		}
		>
		{children}
	</Comment>
);

class Article extends Component {
	render() {
		return (
			<div className="App">
				<Head />
				<Layout>
					<Content className="content">
						<Row>
							<Col lg={12} md={12} sm={12} xs={12} span={8}>
								<img alt="blog1" src={data.article.pic} className="blog-img" />
							</Col>
							<Col lg={12} md={12} sm={12} xs={12} span={8}>
								<div id="article-content">
									<h1 id="article-title">
										{data.article.title}
									</h1>
									<p>
										{data.article.des1}
									</p>
									<p>
										{data.article.des2}
									</p>
									<p>
										{data.article.des3}
									</p>
								</div>
								<div id="add-comment">
									<div id="add-comment-2">
										<span id="coment-span">
											add a comment
										</span>
										<Form >
											<FormItem>
												<Input type='text' placeholder="Name" />
											</FormItem>
											<FormItem>
												<Input type='text' placeholder="Email" />
											</FormItem>
											<FormItem>
												<TextArea rows={4} placeholder="comment" />
											</FormItem>
											<FormItem>
												<Button type="primary" >
													Send
												</Button>
											</FormItem>
										</Form> 
									</div>
								</div>
								<div id="comment">
									<ExampleComment>
										<ExampleComment>
											<ExampleComment />
											<ExampleComment />
										</ExampleComment>
									</ExampleComment>
								</div>
							</Col>
						</Row>
					</Content>
					<Foot />
				</Layout>
			</div>
		);
	}
}

export default Article;
