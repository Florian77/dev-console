process.env.DEV_CONSOLE_ON = "1";

const lib = require("../index");

delete process.env.DEV_CONSOLE_ON;
console.log(lib.evaluateEnv());

process.env.DEV_CONSOLE_ON = "1";
console.log(lib.evaluateEnv());

process.env.DEV_CONSOLE_ON = "0";
console.log(lib.evaluateEnv());

process.env.DEV_CONSOLE_ON = 1;
console.log(lib.evaluateEnv());

process.env.DEV_CONSOLE_ON = 0;
console.log(lib.evaluateEnv());

process.env.DEV_CONSOLE_ON = "STRING-VALUE";
console.log(lib.evaluateEnv());

// lib.on();
// lib.off();

// process.env.DEV_CONSOLE_ON = 0;
// lib.activate();
// console.assert(lib.isOn(), "ERROR");

// lib.deactivate();
// process.env.DEV_CONSOLE_ON = 0;
// console.log(process.env.DEV_CONSOLE_ON, lib.isOn());
console.log("[isOn()=%s]", lib.isOn());
// console.assert(!lib.isOn(), "ERROR");

lib.showMessageIsOn();