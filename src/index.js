import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { data } from './data'

import BookList from './components/BookList'

ReactDOM.render(
	<BookList books={data.books} authors={data.authors} />,
	document.getElementById('root')
);
