// import './App.css'
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Stat from "./components/Stat"
import { SessionStats } from "./interfaces/SessionStats";
import { Player } from "./interfaces/Player";

function App() {
  const [stats, setStats] = useState<SessionStats[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/playersSessionStats`).
      then(res => res.json()).then((data: SessionStats[]): void => {
        setStats(data)
        console.log(stats)

      });
  }, []);

  const playersGrouped: { [key: string]: Player[] } = stats?.reduce((acc: any, player) => {
    if (acc[player.playerId]) {
      acc[player.playerId].push(player);
    } else {
      acc[player.playerId] = [player];
    }
    return acc;
  }, {})

  return (
    <>
      <Navbar />
      <section className=" md:pl-32">
        {Object.values(playersGrouped).map((player, index) => {
          return (<div key={index}>
            <Stat playerStat={player} />
          </div>)
        })}
      </section>
    </>
  )
}

export default App
