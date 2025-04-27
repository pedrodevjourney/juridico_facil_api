-- CreateEnum
CREATE TYPE "TipoConsulta" AS ENUM ('PRESENCIAL', 'ONLINE', 'URGENTE');

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "tipoConsulta" "TipoConsulta" NOT NULL,
    "dataConsulta" TIMESTAMP(3) NOT NULL,
    "horaConsulta" TEXT NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "emailCliente" TEXT NOT NULL,
    "telefoneCliente" TEXT NOT NULL,
    "descricaoCaso" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);
