export function wait(n: number) {
	return new Promise<void>(res =>
		setTimeout(() => {
			res();
		}, n)
	);
}
