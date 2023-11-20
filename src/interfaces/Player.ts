export interface Player {
    sessionStatId: string;
    playerId: string;
    playerName: string;
    clubAssignedStatName: string;
    lastUpdated: Date | null;
}