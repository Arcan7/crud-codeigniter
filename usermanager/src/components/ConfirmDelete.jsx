import React from 'react';
import { CgDanger } from "react-icons/cg";

const ConfirmDelete = ({ show, onClose, onConfirm, username }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-blue-950 flex items-center"> <CgDanger className='size-8 mr-3 inline-block'/> Confirmation</h2>
        <p className="my-4 text-lg text-gray-800">
         Voulez vous vraiment supprimer l'utilisateur <strong className='text-red-600'>{username}</strong>?
        </p>
        <div className="flex justify-end">
          
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white font-bold  mr-2 py-2 px-4 rounded"
          >
            Supprimer
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
