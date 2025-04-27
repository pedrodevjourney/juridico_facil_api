import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";
import { ConsultaService } from "../interfaces/ConsultaService";

export class ListarConsultasController implements Controller {
  private consultaService: ConsultaService;

  constructor(consultaService: ConsultaService) {
    this.consultaService = consultaService;
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const consultas = await this.consultaService.listarConsultas();
      return reply.send({ consultas });
    } catch (error: any) {
      console.error("Erro ao listar consultas:", error);
      return reply.code(500).send({
        error: "Erro ao listar consultas",
      });
    }
  }
}
