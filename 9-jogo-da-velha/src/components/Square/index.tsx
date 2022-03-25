import { memo, FC, useState, useEffect } from "react";
import "./style.css";

interface Iprops {
  className: string;
  whoPlaying?: string;
  setWhoPlaying?: any;
  localization?: any;
  player1?: any;
  setPlayer1?: any;
  player2?: any;
  setPlayer2?: any;
  winner: boolean;
  restart: boolean;
  setRestart: any
}

const Square: FC<Iprops> = ({
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
}) => {
  const [userPick, setUserPick] = useState<number>(1);

  const player = () => {
    if (whoPlaying === "Player 1" && userPick === 1 && winner === false) {
      setPlayer1(() => [...player1, localization]);
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
  }, [restart]);

  return (
    <>
      {userPick === 1 && (
        <div onClick={() => player()} className={className}></div>
      )}
      {userPick === 2 && (
        <div onClick={() => player()} className={className}>
          O
        </div>
      )}
      {userPick === 3 && (
        <div onClick={() => player()} className={className}>
          X
        </div>
      )}
    </>
  );
};

export default memo(Square);
