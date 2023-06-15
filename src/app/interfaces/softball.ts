export interface SoftballHitter {
  name: string;
  position: string;
  games: number;
  plateAppearances: number;
  runs: number;
  hits: number;
  doubles: number;
  triples: number;
  homeruns: number;
  rbis: number;
  walks: number;
}


export interface StatExplain {
  fullStat: string;
  statExplained: string;
}
