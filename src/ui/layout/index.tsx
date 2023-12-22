import * as elements from 'typed-html';

import { navbar } from './navbar';

export function index({
	body,
	title,
	publicRoute = false,
}: {
	body: string;
	title: string;
	publicRoute?: boolean;
}) {
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
				{/* CSS */}
				<link rel="stylesheet" href="index.css" />
				<title>{title}</title>
			</head>
			{publicRoute ? null : navbar()}
			<body hx-ext="loading-states">{body}</body>
		</html>
	);
}
