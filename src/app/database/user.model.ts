import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  username: string;
  courses: Schema.Types.ObjectId[];
  status: string;
  role: string;
  create_at: Date;
  firstName: string;
  lastName: string;
  photo: string;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.INACTIVE,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  create_at: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);
export default User;
