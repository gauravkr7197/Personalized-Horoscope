const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const Horoscope = require('../models/horoscope.model');
const { getHoroscopeContent, getLuckyNumber, getMood } = require('../utils/zodiac.utils');

/**
 * @swagger
 * /api/horoscope/today:
 *   get:
 *     summary: Get today's horoscope
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 */
router.get('/today', auth, async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if horoscope already exists for today
        let horoscope = await Horoscope.findOne({
            user: req.user._id,
            date: {
                $gte: today,
                $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
            }
        });

        if (!horoscope) {
            // Generate new horoscope
            horoscope = new Horoscope({
                user: req.user._id,
                zodiacSign: req.user.zodiacSign,
                date: today,
                content: getHoroscopeContent(req.user.zodiacSign),
                mood: getMood(),
                luckyNumber: getLuckyNumber()
            });

            await horoscope.save();
        }

        res.json({
            success: true,
            data: {
                zodiacSign: horoscope.zodiacSign,
                date: horoscope.date,
                content: horoscope.content,
                mood: horoscope.mood,
                luckyNumber: horoscope.luckyNumber
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching horoscope',
            error: error.message
        });
    }
});

/**
 * @swagger
 * /api/horoscope/history:
 *   get:
 *     summary: Get horoscope history
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 */
router.get('/history', auth, async (req, res) => {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        const horoscopes = await Horoscope.find({
            user: req.user._id,
            date: { $gte: sevenDaysAgo }
        }).sort({ date: -1 });

        res.json({
            success: true,
            data: horoscopes.map(h => ({
                zodiacSign: h.zodiacSign,
                date: h.date,
                content: h.content,
                mood: h.mood,
                luckyNumber: h.luckyNumber
            }))
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching horoscope history',
            error: error.message
        });
    }
});

module.exports = router; 