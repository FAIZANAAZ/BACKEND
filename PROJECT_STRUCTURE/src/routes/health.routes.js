import express from 'express';
import {healthCheckController} from '../controllers/health.controler.js';

const router = express.Router();

router.route('/').get(healthCheckController);

export default router;