import { CalculatorCard } from "@/components/CalculatorCard";
import { EntryFeeTable } from "@/components/EntryFeeTable";
import { RiskLevels } from "@/components/RiskLevels";
import { MonthlyFee } from "@/components/MonthlyFee";
import { BackgroundGrid } from "@/components/BackgroundGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundGrid />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          {/* Logo placeholder */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 glow">
              <span className="font-display text-2xl font-bold text-primary">V</span>
            </div>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 glow-text text-primary">
            VANTAGE MARKETS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kalkulačka bonusů při vkladu na broker
          </p>
        </header>

        {/* Calculators */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <CalculatorCard
            title="PRVNÍ VKLAD"
            subtitle="Bonus až 150% + 25%"
            isFirstDeposit={true}
          />
          <CalculatorCard
            title="DALŠÍ VKLADY"
            subtitle="Bonus 25%"
            isFirstDeposit={false}
          />
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <EntryFeeTable />
          <div className="space-y-6">
            <RiskLevels />
            <MonthlyFee />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground mt-12 animate-fade-in">
          <p>© {new Date().getFullYear()} Vantage Markets Calculator</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
