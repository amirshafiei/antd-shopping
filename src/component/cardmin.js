import React, { Component } from "react";
import {Table,Button } from 'antd';

const columns = [
	{
		title: 'product name',
		dataIndex: 'Name'
	},
	{
		title: 'product id',
		dataIndex: 'id'
	},
	{
		title: 'product price',
		dataIndex: 'price'
	},
	{
		title: 'product number',
		dataIndex: 'number'
	},
	{
		title: 'price',
		dataIndex: 'cash'
	},
	{
		title: 'delete',
		dataIndex: 'delete'
	}
];

const data = [
	{
		key: '1',
		Name: 'acer aspire e1 573 g',
		id: 'LA12558',
		price: '1000000$',
		number: '1',
		cash: '1000000$',
		delete: 'Delete'
	},
	{
		key: '2',
		Name: 'acer aspire e1 573 g',
		id: 'LA12558',
		price: '1000000$',
		number: '1',
		cash: '1000000$',
		delete: 'Delete'
	},
	{
		key: '3',
		Name: 'acer aspire e1 573 g',
		id: 'LA12558',
		price: '1000000$',
		number: '1',
		cash: '1000000$',
		delete: 'Delete'
	},
];

export default class cardmin extends Component {
	
	render() {
		return (
			<div>
				<Table columns={columns} dataSource={data} bordered  pagination={false} />
					<div id="total-price">
						<span>
							Total price :
						</span>
						<span>
							3000000$
						</span>
					</div>
				<div>
					<Button type="primary" block id="pay-btn">
						Pay
					</Button>
				</div>
			</div>
		);
	}
}
