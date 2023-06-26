import { createUser , getUserData, deleteUser } from '../utils/apiCommands.js';

describe('API commands', () => {
    let userId: number;
    let userEmail: string;
    let userName: string;

    afterAll(async () => {
        await deleteUser(userId);
    });

    it('POST command', async () => {
        const user = {
            name: 'Automation Test Name',
            email: 'automationtest@email.com',
        };
        await createUser(user);
        userId= 1;
    });
    it('GET command', async () => {
        const userData = await getUserData(userId);
        userName = userData.name;
        userEmail = userData.email;
        console.log('User Name:', userName);
        console.log('User Email:', userEmail);
    });
});


