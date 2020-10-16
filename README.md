# Probot: tb-7-auto-assign

> A GitHub App built with [Probot](https://github.com/probot/probot) that assigns a random github to a newely created issue

![Bot assigning user to issue]()

## How it works

- Using a `.yml` config file with settings for enabling issue assignment and a list of users to assign at random.
- When an issue is created on the repository it uses the config file to automatically assign a user to that issue.

## Usage

1. [Install the app]().
2. Create `.github/auto-assign-issues.yml` in your repository.

```yaml
# If enabled, auto-assigns a user when a new issue is created
addAssignees: true

# The list of users to assign to new issues. (ensure these users are in or contribute to the repository)
assignees:
  - user1
  - user2
  - user3
```

When a new issue is created on the repository, one of the assignees will be assigned.

## Setup

```sh
# Install dependencies
npm i

# Compile
npm run build

# Run
npm run dev
```

## Contributing

If you have suggestions for how `tb-7-auto-assign` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Shaeen Singh
