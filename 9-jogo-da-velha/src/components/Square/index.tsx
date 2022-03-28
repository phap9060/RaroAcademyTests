import React,{ memo,useState, useEffect } from "react";
import "./style.css";

interface Iprops {
  className: string;
  whoPlaying: string;
  setWhoPlaying:React.Dispatch<React.SetStateAction<string>>;
  localization: string;
  player1: string[];
  setPlayer1: React.Dispatch<React.SetStateAction<string[]>>;
  player2:string[];
  setPlayer2:React.Dispatch<React.SetStateAction<string[]>>;
  winner: boolean;
  restart: boolean;
  setRestart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Square = ({
  restart,
  setRestart,
  winner,
  localization,
  className,
  whoPlaying,
  setWhoPlaying,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
}:Iprops) => {
  const [userPick, setUserPick] = useState<number>(1);

  const player = () => {
    if (whoPlaying === "Player 1" && userPick === 1 && winner === false) {
      setPlayer1([...player1,localization]) ;
      setWhoPlaying(() => "Player 2");
      setUserPick(2);
    }
    if (whoPlaying === "Player 2" &&  userPick === 1 && winner === false) {
      setPlayer2(() => [...player2, localization]);
      setWhoPlaying(() => "Player 1");
      setUserPick(3);
    }
  };

  useEffect(() => {
    if (restart === true) {
      setUserPick(() => 1) 
      setRestart(()=>false)
    }
  }, [restart,setRestart]);

  const style = {
    color:'green'
  }

  return (
    <>
      {userPick === 1 && (
        <span onClick={() => player()} className={className}></span>
      )}
      {userPick === 2 && (
        <span onClick={() => player()} className={className} style={{color:"#110e39"}} >
          O
        </span>
      )}
      {userPick === 3 && (
        <span onClick={() => player()} className={className} style={{color:'#ff4e34'}}>
          X
        </span>
      )}
    </>
  );
};

export default memo(Square);
