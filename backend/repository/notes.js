import { Notes } from '../models/notes.js';

class notesRepo {
    async createNote(title, content, description) {
        try {
            const note = await Notes.create({
                Title: title,
                Content: content,
                Description: description,
            });
            return note;
        } catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }

    }

    async deleteNote(title) {
        try {
            const note = await Notes.deleteOne({
                Title: title
            });
            return note;
        } catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }

    }

    async updateNote(title, newTitle, content, description) {
        try {
            const note = await Notes.findOneAndUpdate({
                Title: title
            }, { Title: newTitle, Content: content, Description: description });
            return note;
        } catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }
    }

    async getAllNotes() {
        try {
            const note = await Notes.find();
            return note;
        } catch (error) {
            console.log("Something went wrong in repo");
            throw error;
        }

    }
}

export {notesRepo};