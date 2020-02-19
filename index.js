
// const dc = (...args) => ("DEV_CONSOLE_ON" in process.env) ? R.isEmpty(args) ? true :  console.log(...args) : false;
// const dcOr = (DEV, LIVE) => dc() ? DEV : LIVE;
// dc() && console.log("DEV CONSOLE is ON");

// dc.l();
// dc.j();
// dc.isOn();
// dc.DEV();
// dc.LIVE();
// dc.or(DEV, LIVE);

const isOn = () => ("DEV_CONSOLE_ON" in process.env);
const showMessageIsOn = () => isOn() ? l("DEV CONSOLE is ON") : "";

const l = console.log.bind(console);

const stringify = v => JSON.stringify(v, null, 2);
const j = (d, name = false) =>
    name === false
        ? l(stringify(d))
        : l(name, stringify(d))
;

const or = (DEV, LIVE) => isOn() ? DEV : LIVE;

const DEV = () => isOn();
const LIVE = () => !isOn();

module.exports = {
    isOn,
    l,
    j,
    or,
    DEV,
    LIVE,
    stringify,
    showMessageIsOn,
};