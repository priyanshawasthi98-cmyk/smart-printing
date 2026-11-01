import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const firebaseConfig = {
  apiKey: "AIzaSyChFdnkCefAEGZQ9S4_-xFcWY0HFkBZA9M",
  authDomain: "smart-printing-network.firebaseapp.com",
  projectId: "smart-printing-network",
  storageBucket: "smart-printing-network.firebasestorage.app",
  messagingSenderId: "941474974449",
  appId: "1:941474974449:web:68b9b401d3170e56fbb750"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Supabase Configuration
const supabaseUrl ="https://lhpxgxgqhyvcfgmlzdpi.supabase.co";
const supabasePublishableKey = "sb_publishable_RjOjldVeR9q4NF-UeeEQCA_Wbm7oDoV";

// Initialize Supabase
export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
