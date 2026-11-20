/**
 * Scripted conversations for the animated chat demo on the home page.
 * The bot's lines are copied from the live n8n WhatsApp workflow
 * (Welcome Menu, Show Categories, Ask Issue, Send Suggested Questions,
 * Ask Language, Send RTI, Submission Step). Department, guidance and the
 * three questions are examples of what the AI step returns.
 */

export type DemoMsg =
  | { from: "user"; text: string; tap?: boolean }
  | { from: "bot"; text: string; buttons?: string[] }
  | { from: "bot"; doc: { title: string; to: string; lang: string } }
  | { from: "note"; text: string };

export type DemoScenario = {
  id: string;
  chip: string;
  category: string;
  issue: string;
  dept: string;
  guidance: string;
  questions: [string, string, string];
  email: string;
};

export const scenarios: DemoScenario[] = [
  {
    id: "water",
    chip: "Mere area mein pani nahi aa raha",
    category: "1️⃣ Pani / Sewerage 💧",
    issue: "Mere area mein 2 hafton se pani nahi aa raha.",
    dept: "Karachi Water & Sewerage Corporation",
    guidance: "Yeh department pani aur sewerage ka zimmedar hota hai.",
    questions: [
      "Pichle 3 mahine mein mere area ki pani supply ka schedule kya tha?",
      "Is area ki pipeline marammat ke liye kitna budget mila?",
      "Pani ki shikayaton par ab tak kya karwai hui?",
    ],
    email: "info@kwsc.gos.pk",
  },
  {
    id: "school",
    chip: "School mein teachers nahi aate",
    category: "2️⃣ School / Taleem 🎓",
    issue: "Hamare gaon ke girls school mein teachers nahi aate.",
    dept: "School Education & Literacy Department, Sindh",
    guidance: "Yeh department sarkari schools aur teachers ka zimmedar hai.",
    questions: [
      "Is school mein kitne teachers tainaat hain aur unki hazri ka record kya hai?",
      "Is saal school ko kitne funds mile aur kahan kharch hue?",
      "School mein pani aur washroom ki sahulat ke liye kya plan hai?",
    ],
    email: "info@sindheducation.gov.pk",
  },
  {
    id: "hospital",
    chip: "Hospital mein dawai nahi milti",
    category: "3️⃣ Hospital / Sehat 🏥",
    issue: "Hamare BHU mein dawaiyan aur lady doctor nahi hain.",
    dept: "Health Department, Sindh",
    guidance: "Yeh department sarkari hospitals aur BHUs ka zimmedar hai.",
    questions: [
      "Is BHU mein kitne doctors aur lady health workers tainaat hain?",
      "Pichle 6 mahine mein kaun si dawaiyan supply hui?",
      "Is BHU ka salana budget kitna hai?",
    ],
    email: "info@sindhhealth.gov.pk",
  },
  {
    id: "development",
    chip: "Sadak ka kaam adhoora hai",
    category: "4️⃣ Local Govt 🏢",
    issue: "Hamari union council ki sadak 1 saal se adhoori hai.",
    dept: "Local Government Department, Sindh",
    guidance: "Yeh department taraqqiati kaam aur union councils ka zimmedar hai.",
    questions: [
      "Is sadak ke liye kitna budget manzoor hua aur kitna kharch hua?",
      "Kaam kis contractor ko diya gaya aur kab tak mukammal hona tha?",
      "Kaam rukne ki wajah kya hai?",
    ],
    email: "info@lgdsindh.gov.pk",
  },
];

export function buildScript(s: DemoScenario): DemoMsg[] {
  return [
    { from: "user", text: "Hi" },
    {
      from: "bot",
      text: "👋 Assalam o Alaikum!\n\nMein Jamhooriyat Saheliyan chatbot hoon 💛\nMain RTI ke mutaliq aapki madad karti hoon.\n\nAap kya karna chahte hain?",
      buttons: ["1️⃣ RTI kya hai", "2️⃣ RTI apply", "3️⃣ Help"],
    },
    { from: "user", text: "2️⃣ RTI apply", tap: true },
    {
      from: "bot",
      text: "📄 RTI Application\nAap kis bare mein maloomat chahte hain?",
      buttons: ["Select Category"],
    },
    { from: "user", text: s.category, tap: true },
    { from: "bot", text: "Theek hai 👍\nApna RTI sawal ya jis sarkari maloomat ki zarurat hai, woh likhein 👇" },
    { from: "user", text: s.issue },
    {
      from: "bot",
      text: `Aapka masla lagta hai ke *${s.dept}* se related hai.\n\n${s.guidance}\n\nAap yeh sawal pooch sakte hain:\n1️⃣ ${s.questions[0]}\n2️⃣ ${s.questions[1]}\n3️⃣ ${s.questions[2]}`,
      buttons: ["1️⃣ Sawal 1", "2️⃣ Sawal 2", "3️⃣ Sawal 3"],
    },
    { from: "user", text: "1️⃣ Sawal 1", tap: true },
    { from: "note", text: "Shehar, naam aur pata · contact number optional" },
    {
      from: "bot",
      text: "RTI application kis zubaan mein chahiye?\nWhich language do you want your RTI application in?",
      buttons: ["English", "Urdu / اردو", "Sindhi / سنڌي"],
    },
    { from: "user", text: "Urdu / اردو", tap: true },
    { from: "bot", doc: { title: "RTI Application", to: s.dept, lang: "Urdu" } },
    {
      from: "bot",
      text: `🟢 *RTI SUBMISSION DETAILS*\n\n📍 Office: ${s.dept}\n📧 Email: ${s.email}\n\nSindh RTI Act 2016 ke tehat aapko 15 din mein jawab milna chahiye.`,
      buttons: ["1️⃣ This is helpful"],
    },
  ];
}
