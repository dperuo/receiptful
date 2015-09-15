### Please follow [GitHub Flow][gh-flow] for contributions:

1. The `master` branch is always stable and deployable.
2. To work on something new, create a new branch off `master`. Give your branch a descriptive name (e.g. `new-user-sign-up`).
3. Commit early and often to your local branch. Regularly push your work to the same named branch on GitHub.
4. Open a pull request as soon as possible. Use the pull request to discuss your code and gain feedback.

## Using npm

This repo uses npm as a package manager and build tool.

- `npm run build` initiates a new build and test process.
- `npm run uglify` initiates a new build without testing.
- `npm run test` initiates a new test without building.

Code linting is performed automatically on all commands.

[gh-flow]: https://guides.github.com/introduction/flow/index.html
