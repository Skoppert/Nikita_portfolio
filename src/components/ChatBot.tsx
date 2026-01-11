import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Preprocess markdown to ensure proper line breaks
  const formatMarkdown = (text: string): string => {
    return text
      // Add line break before list items that aren't at the start
      .replace(/([^\n])(\s*-\s+\*\*)/g, '$1\n\n$2')
      // Add line break before numbered items
      .replace(/([^\n])(\s*\d+\.\s+)/g, '$1\n\n$2')
      // Convert single newlines to double for paragraph breaks
      .replace(/\n(?!\n)/g, '\n\n')
      // Clean up excessive newlines
      .replace(/\n{3,}/g, '\n\n');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, er ging iets mis. Probeer het later opnieuw of neem direct contact op via het contactformulier.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div>
            <h3 className="font-playfair font-bold text-lg">Nikita's Art Assistant</h3>
            <p className="text-sm opacity-90 font-cormorant">Vraag me alles over de kunstwerken</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-cream-50">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground font-cormorant py-8">
              <p className="mb-2">Welkom!</p>
              <p className="text-sm">Stel een vraag over de kunstwerken van Nikita Beekhof.</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl font-cormorant ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-white text-foreground shadow-sm rounded-bl-md'
                }`}
              >
                {message.role === 'assistant' ? (
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                        em: ({ children }) => <em className="italic">{children}</em>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="mb-1">{children}</li>,
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {formatMarkdown(message.content)}
                    </ReactMarkdown>
                  </div>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-foreground p-3 rounded-2xl rounded-bl-md shadow-sm">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Typ uw vraag..."
              className="flex-1 px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 font-cormorant"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full"
              disabled={isLoading || !input.trim()}
            >
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
