# node-dev-console

## API

### `activate()`

- returns `boolean` - always returns true

Activates console output

### `deactivate()`

- returns `boolean` - always returns false

Deactivates console output

### `isOn()`

- returns `boolean` - true, if output is set to true and FORCE_OFF is false

### `l(args)`

- `args` (`any`, required)

Alias for console.log, if output is enabled

### `j(d[, name[, LP]])`

- `d` (`any`, required) - any kind of variable
- `name` (`string | `, optional) - name of the object
- `LP` (`string`, optional) - Log prefix

Shows content of variable (JSON.stringify), with optional name and log prefix

### `t(d[, name[, LP]])`

- `d` (`any`, required) - any kind of variable
- `name` (`string | `, optional) - name of the object
- `LP` (`string`, optional) - Log prefix

Shows type of variable, with optional name and log prefix

### `r([name[, LP]])`

- `name` (`string`, optional) - name of the object
- `LP` (`string`, optional) - Log prefix
- returns `rReturnFunction` - undefined

Inner function of r. Returns passed variable

### `or(DEV, LIVE)`

- `DEV` (`any`, required)
- `LIVE` (`any`, required)
- returns `any`

### `isDEV()`

- returns `boolean`

### `isLIVE()`

- returns `boolean`

### `stringify(v)`

- `v` (`any`, required)
- returns `string` - undefined

JSON.stringify with two spaces

### `showMessageIsOn()`

console.log's a message, if output is "on"

### `reEvaluateEnv()`

### `r1`

- type: `rReturnFunction`

Alias for r("STAGE1:")

### `r2`

- type: `rReturnFunction`

Alias for r("STAGE2:")

### `r3`

- type: `rReturnFunction`

Alias for r("STAGE3:")

### `r4`

- type: `rReturnFunction`

Alias for r("STAGE4:")

### `r5`

- type: `rReturnFunction`

Alias for r("STAGE5:")
