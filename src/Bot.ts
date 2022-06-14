import {Client, ClientOptions} from 'discord.js';
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { bot_token } from './config';

console.log("bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(bot_token);