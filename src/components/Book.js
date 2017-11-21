import React from 'react';

const Book = ({book}) => (
	<li>
		{book.title} -- Rs.{book.price}
	</li>
);

export default Book;
