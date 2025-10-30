import { notesRepo } from '../repository/notes.js';
const Notes = new notesRepo();

class notesController {
    async createNote(req,res) {
        try {
            const {title, content, description} = req.body;
            const note = await Notes.createNote(title,content,description);
            return res.json({
                status : true,
                data : note,
                mssg : "Succesfully created Note",
            });
        } catch (error) {
            console.log("Something went wrong in controller");
            return res.json({
                status : false,
                data : error,
                mssg : "note able to create Note",
            });
        }

    }

    async deleteNote(req,res) {
        try {
            const {title} = req.body;
            const note = await Notes.deleteNote(title);
            return res.json({
                status : true,
                data : note,
                mssg : "Succesfully deleted Note",
            });
        } catch (error) {
            console.log("Something went wrong in controller");
            return res.json({
                status : false,
                data : error,
                mssg : "note able to delete Note",
            });
        }

    }

    async updateNote(req,res) {
        try {
            const {title, content, description} = req.body;
            const note = await Notes.updateNote(title,content,description);
            return res.json({
                status : true,
                data : note,
                mssg : "Succesfully updated Note",
            });
        } catch (error) {
            console.log("Something went wrong in controller");
            return res.json({
                status : false,
                data : error,
                mssg : "note able to update Note",
            });
        }
    }

    async getAllNotes(req,res) {
        try {
            const note = await Notes.getAllNotes();
            return res.json({
                status : true,
                data : note,
                mssg : "Succesfully got all Notes",
            });
        } catch (error) {
            console.log("Something went wrong in controller");
            return res.json({
                status : false,
                data : error,
                mssg : "note able to get all Notes",
            });
        }

    }
}

export {notesController};