import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");

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

