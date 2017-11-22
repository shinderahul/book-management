import React from 'react';

const Book = ({book}) => (
	<li className="book">
		<div className="title">
			{book.title}
		</div>
		<div className="price">
		  	Rs.{book.price}
		</div>
		<a href="#" className="delete">
			delete
		</a>
	</li>
);

export default Book;
