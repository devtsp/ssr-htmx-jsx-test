import * as elements from 'typed-html';
import { ROUTES } from 'src/constants/routes';

export function loginForm({
	errors,
}: { errors?: Record<string, string> } = {}) {
	function onSubmit(event: Event) {}

	return (
		<form
			hx-post={ROUTES.API.LOGIN}
			hx-swap="outerHTML"
			hx-trigger="submit"
			hx-disabled-elt="#submit-login"
		>
			<label for="email">
				Email
				<input type="text" id="email" name="email" class="border" hx-preserve />
				{errors?.email ? (
					<span class="login__error">{errors.email}</span>
				) : null}
			</label>
			<label for="password">
				Password
				<input
					type="password"
					id="password"
					name="password"
					class="border"
					hx-preserve
				/>
				{errors?.password ? (
					<span class="login__error">{errors.password}</span>
				) : null}
			</label>
			<button class="login__button--send" id="submit-login">
				<span data-loading-class="hidden">Login</span>
				<img
					src="/tail-spin-white.svg"
					class="hidden"
					height="16px"
					data-loading-class-remove="hidden"
				/>
			</button>
		</form>
	);
}
