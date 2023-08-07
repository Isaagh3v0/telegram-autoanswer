/*
 * BY ENIGMA | DISCORD & TG: nahmnenickname
 * LICENSED BY MIT
 * GITHUB: Isaagh3v0
 */

import {TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";
import session from "../../session.json"
import {color} from "../../functions";
/* @ts-ignore */ 
import input from "input"
import {NewMessage, NewMessageEvent} from "telegram/events";
import {UserSchema} from "../../mongodb";
import msgJSON from "../../text/message.json"

async function handler(event: NewMessageEvent) {
    if(event.originalUpdate.className != 'UpdateShortMessage') return
    /* @ts-ignore */
    const senderId: any = String(event.message.fromId?.userId.value)
    const ca = await UserSchema.findOne({ userId: senderId })
    if(ca) return
    await event.message.reply({ message: msgJSON.content.toString() })
        .then(() => {
            new UserSchema({ userId: senderId }).save()
    })
}

export class Client {
    private client: any;
    private session: StringSession | undefined | string;
    constructor() {
        require('./mongoose.connect')
    }
    async init(apiId: number, apiHash: string) {
        if(session) this.session = session.session
        if(this.session) console.log(`[SYSTEM] ${color('text', 'Signing with session...')}`)
        this.session = new StringSession(this.session?.toString() || undefined);
        this.client = new TelegramClient(this.session, apiId, apiHash, {
            connectionRetries: 5,
        });
        await this.client.start({
            phoneNumber: async () => await input.text("Please enter your number: "),
            password: async () => await input.text("Please enter your password: "),
            phoneCode: async () => await input.text("Please enter the code you received: "),
            onError: (err: any) => console.log(err),
        });
        console.log(`[SYSTEM] ${color('text', `Your session ID is ${color('variable', this.client.session.save())}\nPlease read: https://github.com/Isaagh3v0/telegram-autoanswer`)}`)
        this.client.addEventHandler(handler, new NewMessage())
    }
}

/*
 * https://github/Isaagh3v0/telegram-autoanswer
 */