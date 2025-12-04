import mongoose from "mongoose";

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
})

const TasksBlog = mongoose.Model.Blog  || mongoose.model("Blog", taskScheme);

export default TasksBlog;