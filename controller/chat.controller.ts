import { apiService } from "./api";
import type { Content } from "@google/genai";

export interface ConversationResponse {
  success: boolean;
  data: Content[];
  message: string;
  statusCode: number;
}

export const getRespuesta = async (
  questionUser: string,
  currentHistory: Content[] = [],
): Promise<ConversationResponse> => {
  return apiService.post<ConversationResponse>("/chat/", {
    questionUser,
    history: currentHistory,
  });
};
