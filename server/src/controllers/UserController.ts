import { Controller, Post, Body, Route } from 'tsoa';

@Route('users')
export class UserController extends Controller {

    @Post('signup')
    public async signup(@Body() requestBody: SignupRequest): Promise<SignupResponse> {
        const { username, email, password } = requestBody;

        try {
            if (!username || !email || !password) {
                this.setStatus(400);
                return {
                    message: 'Please provide a valid username, email, and password.',
                    username: '',
                    email: ''
                };
            }
            return {
                message: 'User signed up successfully',
                username,
                email
            };
        } catch (error) {
            this.setStatus(500)
            return {
                message: 'An error occurred while signing up the user.',
                username: '',
                email: ''
            };
        }
    }
}

export interface SignupRequest {
    username: string;
    email: string;
    password: string;
}

export interface SignupResponse {
    message: string;
    username: string;
    email: string;
}
