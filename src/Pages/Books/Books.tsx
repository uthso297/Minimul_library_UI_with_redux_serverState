import AllBoooks from "./AllBoooks";
import RecentlyAded from "./RecentlyAded";

const Books = () => {
    return (
        <div className="px-6 py-4">
            <AllBoooks></AllBoooks>
            <RecentlyAded></RecentlyAded>
        </div>
    );
};

export default Books;