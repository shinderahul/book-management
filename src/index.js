import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { data } from './data'

import App from './App';

const Book = ({book}) => (
	<li>
		{book.title} -- Rs.{book.price}
	</li>
);

// Stateless Function
const BookList = (props) => (
	<ul>
		{props.books.map(book => {
			return (
					<Book key={book.id} book={book} />
				);
		})}
	</ul>
);

ReactDOM.render(
	<BookList books={data.books} />,
	document.getElementById('root')
);
