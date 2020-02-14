import React, { Component } from "react";
import {Col , Row,Layout,Icon } from 'antd';
import data from "../data.json";
const Footer = Layout.Footer;
const afooter=data.footer.add;

export default class foot extends Component {
  render() {
    return (
		<Layout>
			<Footer>
				<Row id="row-3">
					<Col lg={6} md={6} sm={12} xs={12} span={8}>
						<div id={afooter.address.id}>
							<Icon type={afooter.address.icon} />
							<span className="about-span">
								{afooter.address.des}
							</span>
						</div>
					</Col>
					<Col lg={6} md={6} sm={12} xs={12} span={8}>
						<div id={afooter.phone.id}>
							<Icon type={afooter.phone.icon} />
							<span className="about-span">
								{afooter.phone.des}
							</span>
						</div>
					</Col>
					<Col lg={6} md={6} sm={12} xs={12} span={8}>
						<div id={afooter.email.id}>
							<Icon type={afooter.email.icon} />
							<span className="about-span">
								{afooter.email.des}
							</span>
						</div>
					</Col>
					<Col lg={6} md={6} sm={12} xs={12} span={8}>
						<div id="social-div">
							{data.footer.social.map ( fsocial => {
								return(
									<a href={fsocial.link} className="social-icon">
										<Icon type={fsocial.icon} className="s-icon" />
									</a>
								);
							})}	
							
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={24} md={24} sm={24} xs={24} span={8}>
						<div>
							<span>
								{data.footer.copyright}
							</span>
						</div>
					</Col>
				</Row>
			</Footer>
		</Layout>
    );
  }
}
