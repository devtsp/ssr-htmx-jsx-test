### This project is an SSR mock application using:

- [Htmx](https://github.com/bigskysoftware/htmx) for client-side interactions
- JSX (with typescript) with [typed-html](https://github.com/nicojs/typed-html) for templating
- [Express](https://github.com/expressjs/express) for the server
- Plain CSS for styling at the moment

---

### Motivations

Lately I been bombarded with posts and blogs talking about how [htmx](https://github.com/bigskysoftware/htmx) is an awesome, simple and lightweight js library that allows you to create interactive user interfaces without the need to bloat your source code with custom javascript, and even better (!?) forget about modern js frameworks to write your frontend applications, making your code leaner (thus easier to mantain), your bundle size smaller (improving loading times and performance) and building times to the minimum.

Im very familiar and (I really love) modern frameworks for building my apps such as Next or Sveltekit. The features they offer allow you to chill and forget about some tricky aspects of the development process, allowing you to focus on the things that matter most: **delivering value to the final user**. They don't care _how_ you do it.

My idea is to start simple and progressively push the complexity of the application to measure if this stack is really capable to do the things that the most popular Javascript frameworks can do to match a modern application expectations (basically good UX through statefull interactions and good overall performance), and also draw my own conclusions about the DX behind the process to really take this stack as a nice-to-have option when deciding to start new projects.
