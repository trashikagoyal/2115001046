const express = require('express');
const fetchNumbers = require('./api/fetchNumbers');
const calculateAverage = require('./utils/calculateAverage');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
let storedNumbers = [];

app.get('/numbers/:type', async (req, res) => {
  const { type } = req.params;
  const validTypes = ['p', 'f', 'e', 'l'];

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid type' });
  }

  const numbers = await fetchNumbers(type);

  console.log(`Fetched numbers for type ${type}:`, numbers); // Log fetched numbers

  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.error(`Invalid or empty numbers array fetched for type ${type}`);
    return res.status(500).json({ error: 'Failed to fetch valid numbers' });
  }

  storedNumbers = [...new Set([...storedNumbers, ...numbers])];

  if (storedNumbers.length > WINDOW_SIZE) {
    storedNumbers = storedNumbers.slice(-WINDOW_SIZE);
  }

  const avg = calculateAverage(storedNumbers);

  console.log('Stored numbers:', storedNumbers); // Log stored numbers
  console.log('Current average:', avg); // Log current average

  res.json({
    windowPrevState: storedNumbers.slice(0, -numbers.length),
    windowCurrState: storedNumbers,
    numbers,
    avg,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
