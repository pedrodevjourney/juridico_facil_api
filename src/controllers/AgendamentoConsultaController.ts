import { FastifyRequest, FastifyReply } from "fastify";
import { Controller } from "../interfaces/Controller";
import { ConsultaService } from "../interfaces/ConsultaService";
import { CriarConsultaDTO, TipoConsulta } from "../interfaces/Consulta";

export interface AgendamentoConsultaRequest {
  Body: {
    tipo_consulta: string;
    data_consulta: string;
    hora_consulta: string;
    nome_cliente: string;
    email_cliente: string;
    telefone_cliente: string;
    descricao_caso: string;
  };
}

export class AgendamentoConsultaController implements Controller {
  private consultaService: ConsultaService;

  constructor(consultaService: ConsultaService) {
    this.consultaService = consultaService;
  }

  async handle(
    request: FastifyRequest<AgendamentoConsultaRequest>,
    reply: FastifyReply
  ) {
    const {
      tipo_consulta,
      data_consulta,
      hora_consulta,
      nome_cliente,
      email_cliente,
      telefone_cliente,
      descricao_caso,
    } = request.body;

    // Validações básicas
    if (
      !tipo_consulta ||
      !data_consulta ||
      !hora_consulta ||
      !nome_cliente ||
      !email_cliente ||
      !telefone_cliente
    ) {
      return reply.code(400).send({
        error: "Todos os campos obrigatórios devem ser preenchidos",
      });
    }

    // Validar tipo de consulta
    if (!Object.values(TipoConsulta).includes(tipo_consulta as TipoConsulta)) {
      return reply.code(400).send({
        error:
          "Tipo de consulta inválido. Deve ser PRESENCIAL, ONLINE ou URGENTE",
      });
    }

    // Validar formato de data
    const dataConsultaObj = new Date(data_consulta);
    if (isNaN(dataConsultaObj.getTime())) {
      return reply.code(400).send({
        error: "Formato de data inválido",
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_cliente)) {
      return reply.code(400).send({
        error: "Formato de email inválido",
      });
    }

    try {
      const consulta = await this.consultaService.criarConsulta({
        tipo_consulta: tipo_consulta as TipoConsulta,
        data_consulta: dataConsultaObj,
        hora_consulta,
        nome_cliente,
        email_cliente,
        telefone_cliente,
        descricao_caso: descricao_caso || "",
      });

      return reply.code(201).send({
        message: "Consulta agendada com sucesso",
        consulta,
      });
    } catch (error: any) {
      console.error("Erro ao agendar consulta:", error);
      return reply.code(500).send({
        error: "Erro ao agendar consulta",
      });
    }
  }
}
