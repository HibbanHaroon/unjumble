const express = require('express');
const OpenAI = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `You are a word generator. You generate a word and also a small hint for that word.

Your Response must be in this format and write no more than the word and the hint:
Serendipity
Finding something good by accident.

Can you generate me a word and hint for that word?`;

function generateJSON(message){
    message.trim();
    var name = message.substring(0, message.indexOf("\n"))
    var hint = message.substring(message.indexOf("\n") + 1)
    
    const jsonObject = {
        "name": name,
        "hint": hint
    };

    return jsonObject;
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        const responseMessage = chatCompletion.choices[0].message.content;
        const jsonObject = generateJSON(responseMessage);

        res.send(jsonObject);
    } catch (error) {
        console.error('Error:', error);
        const jsonObject = generateJSON("Epiphany\n A sudden realization or understanding.");

        res.send(jsonObject);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});