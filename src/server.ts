import express from 'express';
import cookieParser from 'cookie-parser';
import { loginPage } from './ui/pages/login';
import { homePage } from './ui/pages/home';
import { loginForm } from './ui/pages/login/loginForm';
import { ROUTES } from './constants/routes';

const app = express();
const port = 8080;

app.use(express.static('src/public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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
// auth mock
app.use(async (req, res, next) => {
	if (!req.cookies.user && !req.path.includes('login')) {
		res.header('HX-Redirect', ROUTES.PAGES.LOGIN).send();
	} else {
		next();
	}
});

// throttle mock
app.use(async (req, res, next) => {
	await wait(2000);
	next();
});

function wait(n: number) {
	return new Promise<void>(res =>
		setTimeout(() => {
			res();
		}, n)
	);
}

// API ROUTES
app.post(ROUTES.API.LOGIN, async (req, res) => {
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
});

app.post(ROUTES.API.LOGOUT, async (req, res) => {
	res.clearCookie('user');
	res.header('HX-Redirect', ROUTES.PAGES.LOGIN).send();
});

// PAGE ROUTES
app.get(ROUTES.PAGES.HOME, (req, res) => {
	res.send(homePage());
});

app.get(ROUTES.PAGES.LOGIN, (req, res) => {
	res.send(loginPage());
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
