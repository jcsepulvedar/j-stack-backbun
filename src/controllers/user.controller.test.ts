import { describe, expect, test, beforeAll } from 'bun:test';
import userController from '../routes/v1/user.routes';

beforeAll(() => {});

describe('test', () => {
    test('findById', () => {
        expect(userController.findUserById('1')).toBeArray();
    });
})