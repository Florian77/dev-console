// process.env.DEV_CONSOLE_ON = 1;

const lib = require("../index");

lib.on();
// lib.off();

// process.env.DEV_CONSOLE_ON = 0;
// lib.activate();
// console.assert(lib.isOn(), "ERROR");

// lib.deactivate();
// process.env.DEV_CONSOLE_ON = 0;
// console.log(process.env.DEV_CONSOLE_ON, lib.isOn());
// console.log(lib.isOn());
// console.assert(!lib.isOn(), "ERROR");

lib.showMessageIsOn();