export interface FoodItem {
  id: string;
  slug: string;
  name: { en: string; ur: string; hi: string };
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving: { en: string; ur: string; hi: string };
  category: string;
  image: string;
}

export const foodDatabase: FoodItem[] = [
  { id: "1", slug: "calories-in-roti", name: { en: "Roti (Chapati)", ur: "روٹی (چپاتی)", hi: "रोटी (चपाती)" }, calories: 120, protein: 3, carbs: 22, fat: 1, serving: { en: "1 piece", ur: "1 عدد", hi: "1 पीस" }, category: "bread", image: "🫓" },
  { id: "2", slug: "calories-in-biryani", name: { en: "Chicken Biryani", ur: "چکن بریانی", hi: "चिकन बिरयानी" }, calories: 490, protein: 22, carbs: 55, fat: 18, serving: { en: "1 plate", ur: "1 پلیٹ", hi: "1 प्लेट" }, category: "rice", image: "🍚" },
  { id: "3", slug: "calories-in-paratha", name: { en: "Paratha", ur: "پراٹھا", hi: "पराठा" }, calories: 260, protein: 5, carbs: 30, fat: 13, serving: { en: "1 piece", ur: "1 عدد", hi: "1 पीस" }, category: "bread", image: "🫓" },
  { id: "4", slug: "calories-in-daal", name: { en: "Daal (Lentils)", ur: "دال", hi: "दाल" }, calories: 180, protein: 12, carbs: 28, fat: 2, serving: { en: "1 bowl", ur: "1 پیالہ", hi: "1 कटोरी" }, category: "curry", image: "🥘" },
  { id: "5", slug: "calories-in-nihari", name: { en: "Nihari", ur: "نہاری", hi: "निहारी" }, calories: 520, protein: 35, carbs: 15, fat: 38, serving: { en: "1 bowl", ur: "1 پیالہ", hi: "1 कटोरी" }, category: "curry", image: "🥣" },
  { id: "6", slug: "calories-in-samosa", name: { en: "Samosa", ur: "سموسہ", hi: "समोसा" }, calories: 252, protein: 5, carbs: 24, fat: 15, serving: { en: "1 piece", ur: "1 عدد", hi: "1 पीस" }, category: "snack", image: "🥟" },
  { id: "7", slug: "calories-in-chicken-karahi", name: { en: "Chicken Karahi", ur: "چکن کڑاہی", hi: "चिकन कड़ाही" }, calories: 350, protein: 28, carbs: 8, fat: 22, serving: { en: "1 serving", ur: "1 سرونگ", hi: "1 सर्विंग" }, category: "curry", image: "🍗" },
  { id: "8", slug: "calories-in-rice", name: { en: "White Rice", ur: "سفید چاول", hi: "सफेद चावल" }, calories: 200, protein: 4, carbs: 44, fat: 0.4, serving: { en: "1 cup", ur: "1 کپ", hi: "1 कप" }, category: "rice", image: "🍚" },
  { id: "9", slug: "calories-in-naan", name: { en: "Naan", ur: "نان", hi: "नान" }, calories: 262, protein: 8, carbs: 43, fat: 5, serving: { en: "1 piece", ur: "1 عدد", hi: "1 پیس" }, category: "bread", image: "🫓" },
  { id: "10", slug: "calories-in-halwa-puri", name: { en: "Halwa Puri", ur: "حلوہ پوری", hi: "हलवा पूरी" }, calories: 580, protein: 8, carbs: 72, fat: 28, serving: { en: "1 plate", ur: "1 پلیٹ", hi: "1 प्लेट" }, category: "bread", image: "🍽️" },
  { id: "11", slug: "calories-in-seekh-kebab", name: { en: "Seekh Kebab", ur: "سیخ کباب", hi: "सीख कबाब" }, calories: 150, protein: 18, carbs: 2, fat: 8, serving: { en: "1 piece", ur: "1 عدد", hi: "1 पीस" }, category: "meat", image: "🥩" },
  { id: "12", slug: "calories-in-lassi", name: { en: "Sweet Lassi", ur: "میٹھی لسّی", hi: "मीठी लस्सी" }, calories: 220, protein: 6, carbs: 35, fat: 6, serving: { en: "1 glass", ur: "1 گلاس", hi: "1 गिलास" }, category: "drink", image: "🥛" },
  { id: "13", slug: "calories-in-chai", name: { en: "Doodh Patti Chai", ur: "دودھ پتی چائے", hi: "दूध पत्ती चाय" }, calories: 120, protein: 3, carbs: 18, fat: 4, serving: { en: "1 cup", ur: "1 کپ", hi: "1 कप" }, category: "drink", image: "☕" },
  { id: "14", slug: "calories-in-butter-chicken", name: { en: "Butter Chicken", ur: "بٹر چکن", hi: "बटर चिकन" }, calories: 430, protein: 25, carbs: 12, fat: 30, serving: { en: "1 serving", ur: "1 سرونگ", hi: "1 सर्विंग" }, category: "curry", image: "🍛" },
  { id: "15", slug: "calories-in-gulab-jamun", name: { en: "Gulab Jamun", ur: "گلاب جامن", hi: "गुलाब जामुन" }, calories: 175, protein: 3, carbs: 28, fat: 6, serving: { en: "2 pieces", ur: "2 عدد", hi: "2 पीस" }, category: "sweet", image: "🍩" },
  { id: "16", slug: "calories-in-palak-paneer", name: { en: "Palak Paneer", ur: "پالک پنیر", hi: "पालक पनीर" }, calories: 290, protein: 14, carbs: 10, fat: 22, serving: { en: "1 bowl", ur: "1 پیالہ", hi: "1 कटोरी" }, category: "curry", image: "🥬" },
];

export const foodCategories = [
  { id: "all", name: { en: "All Foods", ur: "تمام کھانے", hi: "सभी खाने" } },
  { id: "bread", name: { en: "Breads", ur: "روٹیاں", hi: "रोटियाँ" } },
  { id: "rice", name: { en: "Rice Dishes", ur: "چاول", hi: "चावल" } },
  { id: "curry", name: { en: "Curries", ur: "سالن", hi: "करी" } },
  { id: "meat", name: { en: "Meat", ur: "گوشت", hi: "मांस" } },
  { id: "snack", name: { en: "Snacks", ur: "ناشتے", hi: "नाश्ता" } },
  { id: "drink", name: { en: "Drinks", ur: "مشروبات", hi: "पेय" } },
  { id: "sweet", name: { en: "Sweets", ur: "مٹھائی", hi: "मिठाई" } },
];
