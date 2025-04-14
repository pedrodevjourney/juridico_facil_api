import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";

export interface ConversationParams {
  Params: {
    id: string;
  };
}

export class ListConversationsController implements Controller {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    return reply.send({ conversations: [] });
  }
}

export class GetConversationController implements Controller {
  async handle(
    request: FastifyRequest<ConversationParams>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    return reply.send({
      conversation: { id, title: "Conversa de teste" },
      messages: [],
    });
  }
}

export class DeleteConversationController implements Controller {
  async handle(
    request: FastifyRequest<ConversationParams>,
    reply: FastifyReply
  ) {
    return reply.send({ success: true });
  }
}
