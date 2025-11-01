import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  MessagePayload,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
  appId: import.meta.env.VITE_FIREBASE_APP_ID!,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID!,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const messaging =
  typeof window !== "undefined" ? getMessaging(app) : null;

// 알림 권한 요청 + 토큰 발급
export async function requestFcmPermission(): Promise<string | null> {
  if (typeof window === "undefined" || !messaging) return null;

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("알림 권한이 거부되었습니다.");
      return null;
    }

    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY!;
    const registration = await navigator.serviceWorker.ready;

    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log(">>> FCM 등록 토큰", token);
      return token;
    } else {
      console.warn("토큰 발급 실패. 권한을 다시 요청하세요.");
      return null;
    }
  } catch (error) {
    console.error("FCM 권한 요청 또는 토큰 발급 중 오류:", error);
    return null;
  }
}

// 포그라운드 알림 수신
export function onForegroundFcmMessage(
  callback: (payload: MessagePayload) => void
) {
  if (typeof window === "undefined" || !messaging) return;
  onMessage(messaging, callback);
}
