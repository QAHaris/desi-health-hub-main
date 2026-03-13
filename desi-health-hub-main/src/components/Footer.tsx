import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-muted/50 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🥗</span>
              <span className="text-xl font-bold text-primary">FitDesi</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">{t("footer.about")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">{t("nav.calories")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/calories" className="hover:text-foreground transition-colors">Calories in Roti</Link></li>
              <li><Link to="/calories" className="hover:text-foreground transition-colors">Calories in Biryani</Link></li>
              <li><Link to="/calories" className="hover:text-foreground transition-colors">Calories in Rice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">{t("nav.calculators")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/calculators" className="hover:text-foreground transition-colors">BMI Calculator</Link></li>
              <li><Link to="/calculators" className="hover:text-foreground transition-colors">Calorie Calculator</Link></li>
              <li><Link to="/calculators" className="hover:text-foreground transition-colors">Weight Loss Calculator</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">{t("footer.disclaimer")}</p>
          <p className="text-xs text-muted-foreground mt-2">© 2026 FitDesi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
