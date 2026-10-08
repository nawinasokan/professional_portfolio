import React from 'react';
import { Pencil } from 'lucide-react';
import { Button } from '../ui/button';

const EditButton = ({ onClick, className = '' }) => (
  <Button
    type="button"
    size="icon"
    variant="secondary"
    onClick={onClick}
    aria-label="Edit"
    className={`bg-gray-900/80 border border-gray-600 hover:bg-gray-700 ${className}`}
  >
    <Pencil className="w-4 h-4 text-blue-300" />
  </Button>
);

export default EditButton;
