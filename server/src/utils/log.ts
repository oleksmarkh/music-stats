import * as colors from 'colors/safe';

function log(...messages: string[]): void {
  return console.log(...messages.map((m) => colors.grey(m.trim().replace(/\n\s+/g, '\n'))));
}

export function warn(...messages: string[]): void {
  return console.warn(...messages.map((m) => colors.yellow(m)));
}

export function logRequest(url: string): void {
  return console.log(`requesting ${colors.cyan(url)}`);
}

export function proxyLog<DataType>(data: DataType): DataType {
  console.log(data);

  if (Array.isArray(data)) {
    console.log(data.length);
  }

  return data;
}

export default log;