const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { data } = require('./data');

const getBookAuthors = book => {
	// book.authorId, book.authorIds
	const authorIds = book.authorId ? [book.authorId] : book.authorIds;

	return authorIds.map(authorId => data.authors[authorId])
}

app.get('/api/books', (req, res) => {
	res.send(data.books.map(book => {
		return Object.assign({}, book, {
			authors: getBookAuthors(book)
		})
	}));
})

app.get('/api/authors', (req, res) => {
	res.send(data.authors);
});

app.listen(8000, () => {
	console.log('API server is at port 8000');
});
