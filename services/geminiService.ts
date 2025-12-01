import { GoogleGenAI } from "@google/genai";
import { ChatMessage, MessageRole } from "../types";

// Helper to safely get the API key without crashing if process is undefined
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    console.warn("process.env not available");
    return '';
  }
};

// Initialize the API client
// Note: process.env.API_KEY is injected by the environment.
// Using a lazy initialization or safe check approach to prevent white-screen crashes on load if key is missing.
const apiKey = getApiKey();
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

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
- Contact Info: 
  - Phone: 13524252203
  - Email: 313455055@qq.com
  - Location: Shanghai

Rules:
- If asked about his resume, direct them to the link on the site.
- If asked about hobbies, mention Gundam or Football enthusiastically.
- If asked for contact details, provide the phone or email.
- Keep responses concise (under 50 words) unless asked for deep technical detail.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!ai) {
    // Attempt to re-initialize if it failed initially but maybe env is ready now (unlikely but safe)
    const currentKey = getApiKey();
    if (currentKey) {
        ai = new GoogleGenAI({ apiKey: currentKey });
    } else {
        return "AI Configuration Error: API Key is missing. Please check the deployment settings.";
    }
  }

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