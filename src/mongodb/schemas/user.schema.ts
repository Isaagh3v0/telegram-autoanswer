import {model, Schema, SchemaTypes} from "mongoose";

export interface IuserSchema {
    userId: string,
    date?: Date
}

const userSchema = new Schema<IuserSchema>({
    userId: SchemaTypes.String,
    date: {
        type: SchemaTypes.Date,
        default: Date.now
    }
});

// compile our model
const UserSchema = model('userWrote', userSchema);
export {UserSchema}