import React, { Component } from "react";
import "../App.css";
import '../antd.css';
import {Col , Row,Card,Icon } from 'antd';
import {Link} from 'react-router-dom';
import data from "../data.json";
import productapi from "../product.json";

class productList extends Component {
	constructor(){
		super();
		
		this.pShow = this.pShow.bind(this);
	}
	
	pShow(e){
		console.log(e);
	}
	render() {
		const {value,onClick} = this.props;
		return (
			<div>
				<Row>
					{productapi.product.map ( ccard => {
						return(
							<Col lg={4} md={6} sm={8} xs={8} span={8}>
								<div >
									<Card
										catKey={ccard.cat_key}
										onClick={onClick} value={value}
										cover={
											<img alt="example" src={ccard.pic1} />
										}
										actions={[
											<Icon type="like" key="setting" />,
											<Icon type="shopping-cart" key="edit" />,
											<span><Link to="/product"> See More  </Link></span>,
											<span> cat key </span>
										]}>
										<Card.Meta	title={ccard.name} />
									</Card>
								</div>
							</Col>
						);
					})}	
				</Row>
			</div>
		);
	}
}

export default productList;
