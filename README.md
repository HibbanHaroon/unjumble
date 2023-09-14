# Unjumble
[Unjumble](https://unjumble.onrender.com/) is a word puzzle game that challenges you to unscramble words with hints. Test your word-solving skills, expand your vocabulary, and enjoy endless brain-teasing fun!

A jumbled word is displayed on the screen with a hint. You have to decipher the word and check it if you got it correct :)
### Design Inspiration

I am really crazy about websites with brutalist designs. So I decided to make one myself. I took some design inspirations from [this site](https://www.brutalistwebsites.com/).

Explore! Have fun 😉
### Implementation

In order to get the word and the hint, I decided to use gpt-3.5-turbo model from OpenAI. It's just a simple Node.js API deployed on render as a web service... Nothing too fancy. 

Do checkout [word-generation](https://github.com/HibbanHaroon/unjumble/tree/word-generation) branch if you're interested. 

### Deployed Website

https://unjumble.onrender.com/

Enjoy! 😊

### Issues

 - Not enough error handling, sometimes incorrect word or no word at all may display on the screen due to incorrect response comming from GPT.
 - I think I need to try another approach: Instead of asking the word and the hint both from GPT. I should get the word from another project Wordinator which generates a random word, and then send this word to GPT to generate the hint for this word, and then display the word and the hint on the screen. By doing approach I can have flexibility on choosing the word i.e., it can be a curse word, a simple word with 3 to 4 letters or a longer word with 14 letters. 

I'll try to work on this issues soon. :)

### Acknowledgements

 - [Animated Icons](https://icons8.com/icons)
 - [CSS Loader](https://www.html-code-generator.com/css/snippets/loading-animation?type=square)
 - [Infinite Marquee](https://www.youtube.com/watch?v=nAjR0Oj0J8E&t=468s&ab_channel=CodingwithRobby)
