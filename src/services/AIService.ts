import { GoogleGenerativeAI } from "@google/generative-ai";

export interface AIResponse {
  text: string;
}

export interface AIServiceOptions {
  model: string;
  apiKey: string;
}

export class AIService {
  private genAI: GoogleGenerativeAI;
  private modelName: string;

  constructor(options: AIServiceOptions) {
    this.genAI = new GoogleGenerativeAI(options.apiKey);
    this.modelName = options.model;
  }

  async generateResponse(prompt: string): Promise<AIResponse> {
    try {
      const model = this.genAI.getGenerativeModel({ model: this.modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return { text: response.text() };
    } catch (error: any) {
      console.error(
        "Erro na API de IA:",
        error.response?.data || error.message
      );
      throw new Error("Erro ao gerar resposta pela API de IA");
    }
  }
}
