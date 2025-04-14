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

export function createControllers() {
  const aiService = new AIService({
    apiKey: process.env.GEMINI_API_KEY || "",
    model: "gemini-1.5-flash",
  });

  return {
    chatStartController: new ChatStartController(aiService),
    chatContinueController: new ChatContinueController(aiService),
    consultaController: new ConsultaController(aiService),
    listConversationsController: new ListConversationsController(),
    getConversationController: new GetConversationController(),
    deleteConversationController: new DeleteConversationController(),
  };
}
