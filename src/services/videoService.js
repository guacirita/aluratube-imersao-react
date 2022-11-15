import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://sogdfvtpbxxbooowayah.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZ2RmdnRwYnh4Ym9vb3dheWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA5OTYsImV4cCI6MTk4Mzk2Njk5Nn0.dz8e7qGDx9qk62wJNrzIt5zrFwt5KcVrWZ37pZOpZiQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
                    
                        
                    }
        }
    }