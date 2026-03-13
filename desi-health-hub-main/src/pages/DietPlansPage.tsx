import { useI18n } from "@/lib/i18n";
import { dietPlans } from "@/lib/dietPlansData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DietPlansPage = () => {
  const { lang, t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-gradient-hero py-12 text-center">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{t("nav.dietPlans")}</h1>
          <p className="text-primary-foreground/80">{t("section.dietPlans.sub")}</p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dietPlans.map(plan => (
            <div key={plan.id} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">{plan.image}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-foreground">{plan.title[lang]}</h2>
                    {plan.isPremium ? (
                      <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{t("common.premium")}</span>
                    ) : (
                      <span className="text-xs font-medium bg-success/10 text-success px-2 py-0.5 rounded-full">{t("common.free")}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{plan.description[lang]}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>⏱ {plan.duration}</span>
                    <span>📊 {plan.difficulty}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {plan.tags.map(tag => (
                      <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">#{tag}</span>
                    ))}
                  </div>
                  <Button size="sm" variant={plan.isPremium ? "secondary" : "default"} className="gap-1.5">
                    <Download className="h-3.5 w-3.5" />
                    {plan.isPremium ? t("common.premium") : t("common.download")}
                  </Button>
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

export default DietPlansPage;
