import { FastifyRequest, FastifyReply } from "fastify";
import { verify } from "jsonwebtoken";

interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const publicRoutes = ["/api/auth/register", "/api/auth/login"];
  const path = request.url.split("?")[0];
  console.log("Requisição recebida em:", request.url);
  console.log("Path processado:", path);

  if (publicRoutes.includes(path)) {
    return;
  }

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ error: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(
      token,
      process.env.JWT_SECRET ||
        "6ecc7f23332c39cad83f4b30e1e71df744c2ca98dd85c6ce12cec3f9e0eb57a1a1368483782c16c7ce36ed266a34c446ada7d0fcd21f76d7eef95047e4b7e4da"
    ) as TokenPayload;

    request.user = {
      id: decoded.userId,
    };

    return;
  } catch (error) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
