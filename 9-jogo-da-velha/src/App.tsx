import { useEffect, useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Square from "./components/Square";
import "./App.css";

function App() {
  const [restart, setRestart] = useState<boolean>(false);
  const [whoPlaying, setWhoPlaying] = useState<string>("Player 1");
  const [winner, setWinner] = useState<boolean>(false);
  const [player1, setPlayer1] = useState<string[]>([]);
  const [player2, setPlayer2] = useState<string[]>([]);

  const reset = () => {
    setPlayer1([]);
    setPlayer2([]);
    setWinner(false);
    setRestart(true);
  };

  useEffect(() => {
    if (
      player1.includes("um") &&
      player1.includes("dois") &&
      player1.includes("tres")
    ) {
      return setWhoPlaying("Player 1"), setWinner(true);
    }
    if (
      player2.includes("um") &&
      player2.includes("dois") &&
      player2.includes("tres")
    ) {
      return setWhoPlaying("Player 2"), setWinner(true);
    }

    if (
      player1.includes("quatro") &&
      player1.includes("cinco") &&
      player1.includes("seis")
    ) {
      return setWhoPlaying("Player 1"), setWinner(true);
    }
    if (
      player2.includes("quatro") &&
      player2.includes("cinco") &&
      player2.includes("seis")
    ) {
      return setWhoPlaying("Player 2"), setWinner(true);
    }
    if (
      player1.includes("sete") &&
      player1.includes("oito") &&
      player1.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("sete") &&
      player2.includes("oito") &&
      player2.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    if (
      player1.includes("um") &&
      player1.includes("quatro") &&
      player1.includes("sete")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("um") &&
      player2.includes("quatro") &&
      player2.includes("sete")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    if (
      player1.includes("dois") &&
      player1.includes("cinco") &&
      player1.includes("oito")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("dois") &&
      player2.includes("cinco") &&
      player2.includes("oito")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    if (
      player1.includes("tres") &&
      player1.includes("seis") &&
      player1.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("tres") &&
      player2.includes("seis") &&
      player2.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    if (
      player1.includes("um") &&
      player1.includes("cinco") &&
      player1.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("um") &&
      player2.includes("cinco") &&
      player2.includes("nove")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    if (
      player1.includes("tres") &&
      player1.includes("cinco") &&
      player1.includes("sete")
    ) {
      return setWinner(true), setWhoPlaying("Player 1");
    }
    if (
      player2.includes("tres") &&
      player2.includes("cinco") &&
      player2.includes("sete")
    ) {
      return setWinner(true), setWhoPlaying("Player 2");
    }
    console.log(player1);
    console.log(player2);
  }, [player1, player2]);

  return (
    <main>
      {winner && <h1>{whoPlaying} GANHOU</h1>}
      <h1 className="player"> {whoPlaying} </h1>
      <Button reset={reset} name={"Jogar Novamente"} />
      <Container>
        <div className="linha">
          <Square
            restart={restart}
            setRestart={setRestart}
            winner={winner}
            player2={player2}
            setPlayer2={setPlayer2}
            localization={"um"}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"um"}
          />
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"dois"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"dois"}
          />
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"tres"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"tres"}
          />
        </div>
        <div className="linha">
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"quatro"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"quatro"}
          />

          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"cinco"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"cinco"}
          />
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"seis"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"seis"}
          />
        </div>
        <div className="linha">
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"sete"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"sete"}
          />
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"oito"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"oito"}
          />
          <Square
          setRestart={setRestart}
            restart={restart}
            winner={winner}
            localization={"nove"}
            player2={player2}
            setPlayer2={setPlayer2}
            player1={player1}
            setPlayer1={setPlayer1}
            whoPlaying={whoPlaying}
            setWhoPlaying={setWhoPlaying}
            className={"nove"}
          />
        </div>
      </Container>
    </main>
  );
}

export default App;
