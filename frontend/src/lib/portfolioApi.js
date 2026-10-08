import { supabase } from './supabaseClient';

const ORDERED_TABLES = ['experience', 'qualifications', 'achievements', 'skills', 'projects'];

export async function fetchPortfolioData() {
  const [personalRes, ...listRes] = await Promise.all([
    supabase.from('site_personal').select('*').eq('id', 1).single(),
    ...ORDERED_TABLES.map((table) =>
      supabase.from(table).select('*').order('sort_order', { ascending: true })
    ),
  ]);

  if (personalRes.error) throw personalRes.error;
  listRes.forEach((res) => {
    if (res.error) throw res.error;
  });

  const [experience, qualifications, achievements, skills, projects] = listRes.map(
    (res) => res.data
  );

  return {
    personal: personalRes.data,
    experience,
    qualifications,
    achievements,
    skills,
    projects,
  };
}

export async function updatePersonal(fields) {
  const { error } = await supabase
    .from('site_personal')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', 1);
  if (error) throw error;
}

export async function upsertRow(table, values) {
  const { id, ...rest } = values;
  const payload = { ...rest, updated_at: new Date().toISOString() };

  if (id) {
    const { error } = await supabase.from(table).update(payload).eq('id', id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from(table).insert(payload);
    if (error) throw error;
  }
}

export async function deleteRow(table, id) {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
}

export async function uploadImage(file, folder = 'misc') {
  const path = `${folder}/${Date.now()}-${file.name}`;
  const { error } = await supabase.storage.from('portfolio-images').upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) throw error;

  const { data } = supabase.storage.from('portfolio-images').getPublicUrl(path);
  return data.publicUrl;
}

export async function uploadResume(file) {
  const path = `resume-${Date.now()}.pdf`;
  const { error } = await supabase.storage.from('resume').upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) throw error;

  const { data } = supabase.storage.from('resume').getPublicUrl(path);
  return data.publicUrl;
}
