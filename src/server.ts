import express from 'express';
import cookieParser from 'cookie-parser';

import { ROUTES } from './constants/routes';
import { UiController } from './modules/ui/UiController';
import { AuthController } from './modules/auth/AuthController';
import { wait } from './utils/wait';

const authController = new AuthController();
const uiController = new UiController();

const app = express();
const port = 8080;

app.use(express.static('src/public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// LIVERELOAD ON DEVELOPMENT
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
	const livereload = require('livereload');
	const connectLiveReload = require('connect-livereload');
	const liveReloadServer = livereload.createServer();
	liveReloadServer.server.once('connection', () => {
		setTimeout(() => {
			liveReloadServer.refresh('/');
		}, 100);
	});
	app.use(connectLiveReload());
}

// MIDDLEWARE
app.use(authController.verifyAuth);
// throttle mock
app.use(async (req, res, next) => {
	await wait(1000);
	next();
});

// API ROUTES
app.post(ROUTES.API.LOGIN, authController.login);
app.post(ROUTES.API.LOGOUT, authController.logout);

// PAGE ROUTES
app.get(ROUTES.PAGES.HOME, uiController.homePage);
app.get(ROUTES.PAGES.LOGIN, uiController.loginPage);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
