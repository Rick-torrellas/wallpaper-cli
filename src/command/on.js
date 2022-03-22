const program = require("commander");
program
.command("on")
.description("Para activar el wallpaper")
.option("-t,--test", "Para activar el wallpaper")
.action((cmdObj) => {
    const { test } = cmdObj;
   
});