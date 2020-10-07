import express from 'express';
import book from './book/index.js';

const router = express.Router();

router.route('/')
    .get(book.index)
    .post(book.create);
router.route('/:id')
    .get(book.show)
    .put(book.update)
    .delete(book.remove);

export default router;