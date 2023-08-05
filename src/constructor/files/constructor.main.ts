import {TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";
// @ts-ignore
import input from "input"
import {NewMessage, NewMessageEvent} from "telegram/events";
import {UserSchema} from "../../mongodb";
import msgJSON from "../../text/message.example.json"

async function handler(event: NewMessageEvent) {
    if(event.originalUpdate.className != 'UpdateShortMessage') return
    // @ts-ignore
    const senderId: any = String(event.message.fromId.userId.value)
    const ca = await UserSchema.findOne({ userId: senderId })
    if(ca) return
    await event.message.reply({ message: msgJSON.content.toString() })
        .then(() => {
            new UserSchema({ userId: senderId }).save()
    })
}

export class Client {
    private client: any;
    constructor() {
        require('./mongoose.connect')
    }
    async init(apiId: number, apiHash: string, CSession: string) {
        const stringSession = new StringSession(CSession || undefined); // fill this later with the value from session.save()
        if(stringSession) console.log("Loading from Session...")
        this.client = new TelegramClient(stringSession, apiId, apiHash, {
            connectionRetries: 5,
        });
        await this.client.start({
            phoneNumber: async () => await input.text("Please enter your number: "),
            password: async () => await input.text("Please enter your password: "),
            phoneCode: async () => await input.text("Please enter the code you received: "),
            onError: (err: any) => console.log(err),
        });
        this.client.addEventHandler(handler, new NewMessage())
    }
}