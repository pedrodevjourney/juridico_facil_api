import { FastifyRequest, FastifyReply } from "fastify";
import axios from "axios";

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

      // Validação básica da mensagem
      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Você é um assistente jurídico especializado.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const conversation_id = Date.now().toString();
      return reply.send({
        conversation_id: conversation_id,
        message: response.data.choices[0].message.content,
      });
    } catch (error: any) {
      console.error(
        "Erro na API do OpenAI:",
        error.response?.data || error.message
      );
      return reply
        .code(500)
        .send({ error: "Erro ao iniciar conversa com o ChatGPT" });
    }
  };

  continueChat = async (
    request: FastifyRequest<ChatContinueRequest>,
    reply: FastifyReply
  ) => {
    try {
      const { message } = request.body;
      const { conversationId } = request.params;

      // Validação básica da mensagem
      if (!message || typeof message !== "string") {
        return reply.code(400).send({ error: "Mensagem inválida ou ausente." });
      }

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Você é um assistente jurídico especializado.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return reply.send({
        conversation_id: conversationId,
        message: response.data.choices[0].message.content,
      });
    } catch (error: any) {
      console.error(
        "Erro na API do OpenAI:",
        error.response?.data || error.message
      );
      return reply
        .code(500)
        .send({ error: "Erro ao continuar conversa com o ChatGPT" });
    }
  };
}
