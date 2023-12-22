import * as elements from 'typed-html';

import { ROUTES } from 'src/constants/routes';

export function navbar() {
	return (
		<nav>
			<button hx-post={ROUTES.API.LOGOUT}>Log Out</button>
		</nav>
	);
}
