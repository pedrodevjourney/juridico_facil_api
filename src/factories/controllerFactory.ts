import { AIService } from "../services/AIService";
import {
  ChatStartController,
  ChatContinueController,
} from "../controllers/ChatController";
import { ConsultaController } from "../controllers/ConsultaController";
import {
  ListConversationsController,
  GetConversationController,
  DeleteConversationController,
} from "../controllers/ConversationController";
import { AgendamentoConsultaController } from "../controllers/AgendamentoConsultaController";
import { ListarConsultasController } from "../controllers/ListarConsultasController";
import { BuscarConsultaController } from "../controllers/BuscarConsultaController";
import { ConsultaService } from "../services/ConsultaService";

export function createControllers() {
  const aiService = new AIService({
    apiKey: process.env.GEMINI_API_KEY || "",
    model: "gemini-1.5-flash",
  });

  const consultaService = new ConsultaService();

  return {
    chatStartController: new ChatStartController(aiService),
    chatContinueController: new ChatContinueController(aiService),
    consultaController: new ConsultaController(aiService),
    listConversationsController: new ListConversationsController(),
    getConversationController: new GetConversationController(),
    deleteConversationController: new DeleteConversationController(),

    // Novos controladores de agendamento
    agendamentoConsultaController: new AgendamentoConsultaController(
      consultaService
    ),
    listarConsultasController: new ListarConsultasController(consultaService),
    buscarConsultaController: new BuscarConsultaController(consultaService),
  };
}
