import { SlOptionsVertical } from "react-icons/sl";

function Navbar() {
    return (
        <header className="sticky top-0 bg-slate-900 text-white">
            <nav className="flex justify-between p-6">
                <div>
                    <h2 className="font-bold">TEAM STATS</h2>
                </div>
                <div className="flex items-center">
                    <p className="mx-4">Talanta</p>
                    <SlOptionsVertical />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;