import { RequestHandler } from 'express';

import { ROUTES } from '../../constants/routes';
import { loginForm } from '../ui/pages/login/loginForm';

export class AuthController {
	login: RequestHandler = async (req, res) => {
		const errors: Record<string, string> = {};

		// validate creds
		if (req.body.email !== 'admin') {
			errors.email = 'Wrong email';
		}
		if (req.body.password !== 'password') {
			errors.password = 'Wrong password';
		}

		if (Object.keys(errors).length > 0) {
			res.send(loginForm({ errors }));
		} else {
			res.cookie('user', 'admin', {
				httpOnly: true, // Only http no js (for security)
				sameSite: 'none',
				secure: true, // 'secure: true' prop will need to be removed when testing refresh token with ThunderClient
				maxAge: 24 * 60 * 60 * 1000, // 24hs
			});
			res.header('HX-Redirect', ROUTES.PAGES.HOME).send();
		}
	};

	logout: RequestHandler = async (req, res) => {
		res.clearCookie('user');
		res.header('HX-Redirect', ROUTES.PAGES.LOGIN).send();
	};

	verifyAuth: RequestHandler = async (req, res, next) => {
		if (!req.cookies.user && !req.path.includes('login')) {
			res.redirect(302, ROUTES.PAGES.LOGIN);
		} else {
			next();
		}
	};
}
