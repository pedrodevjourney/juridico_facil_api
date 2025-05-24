import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { CreateUserDTO, LoginDTO, AuthResponse } from "../interfaces/User";

export class AuthService {
  private readonly JWT_SECRET =
    process.env.JWT_SECRET ||
    "BeUdrUVzJtbEYcuqf4MWUxY9Y93Qbz5M34pp0voXsbTtGJJ3chpYXp1ngQSBe6kam+c3Vh46CaXKQFEHJPSlKg==";
  private readonly SALT_ROUNDS = 10;

  async register(data: CreateUserDTO): Promise<AuthResponse> {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const hashedPassword = await hash(data.senha, this.SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: hashedPassword,
      },
    });

    const token = this.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    };
  }

  async login(data: LoginDTO): Promise<AuthResponse> {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    const passwordMatch = await compare(data.senha, user.senha);

    if (!passwordMatch) {
      throw new Error("Credenciais inválidas");
    }

    const token = this.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    };
  }

  private generateToken(userId: string): string {
    return sign({ userId }, this.JWT_SECRET, {
      expiresIn: "7d",
    });
  }
}
