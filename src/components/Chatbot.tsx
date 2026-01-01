import { useState, useRef, useEffect } from "react";
import { HiX, HiChat } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Harikrishnan's assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What's your experience?",
    "What technologies do you use?",
    "Download resume",
    "Are you available for hire?",
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/Harikrishnan_angular developer_new.pdf";
    link.download = "Harikrishnan_N_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Resume download
    if (
      message.includes("resume") ||
      message.includes("cv") ||
      message.includes("download")
    ) {
      // Trigger download
      setTimeout(() => {
        downloadResume();
      }, 1000);
      return "📄 Great! I'm downloading the resume for you now.\n\nThe PDF contains complete details about my work experience, technical skills, projects, and achievements.\n\nIf the download doesn't start automatically, please check your browser's download settings or pop-up blocker.";
    }

    // Experience related
    if (
      message.includes("experience") ||
      message.includes("years") ||
      message.includes("work")
    ) {
      return "I have 6+ years of experience as a Full Stack Engineer, specializing in Angular and React. Currently, I'm working at IBS Software as a Lead Full Stack Engineer, developing the booking portal for Etihad Airways.";
    }

    // Technologies
    if (
      message.includes("tech") ||
      message.includes("skill") ||
      message.includes("stack") ||
      message.includes("language")
    ) {
      return "My core technologies include:\n• Frontend: Angular 17+, React, TypeScript, RxJS\n• State Management: NgRx, Angular Signals\n• Visualization: D3.js, vis.js\n• Backend: Node.js, Express, MongoDB\n• Tools: Git, VS Code, Grafana\n\nI specialize in building enterprise applications with modern frameworks!";
    }

    // Projects
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return "I've worked on several exciting projects:\n\n1. Etihad Airways Booking Portal - Production app with Angular 17+ and Signals\n2. AIOps Monitoring Platform - Real-time monitoring with D3.js visualizations\n3. Medical Analytics Dashboard - Interactive KPI tracking\n\nScroll down to the Projects section to see more details!";
    }

    // Availability
    if (
      message.includes("hire") ||
      message.includes("available") ||
      message.includes("job") ||
      message.includes("opportunity")
    ) {
      return "Yes, I'm open to new opportunities! I'm interested in challenging roles involving Angular, React, or full-stack development. Feel free to reach out via email at harikrishnan1806@gmail.com or WhatsApp at +91 9400149946.";
    }

    // Contact
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("email") ||
      message.includes("whatsapp")
    ) {
      return "You can reach me through:\n• Email: harikrishnan1806@gmail.com\n• WhatsApp: +91 9400149946\n• LinkedIn: linkedin.com/in/harikrishnan1806\n\nFeel free to send a message using the contact form below!";
    }

    // Location
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("based")
    ) {
      return "I'm based in Kochi, India. I'm open to remote opportunities as well as relocation for the right role.";
    }

    // Education
    if (
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("study")
    ) {
      return "I have a B.Tech in Mechanical Engineering from TocH Institute of Science and Technology, Kochi. Despite my mechanical engineering background, I found my passion in software development and have built a successful 6+ year career in web development!";
    }

    // Angular specific
    if (message.includes("angular")) {
      return "Angular is my primary expertise! I've been working with Angular for 6+ years, from Angular 8 to the latest Angular 17+. I'm proficient with Angular Signals, RxJS, NgRx, and modern reactive patterns. Currently using Angular 17+ in production at Etihad Airways.";
    }

    // React specific
    if (message.includes("react")) {
      return "I have 2+ years of hands-on experience with React and TypeScript. I'm comfortable with React Hooks, Context API, and modern React patterns. This portfolio itself is built with React + TypeScript + Tailwind CSS!";
    }

    // Domain knowledge
    if (message.includes("domain") || message.includes("industry")) {
      return "I have extensive domain expertise in:\n• Aviation & Airlines Industry (booking systems, fare calculation)\n• AIOps & Infrastructure Monitoring\n• Healthcare Analytics\n\nThis domain knowledge helps me understand business requirements and deliver better solutions.";
    }

    // Greetings
    if (
      message.includes("hi") ||
      message.includes("hello") ||
      message.includes("hey")
    ) {
      return "Hello! 👋 I'm here to help you learn more about Harikrishnan. Feel free to ask me about his experience, skills, projects, or availability!";
    }

    // Thanks
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! If you have any other questions, feel free to ask. Or you can reach out directly via the contact form below!";
    }

    // Default response
    return "That's a great question! Here are some things you can ask me about:\n• Work experience and background\n• Technical skills and technologies\n• Projects and portfolio\n• Availability for opportunities\n• Contact information\n• Download resume\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent hover:bg-accentDark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Open chat"
        >
          <HiChat className="text-2xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-secondary rounded-2xl shadow-2xl z-50 flex flex-col border border-border">
          {/* Header */}
          <div className="bg-accent text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HiChat className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Harikrishnan's Assistant</h3>
                <p className="text-xs text-white/80">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <HiX className="text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-accent text-white rounded-br-none"
                      : "bg-secondary text-textPrimary rounded-bl-none border border-border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-white/70"
                        : "text-textSecondary"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-primary border-t border-border">
              <p className="text-xs text-textSecondary mb-2">
                Quick questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors border border-accent/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-secondary rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-primary text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-accent hover:bg-accentDark text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
