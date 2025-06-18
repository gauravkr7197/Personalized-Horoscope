const mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    zodiacSign: {
        type: String,
        required: true,
        enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
               'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        enum: ['Positive', 'Neutral', 'Challenging'],
        required: true
    },
    luckyNumber: {
        type: Number,
        required: true,
        min: 1,
        max: 99
    }
});

// Compound index for efficient querying
horoscopeSchema.index({ user: 1, date: -1 });

const Horoscope = mongoose.model('Horoscope', horoscopeSchema);

module.exports = Horoscope; 