import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project details
const supabaseUrl = "https://znrmperkklwklcnpsnre.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpucm1wZXJra2x3a2xjbnBzbnJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODEzNTc5MCwiZXhwIjoyMDUzNzExNzkwfQ.FXWRmjet1CtjCIDCXGicQcmquj9u1jWgVZey-JJIZFI";

export const supabase = createClient(supabaseUrl, supabaseKey);
