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
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: pergunta,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": `${process.env.GEMINI_API_KEY}`,
          },
        }
      );

      const respostaGemini = response.data.candidates[0].content.parts[0].text;

      return reply.send({ resposta: respostaGemini });
    } catch (error: any) {
      console.error(
        "Erro na API do Gemini:",
        error.response?.data || error.message
      );
      return reply.code(500).send({ error: "Erro ao consultar o Gemini" });
    }
  };
}
