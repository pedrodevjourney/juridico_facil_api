import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";
import { ConsultaService } from "../interfaces/ConsultaService";

export interface BuscarConsultaParams {
  Params: {
    id: string;
  };
}

export class BuscarConsultaController implements Controller {
  private consultaService: ConsultaService;

  constructor(consultaService: ConsultaService) {
    this.consultaService = consultaService;
  }

  async handle(
    request: FastifyRequest<BuscarConsultaParams>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    if (!id) {
      return reply.code(400).send({
        error: "ID da consulta é obrigatório",
      });
    }

    try {
      const consulta = await this.consultaService.buscarConsultaPorId(id);

      if (!consulta) {
        return reply.code(404).send({
          error: "Consulta não encontrada",
        });
      }

      return reply.send({ consulta });
    } catch (error: any) {
      console.error("Erro ao buscar consulta:", error);
      return reply.code(500).send({
        error: "Erro ao buscar consulta",
      });
    }
  }
}
