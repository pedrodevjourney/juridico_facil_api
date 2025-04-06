import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { ChatController } from "./controllers/ChatController";
import { ConsultaController } from "./controllers/ConsultaController";
import { ConversationController } from "./controllers/ConversationController";

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
  const chatController = new ChatController();
  const consultaController = new ConsultaController();
  const conversationController = new ConversationController();

  app.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["pergunta"],
          properties: {
            pergunta: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return consultaController.consultar(request, reply);
    }
  );

  app.get("/conversations", async (request, reply) => {
    return conversationController.listConversations(request, reply);
  });

  app.get(
    "/conversations/:id",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          properties: {
            id: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return conversationController.getConversation(request, reply);
    }
  );

  app.delete(
    "/conversations/:id",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          properties: {
            id: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return conversationController.deleteConversation(request, reply);
    }
  );

  app.post(
    "/chat/start",
    {
      schema: {
        body: {
          type: "object",
          required: ["message"],
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return chatController.startChat(request, reply);
    }
  );

  app.post(
    "/chat/:conversationId/continue",
    {
      schema: {
        body: {
          type: "object",
          required: ["message"],
          properties: {
            message: { type: "string" },
          },
        },
        params: {
          type: "object",
          required: ["conversationId"],
          properties: {
            conversationId: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return chatController.continueChat(request, reply);
    }
  );

  app.post(
    "/consulta",
    {
      schema: {
        body: {
          type: "object",
          required: ["pergunta"],
          properties: {
            pergunta: { type: "string" },
          },
        },
      },
    },
    async (request, reply) => {
      return consultaController.consultar(request, reply);
    }
  );
}
