const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `You are a hint generator. You generate a small hint for the given word.
Example 1:
Your Response must be in this format and write no more than the hint for the word 'Happy':
Emotion of Joy

Example 2:
Your Response must be in this format and write no more than the hint for the word 'Serendipity':
Finding something good by accident

Example 3:
Your Response must be in this format and write no more than the hint for the word 'Epiphany':
A sudden realization or understanding

So, now your word is `;

function generateJSON(message) {
  var hint = message;

  const jsonObject = {
    hint: hint,
  };

  return jsonObject;
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", async (req, res) => {
  try {
    const word = req.query.word;

    const completePrompt = prompt + word;

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: completePrompt }],
      model: "gpt-3.5-turbo",
    });

    const responseMessage = chatCompletion.choices[0].message.content;
    const jsonObject = generateJSON(responseMessage);

    res.send(jsonObject);
  } catch (error) {
    console.error("Error:", error);
    const jsonObject = generateJSON("Hint ain't available right now pookie :)");

    res.send(jsonObject);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
