import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {SoftballHitter, StatExplain} from "../interfaces/softball";
import {formatDate} from "@angular/common";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StatExplanationComponent} from "../dialogs/stat-explanation/stat-explanation.component";

@Component({
  selector: 'app-softball',
  templateUrl: './softball.component.html',
  styleUrls: ['./softball.component.scss']
})
export class SoftballComponent implements AfterViewInit {
  dataSource: MatTableDataSource<SoftballHitter>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  softballHitterData: SoftballHitter[] = [
    {
      name: 'Zach Batio',
      position: 'SS',
      games: 1,
      plateAppearances: 1,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 1,
    },
    {
      name: 'Alexander Bae',
      position: '',
      games: 0,
      plateAppearances: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Tessa Berger',
      position: 'RF',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Alexander Caines',
      position: '',
      games: 0,
      plateAppearances: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Brandon Deleon',
      position: '3B',
      games: 1,
      plateAppearances: 1,
      runs: 1,
      hits: 1,
      doubles: 1,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Audrey Dehler',
      position: 'RF',
      games: 1,
      plateAppearances: 1,
      runs: 0,
      hits: 1,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 1,
      walks: 0,
    },
    {
      name: 'Declan Donohue',
      position: 'LF',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Ian Imhof',
      position: '3B',
      games: 1,
      plateAppearances: 1,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Justin Imhof',
      position: 'CF',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 1,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Kyra Kalliope',
      position: 'C',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Juliana Livieri',
      position: '2B',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 1,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 1,
      walks: 0,
    },
    {
      name: 'Kevin Patto',
      position: '',
      games: 0,
      plateAppearances: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Alyssa Pierce',
      position: '',
      games: 0,
      plateAppearances: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Zaq Perdomo',
      position: '1B',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Kenny Puleikis',
      position: 'SS',
      games: 1,
      plateAppearances: 2,
      runs: 1,
      hits: 1,
      doubles: 0,
      triples: 1,
      homeruns: 0,
      rbis: 1,
      walks: 0,
    },
    {
      name: 'Jan Rara',
      position: 'CF',
      games: 1,
      plateAppearances: 2,
      runs: 1,
      hits: 2,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Tony Rayas',
      position: '',
      games: 0,
      plateAppearances: 0,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Jonah Toch',
      position: 'P',
      games: 1,
      plateAppearances: 2,
      runs: 0,
      hits: 2,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
    {
      name: 'Jessica Uy',
      position: 'LF',
      games: 1,
      plateAppearances: 1,
      runs: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      rbis: 0,
      walks: 0,
    },
  ]

  // Your pitching stats: 5 IP with 5 walks and 2 Strikeouts

  // headers = [
  //   {label: 'Item ID', key: 'manufacturerItemId'},
  //   {label: 'Quantity', key: 'quantity'},
  //   {label: 'Purchase Order', key: 'purchaseOrder'},
  // ];
  displayedColumns: string[] = ['name', 'games', 'plateAppearances', 'runs', 'hits', 'doubles', 'triples', 'homeruns', 'rbis', 'walks', 'battingAverage',
    'onBasePercentage', 'sluggingPercentage', 'onBasePlusSlugging'];

  baseballRef = new Map<string, StatExplain>([
    ["G", {
      fullStat: "Games",
      statExplained: "Show up to the game and you get a game stat. You don't even have to play."
    },
    ],
    ["PA", {
      fullStat: "Plate Appearances",
      statExplained: "When you bat and there is an outcome."
    },
    ],
    ["R", {
      fullStat: "Runs",
      statExplained: "Cross home and score a run as a base runner."
    },
    ],
    ["H", {
      fullStat: "Hits",
      statExplained: "Hit the ball and reach at least 1st base without it being an error or a fielder's choice."
    },
    ], ["2B", {
      fullStat: "Double",
      statExplained: "Hit the ball and reach 2nd base without it being due to a throwing error by the defense."
    },
    ], ["3B", {
      fullStat: "Triple",
      statExplained: "Hit the ball and reach 3rd base without it being due to a throwing error by the defense."
    },
    ], ["HR", {
      fullStat: "Homerun",
      statExplained: "Hit the ball and go around all of the bases without it being due to a throwing error by the defense."
    },
    ], ["RBI", {
      fullStat: "Runs Batted In",
      statExplained: "Hit the ball and someone scores because of it and not due to a throwing error by the defense."
    },
    ], ["BB", {
      fullStat: "Base on Balls",
      statExplained: "Take 4 balls as a hitter and get a free 1st base."
    },
    ], ["AVG", {
      fullStat: "Batting Average",
      statExplained: "The number of hits you have divided by at bats. (Walks don't contribute to stat)."
    },
    ], ["OBP", {
      fullStat: "On Base Percentage",
      statExplained: "The number of times you get on base divided by at bats. So hit or get walked and have your plate appearance end without an out."
    },
    ], ["SLG", {
      fullStat: "Slugging Percentage",
      statExplained: "Of your hits, how many of them are multi base hits? The formula is (1B + 2Bx2 + 3Bx3 + HRx4)/AB."
    },
    ],
    ["OPS", {
      fullStat: "On Base Percentage + Slugging Percentage",
      statExplained: "The best stat. It tells you not only how often a player gets on base but how often they get big hits. The best stat."
    },
    ],
  ])

  constructor(
    public dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource<SoftballHitter>(this.softballHitterData);
  }

  openStatDefinition() {
    // this.dialog.open(TrophyDialogComponent);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<SoftballHitter>(this.softballHitterData);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  getCurrDate() {
    return formatDate(new Date(), 'MM-dd-yy', 'en');
  }

  calcAvg(plateApp: number, walks: number, hits: number): number {
    let AVG = hits / (plateApp - walks);
    if (isNaN(AVG)) {
      AVG = 0.000;
    }
    return AVG;
  }


  calcOBP(hits: number, walks: number, plateAppearances: number) {
    let OBP = (hits + walks) / (plateAppearances)
    if (isNaN(OBP)) {
      OBP = 0.000;
    }
    return OBP;
  }

  calcSlugging(hits: number, doubles: number, triples: number, homeruns: number, plateAppearances: number, walks: number) {
    const singles = hits - doubles - triples - homeruns;
    let slugging = singles + (doubles * 2) + (triples * 3) + (homeruns * 4) / (plateAppearances - walks);
    if (isNaN(slugging)) {
      slugging = 0.000;
    }
    return slugging;
  }

  calcOPS(hits: number, doubles: number, triples: number, homeruns: number, plateAppearances: number, walks: number) {
    const OBP = this.calcOBP(hits, walks, plateAppearances);
    const slugging = this.calcSlugging(hits, doubles, triples, homeruns, plateAppearances, walks)
    let OPS = OBP + slugging;
    if (isNaN(OPS)) {
      OPS = 0.000;
    }
    return OPS;
  }

  openStatExplanation(stat: string) {

    const fullStat = this.baseballRef.get(stat)?.fullStat;
    const statExplained = this.baseballRef.get(stat)?.statExplained;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: stat,
      fullName: fullStat,
      description: statExplained
    }

    this.dialog.open(StatExplanationComponent, dialogConfig);
  }


}
