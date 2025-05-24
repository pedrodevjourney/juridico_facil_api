import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService";
import { CreateUserDTO, LoginDTO } from "../interfaces/User";

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(
    request: FastifyRequest<{ Body: CreateUserDTO }>,
    reply: FastifyReply
  ) {
    try {
      const data = request.body;
      const result = await this.authService.register(data);
      return reply.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(400).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  }

  async login(
    request: FastifyRequest<{ Body: LoginDTO }>,
    reply: FastifyReply
  ) {
    try {
      const data = request.body;
      const result = await this.authService.login(data);
      return reply.status(200).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(401).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  }
}
