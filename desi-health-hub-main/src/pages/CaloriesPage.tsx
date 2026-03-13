import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { foodDatabase, foodCategories } from "@/lib/foodData";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FoodCard from "@/components/FoodCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaloriesPage = () => {
  const { lang, t } = useI18n();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = foodDatabase.filter(food => {
    const matchesSearch = food.name[lang].toLowerCase().includes(search.toLowerCase()) ||
      food.name.en.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || food.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero py-12 text-center">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{t("nav.calories")}</h1>
          <p className="text-primary-foreground/80 mb-6">{t("section.popularFoods.sub")}</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("common.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ps-10 bg-background"
            />
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {foodCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/30"
              }`}
            >
              {cat.name[lang]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(food => <FoodCard key={food.id} food={food} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <span className="text-4xl block mb-3">🔍</span>
            <p>No foods found. Try a different search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CaloriesPage;
