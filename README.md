# Unjumble
Unjumble is a word puzzle game that challenges you to unscramble words with hints. Test your word-solving skills, expand your vocabulary, and enjoy endless brain-teasing fun!

In this branch, I created and deployed an API to generate a wordgiven a wordLength, noOfWords, and isSwears using node.js, express. The words and swears are both in json files. Each time you hit the endpoint, word(s) are retrieved. 

I took major help to develop this API from my own project (Wordinator)[https://github.com/HibbanHaroon/wordinator.github.io] that I built.

## API Reference

#### Get the word

```http
  GET https://unjumble-word-api.onrender.com/?wordLength=${wordLength}&noOfWords=${noOfWords}&isSwears=${isSwears}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `wordLength` | `number` | **Required**. Length for the word e.g. 5|
| `noOfWords` | `number` | **Required**. Number of words you'd like e.g. 2 |
| `isSwears` | `boolean` | **Required**. Do you want swear / curse words? true or false e.g. true |

## Example Usage
```
https://unjumble-word-api.onrender.com/?wordLength=5&noOfWords=2&isSwears=true
```

## Deployed API

https://unjumble-word-api.onrender.com/

Do check it out and have fun :)
