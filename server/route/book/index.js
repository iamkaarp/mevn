import Books from '../../books.js';

const index = (req, res) => {
    res.status(200).json(Books);
};

const show = (req, res) => {
    const found = Books.some(book => book.id === parseInt(req.params.id));

    if(found) {
        const book = Books.find(book => book.id === parseInt(req.params.id));
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: `Books with id ${req.params.id} not found` });
    }
};

const create = (req, res) => {
    const errors = [];

    if(!req.body.id) {
        errors.push({ message: 'id can not be empty' });
    }

    if(!req.body.title) {
        errors.push({ message: 'title can not be empty' });
    }

    if(errors.length > 0) {
        res.status(400).json({ message: 'Your request contains errors', errors });
        return;
    }

    Books.push(req.body);
    res.status(201).json(req.body);
};

const update = (req, res) => {
    const errors = [];
    const bookId = parseInt(req.params.id);
    if(!req.body.title) {
        errors.push({ message: 'title can not be empty' });
    }

    if(errors.length > 0) {
        res.status(400).json({ message: 'Your request contains errors', errors });
        return;
    }
    const found = Books.some(book => book.id === bookId);

    if(found) {
        const index = Books.findIndex(book => book.id === bookId);
        Books[index] = { id: bookId, title: req.body.title };
        res.status(200).json(req.body);
    } else {
        res.status(404).json({ message: `Book with id ${bookId} not found` });
    }
};

const remove = (req, res) => {
    const bookId = parseInt(req.params.id);
    const found = Books.some(book => book.id === bookId);

    if(found) {
        const index = Books.findIndex(book => book.id === bookId);
        Books.splice(index, 1);
        res.status(200).json(Books);
    } else {
        res.status(404).json({ message: `Book with id ${bookId} not found` });
    }
};

module.exports = { index, show, create, update, remove };