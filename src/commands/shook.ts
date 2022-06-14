import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { randomInt } from "crypto";

export const shook: Command = {
    name: "shook",
    description: "슈슉거립니다",
    type: "CHAT_INPUT",
    options: [
        {
            name: "number",
            description: "1000번 이하로만 해주세요..토할거같아요",
            type: "INTEGER",
        }
    ],
    run: async (client, interaction) => {
        const count = Number(interaction.options.get('number')?.value);
        let content = "";

        if (!isNaN(count)) {
            if (count >= 1 && count <= 600) {
                while (content.length < count * 3) {
                    let random1 = randomInt(0, 999);
                    let random2 = randomInt(0, 999) * random1 / 1000;

                    if (random1 > 800) {
                        if (random2 > 450) content += "시.";
                        if (random2 > 430) content += "슉.";
                        else if (random2 > 395) content += "슈.";

                        if (random2 > 410) {
                            content += "시발.";
                            if (random2 > 30) {
                                content += "럼.";
                                if (random2 > 20) content += "슉.";
                                else if (random2 > 10) content += "슈.";
                                content += "아.";
                            } else content += "럼아.";
                        }
                        else content += "시발럼아.";
                    }
                    else if (random1 > 550) content += "슈슉.";
                    else if (random1 > 200) content += "슉.";
                    else content += "슈";
                }
            }
            else {
                content = "엄...숫자가 좀 그렇네요...1~1000까지만으로 해주세요..";
            }
        }
        else {
            content = "뭔가 잘못됐는디요? 숫자가 아녀유";
        }

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};