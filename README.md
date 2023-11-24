# Project-oauth

## Description

Project-oauth is a robust and scalable authentication and authorization service built using the 
NestJS framework. Leveraging TypeScript, it offers a well-structured and maintainable codebase, 
ideal for integrating OAuth capabilities into various applications.

## Installation

```bash
$ npm install
```
This command installs all the necessary dependencies to run the project.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Choose the appropriate command based on your development stage.

## Usage

After setting up and running the project, you can use it to authenticate users via OAuth. The 
service can be integrated with front-end applications to manage user authentication and authorization 
seamlessly.

## Environment variables

| Variable           | Explanation                    | Type      | Required |
|--------------------|--------------------------------|-----------|----------|
| GOOGLE_CLIENT_ID   | Your google client id          | string    | yes      |
| GOOGLE_SECRET      | Your google secret             | string    | yes      |
| JWT_SECRET         | Your custom jwt secret value   | string    | yes      |
| JWT_EXPIRES_IN     | When jwt token will be expired | number    | yes      |

## Contributing

Contributions are welcome! Please read our contributing guidelines for instructions on how to make 
contributions.