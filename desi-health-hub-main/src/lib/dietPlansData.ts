import { Language } from "./i18n";

export interface DietPlan {
  id: string;
  slug: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  isPremium: boolean;
  image: string;
  tags: string[];
}

export const dietPlans: DietPlan[] = [
  {
    id: "1", slug: "7-day-weight-loss-plan",
    title: { en: "7 Day Weight Loss Plan", ur: "7 دن وزن کم کرنے کا پلان", hi: "7 दिन वजन कम करने का प्लान" },
    description: { en: "A simple Pakistani/Indian diet plan to lose up to 3kg in a week using desi foods.", ur: "ایک ہفتے میں 3 کلو تک وزن کم کرنے کا آسان دیسی ڈائیٹ پلان", hi: "एक हफ्ते में 3 किलो तक वजन कम करने का आसान देसी डाइट प्लान" },
    duration: "7 days", difficulty: "easy", isPremium: false, image: "🥗", tags: ["weight-loss", "beginner"]
  },
  {
    id: "2", slug: "ramzan-diet-plan",
    title: { en: "Ramzan Diet Plan", ur: "رمضان ڈائیٹ پلان", hi: "रमज़ान डाइट प्लान" },
    description: { en: "Stay healthy and lose weight during Ramadan with this balanced sehri and iftar plan.", ur: "رمضان میں صحت مند رہیں اور وزن کم کریں", hi: "रमज़ान में स्वस्थ रहें और वजन कम करें" },
    duration: "30 days", difficulty: "medium", isPremium: false, image: "🌙", tags: ["ramzan", "weight-loss"]
  },
  {
    id: "3", slug: "high-protein-diet-plan",
    title: { en: "High Protein Desi Diet", ur: "ہائی پروٹین دیسی ڈائیٹ", hi: "हाई प्रोटीन देसी डाइट" },
    description: { en: "Build muscle with affordable high-protein Pakistani and Indian foods.", ur: "سستے دیسی کھانوں سے پروٹین حاصل کریں", hi: "सस्ते देसी खाने से प्रोटीन प्राप्त करें" },
    duration: "14 days", difficulty: "medium", isPremium: true, image: "💪", tags: ["protein", "muscle"]
  },
  {
    id: "4", slug: "pakistani-fat-loss-diet",
    title: { en: "Pakistani Fat Loss Diet", ur: "پاکستانی فیٹ لاس ڈائیٹ", hi: "पाकिस्तानी फैट लॉस डाइट" },
    description: { en: "Lose fat while enjoying roti, daal, and chicken with controlled portions.", ur: "روٹی، دال اور چکن کھاتے ہوئے چربی کم کریں", hi: "रोटी, दाल और चिकन खाते हुए चर्बी कम करें" },
    duration: "21 days", difficulty: "easy", isPremium: false, image: "🇵🇰", tags: ["pakistani", "fat-loss"]
  },
  {
    id: "5", slug: "indian-vegetarian-diet",
    title: { en: "Indian Vegetarian Weight Loss", ur: "ہندوستانی سبزی خور ڈائیٹ", hi: "भारतीय शाकाहारी वजन घटाने का प्लान" },
    description: { en: "A vegetarian-friendly diet plan with paneer, daal, and sabzi.", ur: "پنیر، دال اور سبزی کے ساتھ سبزی خور ڈائیٹ پلان", hi: "पनीर, दाल और सब्जी के साथ शाकाहारी डाइट प्लान" },
    duration: "14 days", difficulty: "easy", isPremium: true, image: "🇮🇳", tags: ["indian", "vegetarian"]
  },
  {
    id: "6", slug: "pcos-diet-plan",
    title: { en: "PCOS Diet Plan (Desi)", ur: "PCOS ڈائیٹ پلان", hi: "PCOS डाइट प्लान" },
    description: { en: "Manage PCOS symptoms with this hormone-balancing desi diet plan.", ur: "اس ڈائیٹ پلان سے PCOS کی علامات کو کنٹرول کریں", hi: "इस डाइट प्लान से PCOS के लक्षणों को नियंत्रित करें" },
    duration: "30 days", difficulty: "hard", isPremium: true, image: "🩺", tags: ["pcos", "women"]
  },
];
