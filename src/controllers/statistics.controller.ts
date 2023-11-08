import data from '../../package.json';

const stringBuilder = (deps: Record<string, string>) => Object.entries(deps)
.map(([key, value]) => `${key}: ${value}`)
.join('\n') + '\n\n';

export const VERSION = `Version: ${data.version}\n\n `;

export const DEPENDENCIES = `Dependencies:\n
${stringBuilder(data.dependencies)}`

export const DEV_DEPENDENCIES = `DevDependencies:\n
${stringBuilder(data.devDependencies)}`
