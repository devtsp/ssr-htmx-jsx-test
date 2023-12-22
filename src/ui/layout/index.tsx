import * as elements from 'typed-html';

export function index({ body, title }: { body: string; title: string }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* HTMX */}
				<script
					src="https://unpkg.com/htmx.org@1.9.9"
					integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
					crossorigin="anonymous"
				></script>
				{/* LOADING STATES EXT */}
				<script src="https://unpkg.com/htmx.org/dist/ext/loading-states.js"></script>
				<link rel="stylesheet" href="index.css" />
				<title>{title}</title>
			</head>
			<body hx-ext="loading-states">{body}</body>
		</html>
	);
}
