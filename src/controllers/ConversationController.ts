import { FastifyRequest, FastifyReply } from "fastify";

export interface ConversationParams {
  Params: {
    id: string;
  };
}

export class ConversationController {
  async listConversations(request: FastifyRequest, reply: FastifyReply) {
    return reply.send({ conversations: [] });
  }

  async getConversation(
    request: FastifyRequest<ConversationParams>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    return reply.send({
      conversation: { id, title: "Conversa de teste" },
      messages: [],
    });
  }

  async deleteConversation(
    request: FastifyRequest<ConversationParams>,
    reply: FastifyReply
  ) {
    return reply.send({ success: true });
  }
}
