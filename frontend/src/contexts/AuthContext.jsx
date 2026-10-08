import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, ADMIN_EMAIL } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const isAdmin = session?.user?.email === ADMIN_EMAIL;

  useEffect(() => {
    if (session && !isAdmin) {
      supabase.auth.signOut();
    }
    if (!isAdmin) {
      setEditMode(false);
    }
  }, [session, isAdmin]);

  const signInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
  };

  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user: session?.user ?? null,
    isAdmin,
    loading,
    editMode,
    setEditMode,
    canEdit: isAdmin && editMode,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
