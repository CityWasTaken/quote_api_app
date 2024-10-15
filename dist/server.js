import express from 'express';
const app = express();
// We need a database of quotes
const quotes = [
    'The circumstances of ones birth are relevant, but it is what you do with the gift of life that determines who you are.',
    'Push through the pain. Giving up hurts more.',
    'The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature.',
    'Hard work is worthless for those that don\'t believe in themselves.',
    'Sometimes, we have to look beyond what we want and do what\'s best.',
];
/*
//Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below:
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/
app.get('/api/quotes', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    responseObj.send(`Quote: ${randomQuote}`);
});
// app.get('/', (_, responseObj) => {
//     responseObj.send('Hey! Its me! GOKU!')
// });
// app.get('/data', (_, responseObj) => {
//     const data = {
//         name: 'City',
//         age: 27
//     };
//     responseObj.send(data);
// });
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
