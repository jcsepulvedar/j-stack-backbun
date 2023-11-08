import { Elysia } from 'elysia'
import { bearer } from '@elysiajs/bearer'
import errorHandler from './errorHandler';

export default new Elysia()
.use(bearer())
.state('plugin-version', 1)
.get('/isAuthorizedVersion', ({ store }) => store['plugin-version'])
.onBeforeHandle(({bearer, set}) => {
	if (!bearer) throw new Error('401')
});