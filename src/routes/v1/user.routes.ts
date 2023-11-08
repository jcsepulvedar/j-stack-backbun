import { Elysia } from 'elysia';
import userModel from '../../models/user.model';

const state = Object.freeze({
    ROUTES_USER_VERSION: 1
});

const decorators = Object.freeze({
    getDate: () => new Date(Date.now())
});

const getRequests = new Elysia()
.state(state)
.decorate(decorators)
.get('/version', ({getDate, store: { ROUTES_USER_VERSION }}) => new Response(`Verion: ${ROUTES_USER_VERSION}\nDate:${getDate()}`))
.get('/:id', ({params: {id}}) => new Response(id), { params: userModel.getUserDTO });

const postRequests = new Elysia()
.post('/log-in', ({body: {username}}) => new Response(username), { body: userModel.logInDTO });

const app = new Elysia({ prefix: '/user' })
.use(getRequests)
.use(postRequests);

export default app;