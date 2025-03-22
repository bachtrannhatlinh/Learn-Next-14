import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  status: string;
  role: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String },
  name: { type: String },
  username: { type: String, required: true, unique: true },
  email_address: { type: String, required: true, unique: true },
  avatar: { type: String },
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
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);
export default User;
