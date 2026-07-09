import { HistoricalAPY } from '../types';

export const mockHistoricalAPY: HistoricalAPY[] = [
  { date: 'Jan', Soroswap: 16.2, 'Phoenix Hub': 19.5, 'Stellar Native Pools': 10.8, Aquarius: 24.3 },
  { date: 'Feb', Soroswap: 17.1, 'Phoenix Hub': 21.2, 'Stellar Native Pools': 11.5, Aquarius: 26.1 },
  { date: 'Mar', Soroswap: 18.5, 'Phoenix Hub': 22.8, 'Stellar Native Pools': 12.4, Aquarius: 28.5 },
  { date: 'Apr', Soroswap: 19.2, 'Phoenix Hub': 23.5, 'Stellar Native Pools': 13.2, Aquarius: 29.8 },
  { date: 'May', Soroswap: 18.8, 'Phoenix Hub': 22.1, 'Stellar Native Pools': 12.8, Aquarius: 27.5 },
  { date: 'Jun', Soroswap: 17.9, 'Phoenix Hub': 20.8, 'Stellar Native Pools': 12.1, Aquarius: 26.2 },
];

export function getHistoricalAPY(protocol?: string, startDate?: string, endDate?: string): HistoricalAPY[] {
  let data = mockHistoricalAPY;

  if (protocol) {
    data = data.map((entry) => ({
      date: entry.date,
      [protocol]: entry[protocol],
    })) as HistoricalAPY[];
  }

  if (startDate || endDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    data = data.filter((entry) => {
      const monthIndex = months.indexOf(entry.date);
      if (monthIndex === -1) return true;
      if (startDate) {
        const startIndex = months.indexOf(startDate);
        if (startIndex !== -1 && monthIndex < startIndex) return false;
      }
      if (endDate) {
        const endIndex = months.indexOf(endDate);
        if (endIndex !== -1 && monthIndex > endIndex) return false;
      }
      return true;
    });
  }

  return data;
}
