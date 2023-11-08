import { t } from 'elysia';

const logInDTO = t.Object({
    username: t.String(),
    password: t.String(),
});
const registerDTO = t.Object({
    username: t.String(),
    password: t.String(),
});
const getUserDTO = t.Object({
    id: t.String(),
});

export default {
    logInDTO,
    registerDTO,
    getUserDTO
}