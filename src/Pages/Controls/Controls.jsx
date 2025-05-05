import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = ({ imgSrc, username, status, playingHours, onEditProfile, onLogout }) => (
  <div className="w-full md:w-1/3 bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg h-[70vh] flex flex-col items-center justify-center text-center">
    <img src={imgSrc} alt="User Avatar" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover" />
    <p className="text-sm sm:text-lg md:text-xl font-bold text-white">{username}</p>
    <p className="text-xs sm:text-sm md:text-lg text-green-400">{status}</p>
    <p className="text-xs sm:text-sm md:text-base mt-2 text-white">Playing Hours: {playingHours}</p>


    <div className="mt-6 w-full space-y-2">
      <button 
        className="w-full bg-gray-700 py-2 rounded-lg text-xs sm:text-sm md:text-lg text-white" onClick={onEditProfile}>Edit Profile
      </button>
      <button 
      className="w-full bg-red-600 py-2 rounded-lg text-xs sm:text-sm md:text-lg text-white" onClick={onLogout}>Logout
      </button>
    </div>
  </div>
);

const StatCard = ({ label, value }) => (
  <div className="p-4 sm:p-6 rounded-xl bg-gray-800 shadow-lg transition-transform transform hover:scale-105 text-center">
    <strong className="block text-gray-400 text-xs sm:text-sm md:text-lg mb-1">{label}</strong>
    <span className="block text-white dark:text-blue-400 text-sm sm:text-lg md:text-2xl font-bold">{value}</span>
  </div>
);

const ControlButton = ({ label, onClick }) => (
  <button
    className="bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110"
    onClick={onClick}
  >
    {label}
  </button>
);

const EditProfileModal = ({ show, onClose, userProfile, onSave }) => {
  const [formData, setFormData] = useState(userProfile);

  useEffect(() => {
    setFormData(userProfile);
  }, [userProfile]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgSrc" && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, imgSrc: imageUrl }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Edit Profile</h2>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="flex flex-col items-center gap-4">
            <img
              src={formData.imgSrc}
              alt="Profile Preview"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              name="imgSrc"
              onChange={handleChange}
              className="text-xs sm:text-sm"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm sm:text-base">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm sm:text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

function Controls() {
  const [gameStats, setGameStats] = useState({
    score: "No Data",
    locationX: "No Data",
    locationY: "No Data",
    locationZ: "No Data",
    health: "No Data",
    shield: "No Data",
    grenade: "No Data",
    carriedAmmo: "No Data",
    weaponAmmo: "No Data",
    playerId: "No Data",
    _id: ""
  });
  

  const [isFetching, setIsFetching] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [userProfile, setUserProfile] = useState({
    imgSrc: "img/image.jpeg",
    username: "Random",
  });

  const startGame = () => {
    setIsFetching(true);
    setIsGameStarted(true);
    fetchGameStats();
  };

  const stopGame = () => {
    setIsFetching(false);
    setIsGameStarted(false);
  };

  const exitGame = () => {
    window.location.href = '/';
  };

  const logout = () => {
    alert("Logged out!");
    window.location.href = '/login'; // or your logout logic
  };

  const controlButtons = [
    { label: "Reload Data", action: startGame },
    { label: "Pause Data", action: stopGame },
    { label: "Exit Log", action: exitGame }
  ];

  const fetchGameStats = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/games/player-stats');
      if (response.data && response.data.length > 0) {
        const player = response.data[0];
        setGameStats({
          defeats: player.defeats ?? "N/A",
          score: player.score ?? "N/A",
          locationX: player.locationX ?? "N/A",
          locationY: player.locationY ?? "N/A",
          locationZ: player.locationZ ?? "N/A",
          health: player.health ?? "N/A",
          shield: player.shield ?? "N/A",
          grenade: player.grenade ?? "N/A",
          carriedAmmo: player.carriedAmmo ?? "N/A",
          weaponAmmo: player.weaponAmmo ?? "N/A",
          playerId: player.playerId ?? "N/A",
          _id: player._id ?? ""
        });
      }
    } catch (error) {
      console.error('Error fetching game stats:', error);
    }
  };

  useEffect(() => {
    if (isFetching) {
      const interval = setInterval(() => {
        fetchGameStats();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isFetching]);

  return (
    <div className="min-h-screen w-screen bg-blue-75 dark:bg-black text-white dark:text-blue-400 flex flex-col p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto items-center justify-center h-screen mt-16">
        
        <ProfileCard  
          imgSrc={userProfile.imgSrc}
          username={gameStats.playerId?.slice(0, 20)}
          status="Online"
          playingHours="2 hrs"
          onEditProfile={() => setShowEditModal(true)}
          onLogout={logout}
        />

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg h-[60vh]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4">Real-Time Game Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <StatCard label="HEALTH" value={gameStats.health ?? "N/A"} />
            <StatCard label="LOCATION X" value={String(gameStats.locationX ?? "N/A").slice(0, 8)} />
            <StatCard label="LOCATION Y" value={String(gameStats.locationY ?? "N/A").slice(0, 8)} />
            <StatCard label="LOCATION Z" value={String(gameStats.locationZ ?? "N/A").slice(0, 8)} />
            <StatCard label="SCORE" value={gameStats.score ?? "N/A"} />
            <StatCard label="WEAPON AMMO" value={gameStats.weaponAmmo ?? "N/A"} />
            <StatCard label="CARRIED AMMO" value={gameStats.carriedAmmo ?? "N/A"} />
            <StatCard label="GRENADES" value={gameStats.grenades ?? "N/A"} />
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {controlButtons.map((btn, index) => (
                <ControlButton key={index} label={btn.label} onClick={btn.action} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        userProfile={userProfile}
        onSave={(updatedProfile) => setUserProfile(updatedProfile)}
      />
    </div>
  );
}

export default Controls;
