// const dc = (...args) => ("DEV_CONSOLE_ON" in process.env) ? R.isEmpty(args) ? true :  console.log(...args) : false;
// const dcOr = (DEV, LIVE) => dc() ? DEV : LIVE;
// dc() && console.log("DEV CONSOLE is ON");

// dc.l();
// dc.j();
// dc.isOn();
// dc.DEV();
// dc.LIVE();
// dc.or(DEV, LIVE);

const evaluateEnv = () => Boolean(process.env && process.env.DEV_CONSOLE_ON && Number(process.env.DEV_CONSOLE_ON) === 1);
let DC_ON = evaluateEnv();

// console.log("DEV_CONSOLE_ON", process.env.DEV_CONSOLE_ON, DC_ON);

const activate = () => DC_ON = true; // process.env.DEV_CONSOLE_ON = 1;
const deactivate = () => DC_ON = false; //process.env.DEV_CONSOLE_ON = false;

const isOn = () => DC_ON; //process.env.DEV_CONSOLE_ON; // Boolean(process.env.DEV_CONSOLE_ON );

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
    evaluateEnv,
};