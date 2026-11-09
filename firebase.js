// ==========================================
// SMART PRINTING - FIREBASE CONFIGURATION
// ==========================================

// Firebase Imports
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot,
  runTransaction
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  createClient
} from "https://esm.sh/@supabase/supabase-js@2";


// ==========================================
// 1. FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyChFdnkCefAEGZQ9S4_-xFcWY0HFkBZA9M",
  authDomain: "smart-printing-network.firebaseapp.com",
  projectId: "smart-printing-network",
  storageBucket: "smart-printing-network.firebasestorage.app",
  messagingSenderId: "941474974449",
  appId: "1:941474974449:web:68b9b401d3170e56fbb750"
};


// ==========================================
// 2. INITIALIZE FIREBASE
// ==========================================

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);


// ==========================================
// 3. SUPABASE CONFIGURATION
// ==========================================

const supabaseUrl =
  "https://lhpxgxgqhyvcfgmlzdpi.supabase.co";

const supabasePublishableKey =
  "sb_publishable_RjOjldVe9q4NF-UeeEQCA_Wbm7oDoV";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);


// ==========================================
// 4. SMART PRINTING SETTINGS
// ==========================================

export const APP_CONFIG = {

  name: "Smart Printing",

  tagline: "Your Smart Printing Partner",

  currency: "INR",

  currencySymbol: "₹",

  language: "hi",

  theme: {
    primary: "#2563eb",
    secondary: "#1d4ed8",
    background: "#f8fafc",
    surface: "#ffffff",
    text: "#1e293b"
  },

  pricing: {
    blackWhite: 2,
    colour: 10
  },

  commission: 2,

  maxFileSize: 15 * 1024 * 1024,

  maxCopies: 1000,

  allowedFileTypes: [
    "application/pdf",
    "image/jpeg",
    "image/png"
  ],

  allowedExtensions: [
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png"
  ]

};


// ==========================================
// 5. ADMIN CONFIGURATION
// ==========================================

export const ADMIN_UID =
  "ibK3XWMUEYQIbBhPmGQRnW72MZg1";

export function isAdmin(user) {

  return Boolean(
    user &&
    user.uid === ADMIN_UID
  );

}


// ==========================================
// 6. CURRENCY FORMATTER
// ==========================================

export function formatPrice(amount) {

  return new Intl.NumberFormat("en-IN", {

    style: "currency",

    currency: "INR",

    maximumFractionDigits: 2

  }).format(Number(amount) || 0);

}


// ==========================================
// 7. FILE VALIDATION
// ==========================================

export function validateFile(file) {

  if (!file) {

    return {
      valid: false,
      message: "Please select a file."
    };

  }

  if (file.size <= 0) {

    return {
      valid: false,
      message: "File is empty."
    };

  }

  if (file.size > APP_CONFIG.maxFileSize) {

    return {
      valid: false,
      message: "File size must be 15 MB or less."
    };

  }

  const extension =
    "." + file.name.split(".").pop().toLowerCase();

  if (
    !APP_CONFIG.allowedExtensions.includes(extension)
  ) {

    return {
      valid: false,
      message: "Only PDF, JPG, JPEG and PNG files are allowed."
    };

  }

  return {
    valid: true,
    message: "File is valid."
  };

}


// ==========================================
// 8. ORDER ID GENERATOR
// ==========================================

export function generateOrderId() {

  const randomNumber = Math.floor(
    10000000 + Math.random() * 90000000
  );

  return "SP-" + randomNumber;

}


// ==========================================
// 9. ORDER STATUS
// ==========================================

export const ORDER_STATUS = {

  PENDING: "PENDING",

  ACCEPTED: "ACCEPTED",

  PRINTING: "PRINTING",

  COMPLETED: "COMPLETED",

  REJECTED: "REJECTED"

};


// ==========================================
// 10. PAYMENT STATUS
// ==========================================

export const PAYMENT_STATUS = {

  PENDING: "PENDING",

  PAID: "PAID",

  FAILED: "FAILED",

  REFUNDED: "REFUNDED"

};


// ==========================================
// 11. REUSABLE EXPORTS
// ==========================================

export {

  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  onSnapshot,
  runTransaction,

  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence

};


// ==========================================
// SMART PRINTING INITIALIZATION COMPLETE
// ==========================================
