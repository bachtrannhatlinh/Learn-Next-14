import { Document, model, models, Schema } from 'mongoose';

export interface ILecture extends Document {
  _id: string;
  title: string;
  course: Schema.Types.ObjectId;
  lesson: Schema.Types.ObjectId[];
  created_at: Date;
  order: number;
  _destroy: boolean;
}

const lectureSchema = new Schema<ILecture>({
  title: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  lesson: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  created_at: { type: Date, default: Date.now },
  _destroy: { type: Boolean, default: false },
  order: { type: Number, default: 0},
});

const lectureModel = models.Course || model("Lecture", lectureSchema);
export default lectureModel;