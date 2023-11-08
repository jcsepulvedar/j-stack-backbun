import { Elysia } from 'elysia';
import userModel from '../models/user.model';

const userRoutes = new Elysia()
.get('/sign-in/:username', ({params: {username}}) => {
    return new Response(username);
},
{
    params: userModel.logInDTO
});
