import {Client} from "./constructor";
import {ConfigService} from "./config";

const config = new ConfigService()

const API_ID = Number(config.get("API_ID"))
const API_HASH = config.get("API_HASH")
const SESSION = config.get("SESSION")

const client = new Client()
client.init(API_ID, API_HASH, SESSION)
