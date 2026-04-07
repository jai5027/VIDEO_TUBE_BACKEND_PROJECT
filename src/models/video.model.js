import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
       videoFile: {
          type: String,
          required: true
       },
       thumbnail: {
          type: String,
          required: true
       },
       title: {
        type: String,
        reuired: true
       },
       description: {
        type: String,
        reuired: true
       },
       duration: {
        type: Number,
        reuired: true
       },
       views: {
        type: Number,
        default: 0
       },
       isPublished: {
        type: Boolean,
        default: true
       },
       owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
       }

}, { timestamps: true })

videoSchema.plugin(mongooseAggregatePaginate)

const videoModel = mongoose.model("video", videoSchema)

export default videoModel