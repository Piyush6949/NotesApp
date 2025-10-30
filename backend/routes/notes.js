import express from 'express';
import {notesController} from '../controller/notes.js';

const router = express.Router();

const Note = new notesController();

router.post('/create',Note.createNote);
router.get('/MyNotes',Note.getAllNotes);
router.delete('/delete',Note.deleteNote);
router.patch('./update',Note.updateNote);


const noteRoutes = router;
export {noteRoutes};