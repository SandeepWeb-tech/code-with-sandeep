import mongoose from "mongoose";

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    }
})

const TasksFavoriate = mongoose.Model.Favoriate  || mongoose.model("Favoriate", taskScheme);

export default TasksFavoriate;