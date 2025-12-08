import { Calendar } from "lucide-react";

export const MonthlyFee = () => {
  return (
    <div className="gradient-border p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">MONTHLY FEE</h3>
            <p className="text-sm text-muted-foreground">Měsíční poplatek za službu</p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-2xl font-bold text-primary glow-text">
            $100
          </div>
          <div className="text-xs text-muted-foreground">/ měsíc</div>
        </div>
      </div>
    </div>
  );
};
