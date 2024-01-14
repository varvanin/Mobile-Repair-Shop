import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uyfebqtuvcoprlvdgynx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5ZmVicXR1dmNvcHJsdmRneW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMTMwMjksImV4cCI6MjAyMDc4OTAyOX0.FXcPRozo153k7liDsiM8y99MvLX0AICh3XwVcnj_F9I";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
