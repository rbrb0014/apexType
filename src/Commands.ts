import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { shook } from "./commands/shook";
import fs from "fs";

//export const Commands: Command[] = [Hello, shook];

export let Commands: Command[] = [];

const CommandsFolder = "./commands";
let filename: String[] = [];

for(const file of fs.readdirSync(__dirname+"/commands")){
    const cmd = require(`./commands/${file}`);
    Commands.push(cmd);
}