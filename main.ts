// The Meeting: a tiny out-of-office CLI for make.fun.
const MESSAGE =
  'Out of office: I am in a very important meeting with the other 3,847 requests you sent at 3 AM.';

function renderLine(shout: boolean): string {
  return shout ? MESSAGE.toUpperCase() : MESSAGE;
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
