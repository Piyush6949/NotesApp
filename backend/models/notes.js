import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Piyush:451778@cluster0.pwz8j.mongodb.net/NotesApp");

const {Schema,model} = mongoose;

const notesSchema = new Schema({
    date: {type: Date,default : Date.now},
    Title: {type: String, unique : true},
    Content: String,
    Description: String
},
    {
        timestamps: true
    }
);

const Notes = model('Notes',notesSchema);

export {Notes};

