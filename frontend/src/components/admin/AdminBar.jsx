import React from 'react';
import { LogOut, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { useAuth } from '../../contexts/AuthContext';

const AdminBar = () => {
  const { loading, isAdmin, user, editMode, setEditMode, signInWithGoogle, signOut } = useAuth();

  if (loading) return null;

  if (!isAdmin) {
    return (
      <button
        onClick={signInWithGoogle}
        className="fixed bottom-5 left-5 z-[60] flex items-center gap-2 bg-gray-900/90 border border-gray-700 text-gray-300 hover:text-white hover:border-blue-400 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm transition-colors text-sm"
        aria-label="Sign in as admin"
      >
        <ShieldCheck className="w-4 h-4" />
        Admin Sign In
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 left-5 z-[60] flex items-center gap-3 bg-gray-900/90 border border-gray-700 text-gray-200 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-sm text-sm">
      <span className="hidden sm:inline text-gray-400 max-w-[160px] truncate">{user?.email}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs">Edit Mode</span>
        <Switch checked={editMode} onCheckedChange={setEditMode} />
      </div>
      <Button size="icon" variant="ghost" onClick={signOut} aria-label="Sign out">
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default AdminBar;
