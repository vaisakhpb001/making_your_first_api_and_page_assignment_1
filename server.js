const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route for Virtual Assistant API
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });

    let dayMessage;
    if (dayOfWeek === 'Monday') {
        dayMessage = 'Happy Monday! Start your week with energy!';
    } else if (dayOfWeek === 'Tuesday') {
        dayMessage = "It's Tuesday! ";
    } else if(dayOfWeek === 'Friday'){
        dayMessage = 'Have a wonderful day!,The weekend is near!';
    }else if(dayOfWeek === 'Friday'){
        dayMessage = 'Have a wonderful day!,The weekend is near!';
    }

    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});