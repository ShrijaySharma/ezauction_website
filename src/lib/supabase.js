import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arrtlpxbyahfijxlxdpc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFycnRscHhieWFoZmlqeGx4ZHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNzY3MDEsImV4cCI6MjA4Njk1MjcwMX0.hSKRs9_NCiexeh_CJT3awJJSOQVZwn6TwZl8KXCqrYc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
