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
import { AgendamentoConsultaRequest } from "./controllers/AgendamentoConsultaController";
import { BuscarConsultaParams } from "./controllers/BuscarConsultaController";

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

  const agendamentoSchema = {
    type: "object",
    required: [
      "tipo_consulta",
      "data_consulta",
      "hora_consulta",
      "nome_cliente",
      "email_cliente",
      "telefone_cliente",
    ],
    properties: {
      tipo_consulta: {
        type: "string",
        enum: ["PRESENCIAL", "ONLINE", "URGENTE"],
      },
      data_consulta: { type: "string", format: "date" },
      hora_consulta: { type: "string" },
      nome_cliente: { type: "string" },
      email_cliente: { type: "string", format: "email" },
      telefone_cliente: { type: "string" },
      descricao_caso: { type: "string" },
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

  // Rota de consulta IA
  app.post(
    "/consulta",
    { schema: { body: perguntaSchema } },
    (request, reply) => controllers.consultaController.handle(request, reply)
  );

  // Rotas de agendamento de consultas jurídicas
  app.post(
    "/agendamento",
    { schema: { body: agendamentoSchema } },
    (request, reply) =>
      controllers.agendamentoConsultaController.handle(request, reply)
  );

  app.get("/agendamento", (request, reply) =>
    controllers.listarConsultasController.handle(request, reply)
  );

  app.get(
    "/agendamento/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.buscarConsultaController.handle(request, reply)
  );
}
