import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Droplets, Dumbbell, Heart, Scale, Target, TrendingDown, Apple } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIDietAdvisor from "@/components/AIDietAdvisor";

const calculatorCards = [
  { id: "bmi", icon: Scale, emoji: "⚖️", color: "from-primary/20 to-primary/5" },
  { id: "calorie", icon: Calculator, emoji: "🔥", color: "from-secondary/20 to-secondary/5" },
  { id: "weightloss", icon: TrendingDown, emoji: "📉", color: "from-success/20 to-success/5" },
  { id: "water", icon: Droplets, emoji: "💧", color: "from-info/20 to-info/5" },
  { id: "protein", icon: Dumbbell, emoji: "💪", color: "from-warning/20 to-warning/5" },
  { id: "bodyfat", icon: Heart, emoji: "❤️", color: "from-destructive/20 to-destructive/5" },
  { id: "idealweight", icon: Target, emoji: "🎯", color: "from-primary/20 to-primary/5" },
  { id: "macros", icon: Apple, emoji: "🍎", color: "from-success/20 to-success/5" },
];

const calcNames: Record<string, Record<string, string>> = {
  bmi: { en: "BMI Calculator", ur: "BMI کیلکولیٹر", hi: "BMI कैलकुलेटर" },
  calorie: { en: "Daily Calories", ur: "روزانہ کیلوریز", hi: "दैनिक कैलोरी" },
  weightloss: { en: "Weight Loss", ur: "وزن کم کرنا", hi: "वजन कम करना" },
  water: { en: "Water Intake", ur: "پانی کی مقدار", hi: "पानी की मात्रा" },
  protein: { en: "Protein Needs", ur: "پروٹین ضرورت", hi: "प्रोटीन जरूरत" },
  bodyfat: { en: "Body Fat %", ur: "جسمانی چربی", hi: "बॉडी फैट %" },
  idealweight: { en: "Ideal Weight", ur: "مثالی وزن", hi: "आदर्श वजन" },
  macros: { en: "Macro Split", ur: "میکرو تقسیم", hi: "मैक्रो स्प्लिट" },
};

const CalculatorsPage = () => {
  const { lang, t } = useI18n();
  const [activeCalc, setActiveCalc] = useState("bmi");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-4">
            <Calculator className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground/90">8 Free Health Tools</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-3">{t("nav.calculators")}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t("section.calculators.sub")}</p>
        </div>
      </section>

      {/* Calculator Grid Selector */}
      <section className="container -mt-8 relative z-10 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {calculatorCards.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCalc(c.id)}
              className={`rounded-xl p-4 text-center transition-all border-2 ${
                activeCalc === c.id
                  ? "border-primary bg-card shadow-lg scale-105"
                  : "border-transparent bg-card/80 hover:bg-card hover:shadow-md"
              }`}
            >
              <span className="text-2xl block mb-1">{c.emoji}</span>
              <span className="text-xs font-medium text-foreground leading-tight block">{calcNames[c.id][lang]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active Calculator */}
      <section className="container pb-12">
        <div className="max-w-2xl mx-auto">
          {activeCalc === "bmi" && <BMICalculator />}
          {activeCalc === "calorie" && <CalorieCalculator />}
          {activeCalc === "weightloss" && <WeightLossCalculator />}
          {activeCalc === "water" && <WaterIntakeCalculator />}
          {activeCalc === "protein" && <ProteinCalculator />}
          {activeCalc === "bodyfat" && <BodyFatCalculator />}
          {activeCalc === "idealweight" && <IdealWeightCalculator />}
          {activeCalc === "macros" && <MacroCalculator />}
        </div>
      </section>

      {/* AI Diet Advisor */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {lang === "ur" ? "🤖 AI ڈائیٹ ایڈوائزر" : lang === "hi" ? "🤖 AI डाइट एडवाइज़र" : "🤖 AI Diet Advisor"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {lang === "ur" ? "اپنے کھانے اور فٹنس کے سوالات پوچھیں" : lang === "hi" ? "अपने खाने और फिटनेस के सवाल पूछें" : "Get personalized diet advice for desi foods & lifestyle"}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <AIDietAdvisor />
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          {lang === "ur" ? "صحت کے ٹپس" : lang === "hi" ? "स्वास्थ्य टिप्स" : "Quick Health Tips"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { emoji: "💧", title: { en: "Stay Hydrated", ur: "پانی پئیں", hi: "पानी पिएं" }, desc: { en: "Drink 8-10 glasses of water daily. Add lemon for extra benefits.", ur: "روزانہ 8-10 گلاس پانی پئیں", hi: "रोज़ 8-10 गिलास पानी पिएं" } },
            { emoji: "🥗", title: { en: "Eat Veggies First", ur: "پہلے سبزی کھائیں", hi: "पहले सब्जी खाएं" }, desc: { en: "Start meals with salad to reduce overall calorie intake.", ur: "کھانے کی شروعات سلاد سے کریں", hi: "खाने की शुरुआत सलाद से करें" } },
            { emoji: "🚶", title: { en: "Walk After Meals", ur: "کھانے کے بعد چلیں", hi: "खाने के बाद चलें" }, desc: { en: "A 15-min walk after dinner helps digestion and blood sugar.", ur: "رات کے کھانے کے بعد 15 منٹ چلیں", hi: "रात के खाने के बाद 15 मिनट चलें" } },
            { emoji: "😴", title: { en: "Sleep 7-8 Hours", ur: "7-8 گھنٹے سوئیں", hi: "7-8 घंटे सोएं" }, desc: { en: "Poor sleep increases hunger hormones and weight gain.", ur: "کم نیند سے بھوک بڑھتی ہے اور وزن بڑھتا ہے", hi: "कम नींद से भूख बढ़ती है और वजन बढ़ता है" } },
          ].map((tip, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all">
              <span className="text-3xl block mb-2">{tip.emoji}</span>
              <h3 className="font-semibold text-foreground mb-1">{tip.title[lang]}</h3>
              <p className="text-sm text-muted-foreground">{tip.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ─── Calculators ───────────────────────────────────────────

function CalcWrapper({ emoji, title, desc, children }: { emoji: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <div className="text-center mb-8">
        <span className="text-5xl block mb-2">{emoji}</span>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
      {children}
    </div>
  );
}

function ResultBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl bg-gradient-to-br from-accent to-muted p-6 text-center border border-primary/10">
      {children}
    </div>
  );
}

function BMICalculator() {
  const { t, lang } = useI18n();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height) / 100;
    if (!w || !h) return;
    const bmi = w / (h * h);
    let category = "Normal", color = "text-success";
    if (bmi < 18.5) { category = "Underweight"; color = "text-info"; }
    else if (bmi < 25) { category = "Normal"; color = "text-success"; }
    else if (bmi < 30) { category = "Overweight"; color = "text-warning"; }
    else { category = "Obese"; color = "text-destructive"; }
    setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
  };

  return (
    <CalcWrapper emoji="⚖️" title={t("calc.bmi.title")} desc={t("calc.bmi.desc")}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">{t("calc.weight")}</label>
            <Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">{t("calc.height")}</label>
            <Input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" />
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-primary">{result.bmi}</p>
            <p className={`text-lg font-semibold mt-1 ${result.color}`}>{result.category}</p>
            <div className="mt-4 w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-info via-success via-warning to-destructive" style={{ width: `${Math.min(result.bmi / 40 * 100, 100)}%` }} />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>18.5</span><span>25</span><span>30</span><span>40</span>
            </div>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function CalorieCalculator() {
  const { t } = useI18n();
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [age, setAge] = useState(""); const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState(1.55); const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height), a = parseFloat(age);
    if (!w || !h || !a) return;
    const bmr = gender === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    setResult(Math.round(bmr * activity));
  };

  return (
    <CalcWrapper emoji="🔥" title={t("calc.calorie.title")} desc={t("calc.calorie.desc")}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.weight")}</label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" /></div>
          <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.height")}</label><Input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.age")}</label><Input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="25" /></div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">{t("calc.gender")}</label>
            <div className="flex gap-2">
              {(["male", "female"] as const).map(g => (
                <button key={g} onClick={() => setGender(g)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${gender === g ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border hover:border-primary/30"}`}>{t(`calc.${g}`)}</button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">{t("calc.activity")}</label>
          <div className="grid grid-cols-2 gap-2">
            {[{ val: 1.2, label: t("calc.sedentary"), icon: "🪑" }, { val: 1.375, label: t("calc.light"), icon: "🚶" }, { val: 1.55, label: t("calc.moderate"), icon: "🏃" }, { val: 1.725, label: t("calc.heavy"), icon: "🏋️" }].map(a => (
              <button key={a.val} onClick={() => setActivity(a.val)} className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-all flex items-center gap-2 ${activity === a.val ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border hover:border-primary/30"}`}>
                <span>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-primary">{result}</p>
            <p className="text-sm text-accent-foreground mt-1">calories/day</p>
            <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
              <div className="bg-card rounded-lg p-2 border border-border"><p className="font-bold text-success">{Math.round(result * 0.85)}</p><p className="text-muted-foreground">Fat Loss</p></div>
              <div className="bg-card rounded-lg p-2 border border-border"><p className="font-bold text-primary">{result}</p><p className="text-muted-foreground">Maintain</p></div>
              <div className="bg-card rounded-lg p-2 border border-border"><p className="font-bold text-secondary">{Math.round(result * 1.15)}</p><p className="text-muted-foreground">Gain</p></div>
            </div>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function WeightLossCalculator() {
  const { t, lang } = useI18n();
  const [current, setCurrent] = useState(""); const [target, setTarget] = useState("");
  const [result, setResult] = useState<{ weeks: number; dailyDeficit: number; kgToLose: number } | null>(null);

  const calculate = () => {
    const c = parseFloat(current), tg = parseFloat(target);
    if (!c || !tg || tg >= c) return;
    const kgToLose = c - tg;
    const weeks = Math.ceil(kgToLose / 0.5);
    const dailyDeficit = Math.round((kgToLose * 7700) / (weeks * 7));
    setResult({ weeks, dailyDeficit, kgToLose });
  };

  return (
    <CalcWrapper emoji="📉" title={t("calc.weightLoss.title")} desc={t("calc.weightLoss.desc")}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm font-medium text-foreground mb-1 block">Current {t("calc.weight")}</label><Input type="number" value={current} onChange={e => setCurrent(e.target.value)} placeholder="85" /></div>
          <div><label className="text-sm font-medium text-foreground mb-1 block">Target {t("calc.weight")}</label><Input type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="70" /></div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-primary">{result.weeks} {lang === "ur" ? "ہفتے" : lang === "hi" ? "हफ्ते" : "weeks"}</p>
            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              <div className="bg-card rounded-lg p-3 border border-border"><p className="text-muted-foreground">Total</p><p className="font-bold text-foreground">{result.kgToLose} kg</p></div>
              <div className="bg-card rounded-lg p-3 border border-border"><p className="text-muted-foreground">Daily Deficit</p><p className="font-bold text-foreground">{result.dailyDeficit} cal</p></div>
            </div>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function WaterIntakeCalculator() {
  const { t, lang } = useI18n();
  const [weight, setWeight] = useState(""); const [exercise, setExercise] = useState(30);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    const base = w * 0.033;
    const extra = (exercise / 30) * 0.35;
    setResult(Math.round((base + extra) * 10) / 10);
  };

  return (
    <CalcWrapper emoji="💧" title={lang === "ur" ? "پانی کی مقدار کیلکولیٹر" : lang === "hi" ? "पानी की मात्रा कैलकुलेटर" : "Water Intake Calculator"} desc={lang === "ur" ? "جانیں آپ کو روزانہ کتنا پانی پینا چاہیے" : lang === "hi" ? "जानें आपको रोज़ कितना पानी पीना चाहिए" : "Find out how much water you need daily"}>
      <div className="space-y-4">
        <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.weight")}</label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" /></div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "ورزش (منٹ/دن)" : lang === "hi" ? "व्यायाम (मिनट/दिन)" : "Exercise (min/day)"}</label>
          <div className="flex gap-2">
            {[0, 30, 60, 90].map(m => (
              <button key={m} onClick={() => setExercise(m)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${exercise === m ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>{m} min</button>
            ))}
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-info">{result} L</p>
            <p className="text-sm text-accent-foreground mt-1">≈ {Math.round(result * 4)} {lang === "ur" ? "گلاس" : lang === "hi" ? "गिलास" : "glasses"}/day</p>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function ProteinCalculator() {
  const { t, lang } = useI18n();
  const [weight, setWeight] = useState(""); const [goal, setGoal] = useState<"loss" | "maintain" | "gain">("maintain");
  const [result, setResult] = useState<{ grams: number; foods: string[] } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    const multiplier = goal === "loss" ? 1.6 : goal === "maintain" ? 1.2 : 2.0;
    const grams = Math.round(w * multiplier);
    const foods = lang === "ur" 
      ? [`${Math.round(grams / 30)} انڈے`, `${Math.round(grams / 25)} سرونگ چکن`, `${Math.round(grams / 8)} پیالے دال`]
      : lang === "hi" 
        ? [`${Math.round(grams / 30)} अंडे`, `${Math.round(grams / 25)} सर्विंग चिकन`, `${Math.round(grams / 8)} कटोरी दाल`]
        : [`${Math.round(grams / 30)} eggs`, `${Math.round(grams / 25)} servings chicken`, `${Math.round(grams / 8)} bowls daal`];
    setResult({ grams, foods });
  };

  return (
    <CalcWrapper emoji="💪" title={lang === "ur" ? "پروٹین کیلکولیٹر" : lang === "hi" ? "प्रोटीन कैलकुलेटर" : "Protein Calculator"} desc={lang === "ur" ? "اپنی روزانہ پروٹین ضرورت جانیں" : lang === "hi" ? "अपनी दैनिक प्रोटीन जरूरत जानें" : "Calculate your daily protein needs"}>
      <div className="space-y-4">
        <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.weight")}</label><Input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" /></div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "مقصد" : lang === "hi" ? "लक्ष्य" : "Goal"}</label>
          <div className="flex gap-2">
            {([{ val: "loss", label: { en: "Fat Loss", ur: "چربی کم", hi: "फैट लॉस" }, icon: "📉" }, { val: "maintain", label: { en: "Maintain", ur: "برقرار", hi: "बनाए रखें" }, icon: "⚖️" }, { val: "gain", label: { en: "Muscle Gain", ur: "مسلز بنائیں", hi: "मसल गेन" }, icon: "💪" }] as const).map(g => (
              <button key={g.val} onClick={() => setGoal(g.val)} className={`flex-1 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${goal === g.val ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>{g.icon} {g.label[lang]}</button>
            ))}
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-warning">{result.grams}g</p>
            <p className="text-sm text-accent-foreground mt-1">{lang === "ur" ? "روزانہ پروٹین" : lang === "hi" ? "दैनिक प्रोटीन" : "protein/day"}</p>
            <div className="mt-4 text-start space-y-2">
              <p className="text-xs font-medium text-muted-foreground">{lang === "ur" ? "یہ برابر ہے:" : lang === "hi" ? "यह बराबर है:" : "Equivalent to:"}</p>
              {result.foods.map((f, i) => <p key={i} className="text-sm text-foreground">• {f}</p>)}
            </div>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function BodyFatCalculator() {
  const { t, lang } = useI18n();
  const [waist, setWaist] = useState(""); const [neck, setNeck] = useState("");
  const [height, setHeight] = useState(""); const [gender, setGender] = useState<"male" | "female">("male");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{ bf: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), n = parseFloat(neck), h = parseFloat(height), hp = parseFloat(hip);
    if (!w || !n || !h) return;
    let bf: number;
    if (gender === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      if (!hp) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    bf = Math.round(bf * 10) / 10;
    let category = gender === "male"
      ? (bf < 14 ? "Athletic" : bf < 18 ? "Fit" : bf < 25 ? "Average" : "Overweight")
      : (bf < 21 ? "Athletic" : bf < 25 ? "Fit" : bf < 32 ? "Average" : "Overweight");
    setResult({ bf, category });
  };

  return (
    <CalcWrapper emoji="❤️" title={lang === "ur" ? "جسمانی چربی کیلکولیٹر" : lang === "hi" ? "बॉडी फैट कैलकुलेटर" : "Body Fat Calculator"} desc={lang === "ur" ? "اپنے جسم کی چربی کا فیصد جانیں" : lang === "hi" ? "अपने शरीर की चर्बी का प्रतिशत जानें" : "Estimate your body fat percentage (US Navy method)"}>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">{t("calc.gender")}</label>
          <div className="flex gap-2">
            {(["male", "female"] as const).map(g => (
              <button key={g} onClick={() => setGender(g)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${gender === g ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>{t(`calc.${g}`)}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.height")}</label><Input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" /></div>
          <div><label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "کمر (سینٹی میٹر)" : lang === "hi" ? "कमर (सेमी)" : "Waist (cm)"}</label><Input type="number" value={waist} onChange={e => setWaist(e.target.value)} placeholder="85" /></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "گردن (سینٹی میٹر)" : lang === "hi" ? "गर्दन (सेमी)" : "Neck (cm)"}</label><Input type="number" value={neck} onChange={e => setNeck(e.target.value)} placeholder="38" /></div>
          {gender === "female" && <div><label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "کولہے (سینٹی میٹر)" : lang === "hi" ? "कूल्हे (सेमी)" : "Hip (cm)"}</label><Input type="number" value={hip} onChange={e => setHip(e.target.value)} placeholder="95" /></div>}
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-destructive">{result.bf}%</p>
            <p className="text-lg font-semibold text-accent-foreground mt-1">{result.category}</p>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function IdealWeightCalculator() {
  const { t, lang } = useI18n();
  const [height, setHeight] = useState(""); const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{ min: number; max: number; ideal: number } | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    if (!h) return;
    const hInches = h / 2.54;
    const idealRobinson = gender === "male" ? 52 + 1.9 * (hInches - 60) : 49 + 1.7 * (hInches - 60);
    const min = Math.round(idealRobinson * 0.9);
    const max = Math.round(idealRobinson * 1.1);
    setResult({ min, max, ideal: Math.round(idealRobinson) });
  };

  return (
    <CalcWrapper emoji="🎯" title={lang === "ur" ? "مثالی وزن کیلکولیٹر" : lang === "hi" ? "आदर्श वजन कैलकुलेटर" : "Ideal Weight Calculator"} desc={lang === "ur" ? "اپنا مثالی وزن جانیں" : lang === "hi" ? "अपना आदर्श वजन जानें" : "Find your ideal weight range"}>
      <div className="space-y-4">
        <div><label className="text-sm font-medium text-foreground mb-1 block">{t("calc.height")}</label><Input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" /></div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">{t("calc.gender")}</label>
          <div className="flex gap-2">
            {(["male", "female"] as const).map(g => (
              <button key={g} onClick={() => setGender(g)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${gender === g ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>{t(`calc.${g}`)}</button>
            ))}
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-1">{t("common.result")}</p>
            <p className="text-4xl font-extrabold text-primary">{result.ideal} kg</p>
            <p className="text-sm text-accent-foreground mt-1">{lang === "ur" ? "صحت مند رینج" : lang === "hi" ? "स्वस्थ सीमा" : "Healthy range"}: {result.min} – {result.max} kg</p>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

function MacroCalculator() {
  const { t, lang } = useI18n();
  const [calories, setCalories] = useState(""); const [goal, setGoal] = useState<"loss" | "maintain" | "gain">("maintain");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);

  const calculate = () => {
    const cal = parseFloat(calories);
    if (!cal) return;
    const splits = { loss: { p: 0.4, c: 0.3, f: 0.3 }, maintain: { p: 0.3, c: 0.4, f: 0.3 }, gain: { p: 0.3, c: 0.5, f: 0.2 } };
    const s = splits[goal];
    setResult({ protein: Math.round(cal * s.p / 4), carbs: Math.round(cal * s.c / 4), fat: Math.round(cal * s.f / 9) });
  };

  return (
    <CalcWrapper emoji="🍎" title={lang === "ur" ? "میکرو سپلٹ کیلکولیٹر" : lang === "hi" ? "मैक्रो स्प्लिट कैलकुलेटर" : "Macro Split Calculator"} desc={lang === "ur" ? "اپنے روزانہ میکروز تقسیم کریں" : lang === "hi" ? "अपने दैनिक मैक्रोज़ विभाजित करें" : "Split your daily macros for optimal results"}>
      <div className="space-y-4">
        <div><label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "روزانہ کیلوریز" : lang === "hi" ? "दैनिक कैलोरी" : "Daily Calories"}</label><Input type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="2000" /></div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">{lang === "ur" ? "مقصد" : lang === "hi" ? "लक्ष्य" : "Goal"}</label>
          <div className="flex gap-2">
            {([{ val: "loss", label: { en: "Fat Loss", ur: "چربی کم", hi: "फैट लॉस" } }, { val: "maintain", label: { en: "Maintain", ur: "برقرار", hi: "बनाए रखें" } }, { val: "gain", label: { en: "Muscle Gain", ur: "مسلز", hi: "मसल गेन" } }] as const).map(g => (
              <button key={g.val} onClick={() => setGoal(g.val)} className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${goal === g.val ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/30"}`}>{g.label[lang]}</button>
            ))}
          </div>
        </div>
        <Button onClick={calculate} className="w-full" size="lg">{t("common.calculate")}</Button>
        {result && (
          <ResultBox>
            <p className="text-sm text-muted-foreground mb-3">{t("common.result")}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-card rounded-xl p-4 border border-border"><p className="text-2xl font-bold text-warning">{result.protein}g</p><p className="text-xs text-muted-foreground mt-1">{t("common.protein")}</p></div>
              <div className="bg-card rounded-xl p-4 border border-border"><p className="text-2xl font-bold text-primary">{result.carbs}g</p><p className="text-xs text-muted-foreground mt-1">{t("common.carbs")}</p></div>
              <div className="bg-card rounded-xl p-4 border border-border"><p className="text-2xl font-bold text-secondary">{result.fat}g</p><p className="text-xs text-muted-foreground mt-1">{t("common.fat")}</p></div>
            </div>
          </ResultBox>
        )}
      </div>
    </CalcWrapper>
  );
}

export default CalculatorsPage;
