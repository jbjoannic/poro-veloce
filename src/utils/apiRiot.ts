export interface SummonerInterface {
  id: string;
  accountId: string;
  puuid: string;
  name: number;
  profileIconId: number;
  summonerLevel: number;
}

export interface ChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  summonerId: string;
}

export interface Match {
  metadata: MatchMetadata;
  info: MatchInfo;
}

export interface MatchMetadata {
  dataVersion: string;
  matchId: string;
  participants: Array<string>;
}

export interface MatchInfo {
  gameCreation: number;
  gameDuration: number;
  gameEndTimeStamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: Array<MatchInfoParticipant>;
  platformId: string;
  queueId: number;
  teams: Array<MatchInfoTeam>;
  tournamentCode: string;
}

export interface MatchInfoParticipant {
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champExperience: number;
  champLevel: number;
  championId: number;
  championName: string;
  championTransform: number;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  individualPosition: number;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusTakedowns: number;
  nexusLost: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  participantId: number;
  pentaKills: number;
  perks: MatchInfoParticipantPerk;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLebel: number;
  summonerName: string;
  teamEarlySurrender: boolean;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  timePlayed: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}
export interface MatchInfoParticipantPerk {
  statPerks: MatchInfoParticipantPerkStats;
  styles: Array<MatchInfoParticipantPerkStyle>;
}

export interface MatchInfoParticipantPerkStats {
  defense: number;
  flex: number;
  offense: number;
}

export interface MatchInfoParticipantPerkStyle {
  description: string;
  selections: Array<MatchInfoParticipantPerkStyleSelection>;
  style: number;
}

export interface MatchInfoParticipantPerkStyleSelection {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface MatchInfoTeam {
  bans: Array<MatchInfoTeamBan>;
  objectives: MatchInfoTeamObjectives;
  teamId: number;
  win: boolean;
}

export interface MatchInfoTeamBan {
  championId: number;
  pickTurn: number;
}

export interface MatchInfoTeamObjectives {
  baron: MatchInfoTeamObjectivesObjective;
  champion: MatchInfoTeamObjectivesObjective;
  dragon: MatchInfoTeamObjectivesObjective;
  inhibitor: MatchInfoTeamObjectivesObjective;
  riftHerald: MatchInfoTeamObjectivesObjective;
  tower: MatchInfoTeamObjectivesObjective;
}

export interface MatchInfoTeamObjectivesObjective {
  first: boolean;
  kills: number;
}

export class ApiRiot {
  apiKey = "";
}

export class SummonerApi extends ApiRiot {
  async fetchSummonerByName(name: string): Promise<SummonerInterface> {
    let json = (await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${this.apiKey}`
    ).then((r) => r.json())) as SummonerInterface;
    return json;
  }
}

export class ChampionMasteryApi extends ApiRiot {
  async fetchAllChampionMasteryBySummonerId(
    summonerId: string
  ): Promise<Array<ChampionMastery>> {
    let json = (await fetch(
      `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${this.apiKey}`
    ).then((r) => r.json())) as Array<ChampionMastery>;
    return json;
  }
  async fetchTotalChampionMasteryScoreBySummonerId(
    summonerId: string
  ): Promise<number> {
    let json = (await fetch(
      `https://euw1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${summonerId}?api_key=${this.apiKey}`
    ).then((r) => r.json)) as number;
    return json;
  }
}

export enum Region {
  AMERICAS,
  ASIA,
  EUROPE,
  SEA,
}

export class MatchApi extends ApiRiot {
  /*https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/aaaaa/ids?startTime=1&endTime=2&queue=3&type=ranked&start=4&count=5&api_key=RGAPI-26cb5ad1-353d-46be-9dc1-41ca976e3f8d
    async fetchMatchIdsByPuuid(puuid: string):Promise<Array<String>> {
        créer l'interface
    }*/

  async fetchMatchByMatchId(matchId: string, region: Region): Promise<Match> {
    let stringRegion = region.toString().toLocaleLowerCase();
    let json = (await fetch(
      `https://${stringRegion}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${this.apiKey}`
    ).then((r) => r.json)) as Match;
    return json;
  }
}

export const apiRiot = new ApiRiot();
export const summonerApi = new SummonerApi();
