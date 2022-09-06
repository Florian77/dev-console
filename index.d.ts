/**
 * Inner function of r. Returns passed variable
 */
export type rReturnFunction = (d: any) => any;
/**
 * Activates console output
 * @returns {boolean} always returns true
 */
export function activate(): boolean;
/**
 * Deactivates console output
 * @returns {boolean} always returns false
 */
export function deactivate(): boolean;
/**
 * @returns {boolean} true, if output is set to true and FORCE_OFF is false
 */
export function isOn(): boolean;
/**
 * Alias for console.log, if output is enabled
 * @param {any} args
 * @returns {void}
 */
export function l(...args: any): void;
/**
 * Shows content of variable (JSON.stringify), with optional name and log prefix
 * @param {any} d any kind of variable
 * @param {string | false} [name] name of the object
 * @param {string} [LP] Log prefix
 */
export function j(d: any, name?: string | false, LP?: string): void;
/**
 * Shows type of variable, with optional name and log prefix
 * @param {any} d any kind of variable
 * @param {string | false} [name] name of the object
 * @param {string} [LP] Log prefix
 */
export function t(d: any, name?: string | false, LP?: string): void;
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
export function r(name?: string, LP?: string): rReturnFunction;
/**
 * Alias for r("STAGE1:")
 * @type {rReturnFunction}
 */
export const r1: rReturnFunction;
/**
 * Alias for r("STAGE2:")
 * @type {rReturnFunction}
 */
export const r2: rReturnFunction;
/**
 * Alias for r("STAGE3:")
 * @type {rReturnFunction}
 */
export const r3: rReturnFunction;
/**
 * Alias for r("STAGE4:")
 * @type {rReturnFunction}
 */
export const r4: rReturnFunction;
/**
 * Alias for r("STAGE5:")
 * @type {rReturnFunction}
 */
export const r5: rReturnFunction;
export function or(DEV: any, LIVE: any): any;
export function isDEV(): boolean;
export function isLIVE(): boolean;
/**
 * JSON.stringify with two spaces
 * @param v {any}
 * @returns {string}
 */
export function stringify(v: any): string;
/**
 * console.log's a message, if output is "on"
 * @returns {void}
 */
export function showMessageIsOn(): void;
export function reEvaluateEnv(): void;
export { activate as on, deactivate as off };
