import { TrendingUp } from "lucide-react";

const riskData = [
  { level: "x1", returns: "8-10%", description: "Konzervativní risk" },
  { level: "x2", returns: "16-20%", description: "Dynamický risk" },
];

export const RiskLevels = () => {
  return (
    <div className="gradient-border p-6 animate-fade-in">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-primary glow-text mb-1">
            RISK ÚROVNĚ
          </h3>
          <p className="text-sm text-muted-foreground">Očekávané měsíční výnosy</p>
        </div>

        <div className="space-y-3">
          {riskData.map((risk, index) => (
            <div 
              key={risk.level}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all border border-border/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg">{risk.level}</div>
                  <div className="text-xs text-muted-foreground">{risk.description}</div>
                </div>
              </div>
              <div className="font-display text-xl font-bold text-primary glow-text">
                {risk.returns}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
