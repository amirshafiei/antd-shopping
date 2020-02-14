import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './page/home.js';
import Category from './page/category.js';
import Blog from './page/blog.js';
import About from './page/about.js';
import Product from './page/product.js';
import Article from './page/article.js';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact={true} />
			<Route path="/category" component={Category} />
			<Route path="/blog" component={Blog} />
			<Route path="/about-us" component={About} />
			<Route path="/product" component={Product} />
			<Route path="/article" component={Article} />
			
		</Switch>
	</BrowserRouter>
	, 
	document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
