import PlayerOneHistoryWord from "./PlayerOneHistoryWord";

const Player1 = () => {
    return (
        <div className="border border-lime-500 p-10">
            <p className="text-4xl text-center mb-10">Guest </p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <PlayerOneHistoryWord></PlayerOneHistoryWord>
        </div>
    );
};

export default Player1;