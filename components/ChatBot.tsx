import React, { useState, useRef, useEffect } from 'react';
import { MessageRole, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { SparklesIcon, SendIcon, XIcon, MessageCircleIcon } from './Icons';
import { useApp } from '../App';

const ChatBot: React.FC = () => {
  const { t, language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Track if we've initialized the welcome message for the current language session
  const initializedLang = useRef<string>('');

  useEffect(() => {
    // When language changes or on mount, if we haven't sent a message yet, update the welcome
    // Or if we want to reset the welcome message when language changes:
    if (initializedLang.current !== language && messages.length <= 1) {
        setMessages([{ role: MessageRole.MODEL, text: t('chat.welcome') }]);
        initializedLang.current = language;
    }
  }, [language, t, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Pass the current history + new message to the service
      const responseText = await sendMessageToGemini(messages, inputValue);
      
      const modelMsg: ChatMessage = { role: MessageRole.MODEL, text: responseText };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Sorry, I encountered an error.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 h-[500px] bg-surface/95 backdrop-blur-md border border-textMain/10 rounded-2xl shadow-2xl flex flex-col animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-textMain/10 bg-background/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/20 rounded-full">
                <SparklesIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-textMain">{t('chat.title')}</h3>
                <span className="flex items-center gap-1.5 text-xs text-textMuted">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  {t('chat.online')}
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-textMuted hover:text-textMain transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === MessageRole.USER 
                      ? 'bg-primary text-white rounded-br-sm' 
                      : 'bg-surface border border-textMain/10 text-textMain rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface border border-textMain/10 rounded-2xl px-4 py-3 rounded-bl-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-textMain/10 bg-surface">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t('chat.placeholder')}
                className="w-full bg-background text-textMain rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-transparent focus:border-primary/50 transition-all placeholder-textMuted"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-1 top-1 p-2 bg-primary rounded-full text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[10px] text-textMuted text-center mt-2">
              Powered by Google Gemini
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-surface rotate-90 opacity-0 pointer-events-none absolute' : 'bg-primary hover:bg-indigo-600'
        }`}
      >
        <MessageCircleIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ChatBot;
