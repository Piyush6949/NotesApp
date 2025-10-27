import express from 'express';

const app = express();
const PORT = 5000;

import {noteRoutes} from './routes/notes.js';
app.get('./',noteRoutes);


app.listen(PORT , () => {
    console.log(`Server running on Port ${PORT}`);
})

