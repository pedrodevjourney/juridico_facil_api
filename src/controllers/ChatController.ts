import { FastifyRequest, FastifyReply } from "fastify";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

export class ChatController {
  startChat = async (
    request: FastifyRequest<ChatStartRequest>,
    reply: FastifyReply
  ) => {
    try {
      const { message } = request.body;

      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Você é um assistente jurídico especializado. " + message;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const conversation_id = Date.now().toString();
      return reply.send({
        conversation_id: conversation_id,
        message: text,
      });
    } catch (error: any) {
      console.error(
        "Erro na API do Gemini:",
        error.response?.data || error.message
      );
      return reply
        .code(500)
        .send({ error: "Erro ao iniciar conversa com o Gemini" });
    }
  };

  continueChat = async (
    request: FastifyRequest<ChatContinueRequest>,
    reply: FastifyReply
  ) => {
    try {
      const { message } = request.body;
      const { conversationId } = request.params;

      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Você é um assistente jurídico especializado. " + message;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return reply.send({
        conversation_id: conversationId,
        message: text,
      });
    } catch (error: any) {
      console.error(
        "Erro na API do Gemini:",
        error.response?.data || error.message
      );
      return reply
        .code(500)
        .send({ error: "Erro ao continuar conversa com o Gemini" });
    }
  };
}
