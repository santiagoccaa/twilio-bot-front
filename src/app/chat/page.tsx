"use client";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getRespuesta } from "@/controller/chat.controller";
import { LoaderIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import type { Content } from "@google/genai";

interface ChatMessage {
  user: string;
  bot: string;
}

export default function BubbleDemo() {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState<Content[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(true)

  const handleSend = async () => {
    const userMsg = inputText.trim();

    if (!userMsg || loading) return;

    setLoading(true);

    try {
      const res = await getRespuesta(userMsg, chatHistory);

      if (res.success && Array.isArray(res.data)) {
        // El backend devuelve el historial completo como arreglo.
        const updatedHistory = res.data as Content[];

        // La última entrada corresponde a la respuesta actual de Gemini.
        const lastMessage = updatedHistory.at(-1);

        const botResponse =
          lastMessage?.parts
            ?.map((part) => ("text" in part ? (part.text ?? "") : ""))
            .join("")
            .trim() ?? "";

        if (!botResponse) {
          throw new Error("EMPTY_BOT_RESPONSE");
        }

        // Actualizar el historial que se enviará
        // en la siguiente solicitud.
        setChatHistory(updatedHistory);

        // Actualizar los mensajes visibles.
        setMessages((prev) => [
          ...prev,
          {
            user: userMsg,
            bot: botResponse,
          },
        ]);

        setInputText("");

        console.log("✅ Historial actualizado:", updatedHistory);
        console.log("📚 Total de mensajes:", updatedHistory.length);
      }
    } catch (error) {
      console.error("❌ Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="w-180">
        <CardHeader className="text-center">
          <CardTitle>Chat Bot</CardTitle>
        </CardHeader>

        <CardContent className="w-180">
          <ScrollArea className="h-110 rounded-md border">
            <div className="flex flex-col p-4 gap-y-2">
              {messages.map((ms, index) => (
                <div key={index} className="flex flex-col gap-y-2">
                  {ms.user && (
                    <Bubble align="end">
                      <BubbleContent>{ms.user}</BubbleContent>
                    </Bubble>
                  )}

                  {ms.bot && (
                    <Bubble variant="muted">
                      <BubbleContent>{ms.bot}</BubbleContent>
                    </Bubble>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <Input
            value={inputText}
            autoComplete="off"
            onChange={(e) => setInputText(e.target.value)}
            disabled={loading}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void handleSend();
              }
            }}
            autoFocus={focus}
          />

          <Button
            size="icon-lg"
            onClick={() => void handleSend()}
            disabled={loading || !inputText.trim()}
            className="ml-2"
          >
            {loading ? <LoaderIcon className="animate-spin" /> : <Send />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
