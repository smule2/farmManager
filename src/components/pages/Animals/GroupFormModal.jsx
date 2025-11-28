import React, { useState } from 'react';
import { X } from 'lucide-react';


export default function GroupFormModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    icon: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">

        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Add New Group</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
          className="space-y-4"
        >
          <div className='text-gray-800'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Goats"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Species</label>
            <input
              type="text"
              name="species"
              placeholder="e.g. Capra hircus"
              value={formData.species}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Icon (Emoji)</label>
            <input
              type="text"
              name="icon"
              placeholder="🐐"
              value={formData.icon}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div> */}
            </div>


          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white"
            >
              Save Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}