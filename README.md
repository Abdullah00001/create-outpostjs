<p align="center">
  <h1 align="center">Outpost.js</h1>
</p>

  <p align="center">A highly robust, multi-service, Docker-orchestrated <a href="https://nodejs.org" target="_blank">Node.js</a> ecosystem.</p>
    <p align="center">
<a href="https://www.npmjs.com/package/create-outpostjs" target="_blank"><img src="https://img.shields.io/npm/v/create-outpostjs.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/create-outpostjs" target="_blank"><img src="https://img.shields.io/npm/l/create-outpostjs.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/create-outpostjs" target="_blank"><img src="https://img.shields.io/npm/dm/create-outpostjs.svg" alt="NPM Downloads" /></a>
</p>

## Description

The official bootstrapping tool for **Outpost.js Framework**, a highly robust, multi-service, Docker-orchestrated Node.js ecosystem. It is built with <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a> and combines a powerful Express.js API, BullMQ Background Workers, PostgreSQL, Redis, Socket.io, and a full Docker Hot-Reloading Pipeline.

## Philosophy

In modern backend development, managing microservices, databases, queues, and containerization can become a convoluted mess. While there are superb libraries and frameworks for Node.js, setting up a scalable, production-ready architecture from scratch remains a tedious and error-prone process.

Outpost.js aims to provide an enterprise-ready application architecture out of the box. With a single command, you can effortlessly scaffold a highly scalable, loosely coupled, and easily maintainable microservice environment. Forget about complex configurations—just focus on writing your business logic while Outpost.js handles the orchestration, code generation, and hot-reloading.

## Getting Started

To create a new Outpost.js project, simply run:

```bash
npm create outpostjs@latest my-awesome-app
```
*(Alternatively, you can run `npx create-outpostjs my-awesome-app`)*

Once generated, navigate to your project and configure your environment:

```bash
cd my-awesome-app
cp .env.example .env
npm install
docker compose up -d --build
```

### What's included out-of-the-box?
- **Zero-Config Docker Hot-Reloading:** Forget about `npm start`. Just run `docker compose up -d` and your code hot-reloads inside Alpine containers natively.
- **Automated API Code Generators:** Run `npm run create:module` and `npm run create:endpoint` to instantly scaffold perfectly-typed 8-file MVC structures and auto-wire your Express routes!
- **Automated Job Queues:** Scaffold scheduled tasks and BullMQ workers natively.
- **Pre-configured CI/CD:** GitHub Actions pipelines are already wired up for strict linting, type-checking, and Docker Hub delivery.

## Documentation

Once your project is generated, refer to the `docs/developer-workflow.md` inside your new project for an exhaustive guide on how to utilize the codebase!

## Questions

For questions and support, feel free to open an issue or start a discussion in this repository.

## Issues

Please make sure to read the Issue Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## License

Outpost.js is [MIT licensed](LICENSE).
