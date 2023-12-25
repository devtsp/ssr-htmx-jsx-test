import { RequestHandler } from 'express';

import { homePage } from './pages/home';
import { loginPage } from './pages/login';
import { loginForm } from './pages/login/loginForm';

export class UiController {
	homePage: RequestHandler = (req, res) => {
		res.send(homePage());
	};

	loginPage: RequestHandler = (req, res) => {
		res.send(loginPage());
	};

	loginForm: RequestHandler = (req, res) => {
		res.send(loginForm());
	};
}
