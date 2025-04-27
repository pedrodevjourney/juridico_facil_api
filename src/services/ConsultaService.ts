import { PrismaClient } from "../generated/prisma";
import { Consulta, CriarConsultaDTO } from "../interfaces/Consulta";
import { ConsultaService as IConsultaService } from "../interfaces/ConsultaService";

export class ConsultaService implements IConsultaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async criarConsulta(data: CriarConsultaDTO): Promise<Consulta> {
    const consulta = await this.prisma.consulta.create({
      data: {
        tipo_consulta: data.tipo_consulta,
        data_consulta: data.data_consulta,
        hora_consulta: data.hora_consulta,
        nome_cliente: data.nome_cliente,
        email_cliente: data.email_cliente,
        telefone_cliente: data.telefone_cliente,
        descricao_caso: data.descricao_caso,
      },
    });

    return consulta as unknown as Consulta;
  }

  async listarConsultas(): Promise<Consulta[]> {
    const consultas = await this.prisma.consulta.findMany({
      orderBy: {
        data_consulta: "asc",
      },
    });

    return consultas as unknown as Consulta[];
  }

  async buscarConsultaPorId(id: string): Promise<Consulta | null> {
    const consulta = await this.prisma.consulta.findUnique({
      where: { id },
    });

    return consulta as unknown as Consulta | null;
  }
}
