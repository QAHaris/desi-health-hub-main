import { useI18n } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const supplements = [
  {
    name: { en: "Whey Protein", ur: "وے پروٹین", hi: "व्हे प्रोटीन" },
    desc: { en: "Essential for muscle recovery and weight loss. Take 1 scoop post-workout.", ur: "پٹھوں کی ریکوری اور وزن کم کرنے کے لیے ضروری", hi: "मांसपेशियों की रिकवरी और वजन कम करने के लिए जरूरी" },
    image: "🥛",
    amazonIn: "https://www.amazon.in/s?k=whey+protein",
    daraz: "https://www.daraz.pk/catalog/?q=whey+protein",
  },
  {
    name: { en: "Multivitamins", ur: "ملٹی وٹامنز", hi: "मल्टीविटामिन" },
    desc: { en: "Fill nutritional gaps in your diet. Take 1 tablet daily with food.", ur: "اپنی ڈائیٹ میں غذائی کمی پوری کریں", hi: "अपनी डाइट में पोषण की कमी पूरी करें" },
    image: "💊",
    amazonIn: "https://www.amazon.in/s?k=multivitamin",
    daraz: "https://www.daraz.pk/catalog/?q=multivitamin",
  },
  {
    name: { en: "Fish Oil (Omega 3)", ur: "فش آئل (اومیگا 3)", hi: "फिश ऑयल (ओमेगा 3)" },
    desc: { en: "Supports heart health and reduces inflammation. Take 2 capsules daily.", ur: "دل کی صحت اور سوزش کم کرنے کے لیے", hi: "दिल की सेहत और सूजन कम करने के लिए" },
    image: "🐟",
    amazonIn: "https://www.amazon.in/s?k=fish+oil+omega+3",
    daraz: "https://www.daraz.pk/catalog/?q=fish+oil",
  },
  {
    name: { en: "Green Tea Extract", ur: "گرین ٹی ایکسٹریکٹ", hi: "ग्रीन टी एक्सट्रैक्ट" },
    desc: { en: "Boosts metabolism and aids fat burning. Take 1 capsule before workout.", ur: "میٹابولزم بڑھائیں اور چربی جلائیں", hi: "मेटाबॉलिज्म बढ़ाएं और चर्बी जलाएं" },
    image: "🍵",
    amazonIn: "https://www.amazon.in/s?k=green+tea+extract",
    daraz: "https://www.daraz.pk/catalog/?q=green+tea+extract",
  },
  {
    name: { en: "Creatine Monohydrate", ur: "کریٹین", hi: "क्रिएटिन" },
    desc: { en: "Increases strength and muscle performance. Take 5g daily.", ur: "طاقت اور عضلات کی کارکردگی بڑھائیں", hi: "ताकत और मांसपेशियों की कार्यक्षमता बढ़ाएं" },
    image: "💪",
    amazonIn: "https://www.amazon.in/s?k=creatine+monohydrate",
    daraz: "https://www.daraz.pk/catalog/?q=creatine",
  },
];

const SupplementsPage = () => {
  const { lang, t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-hero py-12 text-center">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{t("nav.supplements")}</h1>
          <p className="text-primary-foreground/80">Top recommended supplements for your fitness journey</p>
        </div>
      </section>

      <div className="container py-12">
        <div className="bg-accent/50 rounded-xl p-4 mb-8 text-sm text-accent-foreground text-center">
          ⚠️ Disclaimer: Consult your doctor before taking any supplements. Links below are affiliate links.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supplements.map(supp => (
            <div key={supp.name.en} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">{supp.image}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-foreground mb-1">{supp.name[lang]}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{supp.desc[lang]}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                      <a href={supp.amazonIn} target="_blank" rel="noopener noreferrer">
                        🇮🇳 Amazon India <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                      <a href={supp.daraz} target="_blank" rel="noopener noreferrer">
                        🇵🇰 Daraz <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupplementsPage;
