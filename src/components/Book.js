import React from 'react';

const Book = ({book, handleDelete}) => {
	const handleClick = (e) => {
		e.preventDefault();
		handleDelete(book.id)
	}
	return (
		<li className="book">
			<div className="title">
				{book.title}
			</div>
			<div className="price">
			  	Rs.{book.price}
			</div>
			<a href="#" className="delete" onClick={handleClick}>
				delete
			</a>
		</li>
	);
}

export default Book;
