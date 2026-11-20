/**
 * Real screenshots of the live WhatsApp RTI chatbot (+92 306 3804401),
 * taken from the team's walkthrough deck. Files live in /public/chatbot.
 * Order follows a full conversation, from "Hi" to a finished application.
 */
export type ChatStep = {
  src: string;
  title: string;
  body: string;
};

export const chatSteps: ChatStep[] = [
  {
    src: "/chatbot/step-01.webp",
    title: "Say “Hi”",
    body: "Open WhatsApp and send Hi. The chatbot greets you and shows three options: RTI kya hai, RTI apply and Help.",
  },
  {
    src: "/chatbot/step-02.webp",
    title: "Help when you need it",
    body: "Stuck or confused? Madad gives step-by-step support and a way to send feedback.",
  },
  {
    src: "/chatbot/step-03.webp",
    title: "What is RTI?",
    body: "RTI kya hai explains your Right to Information in simple Roman Urdu, with everyday examples.",
  },
  {
    src: "/chatbot/step-04.webp",
    title: "Start a request",
    body: "Choose RTI apply. The chatbot asks: “Aap kis bare mein maloomat chahte hain?”",
  },
  {
    src: "/chatbot/step-05.webp",
    title: "Pick a category",
    body: "Pani / Sewerage, School / Taleem, Hospital / Sehat, Local Government — or Kuch aur.",
  },
  {
    src: "/chatbot/step-06.webp",
    title: "Write your question",
    body: "In your own words, e.g. “Mujhe apne ilaqe ke development projects ki details chahiye.”",
  },
  {
    src: "/chatbot/step-07.webp",
    title: "The right office, found for you",
    body: "The chatbot names the responsible department and suggests clear questions to ask.",
  },
  {
    src: "/chatbot/step-08.webp",
    title: "Choose your questions",
    body: "Select one or more of the suggested questions to include in the application.",
  },
  {
    src: "/chatbot/step-09.webp",
    title: "Add your details",
    body: "Your name, and a contact number only if you want to add one — you can skip it.",
  },
  {
    src: "/chatbot/step-10.webp",
    title: "Choose a language",
    body: "Get the application in English or Urdu — whichever you are comfortable submitting.",
  },
  {
    src: "/chatbot/step-11.webp",
    title: "Your application is ready",
    body: "A formal RTI letter with the date, department, legal basis and your questions.",
  },
  {
    src: "/chatbot/step-12.webp",
    title: "Where to send it",
    body: "The office and its email address, plus the time limit for a reply under the Sindh RTI Act 2016.",
  },
  {
    src: "/chatbot/step-13.webp",
    title: "Done — from question to application",
    body: "“Aap ne apne haq ke liye qadam uthaya.” Start another request or return to the menu anytime.",
  },
];
