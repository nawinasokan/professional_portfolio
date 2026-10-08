-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).
-- Creates the content tables, locks writes to the admin email via RLS,
-- creates the storage buckets, and seeds the current portfolio content.

-- ============================================================
-- Admin check helper
-- ============================================================
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select (auth.jwt() ->> 'email') = 'nawinasokan16@gmail.com';
$$;

-- ============================================================
-- Tables
-- ============================================================
create table if not exists public.site_personal (
  id int primary key default 1,
  name text,
  title text,
  tagline text,
  email text,
  phone text,
  linkedin text,
  github text,
  avatar_url text,
  career_summary text,
  resume_url text,
  join_date date,
  updated_at timestamptz default now(),
  constraint site_personal_singleton check (id = 1)
);

create table if not exists public.experience (
  id bigint generated always as identity primary key,
  title text not null,
  company text not null,
  duration text,
  location text,
  description text,
  achievements jsonb not null default '[]'::jsonb,
  sort_order int not null default 0,
  updated_at timestamptz default now()
);

create table if not exists public.qualifications (
  id bigint generated always as identity primary key,
  degree text not null,
  institution text,
  duration text,
  grade text,
  description text,
  sort_order int not null default 0,
  updated_at timestamptz default now()
);

create table if not exists public.achievements (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  image_url text,
  year int,
  sort_order int not null default 0,
  updated_at timestamptz default now()
);

create table if not exists public.skills (
  id bigint generated always as identity primary key,
  name text not null,
  level int not null default 50,
  category text,
  sort_order int not null default 0,
  updated_at timestamptz default now()
);

create table if not exists public.projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  tech_stack jsonb not null default '[]'::jsonb,
  github_url text,
  live_url text,
  image_url text,
  sort_order int not null default 0,
  updated_at timestamptz default now()
);

-- ============================================================
-- RLS: public read, admin-only write (same pattern on every table)
-- ============================================================
do $$
declare
  t text;
begin
  for t in select unnest(array[
    'site_personal', 'experience', 'qualifications',
    'achievements', 'skills', 'projects'
  ])
  loop
    execute format('alter table public.%I enable row level security;', t);

    execute format(
      'drop policy if exists "%1$s_public_read" on public.%1$I;', t
    );
    execute format(
      'create policy "%1$s_public_read" on public.%1$I for select using (true);', t
    );

    execute format(
      'drop policy if exists "%1$s_admin_write" on public.%1$I;', t
    );
    execute format(
      'create policy "%1$s_admin_write" on public.%1$I for all using (public.is_admin()) with check (public.is_admin());', t
    );
  end loop;
end $$;

-- ============================================================
-- Storage buckets (public read, admin-only write)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('resume', 'resume', true)
on conflict (id) do nothing;

drop policy if exists "portfolio_images_public_read" on storage.objects;
create policy "portfolio_images_public_read" on storage.objects
  for select using (bucket_id = 'portfolio-images');

drop policy if exists "portfolio_images_admin_write" on storage.objects;
create policy "portfolio_images_admin_write" on storage.objects
  for all using (bucket_id = 'portfolio-images' and public.is_admin())
  with check (bucket_id = 'portfolio-images' and public.is_admin());

drop policy if exists "resume_public_read" on storage.objects;
create policy "resume_public_read" on storage.objects
  for select using (bucket_id = 'resume');

drop policy if exists "resume_admin_write" on storage.objects;
create policy "resume_admin_write" on storage.objects
  for all using (bucket_id = 'resume' and public.is_admin())
  with check (bucket_id = 'resume' and public.is_admin());

-- ============================================================
-- Seed data (current mockData.js content) — run once on an empty DB
-- ============================================================
insert into public.site_personal
  (id, name, title, tagline, email, phone, linkedin, github, avatar_url, career_summary, resume_url, join_date)
values (
  1,
  'Nawin Asokan',
  'Executive - Software Developer',
  'Python Developer with 1.2+ years of experience building scalable web applications, REST APIs, and backend solutions',
  'nawinasokan16@gmail.com',
  '+91 8300796919',
  'https://linkedin.com/in/nawin-a-dev',
  'https://github.com/nawinasokan',
  'pdf/avatarme.jpeg',
  'Python Developer with 1.2+ years of experience developing scalable web applications, REST APIs, and backend solutions. Proficient in Django, FastAPI, and Flask, with hands-on deployment experience on AWS and GCP. Skilled in database design and REST API development, ensuring scalable and efficient solutions. Recognized with the Best Project Award (2024) for innovative problem-solving. Passionate about developing scalable Python-based backend solutions in dynamic environments.',
  'pdf/Nawin_Asokan_Resume.pdf',
  '2024-08-12'
)
on conflict (id) do nothing;

insert into public.experience (title, company, duration, location, description, achievements, sort_order)
select 'Executive Software Developer', 'Mahima Technology Pvt Ltd', 'AUG 2024 - Present', 'Salem, Tamil Nadu, India',
  'Building backend systems and full-stack projects using Django, FastAPI, PostgreSQL, Celery, and Redis, with deployments on AWS.',
  '["Built backend systems with Django, PostgreSQL, Celery and Redis, including a platform handling 150M+ rows", "Improved database query efficiency by 15% across PostgreSQL and MySQL", "Deployed and maintained applications on AWS (EC2, S3) with 99% uptime", "Delivered a full-stack project with FastAPI endpoints and a JavaScript/Bootstrap front end"]'::jsonb,
  0
where not exists (select 1 from public.experience);

insert into public.qualifications (degree, institution, duration, grade, description, sort_order)
select * from (values
  ('Bachelor of Engineering in Electronics and Communication Engineering', 'Sona College of Technology (Anna University)', 'Aug 2020 - May 2024', 'CGPA: 8.46/10', 'Salem, Tamil Nadu', 0),
  ('Python Programming Certification', 'Livewire India', '2024', 'Grade: A', 'Comprehensive Python programming course covering advanced concepts', 1),
  ('Cloud Computing Certification', 'Livewire India', '2024', 'Grade: A', 'Comprehensive cloud infrastructure, virtualization, AWS services and cloud security practices.', 2)
) as v(degree, institution, duration, grade, description, sort_order)
where not exists (select 1 from public.qualifications);

insert into public.achievements (title, description, image_url, year, sort_order)
select * from (values
  ('Best Project Award', 'Recognized with the Best Project Award for innovative problem-solving in software development.', 'pdf/nawin_award.jpg', 2024, 0),
  ('Graduation', 'Graduated with a Bachelor of Engineering in Electronics and Communication.', 'pdf/graduation.jpeg', 2024, 1)
) as v(title, description, image_url, year, sort_order)
where not exists (select 1 from public.achievements);

insert into public.skills (name, level, category, sort_order)
select * from (values
  ('Python', 90, 'Programming', 0),
  ('SQL', 80, 'Programming', 1),
  ('JavaScript', 70, 'Programming', 2),
  ('Django', 95, 'Framework', 3),
  ('FastAPI', 80, 'Framework', 4),
  ('Flask', 75, 'Framework', 5),
  ('React.js', 65, 'Framework', 6),
  ('PostgreSQL', 85, 'Database', 7),
  ('MySQL', 75, 'Database', 8),
  ('MongoDB', 65, 'Database', 9),
  ('SQLite', 75, 'Database', 10),
  ('Git', 85, 'Tools', 11),
  ('GitHub', 85, 'Tools', 12),
  ('Docker', 60, 'DevOps', 13),
  ('Linux', 70, 'DevOps', 14),
  ('AWS', 70, 'Cloud', 15),
  ('GCP', 60, 'Cloud', 16),
  ('Problem Solving', 88, 'Soft Skills', 17),
  ('Team Collaboration', 85, 'Soft Skills', 18),
  ('Communication', 95, 'Soft Skills', 19)
) as v(name, level, category, sort_order)
where not exists (select 1 from public.skills);

insert into public.projects (title, description, tech_stack, github_url, live_url, image_url, sort_order)
select * from (values
  (
    'Audio Annotation & Transcription',
    'Multi-stage audio annotation and transcription platform with AI-powered transcription, translation, task workflows, and role-based access control. Integrated Google Gemini AI APIs for automated speech-to-text transcription and translation, reducing manual annotation effort by 50%.',
    '["Django", "Python", "PostgreSQL", "Gemini API"]'::jsonb,
    'https://github.com/nawinasokan/budgetplan',
    'https://github.com/nawinasokan/budgetplan',
    'pdf/audio-annotation-workspace.png',
    0
  ),
  (
    'F1 — Enterprise QC Audit & Reporting Platform',
    'Multi-module audit and reporting platform with Excel ingestion, dynamic field mapping, 8+ report engines, and real-time dashboards handling 150M+ rows. Improved batch upload throughput by 5.2x and query performance by up to 78x through PostgreSQL partitioning, indexing, and query optimization.',
    '["Django", "PostgreSQL", "Celery", "Redis"]'::jsonb,
    'https://github.com/nawinasokan/budgetplan',
    'https://github.com/nawinasokan/budgetplan',
    'pdf/bp.jpeg',
    1
  ),
  (
    'Smart AI Assist',
    'Single-page AI web app for email drafting, blog writing, and text summarization with async API calls and response caching, achieving <2s response latency. Reusable prompt-engineering layer for 3 content types, reducing token usage by 25%.',
    '["Python", "Flask", "Gemini API", "JavaScript"]'::jsonb,
    'https://github.com/nawinasokan/Smart_Ai',
    'https://smart-ai-mocha.vercel.app/login',
    'pdf/smart_ai_workspace.png',
    2
  )
) as v(title, description, tech_stack, github_url, live_url, image_url, sort_order)
where not exists (select 1 from public.projects);
