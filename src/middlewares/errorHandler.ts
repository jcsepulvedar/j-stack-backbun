import { Elysia } from 'elysia'
import figlet from 'figlet';

const responseBuilder = (message: string) => new Response(`${figlet.textSync('J.Stack.Backbun')}\n\n${message}`)

export default new Elysia()
.state('plugin-version', 1)
.get('/errorHandlerVersion', ({ store }) => store['plugin-version'])
.onError(({error}) => {
	const message = error.message;
	switch(message) {
		case '401':
			return responseBuilder('Unauthorized');
	}
});