# Unjumble
Unjumble is a word puzzle game that challenges you to unscramble words with hints. Test your word-solving skills, expand your vocabulary, and enjoy endless brain-teasing fun!

In this branch, I created and deployed an API to generate a word and it's hint using node.js, express and OpenAI. Each time you load the page, a new word and hint is generated from OpenAI using gpt-3.5-turbo as the model.


### Prompt
Prompt I used is as follows:
```
You are a word generator. You generate a word and also a small hint for that word.

Your Response must be in this format and write no more than the word and the hint:
Serendipity
Finding something good by accident.

Can you generate me a word and hint for that word?
```


### Deployed API

https://unjumble-api.onrender.com/

Do check it out and have fun :)
