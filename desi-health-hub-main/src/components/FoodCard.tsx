import { useI18n } from "@/lib/i18n";
import { FoodItem } from "@/lib/foodData";

const FoodCard = ({ food }: { food: FoodItem }) => {
  const { lang, t } = useI18n();

  return (
    <div className="group rounded-xl border border-border bg-card p-5 hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{food.image}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{food.name[lang]}</h3>
          <p className="text-xs text-muted-foreground">{food.serving[lang]}</p>
        </div>
        <div className="text-end">
          <span className="text-2xl font-bold text-primary">{food.calories}</span>
          <p className="text-xs text-muted-foreground">{t("common.calories")}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: t("common.protein"), value: `${food.protein}g`, color: "bg-primary/10 text-primary" },
          { label: t("common.carbs"), value: `${food.carbs}g`, color: "bg-secondary/10 text-secondary" },
          { label: t("common.fat"), value: `${food.fat}g`, color: "bg-warning/10 text-warning" },
        ].map((item) => (
          <div key={item.label} className={`rounded-lg px-2 py-1.5 text-center ${item.color}`}>
            <p className="text-xs font-medium">{item.value}</p>
            <p className="text-[10px] opacity-70">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
