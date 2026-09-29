/**
 * MISIÓN WINNER - NOVA FIDELIZ - QUIZZES
 * CONFIGURACIÓN MODULAR FIREBASE FIRESTORE & ANALYTICS (firebase-config.js)
 * 
 * Reemplaza los valores de firebaseConfig con tus credenciales reales del proyecto de Firebase Console.
 * Si las credenciales no están configuradas, el sistema activará automáticamente el motor
 * de contingencia local (LocalStorage/IndexedDB) garantizando funcionamiento ininterrumpido.
 */

const firebaseConfig = {
  apiKey: "AIzaSyBkJD2eUk-C9iGm-cl1E_BtdWPhyNiyUs4",
  authDomain: "quizzes-nova-fideliz.firebaseapp.com",
  projectId: "quizzes-nova-fideliz",
  storageBucket: "quizzes-nova-fideliz.firebasestorage.app",
  messagingSenderId: "935844508143",
  appId: "1:935844508143:web:5100e624c9223f1832c61a",
  measurementId: "G-6SWDTY8X3F"
};

let db = null;
let analytics = null;
let isFirebaseConnected = false;

try {
  if (typeof firebase !== 'undefined' && firebase.initializeApp) {
    // Inicializar Firebase
    const app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    
    // Habilitar persistencia offline si está soportada
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
      console.info("Firestore Persistence Mode:", err.code);
    });

    if (firebase.analytics) {
      analytics = firebase.analytics();
    }
    isFirebaseConnected = true;
    console.log("🚀 [Firebase] Firestore conectado exitosamente a Misión WINNER.");
  } else {
    console.info("ℹ️ [Firebase] SDK no detectado o en modo contingencia Local.");
  }
} catch (error) {
  console.warn("⚠️ [Firebase] Inicialización en modo contingencia local:", error.message);
  isFirebaseConnected = false;
}

window.WINNER_FIREBASE = {
  db,
  analytics,
  isConnected: () => isFirebaseConnected,
  config: firebaseConfig
};
