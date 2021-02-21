import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model("task", schema);

export default Task;
