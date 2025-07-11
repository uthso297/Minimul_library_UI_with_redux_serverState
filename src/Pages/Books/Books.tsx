import AllBoooks from "./AllBoooks";
import MostReading from "./MostReading";
import RecentlyAded from "./RecentlyAded";

const Books = () => {
    return (
        <div className="px-6 py-4">
            <RecentlyAded></RecentlyAded>
            <MostReading></MostReading>
            <AllBoooks></AllBoooks>
        </div>
    );
};

export default Books;