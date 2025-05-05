import { useState, useEffect } from 'react';

function EditPlayerModal({ show, onClose, userProfile, onSave }) {
  const [formData, setFormData] = useState(userProfile || {});

  useEffect(() => {
    setFormData(userProfile || {});
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
      <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl mb-6 text-center font-semibold">Edit Player Profile</h2>

        <div className="flex flex-col items-center gap-6">
          <img src={formData.imgSrc} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover" />
          <input
            type="file"
            accept="image/*"
            name="imgSrc"
            onChange={handleChange}
            className="text-white"
          />

          <input
            name="username"
            value={formData.username || ''}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />

          <input
            name="playingHours"
            value={formData.playingHours || ''}
            onChange={handleChange}
            placeholder="Playing Hours"
            className="w-full p-2 rounded bg-gray-700 text-white mt-2"
          />
        </div>

        <div className="flex justify-between mt-8">
          <button onClick={onClose} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditPlayerModal;
