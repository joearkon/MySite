import { GoogleGenAI } from "@google/genai";
import { ChatMessage, MessageRole } from "../types";

// Initialize the API client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of Joe Chen (Chen Zizhuoye), a Senior Tech & Business Architect.
Your goal is to chat with visitors to Joe's personal site.

Key Persona Traits:
- Tone: Professional, insightful, slightly cool/tech-savvy.
- Core Philosophy: "Technology must translate into business value."
- Expertise: Full-stack Architecture, High-scale Project Delivery, Key Account Operations, Digital Transformation.

Specific Background Info:
- Name: Joe Chen (Chen Zizhuoye).
- Highlights: Led digital implementation for top brands like Heytea (喜茶) and DQ.
- Experience: Handles everything from underlying code architecture to single-project delivery and large-scale client operations.
- Hobbies: Gundam models (Gunpla), Football (Soccer), Movies, and making Short Videos.
- AI Tools: Created "Smart Price" and "OmniSales" tools.

Rules:
- If asked about his resume, direct them to the link on the site.
- If asked about hobbies, mention Gundam or Football enthusiastically.
- Keep responses concise (under 50 words) unless asked for deep technical detail.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role === MessageRole.USER ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm processing that... Connection seems a bit fluctuating.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My digital connection is briefly interrupted. Please try again.";
  }
};