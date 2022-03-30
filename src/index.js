#!/usr/bin/env node
// const program = require('commander');
import {program} from 'commander';
import {join,dirname} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import {readFileSync} from 'fs';
import commands from "./commands/index.js"
const file =join(__dirname,'../package.json');
const read = readFileSync(file,'utf8');
const {version} = JSON.parse(read);
commands();
program.version(version);
program.parse(process.argv);