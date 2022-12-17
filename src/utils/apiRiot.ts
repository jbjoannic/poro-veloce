import { DotToken } from "typescript"

export interface SummonerInterface {
    id:string
    accountId:string
    puuid:string
    name:number
    profileIconId:number
    summonerLevel: number
}

export interface ChampionMastery {
    championId: number
    championLevel: number
    championPoints: number
    lastPlayTime: number
    championPointsSinceLastLevel: number
    championPointsUntilNextLevel: number
    chestGranted: boolean
    tokensEarned: number
    summonerId: string
}

export interface MatchInfoParticipant {
    assist: number
    baronKills: number
    bountyLevel: number
    champExperience: number
    champLevel: number
    championId: number
    championName: string
    championTransform: number
    consumablesPurchased: number
    damageDealtToBuildings: number
    damageDealtToObjectives: number
    damageDealtToTurrets: number
    damageSelfMitigated: number
    deaths: number
    detectorWardsPlaced: number
    doubleKills: number
    dragonKills: number
    firstBloodAssist: boolean
    firstBloodKill: boolean
    firstTowerAssist: boolean
    firstTowerKill: boolean
    gameEndedInEarlySurrender: boolean
    gameEndedInSurrender: boolean
    goldEarned: number
    goldSpent: number
    individualPosition: number
    inhibitorKills: number
    inhibitorTakedowns: number
    inhibitorsLost: number
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
    itemsPurchased: number
    killingSprees: number
    kills: number
    lane: string
    largestCriticalStrike: number
    largestKillingSpree: number
    largestMultiKill: number
    longestTimeSpentLiving: number
    magicDamageDealt: number
    magicDamageDealtToChampions: number
    magicDamageTaken: number
    neutralMinionsKilled: number
    nexusKills: number
    nexusTakedowns: number
    nexusLost: number
    objectivesStolen: number
    objectivesStolenAssists: number
    participantId: number
    pentaKills: number
    perks: DTO
    physicalDamageDealt: number
    physicalDamageDealtToChampions: number
    physicalDamageTaken: number
    profileIcon: number
    puuid: string
    quadraKills: number
    riotIdName: string
    riotIdTagline: string
    role: string
    sightWardsBoughtInGame: number
    spell1Casts: number
    spell2Casts: number
    spell3Casts: number
    spell4Casts: number
    summoner1Casts: number
    summoner1Id: number
    summoner2Casts: number
    summoner2Id: number
    summonerId: string
    summonerLebel: number
    summonerName: string
    teamEarlySurrender: boolean
    teamId: number
    teamPosition: string
    
}

export interface MatchMetadata {
    dataVersion: string
    matchId: string
    participants: Array<string>
}

export interface MatchInfo {
    gameCreation: number
    gameDuration: number
    gameEndTimeStamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants : string
    platformId: string
    queueId: number
    teams: string
    tournamentCode: string
}



export class ApiRiot {
    apiKey = ""
}

export class SummonerApi extends ApiRiot {
    async fetchSummonerByName(name :string):Promise<SummonerInterface> {
        let json = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${this.apiKey}`).then(r => r.json()) as SummonerInterface
        return json
    }
}

export class ChampionMasteryApi extends ApiRiot {
    async fetchAllChampionMasteryBySummonerId(summonerId:string):Promise<Array<ChampionMastery>> {
        let json = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${this.apiKey}`).then(r => r.json()) as Array<ChampionMastery>
        return json
    }
    async fetchTotalChampionMasteryScoreBySummonerId(summonerId:string):Promise<number> {
        let json = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${summonerId}?api_key=${this.apiKey}`).then(r => r.json) as number
        return json
    }
}

export const apiRiot = new ApiRiot()
export const summonerApi = new SummonerApi()