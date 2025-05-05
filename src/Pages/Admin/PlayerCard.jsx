import React from 'react';

export default function PlayerCard({ player, onControlClick }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg relative">
      <img
        src={player.profilePic}
        alt="Profile"
        className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gray-300"
      />
      <h3 className="text-xl font-semibold text-center">{player.username}</h3>
      <p className="text-sm text-center text-gray-500">Kills: {player.kills}</p>
      <p className="text-sm text-center text-gray-500">Ammo: {player.ammo}</p>
      <p className="text-sm text-center text-gray-500 mb-2">Location: {player.location}</p>
      <button
        onClick={() => onControlClick(player)}
        className="w-full mt-2 bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        Control
      </button>
    </div>
  );
}
