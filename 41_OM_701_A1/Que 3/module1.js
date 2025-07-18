export function ChatbotReply(message) {
    const Bot_Name = "TravelBot";
    const Bot_Age = 3;
    const Bot_Homebase = "Mumbai";
    const Bot_Specialty = "Travel Guidance";

    message = message.toLowerCase();

    if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
        return "Hello! Ready to explore the world?";
    } else if (message.includes("your") && message.includes("name")) {
        return "I'm " + Bot_Name + ", your travel companion!";
    } else if (message.includes("old") && message.includes("your")) {
        return "I'm " + Bot_Age + " years old — young but well-traveled!";
    } else if (message.includes("where") && message.includes("from")) {
        return "I'm based in " + Bot_Homebase + ", but I know places all over the globe!";
    } else if (message.includes("recommend") && message.includes("place")) {
        return "I recommend visiting Kyoto for culture, Bali for beaches, and Iceland for adventure!";
    } else if (message.includes("tip") && message.includes("advice")) {
        return "Always carry a power bank, learn a few local phrases, and respect local customs!";
    }

    return "Hmm, I didn't catch that. Try asking about travel tips or destinations!";
}
