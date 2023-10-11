import express from 'express';
import { createUser } from '../modules/user/adapters/user.controller';

const router = express.Router();

router.post('/users', createUser);

export default router;