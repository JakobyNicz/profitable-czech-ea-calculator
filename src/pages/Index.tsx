import { CalculatorCard } from "@/components/CalculatorCard";
import { EntryFeeTable } from "@/components/EntryFeeTable";
import { RiskLevels } from "@/components/RiskLevels";
import { MonthlyFee } from "@/components/MonthlyFee";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import logo from "@/assets/logo.jpeg";
const Index = () => {
  return <div className="min-h-screen bg-background relative">
      <BackgroundGrid />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl glow object-cover" />
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 glow-text text-primary">
            Profitable Czech EA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kalkulačka bonusů při vkladech  
          </p>
        </header>

        {/* Calculators */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <CalculatorCard title="PRVNÍ VKLAD" subtitle="Bonus až 150% + 25%" isFirstDeposit={true} />
          <CalculatorCard title="DALŠÍ VKLADY" subtitle="Bonus 25%" isFirstDeposit={false} />
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <EntryFeeTable />
          <div className="flex flex-col-reverse md:flex-col gap-6">
            <RiskLevels />
            <MonthlyFee />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground mt-12 animate-fade-in">
          <p>© {new Date().getFullYear()} Profitable Czech EA - Calculator</p>
        </footer>
      </div>
    </div>;
};
export default Index;