import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

function createServer(): FastifyInstance {
  const app = Fastify({
    logger: true,
    ajv: {
      customOptions: {
        removeAdditional: false,
        useDefaults: true,
        coerceTypes: true,
        allErrors: true,
      },
    },
    ignoreTrailingSlash: true,
  });

  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);
    reply.code(400).send({ message: error.message });
  });

  return app;
}

const start = async () => {
  const app = createServer();

  await app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  });

  app.addContentTypeParser(
    "application/json",
    { parseAs: "string" },
    (req, body, done) => {
      try {
        const json = JSON.parse(body as string);
        done(null, json);
      } catch (err) {
        done(err as Error, undefined);
      }
    }
  );

  await app.register(routes, { prefix: "/api" });

  app.ready(() => {
    console.log("Rotas registradas:");
    app.printRoutes();
  });

  try {
    await app.listen({ port: 3333, host: "0.0.0.0" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
