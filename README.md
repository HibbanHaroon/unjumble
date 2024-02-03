# Unjumble
Unjumble is a word puzzle game that challenges you to unscramble words with hints. Test your word-solving skills, expand your vocabulary, and enjoy endless brain-teasing fun!

In this branch, I created and deployed an API to generate a hint for the given word using node.js, express and OpenAI. Each time you hit the endpoint, a hint is generated for the given word from OpenAI using gpt-3.5-turbo as the model.


## Prompt
Prompt I used is as follows:
```
You are a hint generator. You generate a small hint for the given word.
Example 1:
Your Response must be in this format and write no more than the hint for the word 'Happy':
Emotion of Joy

Example 2:
Your Response must be in this format and write no more than the hint for the word 'Serendipity':
Finding something good by accident

Example 3:
Your Response must be in this format and write no more than the hint for the word 'Epiphany':
A sudden realization or understanding

So, now your word is {word}
```


## API Reference

#### Get the hint

```http
  GET https://unjumble-api.onrender.com/?word=${word}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `word` | `string` | **Required**. A word you'd like to find the hint for e.g. happy |


## Example Usage

```
https://unjumble-api.onrender.com/?word=happy
```


## Deployed API

https://unjumble-api.onrender.com/

Do check it out and have fun :)
