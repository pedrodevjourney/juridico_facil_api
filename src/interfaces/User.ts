export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserDTO {
  nome: string;
  email: string;
  senha: string;
}

export interface LoginDTO {
  email: string;
  senha: string;
}

export interface AuthResponse {
  token: string;
  user: Omit<User, "senha">;
}
