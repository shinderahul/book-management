import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { data } from './data'

import App from './App';
import BookList from './components/BookList'

ReactDOM.render(
	<BookList books={data.books} />,
	document.getElementById('root')
);
