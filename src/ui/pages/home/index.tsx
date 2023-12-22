import * as elements from 'typed-html';

import { index } from '../../layout';

export function homePage() {
	return index({ body: 'Home', title: 'Home' });
}
