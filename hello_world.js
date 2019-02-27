const chalk = require("chalk");

const colours = ["red", "blue", "green"]
colours.forEach(function(colour){
    console.log(chalk[colour]('Hello, World'));
});
