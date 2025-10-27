import express from 'express';
import {notesController} from '../controller/notes.js';

const router = express.Router;

const note = new notesController();

router.post('./create',note.createNote);
router.get('./MyNotes',note.getAllNotes);


const noteRoutes = router;
export {noteRoutes};