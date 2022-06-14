import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        console.log(`${client.user.username} logged in`);

        await client.application.commands.set(Commands);
        console.log(Commands.map(c => c.name).join(', ') + ` commands are loaded\n${client.user.username} is now online`);
    });
};