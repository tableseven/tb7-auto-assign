# tb-7-auto-assign

> A GitHub App built with [Probot](https://github.com/probot/probot) that A small github app to assign users to an issue created

## Setup

```sh
# Install dependencies
npm install

# Compile
npm run build

# Run
npm run start
```

## Docker

```sh
# 1. Build container
docker build -t tb-7-auto-assign .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> tb-7-auto-assign
```

## Contributing

If you have suggestions for how tb-7-auto-assign could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Shaeen Singh <shaeenkevinsingh@gmail.com>
