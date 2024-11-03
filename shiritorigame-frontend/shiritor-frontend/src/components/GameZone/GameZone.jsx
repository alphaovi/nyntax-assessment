import Player1 from "../Player1/Player1";
import Player2 from "../Player2/Player2";

const GameZone = () => {
    return (
        <div className="grid grid-cols-2 gap-20 m-20 mx-40">
            <Player1></Player1>
            <Player2></Player2>
        </div>
    );
};

export default GameZone;