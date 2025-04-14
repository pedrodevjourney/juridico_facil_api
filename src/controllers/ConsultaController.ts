import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";
import { AIService } from "../services/AIService";

export interface ConsultaRequest {
  Body: {
    pergunta: string;
  };
}

export class ConsultaController implements Controller {
  private aiService: AIService;

  constructor(aiService: AIService) {
    this.aiService = aiService;
  }

  async handle(request: FastifyRequest<ConsultaRequest>, reply: FastifyReply) {
    const { pergunta } = request.body;

    if (!pergunta) {
      return reply.code(400).send({ error: "A pergunta é obrigatória" });
    }

    try {
      const response = await this.aiService.generateResponse(pergunta);
      return reply.send({ resposta: response.text });
    } catch (error: any) {
      return reply.code(500).send({ error: "Erro ao consultar o assistente" });
    }
  }
}
