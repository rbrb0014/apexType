import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const content = "Hello there! " + interaction.user.username + ".";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};