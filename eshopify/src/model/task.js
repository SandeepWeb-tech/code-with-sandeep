import mongoose from "mongoose";

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default:  "pending"
    },
    userid:{
        type: mongoose.ObjectId,
        required: true
    }
})

const Tasks = mongoose.Model.Todo  || mongoose.model("Todo", taskScheme);

export default Tasks;