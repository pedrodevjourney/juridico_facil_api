/*
  Warnings:

  - You are about to drop the column `atualizadoEm` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `dataConsulta` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoCaso` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `emailCliente` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `horaConsulta` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCliente` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `telefoneCliente` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `tipoConsulta` on the `consultas` table. All the data in the column will be lost.
  - Added the required column `atualizado_em` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_consulta` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao_caso` to the `consRotas registradas:
{"level":30,"time":1745789546475,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","msg":"Server listening at http://127.0.0.1:3333"}
{"level":30,"time":1745789546475,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","msg":"Server listening at http://192.168.2.112:3333"}
{"level":30,"time":1745789990318,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-1","req":{"method":"POST","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
{"level":50,"time":1745789990321,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","err":{"type":"Error","message":"body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'","stack":"Error: body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'\n    at defaultSchemaErrorFormatter (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/context.js:92:10)\n    at wrapValidationError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/validation.js:249:17)\n    at validate (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/validation.js:167:16)\n    at preValidationCallback (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/handleRequest.js:89:25)\n    at handler (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/handleRequest.js:73:7)\n    at /Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:214:9\n    at AsyncResource.runInAsyncScope (node:async_hooks:214:14)\n    at done (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:207:14)\n    at Parser.fn (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/server.ts:45:9)\n    at IncomingMessage.onEnd (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:296:27)","statusCode":400,"code":"FST_ERR_VALIDATION","validation":[{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"tipoConsulta"},"message":"must have required property 'tipoConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"dataConsulta"},"message":"must have required property 'dataConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"horaConsulta"},"message":"must have required property 'horaConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"nomeCliente"},"message":"must have required property 'nomeCliente'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"emailCliente"},"message":"must have required property 'emailCliente'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"telefoneCliente"},"message":"must have required property 'telefoneCliente'"}],"validationContext":"body"},"msg":"body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'"}
{"level":30,"time":1745789990329,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-1","res":{"statusCode":400},"responseTime":10.514208999462426,"msg":"request completed"}
{"level":30,"time":1745789997377,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-2","req":{"method":"POST","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
{"level":50,"time":1745789997378,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","err":{"type":"Error","message":"body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'","stack":"Error: body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'\n    at defaultSchemaErrorFormatter (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/context.js:92:10)\n    at wrapValidationError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/validation.js:249:17)\n    at validate (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/validation.js:167:16)\n    at preValidationCallback (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/handleRequest.js:89:25)\n    at handler (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/handleRequest.js:73:7)\n    at /Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:214:9\n    at AsyncResource.runInAsyncScope (node:async_hooks:214:14)\n    at done (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:207:14)\n    at Parser.fn (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/server.ts:45:9)\n    at IncomingMessage.onEnd (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/node_modules/fastify/lib/contentTypeParser.js:296:27)","statusCode":400,"code":"FST_ERR_VALIDATION","validation":[{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"tipoConsulta"},"message":"must have required property 'tipoConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"dataConsulta"},"message":"must have required property 'dataConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"horaConsulta"},"message":"must have required property 'horaConsulta'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"nomeCliente"},"message":"must have required property 'nomeCliente'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"emailCliente"},"message":"must have required property 'emailCliente'"},{"instancePath":"","schemaPath":"#/required","keyword":"required","params":{"missingProperty":"telefoneCliente"},"message":"must have required property 'telefoneCliente'"}],"validationContext":"body"},"msg":"body must have required property 'tipoConsulta', body must have required property 'dataConsulta', body must have required property 'horaConsulta', body must have required property 'nomeCliente', body must have required property 'emailCliente', body must have required property 'telefoneCliente'"}
{"level":30,"time":1745789997380,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-2","res":{"statusCode":400},"responseTime":2.1397909997031093,"msg":"request completed"}
{"level":30,"time":1745790020911,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-3","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}
{"level":30,"time":1745790020985,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-3","res":{"statusCode":500},"responseTime":73.71900000050664,"msg":"request completed"}
{"level":30,"time":1745790029677,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-4","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}
{"level":30,"time":1745790029683,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-4","res":{"statusCode":500},"responseTime":5.3269999995827675,"msg":"request completed"}
{"level":30,"time":1745790040533,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-5","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}
{"level":30,"time":1745790040567,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-5","res":{"statusCode":500},"responseTime":30.00170799996704,"msg":"request completed"}
{"level":30,"time":1745790055138,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-6","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}
{"level":30,"time":1745790055141,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-6","res":{"statusCode":500},"responseTime":3.141458999365568,"msg":"request completed"}
{"level":30,"time":1745790056082,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-7","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}
{"level":30,"time":1745790056086,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-7","res":{"statusCode":500},"responseTime":3.3117079995572567,"msg":"request completed"}
{"level":30,"time":1745790058673,"pid":10075,"hostname":"MacBook-Air-de-Pedro.local","reqId":"req-8","req":{"method":"GET","url":"/api/agendamento","host":"localhost:3333","remoteAddress":"127.0.0.1","remotePort":51163},"msg":"incoming request"}
Erro ao listar consultas: PrismaClientValidationError: 
Invalid `this.prisma.consulta.findMany()` invocation in
/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:50

  26 }
  27 
  28 async listarConsultas(): Promise<Consulta[]> {
→ 29   const consultas = await this.prisma.consulta.findMany({
         orderBy: {
           dataConsulta: "asc",
           ~~~~~~~~~~~~
       ?   id?: SortOrder,
       ?   atualizado_em?: SortOrder,
       ?   criado_em?: SortOrder,
       ?   data_consulta?: SortOrder,
       ?   descricao_caso?: SortOrder,
       ?   email_cliente?: SortOrder,
       ?   hora_consulta?: SortOrder,
       ?   nome_cliente?: SortOrder,
       ?   status?: SortOrder,
       ?   telefone_cliente?: SortOrder,
       ?   tipo_consulta?: SortOrder
         }
       })

Unknown argument `dataConsulta`. Did you mean `data_consulta`? Available options are marked with ?.
    at An (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:29:1363)
    at zn.handleRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:7102)
    at zn.handleAndLogRequestError (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6784)
    at zn.request (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:121:6491)
    at async l (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/generated/prisma/runtime/library.js:130:9778)
    at async ConsultaService.listarConsultas (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/services/ConsultaService.ts:29:23)
    at async ListarConsultasController.handle (/Users/pedrodevjourney/Documents/projetos /JurídicoFácil/juridico_api/src/controllers/ListarConsultasController.ts:14:25) {
  clientVersion: '6.6.0'
}ultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_cliente` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_consulta` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_cliente` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_cliente` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_consulta` to the `consultas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultas" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "dataConsulta",
DROP COLUMN "descricaoCaso",
DROP COLUMN "emailCliente",
DROP COLUMN "horaConsulta",
DROP COLUMN "nomeCliente",
DROP COLUMN "telefoneCliente",
DROP COLUMN "tipoConsulta",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data_consulta" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "descricao_caso" TEXT NOT NULL,
ADD COLUMN     "email_cliente" TEXT NOT NULL,
ADD COLUMN     "hora_consulta" TEXT NOT NULL,
ADD COLUMN     "nome_cliente" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "telefone_cliente" TEXT NOT NULL,
ADD COLUMN     "tipo_consulta" "TipoConsulta" NOT NULL;
