import { useState } from "react";
import PlayerOneHistoryWord from "../Player1/PlayerOneHistoryWord";

const Player2 = () => {
    const [typedWord, setTypedWord] = useState("");

    const handleTypeWord = (event) => {
        const name = event.target.name;
        const typeWord = event.target.value
       setTypedWord(typeWord)

    }

    const handleTypedSubmit = () => {
        event.preventDefault();
        alert(typedWord)
    }
  return (
    <div className="border border-lime-500 p-10">
        <p className="text-4xl text-center mb-10">Guest 2</p>
      <form onSubmit={handleTypedSubmit}>
      <input
      onClick={handleTypeWord}
        type="text"
        placeholder="Type here"
        name="typingWord"
        value={handleTypeWord}
        className="input input-bordered w-full max-w-xs"
      />
      <input type="submit" name="Submit"/>
      
      </form>
      <PlayerOneHistoryWord value={typedWord}></PlayerOneHistoryWord>
    </div>
  );
};

export default Player2;
