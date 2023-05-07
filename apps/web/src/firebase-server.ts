import admin from "firebase-admin";
import { env } from "./env.mjs";

const serviceAccountBuffer = Buffer.from(env.FIREBASE_SA_BASE64, "base64");
const serviceAccountStringData = serviceAccountBuffer.toString("utf8");
const serviceAccount: admin.ServiceAccount = JSON.parse(serviceAccountStringData);

if (!admin.apps.length) {
  try {
    console.log("firebase server initializeApp...");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });

    console.log("initialized firebase server app!");
  } catch (error: any) {
    console.log(error);
  }
}

export const db = admin.database();
