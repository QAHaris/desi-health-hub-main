import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Search, Calculator, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import { foodDatabase } from "@/lib/foodData";
import { dietPlans } from "@/lib/dietPlansData";
import { articles } from "@/lib/articlesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const { lang, t } = useI18n();

  const popularFoods = foodDatabase.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="gap-2 bg-background text-foreground hover:bg-background/90 font-semibold">
              <Link to="/calories"><Search className="h-4 w-4" />{t("hero.cta.calories")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/calculators"><Calculator className="h-4 w-4" />{t("hero.cta.calculator")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("section.popularFoods")}</h2>
            <p className="text-muted-foreground mt-1">{t("section.popularFoods.sub")}</p>
          </div>
          <Link to="/calories" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            {t("common.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularFoods.map(food => <FoodCard key={food.id} food={food} />)}
        </div>
      </section>

      {/* Calculators Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("section.calculators")}</h2>
            <p className="text-muted-foreground mt-1">{t("section.calculators.sub")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t("calc.bmi.title"), desc: t("calc.bmi.desc"), icon: "⚖️", color: "border-primary/30" },
              { title: t("calc.calorie.title"), desc: t("calc.calorie.desc"), icon: "🔥", color: "border-secondary/30" },
              { title: t("calc.weightLoss.title"), desc: t("calc.weightLoss.desc"), icon: "📉", color: "border-success/30" },
            ].map((calc) => (
              <Link
                key={calc.title}
                to="/calculators"
                className={`rounded-xl border-2 ${calc.color} bg-card p-6 text-center hover:shadow-lg transition-all group`}
              >
                <span className="text-5xl block mb-3">{calc.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{calc.title}</h3>
                <p className="text-sm text-muted-foreground">{calc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Plans */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("section.dietPlans")}</h2>
            <p className="text-muted-foreground mt-1">{t("section.dietPlans.sub")}</p>
          </div>
          <Link to="/diet-plans" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            {t("common.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dietPlans.slice(0, 3).map(plan => (
            <div key={plan.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{plan.image}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{plan.title[lang]}</h3>
                  <span className="text-xs text-muted-foreground">{plan.duration}</span>
                </div>
                {plan.isPremium && (
                  <span className="ms-auto text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{t("common.premium")}</span>
                )}
                {!plan.isPremium && (
                  <span className="ms-auto text-xs font-medium bg-success/10 text-success px-2 py-0.5 rounded-full">{t("common.free")}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{plan.description[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("section.articles")}</h2>
            <p className="text-muted-foreground mt-1">{t("section.articles.sub")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map(article => (
              <article key={article.id} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all group">
                <div className="bg-accent/50 p-8 text-center text-5xl">{article.image}</div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{article.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
