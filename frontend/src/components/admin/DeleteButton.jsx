import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

const DeleteButton = ({ onConfirm, confirmMessage = 'Delete this item?', className = '' }) => {
  const handleClick = () => {
    if (window.confirm(confirmMessage)) {
      onConfirm();
    }
  };

  return (
    <Button
      type="button"
      size="icon"
      variant="secondary"
      onClick={handleClick}
      aria-label="Delete"
      className={`bg-gray-900/80 border border-gray-600 hover:bg-red-900/60 ${className}`}
    >
      <Trash2 className="w-4 h-4 text-red-400" />
    </Button>
  );
};

export default DeleteButton;
