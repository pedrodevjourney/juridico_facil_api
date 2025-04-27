import { Consulta, CriarConsultaDTO } from "./Consulta";

export enum TipoConsulta {
  PRESENCIAL = "PRESENCIAL",
  ONLINE = "ONLINE",
  URGENTE = "URGENTE",
}

export interface ConsultaService {
  criarConsulta(data: CriarConsultaDTO): Promise<Consulta>;
  listarConsultas(): Promise<Consulta[]>;
  buscarConsultaPorId(id: string): Promise<Consulta | null>;
}
