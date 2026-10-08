import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.error(
    'Missing REACT_APP_SUPABASE_URL / REACT_APP_SUPABASE_ANON_KEY env vars — see frontend/.env. ' +
      'Falling back to a placeholder client so the app can still render; data fetches will fail until these are set.'
  );
}

// createClient throws synchronously on an empty/invalid URL, which would crash the whole
// app before React can render anything. Fall back to a placeholder so the app still
// boots (and shows a clear "failed to load" state) until the real env vars are set.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

export const ADMIN_EMAIL = 'nawinasokan16@gmail.com';
