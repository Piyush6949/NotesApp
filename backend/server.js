import express, { urlencoded } from 'express';
import {noteRoutes} from './routes/notes.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use('/',noteRoutes);


app.listen(PORT , () => {
    console.log(`Server running on Port ${PORT}`);
})

