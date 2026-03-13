import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "en" | "ur" | "hi";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Nav
  "nav.home": { en: "Home", ur: "ہوم", hi: "होम" },
  "nav.calories": { en: "Calories Database", ur: "کیلوریز ڈیٹابیس", hi: "कैलोरी डेटाबेस" },
  "nav.calculators": { en: "Health Calculators", ur: "صحت کیلکولیٹرز", hi: "स्वास्थ्य कैलकुलेटर" },
  "nav.dietPlans": { en: "Diet Plans", ur: "ڈائیٹ پلانز", hi: "डाइट प्लान" },
  "nav.weightLoss": { en: "Weight Loss", ur: "وزن کم کرنا", hi: "वजन कम करना" },
  "nav.supplements": { en: "Supplements", ur: "سپلیمنٹس", hi: "सप्लीमेंट्स" },
  "nav.fitnessTips": { en: "Fitness Tips", ur: "فٹنس ٹپس", hi: "फिटनेस टिप्स" },

  // Hero
  "hero.title": { en: "Your Journey to a Healthier You", ur: "صحت مند زندگی کا سفر", hi: "स्वस्थ जीवन की यात्रा" },
  "hero.subtitle": { en: "Expert diet plans, calorie guides, and fitness tools designed for Pakistani & Indian lifestyles", ur: "پاکستانی اور ہندوستانی طرز زندگی کے لیے ماہر ڈائیٹ پلانز", hi: "पाकिस्तानी और भारतीय जीवनशैली के लिए विशेषज्ञ डाइट प्लान" },
  "hero.cta.calories": { en: "Search Calories", ur: "کیلوریز تلاش کریں", hi: "कैलोरी खोजें" },
  "hero.cta.calculator": { en: "Try BMI Calculator", ur: "BMI کیلکولیٹر", hi: "BMI कैलकुलेटर" },

  // Sections
  "section.popularFoods": { en: "Popular Food Calories", ur: "مقبول کھانوں کی کیلوریز", hi: "लोकप्रिय खाद्य कैलोरी" },
  "section.popularFoods.sub": { en: "Nutritional info for your favorite desi foods", ur: "آپ کے پسندیدہ دیسی کھانوں کی غذائی معلومات", hi: "आपके पसंदीदा देसी खाने की पोषण जानकारी" },
  "section.calculators": { en: "Health Calculators", ur: "صحت کیلکولیٹرز", hi: "स्वास्थ्य कैलकुलेटर" },
  "section.calculators.sub": { en: "Free tools to track your fitness journey", ur: "اپنی فٹنس ٹریک کریں", hi: "अपनी फिटनेस ट्रैक करें" },
  "section.dietPlans": { en: "Featured Diet Plans", ur: "نمایاں ڈائیٹ پلانز", hi: "विशेष डाइट प्लान" },
  "section.dietPlans.sub": { en: "Designed for desi food lovers", ur: "دیسی کھانوں سے محبت کرنے والوں کے لیے", hi: "देसी खाना पसंद करने वालों के लिए" },
  "section.articles": { en: "Latest Articles", ur: "تازہ ترین مضامین", hi: "नवीनतम लेख" },
  "section.articles.sub": { en: "Tips and guides for a healthier lifestyle", ur: "صحت مند طرز زندگی کے لیے", hi: "स्वस्थ जीवनशैली के लिए" },

  // Common
  "common.calories": { en: "Calories", ur: "کیلوریز", hi: "कैलोरी" },
  "common.protein": { en: "Protein", ur: "پروٹین", hi: "प्रोटीन" },
  "common.carbs": { en: "Carbs", ur: "کاربوہائیڈریٹس", hi: "कार्ब्स" },
  "common.fat": { en: "Fat", ur: "چکنائی", hi: "वसा" },
  "common.per": { en: "per serving", ur: "فی سرونگ", hi: "प्रति सर्विंग" },
  "common.readMore": { en: "Read More", ur: "مزید پڑھیں", hi: "और पढ़ें" },
  "common.download": { en: "Download Plan", ur: "پلان ڈاؤنلوڈ کریں", hi: "प्लान डाउनलोड करें" },
  "common.free": { en: "Free", ur: "مفت", hi: "मुफ़्त" },
  "common.premium": { en: "Premium", ur: "پریمیم", hi: "प्रीमियम" },
  "common.search": { en: "Search foods...", ur: "کھانے تلاش کریں...", hi: "खाना खोजें..." },
  "common.calculate": { en: "Calculate", ur: "حساب کریں", hi: "गणना करें" },
  "common.result": { en: "Result", ur: "نتیجہ", hi: "परिणाम" },
  "common.viewAll": { en: "View All", ur: "سب دیکھیں", hi: "सभी देखें" },

  // Calculator
  "calc.bmi.title": { en: "BMI Calculator", ur: "BMI کیلکولیٹر", hi: "BMI कैलकुलेटर" },
  "calc.bmi.desc": { en: "Check your Body Mass Index", ur: "اپنا باڈی ماس انڈیکس چیک کریں", hi: "अपना बॉडी मास इंडेक्स जांचें" },
  "calc.calorie.title": { en: "Daily Calorie Calculator", ur: "روزانہ کیلوری کیلکولیٹر", hi: "दैनिक कैलोरी कैलकुलेटर" },
  "calc.calorie.desc": { en: "Find your daily calorie needs", ur: "اپنی روزانہ کیلوری ضروریات جانیں", hi: "अपनी दैनिक कैलोरी जरूरतें जानें" },
  "calc.weightLoss.title": { en: "Weight Loss Calculator", ur: "وزن کم کرنے کا کیلکولیٹر", hi: "वजन घटाने का कैलकुलेटर" },
  "calc.weightLoss.desc": { en: "Plan your weight loss journey", ur: "اپنے وزن کم کرنے کا منصوبہ بنائیں", hi: "अपने वजन घटाने की योजना बनाएं" },
  "calc.weight": { en: "Weight (kg)", ur: "وزن (کلوگرام)", hi: "वजन (किलो)" },
  "calc.height": { en: "Height (cm)", ur: "قد (سینٹی میٹر)", hi: "ऊंचाई (सेमी)" },
  "calc.age": { en: "Age", ur: "عمر", hi: "आयु" },
  "calc.gender": { en: "Gender", ur: "جنس", hi: "लिंग" },
  "calc.male": { en: "Male", ur: "مرد", hi: "पुरुष" },
  "calc.female": { en: "Female", ur: "عورت", hi: "महिला" },
  "calc.activity": { en: "Activity Level", ur: "سرگرمی کی سطح", hi: "गतिविधि स्तर" },
  "calc.sedentary": { en: "Sedentary", ur: "بیٹھے رہنا", hi: "बैठे रहना" },
  "calc.light": { en: "Light Exercise", ur: "ہلکی ورزش", hi: "हल्की कसरत" },
  "calc.moderate": { en: "Moderate Exercise", ur: "معتدل ورزش", hi: "मध्यम कसरत" },
  "calc.heavy": { en: "Heavy Exercise", ur: "سخت ورزش", hi: "भारी कसरत" },

  // Footer
  "footer.about": { en: "Your trusted source for health & nutrition information tailored for South Asian lifestyles.", ur: "جنوبی ایشیائی طرز زندگی کے لیے صحت اور غذائیت کی معلومات", hi: "दक्षिण एशियाई जीवनशैली के लिए स्वास्थ्य और पोषण की जानकारी" },
  "footer.disclaimer": { en: "Disclaimer: This website provides general health information. Consult a doctor before starting any diet plan.", ur: "دستبرداری: یہ ویب سائٹ عمومی صحت کی معلومات فراہم کرتی ہے۔ کوئی ڈائیٹ پلان شروع کرنے سے پہلے ڈاکٹر سے مشورہ کریں۔", hi: "अस्वीकरण: यह वेबसाइट सामान्य स्वास्थ्य जानकारी प्रदान करती है। कोई भी डाइट प्लान शुरू करने से पहले डॉक्टर से सलाह लें।" },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
  dir: "ltr",
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[key]?.[lang] || translations[key]?.en || key,
    [lang]
  );

  const dir = lang === "ur" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} lang={lang}>
        {children}
      </div>
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
