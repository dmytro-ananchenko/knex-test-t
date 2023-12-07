const express = require('express');
import personRouter from './person';
import locationRouter from './location';
import { Request, Response } from 'express';

const router = express.Router();


router.use('/person', personRouter);
router.use('/location', locationRouter);

router.get('/', (req: Request, res: Response) => {
    res.send({test: 'test-1'});
});

router.all('*', (req: Request, res: Response) => {
    res.send({test: 'test-2'});
});

module.exports = router;
