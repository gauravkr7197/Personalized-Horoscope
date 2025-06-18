const getZodiacSign = (birthdate) => {
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return 'Pisces';
};

const getHoroscopeContent = (zodiacSign) => {
    const horoscopes = {
        Aries: "Today brings new opportunities for leadership. Trust your instincts and take charge of situations that matter to you.",
        Taurus: "Focus on stability and security today. Your practical approach will help you achieve your goals.",
        Gemini: "Communication is your strong suit today. Use your wit and charm to connect with others.",
        Cancer: "Emotional intelligence is high today. Trust your intuition in making important decisions.",
        Leo: "Your natural charisma is at its peak. Use it to inspire and motivate those around you.",
        Virgo: "Attention to detail will serve you well today. Focus on organization and efficiency.",
        Libra: "Balance and harmony are your themes for today. Work on maintaining equilibrium in your relationships.",
        Scorpio: "Your intensity can be channeled into productive pursuits today. Trust your deep insights.",
        Sagittarius: "Adventure and learning opportunities await. Keep an open mind to new experiences.",
        Capricorn: "Your ambitious nature will help you achieve your goals today. Stay focused and determined.",
        Aquarius: "Innovation and originality are your strengths today. Think outside the box.",
        Pisces: "Your creativity and intuition are heightened. Trust your artistic and spiritual side."
    };

    return horoscopes[zodiacSign] || "Today brings new opportunities. Trust your instincts and stay positive.";
};

const getLuckyNumber = () => {
    return Math.floor(Math.random() * 99) + 1;
};

const getMood = () => {
    const moods = ['Positive', 'Neutral', 'Challenging'];
    return moods[Math.floor(Math.random() * moods.length)];
};

module.exports = {
    getZodiacSign,
    getHoroscopeContent,
    getLuckyNumber,
    getMood
}; 