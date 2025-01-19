import Cookies from 'js-cookie';

class TokenService {
    static setToken(token: string, expiresInDays: number = 7) {
        Cookies.set('token', token, { expires: expiresInDays, secure: true, sameSite: 'Strict' });
    }

    static getToken(): string | undefined {
        return Cookies.get('token');
    }

    static removeToken() {
        Cookies.remove('token');
    }
}

export default TokenService;