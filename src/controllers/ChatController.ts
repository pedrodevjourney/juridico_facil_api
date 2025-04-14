import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";
import { AIService } from "../services/AIService";

export interface ChatStartRequest {
  Body: {
    message: string;
  };
}

export interface ChatContinueRequest {
  Body: {
    message: string;
  };
  Params: {
    conversationId: string;
  };
}

export class ChatStartController implements Controller {
  private aiService: AIService;

  constructor(aiService: AIService) {
    this.aiService = aiService;
  }

  async handle(request: FastifyRequest<ChatStartRequest>, reply: FastifyReply) {
    try {
      const { message } = request.body;

      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const prompt = "Você é um assistente jurídico especializado. " + message;
      const response = await this.aiService.generateResponse(prompt);

      const conversation_id = Date.now().toString();
      return reply.send({
        conversation_id,
        message: response.text,
      });
    } catch (error: any) {
      return reply
        .code(500)
        .send({ error: "Erro ao iniciar conversa com o assistente" });
    }
  }
}

export class ChatContinueController implements Controller {
  private aiService: AIService;

  constructor(aiService: AIService) {
    this.aiService = aiService;
  }

  async handle(
    request: FastifyRequest<ChatContinueRequest>,
    reply: FastifyReply
  ) {
    try {
      const { message } = request.body;
      const { conversationId } = request.params;

      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const prompt = "Você é um assistente jurídico especializado. " + message;
      const response = await this.aiService.generateResponse(prompt);

      return reply.send({
        conversation_id: conversationId,
        message: response.text,
      });
    } catch (error: any) {
      return reply
        .code(500)
        .send({ error: "Erro ao continuar conversa com o assistente" });
    }
  }
}
