import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import firebaseConfig from "../hidden/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");

async function component() {
  const element = document.createElement("div");

  element.innerHTML = "hello";
  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    37K Apr 19 11:01 dist/main.js
// Run `ls -lh dist/main.js` to get the above
