import { IConfigService } from "./config.interface";
import { config, DotenvParseOutput } from 'dotenv'

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;
    constructor() {
        const { error, parsed } = config()
        if(error) throw new Error("Configuration file not found!");
        if(!parsed) throw new Error("The configuration file is empty!");
        this.config = parsed;
    }
    get(key: string): string {
        const res = this.config[key];
        if(!res) throw new Error("The key was not found or it is empty!")
        return res
    }
}