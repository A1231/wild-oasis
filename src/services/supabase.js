import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjrlfdpvaelybmrahcwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqcmxmZHB2YWVseWJtcmFoY3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NDY2NzIsImV4cCI6MjA3MzUyMjY3Mn0.6FHrnbBgCKagTdHQyGP804oCFN5jFtqnm3O8g_1-j2c"; //process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
