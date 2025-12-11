import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
interface CalculatorCardProps {
  title: string;
  subtitle: string;
  isFirstDeposit?: boolean;
}
export const CalculatorCard = ({
  title,
  subtitle,
  isFirstDeposit = false
}: CalculatorCardProps) => {
  const [deposit, setDeposit] = useState<string>("");
  const {
    bonus,
    total
  } = useMemo(() => {
    const depositNum = parseFloat(deposit) || 0;
    if (depositNum <= 0) {
      return {
        bonus: 0,
        total: 0
      };
    }
    let calculatedBonus: number;
    if (isFirstDeposit) {
      // First deposit bonus calculation:
      // If deposit <= 1000: bonus = 150%
      // If deposit > 1000: bonus = 1500 + 25% of (deposit - 1000)
      // Maximum bonus: 50,000
      if (depositNum <= 1000) {
        calculatedBonus = depositNum * 1.5;
      } else {
        calculatedBonus = 1500 + (depositNum - 1000) * 0.25;
      }
      calculatedBonus = Math.min(50000, calculatedBonus);
    } else {
      // Additional deposit bonus: 25%
      calculatedBonus = depositNum * 0.25;
    }
    return {
      bonus: calculatedBonus,
      total: depositNum + calculatedBonus
    };
  }, [deposit, isFirstDeposit]);
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(num);
  };
  return <div className="gradient-border p-6 animate-fade-in">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-primary glow-text mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Tvůj vklad (USD)
          </label>
          <Input type="number" inputMode="numeric" pattern="[0-9]*" value={deposit} onChange={e => setDeposit(e.target.value)} className="h-14 text-lg font-semibold bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all" min="0" placeholder="Zadej částku..." />
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
            <span className="text-muted-foreground">Bonus od brokera:</span>
            <span className="font-display font-bold text-primary">
              +${formatNumber(bonus)}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10 border border-primary/30 glow">
            <span className="font-medium">Celkem na účtě budeš mít:</span>
            <span className="font-display text-xl font-bold text-primary glow-text">
              ${formatNumber(total)}
            </span>
          </div>
        </div>

        {/* Bonus info */}
        <div className="text-center text-xs text-muted-foreground">
          {isFirstDeposit ? <span>Maximální možný kreditní bonus z akce 150% + 25% je do celkového vkladu 50.000 USD!</span> : <span>Bonus: 25% z vkladu je do celkového vkladu 50.000 USD!</span>}
        </div>
      </div>
    </div>;
};