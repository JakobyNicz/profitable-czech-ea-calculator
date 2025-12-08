const entryFeeData = [
  { deposit: 1000, percentage: 35, fee: 350 },
  { deposit: 2000, percentage: 30, fee: 600 },
  { deposit: 3000, percentage: 26, fee: 800 },
  { deposit: 5000, percentage: 21, fee: 1050 },
  { deposit: 10000, percentage: 16, fee: 1600 },
  { deposit: 15000, percentage: 13, fee: 2000 },
  { deposit: 20000, percentage: 10, fee: 2000 },
  { deposit: 30000, percentage: 8, fee: 2400 },
  { deposit: 50000, percentage: 6, fee: 3000 },
];

export const EntryFeeTable = () => {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="gradient-border p-6 animate-fade-in">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-primary glow-text mb-1">
            ENTRY FEE
          </h3>
          <p className="text-sm text-muted-foreground">Vstupní poplatek dle výše vkladu</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="py-3 px-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Vklad
                </th>
                <th className="py-3 px-2 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  %
                </th>
                <th className="py-3 px-2 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Poplatek
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {entryFeeData.map((row, index) => (
                <tr 
                  key={row.deposit}
                  className="hover:bg-secondary/30 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="py-3 px-2 text-left font-medium">
                    ${formatCurrency(row.deposit)}
                  </td>
                  <td className="py-3 px-2 text-center text-primary font-semibold">
                    {row.percentage}%
                  </td>
                  <td className="py-3 px-2 text-right font-display font-bold text-primary">
                    ${formatCurrency(row.fee)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
