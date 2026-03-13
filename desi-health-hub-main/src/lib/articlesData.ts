import { Language } from "./i18n";

export interface Article {
  id: string;
  slug: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "1", slug: "7-day-weight-loss-diet-plan",
    title: { en: "7 Day Weight Loss Diet Plan", ur: "7 دن وزن کم کرنے کا ڈائیٹ پلان", hi: "7 दिन वजन कम करने का डाइट प्लान" },
    excerpt: { en: "Follow this simple 7-day plan to kickstart your weight loss journey with desi foods.", ur: "دیسی کھانوں سے وزن کم کرنے کا آسان 7 دن کا پلان", hi: "देसी खाने से वजन कम करने का आसान 7 दिन का प्लान" },
    category: "Weight Loss", readTime: "5 min", date: "2026-03-10", image: "🥗"
  },
  {
    id: "2", slug: "how-many-calories-in-roti",
    title: { en: "How Many Calories in Roti?", ur: "روٹی میں کتنی کیلوریز ہیں؟", hi: "रोटी में कितनी कैलोरी हैं?" },
    excerpt: { en: "Complete nutritional breakdown of roti and how it fits in your diet plan.", ur: "روٹی کی مکمل غذائی معلومات", hi: "रोटी की पूरी पोषण जानकारी" },
    category: "Calories", readTime: "3 min", date: "2026-03-08", image: "🫓"
  },
  {
    id: "3", slug: "weight-loss-without-gym",
    title: { en: "Weight Loss Without Gym", ur: "جم کے بغیر وزن کم کریں", hi: "जिम के बिना वजन कम करें" },
    excerpt: { en: "Practical tips to lose weight at home without any gym equipment.", ur: "گھر پر بغیر جم کے وزن کم کرنے کے عملی طریقے", hi: "घर पर बिना जिम के वजन कम करने के व्यावहारिक तरीके" },
    category: "Weight Loss", readTime: "4 min", date: "2026-03-05", image: "🏠"
  },
  {
    id: "4", slug: "best-pakistani-diet-for-fat-loss",
    title: { en: "Best Pakistani Diet for Fat Loss", ur: "چربی کم کرنے کی بہترین پاکستانی ڈائیٹ", hi: "चर्बी कम करने के लिए बेस्ट पाकिस्तानी डाइट" },
    excerpt: { en: "Eat your favorite Pakistani foods and still lose fat with this proven approach.", ur: "اپنے پسندیدہ پاکستانی کھانے کھائیں اور پھر بھی چربی کم کریں", hi: "अपने पसंदीदा पाकिस्तानी खाने खाएं और फिर भी चर्बी कम करें" },
    category: "Diet Plans", readTime: "6 min", date: "2026-03-01", image: "🇵🇰"
  },
  {
    id: "5", slug: "ramzan-weight-loss-diet",
    title: { en: "Ramzan Weight Loss Diet", ur: "رمضان میں وزن کم کرنے کی ڈائیٹ", hi: "रमज़ान में वजन कम करने की डाइट" },
    excerpt: { en: "Optimize your sehri and iftar meals to lose weight during Ramadan.", ur: "رمضان میں سحری اور افطار کو بہتر بنائیں", hi: "रमज़ान में सहरी और इफ्तार को बेहतर बनाएं" },
    category: "Diet Plans", readTime: "5 min", date: "2026-02-28", image: "🌙"
  },
  {
    id: "6", slug: "home-workout-for-beginners",
    title: { en: "Home Workout for Beginners", ur: "شروع کرنے والوں کے لیے گھریلو ورزش", hi: "शुरुआती लोगों के लिए घरेलू व्यायाम" },
    excerpt: { en: "Start your fitness journey with these simple home exercises - no equipment needed.", ur: "سادہ گھریلو ورزشوں سے اپنی فٹنس کا سفر شروع کریں", hi: "सरल घरेलू व्यायामों से अपनी फिटनेस की यात्रा शुरू करें" },
    category: "Fitness Tips", readTime: "4 min", date: "2026-02-25", image: "🏋️"
  },
];
