import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger'
import figlet from 'figlet';

import { VERSION, DEPENDENCIES, DEV_DEPENDENCIES } from './controllers/statistics.controller';

import userRoutesV1 from './routes/v1/user.routes';

import isAuthorized from './middlewares/isAuthorized';
import errorHandler from './middlewares/errorHandler';

const closeColor = '\x1b[0m';
const BLUE = '\u001b[34m'

const app = new Elysia()
.use(swagger())
.get('/', () => 
	new Response(`
		${figlet.textSync('J.Stack.Backbun')}\n\n
		${VERSION}
		${DEPENDENCIES}
		${DEV_DEPENDENCIES}
	`)
)
.use(isAuthorized)
.use(errorHandler)
.group('/api', app => app
	.group('/v1', app => app
		.use(userRoutesV1)
	)
)
.listen(3000);


console.group(`${BLUE}👾 J.Stack.Backbun${closeColor}`);
	console.log(`• serving @ ${app.server?.hostname}:${app.server?.port}`);
console.groupEnd();
