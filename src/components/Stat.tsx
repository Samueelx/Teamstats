import { GoPlus } from "react-icons/go";
import { Player } from "../interfaces/Player";
import React from "react";

interface PlayerSessionStats {
    playerStat: Player[]
}

const Stat: React.FC<PlayerSessionStats> = ({ playerStat }) => {
    return (
        <>
            <div className="w-11/12 md:w-3/5 p-6 h-1/6 bg-stone-400 rounded-lg m-4">
                <p className="mb-4 font-medium">{playerStat[0].playerName}</p>
                <div className="flex flex-wrap justify-between">
                    {playerStat.map((stat, index) => {
                        return (
                            <div className="flex items-center justify-between font-light w-2/5 mb-2" key={index}>
                                <p>{stat.clubAssignedStatName}</p>
                                <span className="hover:cursor-pointer">
                                    <GoPlus />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Stat;