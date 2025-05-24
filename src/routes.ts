import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { createControllers } from "./factories/controllerFactory";
import { authMiddleware } from "./middlewares/auth";

import {
  ChatStartRequest,
  ChatContinueRequest,
} from "./controllers/ChatController";
import { ConsultaRequest } from "./controllers/ConsultaController";
import { ConversationParams } from "./controllers/ConversationController";
import { AgendamentoConsultaRequest } from "./controllers/AgendamentoConsultaController";
import { BuscarConsultaParams } from "./controllers/BuscarConsultaController";
import { CreateUserDTO, LoginDTO } from "./interfaces/User";

export async function routes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  const controllers = createControllers();

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

  const registerSchema = {
    type: "object",
    required: ["nome", "email", "senha"],
    properties: {
      nome: { type: "string", minLength: 3 },
      email: {
        type: "string",
        format: "email",
      },
      senha: { type: "string", minLength: 6 },
    },
  };

  const loginSchema = {
    type: "object",
    required: ["email", "senha"],
    properties: {
      email: {
        type: "string",
        format: "email",
      },
      senha: { type: "string" },
    },
  };

  app.post<{ Body: CreateUserDTO }>(
    "/auth/register",
    { schema: { body: registerSchema } },
    (request, reply) => controllers.authController.register(request, reply)
  );

  app.post<{ Body: LoginDTO }>(
    "/auth/login",
    { schema: { body: loginSchema } },
    (request, reply) => controllers.authController.login(request, reply)
  );

  const publicRoutes = ["/auth/register", "/auth/login"];

  app.addHook("preHandler", async (request, reply) => {
    const path = request.url.split("?")[0];

    const isPublic = publicRoutes.some((route) => path.startsWith(route));
    if (!isPublic) {
      return authMiddleware(request, reply);
    }
  });

  app.post<{ Body: ConsultaRequest }>(
    "/",
    { schema: { body: perguntaSchema } },
    (request, reply) => controllers.consultaController.handle(request, reply)
  );

  app.get("/conversations", (request, reply) =>
    controllers.listConversationsController.handle(request, reply)
  );

  app.get<{ Params: ConversationParams }>(
    "/conversations/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.getConversationController.handle(request, reply)
  );

  app.delete<{ Params: ConversationParams }>(
    "/conversations/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.deleteConversationController.handle(request, reply)
  );

  app.post<{ Body: ChatStartRequest }>(
    "/chat/start",
    { schema: { body: messageSchema } },
    (request, reply) => controllers.chatStartController.handle(request, reply)
  );

  app.post<{ Body: ChatContinueRequest; Params: { conversationId: string } }>(
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

  app.post<{ Body: ConsultaRequest }>(
    "/consulta",
    { schema: { body: perguntaSchema } },
    (request, reply) => controllers.consultaController.handle(request, reply)
  );

  app.post<{ Body: AgendamentoConsultaRequest }>(
    "/agendamento",
    { schema: { body: agendamentoSchema } },
    (request, reply) =>
      controllers.agendamentoConsultaController.handle(request, reply)
  );

  app.get("/agendamento", (request, reply) =>
    controllers.listarConsultasController.handle(request, reply)
  );

  app.get<{ Params: BuscarConsultaParams }>(
    "/agendamento/:id",
    { schema: { params: idParamSchema } },
    (request, reply) =>
      controllers.buscarConsultaController.handle(request, reply)
  );
}
