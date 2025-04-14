import { FastifyRequest, FastifyReply } from "fastify";

export interface Controller {
  handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>;
}
