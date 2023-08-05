import * as mongoose from "mongoose";
import {ConfigService} from "../../config";
import {ConnectOptions} from "mongoose";

const config = new ConfigService()

const MONGOURI = config.get("MONGODB_URI")

mongoose
    .connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: true
    } as ConnectOptions)
        .then(x => console.log(`Connection to MongoDB with Mongoose Successfully!`))
        .catch(e => console.log(e))