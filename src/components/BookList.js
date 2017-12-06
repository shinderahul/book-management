import React from 'react';
import Book from './Book';
import Form from './Form';
import {default as UUID} from "node-uuid";

import configureStore from '../store';
import * as actions from '../actions';

class BookList extends React.Component{
	constructor(props){
		super(props);
		this.store = configureStore();
		this.state = this.store.getState();

	}

	componentDidMount() {
		this.unsubscribe = this.store.subscribe(() => {
			this.setState(this.store.getState());
		});
		actions.fetchBooks(this.store.dispatch);
	}

	componentDidUnmount() {
		this.unsubscribe();
	}

	deleteBook = (id) => {
		// const currentBooks = this.state.books;
		// const books = currentBooks.filter(book => book.id !== id)
    //
		// this.setState({ books });
	}

	addBook = (title, price) => {
		// this.setState({
		// 	books: this.state.books.concat({
		// 		id: UUID.v4(),
		// 		title,
		// 		price
		// 	})
		// });
	}

	render() {
		return (
			<ul>
				{this.state.books.map(book => {
					return (
							<Book
								key={book.id}
								book={book}
								handleDelete={this.deleteBook}
							/>
						);
				})}
				<Form addBookAction={this.addBook} />
			</ul>
		);
	}
}

export default BookList;
