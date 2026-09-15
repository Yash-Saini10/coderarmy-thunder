const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const compliments = [
    "You have a naturally positive energy.",
    "Your confidence is growing every day.",
    "People appreciate your honesty.",
    "You have a creative mind.",
    "Your kindness makes a difference.",
    "You handle challenges with courage.",
    "Your ideas are worth sharing.",
    "You have a warm personality.",
    "You learn from every experience.",
    "Your patience is one of your strengths.",
    "You bring good energy to people around you.",
    "You have strong determination.",
    "Your smile can brighten someone's day.",
    "You are becoming more confident.",
    "You have great potential.",
    "Your hard work is noticeable.",
    "You have a thoughtful nature.",
    "You know how to stay calm under pressure.",
    "Your curiosity helps you grow.",
    "You have a unique perspective.",
    "People can rely on you.",
    "You are stronger than you realize.",
    "Your positive attitude is inspiring.",
    "You have good instincts.",
    "You are capable of achieving your goals.",
    "Your personality stands out.",
    "You bring creativity wherever you go.",
    "You have a generous heart.",
    "You are making progress every day.",
    "Your determination will take you far."
];

const victimCards = [
    "You are always the one who gets blamed first.",
    "You said yes when you really wanted to say no.",
    "Your kindness is sometimes taken for granted.",
    "You keep helping people who wouldn't do the same for you.",
    "You overthink things that nobody else noticed.",
    "You somehow end up fixing everyone's problems.",
    "You trust people a little too easily.",
    "You are blamed even when it wasn't your fault.",
    "You give second chances way too often.",
    "You care more than you show.",
    "You try to keep everyone happy.",
    "You apologize even when you did nothing wrong.",
    "You get emotionally attached too quickly.",
    "You take things more personally than you should.",
    "You keep your problems to yourself.",
    "You are usually the peace-maker in the group.",
    "People come to you when they need help.",
    "You sometimes ignore obvious red flags.",
    "You give advice but rarely follow your own.",
    "You worry about everyone except yourself.",
    "You expect people to understand you without explaining.",
    "You forgive people faster than they deserve.",
    "You hide your stress behind a smile.",
    "You often put others before yourself.",
    "You think too much before making simple decisions.",
    "You attract people who need your help.",
    "You sometimes stay quiet to avoid conflict.",
    "You pretend everything is fine when it isn't.",
    "You care deeply but don't always get the same energy back.",
    "Today, you might be the innocent one again."
];

const recommendations = [
    "Take some time to relax today.",
    "Focus on one important goal.",
    "Avoid unnecessary arguments.",
    "Try something new today.",
    "Trust your instincts.",
    "Spend time with people who support you.",
    "Take a short break when you feel stressed.",
    "Organize your plans before starting.",
    "Be patient with yourself.",
    "Express your ideas confidently.",
    "Get enough rest tonight.",
    "Avoid making rushed decisions.",
    "Spend some time outdoors.",
    "Work on something creative.",
    "Keep your priorities clear.",
    "Listen carefully before responding.",
    "Celebrate a small achievement today.",
    "Take care of your energy.",
    "Learn something useful today.",
    "Don't overthink small problems.",
    "Stay consistent with your goals.",
    "Give yourself some personal time.",
    "Be open to unexpected opportunities.",
    "Keep a positive mindset.",
    "Finish an unfinished task.",
    "Spend less time worrying about the future.",
    "Talk to someone you trust.",
    "Keep your schedule simple today.",
    "Focus on progress rather than perfection.",
    "Believe in your abilities."
];

const predictions = [
    "A positive opportunity may appear today.",
    "You may receive good news soon.",
    "Someone may appreciate your efforts.",
    "Today could bring a useful new idea.",
    "You may feel more confident than usual.",
    "An old problem may start getting easier.",
    "A meaningful conversation could happen today.",
    "You may discover something interesting.",
    "Your hard work could bring positive results.",
    "A new opportunity may come unexpectedly.",
    "You could make progress toward an important goal.",
    "Someone may offer you helpful advice.",
    "Today may be a good day for planning.",
    "You may feel motivated to start something new.",
    "A small success could improve your mood.",
    "You may reconnect with someone.",
    "Your creativity could be especially strong today.",
    "A difficult decision may become clearer.",
    "You could learn something valuable from an experience.",
    "A positive change may be approaching.",
    "Your patience may be rewarded.",
    "You may find a solution to a problem.",
    "A pleasant surprise could come your way.",
    "Today may bring a chance to improve yourself.",
    "You could receive encouragement from someone.",
    "Your confidence may help you overcome a challenge.",
    "A new connection could become important.",
    "You may feel ready to take the next step.",
    "Something you have been waiting for may move forward.",
    "The coming days could bring fresh opportunities."
];

let zodiac;

function displayZodiacSign(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiac = "Aries";
    }
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiac = "Taurus";
    }
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiac = "Gemini";
    }
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiac = "Cancer";
    }
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiac = "Leo";
    }
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiac = "Virgo";
    }
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiac = "Libra";
    }
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiac = "Scorpio";
    }
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiac = "Sagittarius";
    }
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiac = "Capricorn";
    }
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiac = "Aquarius";
    }
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiac = "Pisces";
    }

};

const form = document.getElementById('astroForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    displayZodiacSign(month, day);

    const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiac}. ${compliments[(name.length + day) % 30]} ${victimCards[(month + day) % 30]} ${recommendations[(year % 100) % 30]} ${predictions[(name.length * month) % 30]}`;

    document.getElementById('result').textContent = text;
});