import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

const AddButton = ({ onClick, label = 'Add new', className = '' }) => (
  <Button
    type="button"
    variant="outline"
    onClick={onClick}
    className={`border-dashed border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white ${className}`}
  >
    <Plus className="w-4 h-4 mr-1" />
    {label}
  </Button>
);

export default AddButton;
