import { GoPlus } from "react-icons/go";

function Stat() {
    return (
        <>
            <div className="w-3/5 p-6 h-1/6 bg-stone-400 rounded-lg m-4">
                <p className="mb-4 font-medium">Player Name</p>
                <div className="flex items-center justify-between font-light">
                    <p>stat 1</p>
                    <span>
                        <GoPlus />
                    </span>
                </div>
                <div className="flex items-center justify-between font-light">
                    <p>stat 2</p>
                    <span>
                        <GoPlus />
                    </span>
                </div>
                <div className="flex items-center justify-between font-light">
                    <p>stat 3</p>
                    <span>
                        <GoPlus />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Stat;