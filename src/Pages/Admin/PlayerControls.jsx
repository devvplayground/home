import React from 'react';
import { useParams } from 'react-router-dom';

const playersData = [
  { id: 'P001', username: 'ShadowNinja', avatar: 'https://via.placeholder.com/100', kills: 25, ammo: 50, location: '234, 45, 80' },
  { id: 'P002', username: 'DragonSlayer', avatar: 'https://via.placeholder.com/100', kills: 30, ammo: 40, location: '234, 34, 50' },
  { id: 'P003', username: 'PixelMaster', avatar: 'https://via.placeholder.com/100', kills: 15, ammo: 60, location: '279, 45, 80' },
];

export default function PlayerControls() {
  const { playerId } = useParams();
  const player = playersData.find((p) => p.id === playerId);

  if (!player) {
    return <div>Player not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Player: {player.username}</h1>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img src={player.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
          <div>
            <div className="text-xl font-semibold">{player.username}</div>
            <div className="text-sm text-gray-500">ID: {player.id}</div>
          </div>
        </div>
        <div className="text-lg font-semibold">Player Stats:</div>
        <div className="space-y-2">
          <p><strong>Kills:</strong> {player.kills}</p>
          <p><strong>Ammo:</strong> {player.ammo}</p>
          <p><strong>Location:</strong> {player.location}</p>
        </div>
        <div className="space-y-4">
          <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Profile</button>
          <button className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600">Edit Stats</button>
          <button className="px-5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Suspend</button>
          <button className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
}
