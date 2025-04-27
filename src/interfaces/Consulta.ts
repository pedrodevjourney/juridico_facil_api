export enum TipoConsulta {
  PRESENCIAL = "PRESENCIAL",
  ONLINE = "ONLINE",
  URGENTE = "URGENTE",
}

export interface Consulta {
  id: string;
  tipo_consulta: TipoConsulta;
  data_consulta: Date;
  hora_consulta: string;
  nome_cliente: string;
  email_cliente: string;
  telefone_cliente: string;
  descricao_caso: string;
  status: boolean;
  criado_em: Date;
  atualizado_em: Date;
}

export interface CriarConsultaDTO {
  tipo_consulta: TipoConsulta;
  data_consulta: Date;
  hora_consulta: string;
  nome_cliente: string;
  email_cliente: string;
  telefone_cliente: string;
  descricao_caso: string;
}
