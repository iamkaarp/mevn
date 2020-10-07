import Books from '../books.js';

const getBooks = (req, res) => {
    res.json(Books);
};

const getBook = (req, res) => {
    const found = Books.some(book => book.id === parseInt(req.params.id));

    if(found) {
        const book = Books.find(book => book.id === parseInt(req.params.id));
        res.json(book);
    } else {
        res.status(404).json({ message: `Books with id ${req.params.id} not found` });
    }
};

module.exports = { getBooks, getBook };