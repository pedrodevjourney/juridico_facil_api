# Juridico Fácil API

## Módulo de Agendamento de Consultas Jurídicas

Este módulo permite que advogados agendem consultas jurídicas, especificando o tipo de consulta (presencial, online ou urgente), a data, horário, e informações do cliente.

### Configuração do Banco de Dados

1. Certifique-se de ter o PostgreSQL instalado e rodando:

```bash
# Verifica a instalação do PostgreSQL
psql --version

# Inicia o serviço PostgreSQL (pode variar conforme o sistema operacional)
# No MacOS:
brew services start postgresql
```

2. Crie o banco de dados:

```bash
psql -U postgres
CREATE DATABASE juridico_facil;
\q
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/juridico_facil?schema=public"
```

4. Execute a migração do banco de dados:

```bash
npx prisma migrate dev --name init_consultas
```

5. Gere o cliente Prisma:

```bash
npx prisma generate
```

### Executando o Servidor

```bash
npm run dev
```

### Endpoints de Agendamento

#### Criar Agendamento

```
POST /api/agendamento
```

Corpo da requisição:

```json
{
  "tipoConsulta": "PRESENCIAL", // ou "ONLINE" ou "URGENTE"
  "dataConsulta": "2023-12-30", // Formato YYYY-MM-DD
  "horaConsulta": "14:30",
  "nomeCliente": "Nome do Cliente",
  "emailCliente": "cliente@email.com",
  "telefoneCliente": "(11) 98765-4321",
  "descricaoCaso": "Descrição do caso jurídico"
}
```

#### Listar Agendamentos

```
GET /api/agendamento
```

#### Buscar Agendamento por ID

```
GET /api/agendamento/:id
```

### Exemplo de Uso com cURL

```bash
# Criar um agendamento
curl -X POST http://localhost:3333/api/agendamento \
  -H "Content-Type: application/json" \
  -d '{
    "tipoConsulta": "PRESENCIAL",
    "dataConsulta": "2023-12-30",
    "horaConsulta": "14:30",
    "nomeCliente": "Nome do Cliente",
    "emailCliente": "cliente@email.com",
    "telefoneCliente": "(11) 98765-4321",
    "descricaoCaso": "Descrição do caso jurídico"
  }'

# Listar todos os agendamentos
curl http://localhost:3333/api/agendamento

# Buscar agendamento por ID
curl http://localhost:3333/api/agendamento/seu-id-aqui
```
