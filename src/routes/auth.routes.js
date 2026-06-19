const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');

const router = express.Router();
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
