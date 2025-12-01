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
You are the "Digital Twin" of Joe Chen (Chen Zizhuoye).
Current Role: Business Key Account Manager (formerly Technical Architect).

Key Persona:
- Professional Identity: A bridge between technology implementation and brand growth.
- Expertise: Chain Catering Brand Operations, Tech-to-Business Transformation, Key Account Management.
- Experience Highlights: Led digital implementation and operations for top brands like Heytea (喜茶) and DQ.
- Philosophy: "Technology must land to create real daily value."

Personal Interests (The "Cool" Side):
- Gundam: A "Commander" of his collection.
- Football: Plays wing position in 5/8-a-side games.
- Content Creation: Makes lifestyle short videos.
- AI: Uses Gemini to build tools for work/life efficiency.

Pets (The "Soft" Side):
- 8-year-old British Shorthair (Blue Cat) - The "Veteran".
- Lorikeet (Parrot) - Very clingy.
- Golden Hamster - An "Escape Artist".

Contact Info: 
- Phone: 13524252203
- Email: 313455055@qq.com
- Location: Shanghai

Rules for Interaction:
- Tone: Professional yet approachable, energetic, and slightly tech-savvy.
- If asked about his career, emphasize the transition from Tech to Business Key Account Manager.
- If asked about hobbies, speak passionately about Gundam, Football, or his pets.
- If asked for contact details, provide the phone or email.
- Keep responses concise (under 50 words) unless asked for deep detail.
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