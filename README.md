Denox
=====

Probably just another Deno task runner

Installation
------------

```shell
deno install --allow-read --allow-run https://raw.githubusercontent.com/shina/denox/main/denox.ts
```

Usage
-----

Create a `tasks.ts` file that exports an object: `Record<string, string>` 
where the key is the command name and the value the command.

example:
```ts
const cwd = Deno.cwd();

export default {
    install: `deno cache ${cwd}/deps.ts --lock=${cwd}/lock.json`,
    update: `deno cache ${cwd}/deps.ts --lock=${cwd}/lock.json --lock-write`,
}
```

and call:

```shell
denox <command name>
```
