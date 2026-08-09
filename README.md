# create-outpost

The official bootstrapping tool for **Outpost.js Framework**, a highly robust, multi-service, Docker-orchestrated Node.js ecosystem.

With one command, you can instantly scaffold an enterprise-ready microservice architecture pre-configured with:
- **Express.js API Server**
- **BullMQ Background Worker & Scheduler**
- **PostgreSQL & Redis**
- **Prisma ORM**
- **Socket.io**
- **Full Docker Hot-Reloading Pipeline**

## Quick Start

To create a new Outpost.js project, simply run:

```bash
npm create outpost@latest my-awesome-app
```

### What's included out-of-the-box?
- **Zero-Config Docker Hot-Reloading:** Forget about `npm start`. Just run `docker compose up -d` and your code hot-reloads inside Alpine containers natively.
- **Automated API Code Generators:** Run `npm run create:module` and `npm run create:endpoint` to instantly scaffold perfectly-typed 8-file MVC structures and auto-wire your Express routes!
- **Automated Job Queues:** Scaffold scheduled tasks and BullMQ workers natively.
- **Pre-configured CI/CD:** GitHub Actions pipelines are already wired up for strict linting, type-checking, and Docker Hub delivery.

## Documentation
Once generated, refer to the `docs/developer-workflow.md` inside your new project for an exhaustive guide on how to utilize the codebase!
