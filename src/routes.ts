import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { createControllers } from "./factories/controllerFactory";

import {
  ChatStartRequest,
  ChatContinueRequest,
} from "./controllers/ChatController";
import { ConsultaRequest } from "./controllers/ConsultaController";
import { ConversationParams } from "./controllers/ConversationController";

export async function routes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const controllers = createControllers();

  // Definir esquemas para validação
  const messageSchema = {
    type: "object",
    required: ["message"],
    properties: {
      message: { type: "string" },
    },
  };

  const perguntaSchema = {
    type: "object",
    required: ["pergunta"],
    properties: {
      pergunta: { type: "string" },
    },
  };

  const idParamSchema = {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string" },
    },
  };

  const conversationIdParamSchema = {
    type: "object",
    required: ["conversationId"],
    properties: {
      conversationId: { type: "string" },
    },
  };

  // Rotas raiz
  app.post("/", { schema: { body: perguntaSchema } }, (request, reply) =>
    controllers.consultaController.handle(request, reply)
  );

  // Rotas de conversas
  app.get("/conversations", (request, reply) =>
    controllers.listConversationsController.handle(request, reply)
  );

  app.get(
    "/conversations/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.getConversationController.handle(request, reply)
  );

  app.delete(
    "/conversations/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.deleteConversationController.handle(request, reply)
  );

  // Rotas de chat
  app.post(
    "/chat/start",
    { schema: { body: messageSchema } },
    (request, reply) => controllers.chatStartController.handle(request, reply)
  );

  app.post(
    "/chat/:conversationId/continue",
    {
      schema: {
        body: messageSchema,
        params: conversationIdParamSchema,
      },
    },
    (request, reply) =>
      controllers.chatContinueController.handle(request, reply)
  );

  // Rota de consulta
  app.post(
    "/consulta",
    { schema: { body: perguntaSchema } },
    (request, reply) => controllers.consultaController.handle(request, reply)
  );
}
