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

// Stateful Function
class BookList extends React.Component{
	constructor(props){
		super(props);
		this.state = { books: this.props.books }
	}
	render() {
		return (
			<ul>
				{this.state.books.map(book => {
					return (
							<Book key={book.id} book={book} />
						);
				})}
			</ul>
		);
	}
}

ReactDOM.render(
	<BookList books={data.books} />,
	document.getElementById('root')
);
