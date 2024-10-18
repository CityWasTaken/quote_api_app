import express from 'express';
import dotenv from "dotenv";

dotenv.config();

import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlRoutes.js';

const app = express();

const PORT = process.env.PORT || 3333;

// Load in Routes
app.use(api_routes);

app.use(htmlRoutes);


// Start the server
app.listen(PORT, () => {
    console.log('Server started on port 3333');
    
});




// We need a database of quotes
// const quotes = [
//     'The circumstances of ones birth are relevant, but it is what you do with the gift of life that determines who you are.',
//     'Push through the pain. Giving up hurts more.',
//     'The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature.',
//     'Hard work is worthless for those that don\'t believe in themselves.',
//     'Sometimes, we have to look beyond what we want and do what\'s best.',
// ];