


const CategoryItem = ({ name, shortcut, active }) => {
    return (
        <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
            <div
            className={`w-4 h-4 rounded-full ${
                active ? "bg-green-500" : "bg-red-500"
            }`}
            ></div>
            <span>{name}</span>
        </div>
        <div className="text-gray-400 text-sm">{shortcut}</div>
        </div>
    )
}    

function Control() {
  return (

        <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-8">
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Header */}
                <div className="border-b border-gray-700 pb-4 mb-4">
                    <h1 className="text-teal-400 text-xl font-bold">SNIPER'S EDGE</h1>
                    <div className="grid grid-cols-2 text-sm mt-2">
                        <div>
                            <p>Publisher: <span className="text-gray-300">DEV-PLAYGROUND</span></p>
                            <p>Developer: <span className="text-gray-300">RANDOM TEAM</span></p>
                        </div>
                        <div>
                            <p>Release Year: <span className="text-gray-300">2025</span></p>
                            <p>Latest Update: <span className="text-gray-300">Coming Soon...</span></p>
                        </div>
                    </div>
                </div>

                    {/* Free Cheats Section */}
                    <div>
                        <h2 className="text-gray-300 text-lg font-bold mb-4">FREE CHEATS</h2>
                        
                        {/* Categories */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Health/Energy */}
                            <div>
                            <h3 className="text-teal-400 font-semibold text-sm mb-2">HEALTH/ENERGY</h3>
                            <CategoryItem name="REFILL HEALTH" shortcut="LCTRL NUM2" active />
                            <CategoryItem name="LOW HEALTH" shortcut="LCTRL NUM3" />
                            <CategoryItem name="REFILL STAMINA" shortcut="LCTRL NUM5" />
                            </div>

                            {/* Player Attribute */}
                            <div>
                            <h3 className="text-teal-400 font-semibold text-sm mb-2">PLAYER ATTRIBUTE</h3>
                            <CategoryItem name="SET PLAYER SPEED" shortcut="LALT NUM4" active />
                            <div className="flex items-center gap-2 mt-2">
                                <input
                                type="number"
                                value="2"
                                className="w-12 bg-gray-700 text-center text-gray-200 rounded-md"
                                readOnly
                                />
                            </div>
                        </div>

                        {/* Inventory */}
                        <div>
                            <h3 className="text-teal-400 font-semibold text-sm mb-2">INVENTORY</h3>
                            <CategoryItem name="AMMO" shortcut="LCTRL NUM6" />
                            <CategoryItem name="GRENADE" shortcut="LCTRL NUM7" />
                            <CategoryItem name="SMOKE GRENADE" shortcut="LCTRL NUM8" />
                        </div>

                        {/* Weapons */}
                        <div>
                            <h3 className="text-teal-400 font-semibold text-sm mb-2">WEAPONS</h3>
                            <CategoryItem name="SHORT GUN" shortcut="LCTRL NUM9" />
                            <CategoryItem name="AWM" shortcut="LCTRL NUM1" />
                        </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default Control