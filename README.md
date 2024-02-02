# cli

...

## Installation

To start the application, it's necessary first to set up the environment variables in the config directory:

```pwsh
$ cp config/des.env.example config/des.env
```

|- config/des|pre|pro.env

Remember to use the correct version of Node.js, for which I recommend using nvm with the .nvmrc file.
```pwsh
$ nvm use|install
```
Depending on whether we already have the version, we will use use or install

Next, we must install the modules:
```pwsh
$ npm i
```
## Usage

```pwsh
$ npm start
```

## Features

- ...

## Contributing

To maintain quality and consistency within our codebase, please adhere to the following guidelines:

1. **Issue Linking**: Every Pull Request (PR) must be linked to a detailed task in our [Github Project](https://github.com/users/ljramac/projects/1/views/1). This ensures that all changes are traceable to a specific objective and discussion.

2. **Commits**: Your commits should follow the [Conventional Commits](https://www.conventionalcommits.org/) standard, which helps in the automated generation of changelogs and maintains a readable history.

3. **Branching Strategy**: Our project uses [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) as its branching strategy. Please make sure to create feature branches off the `develop` branch and prepare your PRs accordingly.

For more details on how to contribute, please refer to our [Contributing Guidelines](./CONTRIBUTING.md).
