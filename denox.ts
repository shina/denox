const module: Record<string, string> = await import(`${Deno.cwd()}/tasks.ts`);
const tasks = module.default;

function getDenoCmd(cmd: string): string[] {
    return cmd.split(" ");
}

async function exec(cmd: string) {
    const proc = await Deno.run({ cmd: getDenoCmd(cmd) }).status();

    if (!proc.success) {
        Deno.exit(proc.code);
    }

    return proc;
}

const taskName: any = Deno.args[0];
if (taskName) {
    exec(tasks[taskName]);
} else {
    console.log(tasks);
}
