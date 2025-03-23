import { FastifyRequest, FastifyReply } from "fastify";
import axios from "axios";

export interface ConsultaRequest {
  Body: {
    pergunta: string;
  };
}

export class ConsultaController {
  consultar = async (
    request: FastifyRequest<ConsultaRequest>,
    reply: FastifyReply
  ) => {
    const { pergunta } = request.body;

    if (!pergunta) {
      return reply.code(400).send({ error: "A pergunta é obrigatória" });
    }

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Você é um assistente jurídico.",
            },
            {
              role: "user",
              content: pergunta,
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

      const respostaGPT = response.data.choices[0].message.content;

      // Formato de resposta que o app espera
      return reply.send({ resposta: respostaGPT });
    } catch (error: any) {
      console.error(
        "Erro na API do OpenAI:",
        error.response?.data || error.message
      );
      return reply.code(500).send({ error: "Erro ao consultar o ChatGPT" });
    }
  };
}
