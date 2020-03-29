
const evaluateEnv = () => Boolean(process.env && process.env.DEV_CONSOLE_ON && Number(process.env.DEV_CONSOLE_ON) === 1);
let DC_ON = evaluateEnv();

const evaluateForceOffEnv = () => Boolean(process.env && process.env.DEV_CONSOLE_FORCE_OFF && Number(process.env.DEV_CONSOLE_FORCE_OFF) === 1);
let FORCE_OFF = evaluateForceOffEnv();

// if(FORCE_OFF) {
//     console.log("DEV CONSOLE is FORCE_OFF");
// }
// console.log("[FORCE_OFF=%s] [process.env.DEV_CONSOLE_FORCE_OFF=%s]", FORCE_OFF, process.env.DEV_CONSOLE_FORCE_OFF);
// throw Error("ENDE");

const reEvaluateEnv = () => {
    DC_ON = evaluateEnv();
    FORCE_OFF = evaluateForceOffEnv();
};

// console.log("DEV_CONSOLE_ON", process.env.DEV_CONSOLE_ON, DC_ON);

const activate = () => DC_ON = true; // process.env.DEV_CONSOLE_ON = 1;
const deactivate = () => DC_ON = false; //process.env.DEV_CONSOLE_ON = false;

const isOn = () => DC_ON && !FORCE_OFF; //process.env.DEV_CONSOLE_ON; // Boolean(process.env.DEV_CONSOLE_ON );

const l = (...args) => {
    if (isOn()) {
        console.log(...args)
    }
};
const showMessageIsOn = () => l("DEV CONSOLE is ON");

const stringify = v => JSON.stringify(v, null, 2);
const j = (d, name = false) =>
    name === false
        ? l(stringify(d))
        : l(name, stringify(d))
;


const r = (name = "") => d => {
    l(String(name), stringify(d));
    return d;
};

const r1 = r("STAGE1:");
const r2 = r("STAGE2:");
const r3 = r("STAGE3:");
const r4 = r("STAGE4:");
const r5 = r("STAGE5:");
// TODO add more

const or = (DEV, LIVE) => isOn() ? DEV : LIVE;

const DEV = () => isOn();
const LIVE = () => !isOn();

module.exports = {
    activate,
    on: activate,
    deactivate,
    off: deactivate,
    isOn,
    l,
    j,
    r,
    r1,
    r2,
    r3,
    r4,
    r5,
    or,
    DEV,
    LIVE,
    stringify,
    showMessageIsOn,
    reEvaluateEnv,
};