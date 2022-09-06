
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

/**
 * Activates console output
 * @returns {boolean} always returns true
 */
const activate = () => DC_ON = true; // process.env.DEV_CONSOLE_ON = 1;
/**
 * Deactivates console output
 * @returns {boolean} always returns false
 */
const deactivate = () => DC_ON = false; //process.env.DEV_CONSOLE_ON = false;

/**
 * @returns {boolean} true, if output is set to true and FORCE_OFF is false
 */
const isOn = () => DC_ON && !FORCE_OFF; //process.env.DEV_CONSOLE_ON; // Boolean(process.env.DEV_CONSOLE_ON );

/**
 * Alias for console.log, if output is enabled
 * @param {any} args
 * @returns {void}
 */
const l = (...args) => {
    if (isOn()) {
        console.log(...args)
    }
};

/**
 * console.log's a message, if output is "on"
 * @returns {void}
 */
const showMessageIsOn = () => l("DEV CONSOLE is ON");

/**
 * JSON.stringify with two spaces
 * @param v {any}
 * @returns {string}
 */
const stringify = v => JSON.stringify(v, null, 2);

/**
 * Shows content of variable (JSON.stringify), with optional name and log prefix
 * @param {any} d any kind of variable
 * @param {string | false} [name] name of the object
 * @param {string} [LP] Log prefix
 */
const j = (d, name = false, LP = '') =>
    name === false
        ? l(typeof d, stringify(d))
        : l(LP + String(name), stringify(d), typeof d)
;

/**
 * Shows type of variable, with optional name and log prefix
 * @param {any} d any kind of variable
 * @param {string | false} [name] name of the object
 * @param {string} [LP] Log prefix
 */
const t = (d, name = false, LP = '') =>
    name === false
        ? l("[%s]", d, typeof d)
        : l("%s [%s]", LP + String(name), d, typeof d)
;

/**
 * Inner function of r. Returns passed variable
 * @typedef {(d: any) => any} rReturnFunction
 */

/**
 * Re-usable function (ramda currying), basically doing the same as l.
 * Define name and log prefix first, and use resulting function to output
 * current variable.
 * @param {string} [name] name of the object
 * @param {string} [LP] Log prefix
 * @returns {rReturnFunction}
 */
const r = (name = "", LP = '') => d => {
    l(LP + String(name), stringify(d));
    return d;
};

/**
 * Alias for r("STAGE1:")
 * @type {rReturnFunction}
 */
const r1 = r("STAGE1:");

/**
 * Alias for r("STAGE2:")
 * @type {rReturnFunction}
 */
const r2 = r("STAGE2:");

/**
 * Alias for r("STAGE3:")
 * @type {rReturnFunction}
 */
const r3 = r("STAGE3:");

/**
 * Alias for r("STAGE4:")
 * @type {rReturnFunction}
 */
const r4 = r("STAGE4:");

/**
 * Alias for r("STAGE5:")
 * @type {rReturnFunction}
 */
const r5 = r("STAGE5:");
// TODO add more

const or = (DEV, LIVE) => isOn() ? DEV : LIVE;

const isDEV = () => isOn();
const isLIVE = () => !isOn();

module.exports = {
    activate,
    on: activate,
    deactivate,
    off: deactivate,
    isOn,
    l,
    j,
    t,
    r,
    r1,
    r2,
    r3,
    r4,
    r5,
    or,
    isDEV,
    isLIVE,
    stringify,
    showMessageIsOn,
    reEvaluateEnv,
};
