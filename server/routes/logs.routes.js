import express from 'express';

import {
  deleteLog,
  getLogs,
  getLog,
  postLog,
  updateLog,
} from '../controllers/logs.controller.js';

const router = express.Router();

router.get('/logs', getLogs);
router.get('/logs/:logId', getLog);
router.post('/logs', postLog);
router.put('/logs/:logId', updateLog);
router.delete('/logs/:logId', deleteLog);

export default router;
