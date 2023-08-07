/*
 * BY ENIGMA | DISCORD & TG: nahmnenickname
 * LICENSED BY MIT
 * GITHUB: Isaagh3v0
 */

import {Client} from "./constructor";
import {ConfigService} from "./config";

const config = new ConfigService()

const API_ID = Number(config.get("API_ID"))
const API_HASH = config.get("API_HASH")

const client = new Client()
client.init(API_ID, API_HASH)

/*
 * https://github/Isaagh3v0/telegram-autoanswer
 */