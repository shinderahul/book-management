import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { data } from './data'

import App from './App';

// Stateless Function
const BookList = (props) => (
	<ul>
		{props.books.map(book => {
			return (
				<li key={book.id}>
					{book.title} -- Rs.{book.price}
				</li>
				);
		})}
	</ul>
);

ReactDOM.render(
	<BookList books={data.books} />,
	document.getElementById('root')
);
