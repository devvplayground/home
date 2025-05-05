import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

export default function AdminDashboard() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editUsername, setEditUsername] = useState('');

  // Fetch players from API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/games/player-stats');
        const rawData = res.data;
  
        const formatted = rawData.map((p, index) => ({
          _id: p._id,
          username: p.playerId,
          kills: p.score || 0,
          ammo: p.carriedAmmo || 0,
          location: `${p.locationX?.toFixed(1)}, ${p.locationY?.toFixed(1)}, ${p.locationZ?.toFixed(1)}`,
          profilePic: `/img/${(index % 4) + 1}.jpg`,
        }));
        
  
        setPlayers(formatted);
        setFilteredPlayers(formatted);
      } catch (error) {
        console.error('Error fetching players:', error);
        setPlayers([]);
        setFilteredPlayers([]);
      }
    };
  
    fetchPlayers();
  }, []);
  

  // Open modal to edit a player
  const handleControlClick = (player) => {
    setSelectedPlayer(player);
    setEditUsername(player.username);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlayer(null);
    setEditUsername('');
  };

  // Search players by username or ID
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredPlayers(players);
    } else {
      const filtered = players.filter(player =>
        player.username.toLowerCase().includes(query.toLowerCase()) ||
        player._id.toLowerCase().includes(query.toLowerCase())
      );      
      setFilteredPlayers(filtered);
    }
  };

  // Save edited username
  const handleSaveChanges = async () => {
    try {
      const updatedPlayer = { ...selectedPlayer, username: editUsername };

      await axios.put(`http://localhost:3000/api/games/player-stats/${selectedPlayer._id}`, {
        username: editUsername,
        flag: 1,
      });

      const updatedPlayers = players.map(player =>
        player._id === selectedPlayer._id ? updatedPlayer : player
      );
      setPlayers(updatedPlayers);
      setFilteredPlayers(updatedPlayers);
      handleCloseModal();
      alert('Player updated successfully!');
    } catch (error) {
      console.error('Error updating player:', error);
      alert('Failed to update player.');
    }
  };

  return (
    <div className="p-6 min-h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by username or ID..."
          className="w-full max-w-md p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Player Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <PlayerCard key={player._id} player={player} onControlClick={handleControlClick} />
          ))
        ) : (
          <p className="text-center col-span-full">No players found.</p>
        )}
      </div>

      {/* Edit Player Modal */}
      {showModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              onClick={handleCloseModal}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">Manage {selectedPlayer.username}</h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Edit Username</label>
              <input
                type="text"
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
                className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <strong>Kills:</strong>
                <span>{selectedPlayer.kills}</span>
              </div>
              <div className="flex justify-between">
                <strong>Ammo:</strong>
                <span>{selectedPlayer.ammo}</span>
              </div>
              <div className="flex justify-between">
                <strong>Location:</strong>
                <span>{selectedPlayer.location}</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleSaveChanges}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                onClick={handleCloseModal}
                className="w-full px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
