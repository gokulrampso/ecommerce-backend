<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# E-Commerce Backend API

## Overview
Production-ready e-commerce backend API built with NestJS and MongoDB (Mongoose). Features modular architecture, JWT authentication, validation, security, logging, seeding, Swagger docs, and unit tests.

## Tech Stack
- NestJS (latest)
- MongoDB (Mongoose)
- Passport.js (JWT)
- class-validator, class-transformer
- Jest (unit testing)
- Swagger (API docs)
- Helmet, CORS (security)

## MongoDB Setup
- Install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/atlas/database).
- Create a database manually (no automation required).

## Named MongoDB Connection
- This project uses a **named MongoDB connection** called `'mongodbconn'`.
- All Mongoose modules and model injections use this connection name.
- If you change the connection name in the code, update it everywhere in the codebase and in this README.

**Example configuration in `app.module.ts`:**
```ts
MongooseModule.forRoot(process.env.MONGODB_URI, { connectionName: 'mongodbconn' })
```
**Example usage in feature modules:**
```ts
MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'mongodbconn')
```
**Example usage in services:**
```ts
@InjectModel(User.name, 'mongodbconn') private userModel: Model<UserDocument>
```

## Environment Variables
Create a `.env` file in the root:
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Seeding Sample Data
On app startup, the database will be seeded with sample users, products, categories, carts, and orders if collections are empty.

## Running the App
```
npm install
npm run start:dev
```

## Accessing Swagger UI
- Visit: `http://localhost:3000/api/docs`
- All endpoints are documented with example requests/responses.

## Postman Collection
- Import the provided `postman_collection.json` file into Postman to test all APIs.

## Running Tests & Coverage
```
npm run test
npm run test:cov
```
- Coverage report will be generated in the `coverage/` directory.

## Example .env
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

## Modules & Features
- **User:** Register, Login (JWT), Profile Update, Forgot/Reset Password
- **Product:** CRUD, Search/Filter (category, brand, price)
- **Cart:** Add/Update/Remove/View items
- **Order:** Place Order, View History, Cancel Order
- **Payment:** Mock Payment Simulation

## Security
- CORS enabled
- Secure headers via Helmet

## Logging
- Uses NestJS Logger and global logging interceptor

## Exception Handling
- Global exception filter for structured error responses

## Validation
- class-validator and global pipes for strong request validation

---

For any questions, please refer to the code comments and Swagger UI.
