/*
 * BY ENIGMA | DISCORD & TG: nahmnenickname
 * LICENSED BY MIT
 * GITHUB: Isaagh3v0
 */

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

const UserSchema = model('userWrote', userSchema);
export {UserSchema}

/*
 * https://github/Isaagh3v0/telegram-autoanswer
 */