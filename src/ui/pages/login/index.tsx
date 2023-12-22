import * as elements from 'typed-html';

import { index } from '../../layout';
import { loginForm } from './loginForm';

export function loginPage() {
	return index({ body: loginForm(), title: 'Login', publicRoute: true });
}
