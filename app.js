/**
 * ========================================================
 * JONAS PROFILE - ADVANCED INTERACTIVE ENGINE & ADMIN PANEL
 * ========================================================
 */

// SVG Icon Library
const ICONS = {
  spotify: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm4.586 14.424a.625.625 0 0 1-.86.208c-2.357-1.44-5.323-1.766-8.817-.968a.627.627 0 1 1-.28-1.222c3.826-.874 7.106-.508 9.75 1.121.308.188.404.585.207.861zm1.225-2.724a.784.784 0 0 1-1.08.258c-2.697-1.658-6.81-2.138-10.002-1.17a.785.785 0 0 1-.462-1.5c3.647-1.106 8.2-.574 11.286 1.332a.785.785 0 0 1 .258 1.08zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.942.942 0 1 1-.548-1.803c3.535-1.073 9.404-.866 13.14 1.353a.942.942 0 0 1-.973 1.609z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  snapchat: `<svg viewBox="0 0 24 24"><path d="M12.002 2c3.42 0 6.098 2.457 6.098 5.753 0 1.013-.255 2.18-.745 3.092.74.225 1.638.647 1.638 1.442 0 .54-.42.92-1.025 1.05-.205.045-.445.063-.706.074-.016.29-.072.585-.184.865.733.275 1.57.842 1.57 1.83 0 1.042-.924 1.77-2.233 1.957-.463.067-.98.083-1.52.083-.497 0-.962-.055-1.393-.16-.622.502-1.08.683-1.5.683-.42 0-.878-.18-1.5-.683-.43.105-.896.16-1.393.16-.54 0-1.057-.016-1.52-.083-1.31-.187-2.233-.915-2.233-1.957 0-.988.837-1.555 1.57-1.83-.112-.28-.168-.575-.184-.865-.26-.01-.5-.03-.706-.074-.605-.13-1.025-.51-1.025-1.05 0-.795.898-1.217 1.638-1.442-.49-.912-.745-2.08-.745-3.092C5.904 4.457 8.582 2 12.002 2z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.87-4.48V8.71a8.28 8.28 0 0 0 4.9 1.58V6.84a4.85 4.85 0 0 1-1-.15z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`,
  steam: `<svg viewBox="0 0 24 24"><path d="M11.979 0C5.378 0 0 5.378 0 11.979c0 5.068 3.167 9.4 7.643 11.134l3.078-4.444a4.482 4.482 0 0 1-.806-2.525c0-.44.067-.864.19-1.264L5.6 12.593A6.877 6.877 0 0 1 12 5.102a6.877 6.877 0 0 1 6.877 6.877 6.877 6.877 0 0 1-6.877 6.877c-.503 0-.986-.079-1.442-.218l-3.14 4.534A11.956 11.956 0 0 0 11.979 24c6.601 0 11.979-5.378 11.979-11.979S18.58 0 11.979 0z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  default: `<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`
};

// ----------------------------------------------------
// INDEXED-DB STORAGE ENGINE FOR MEDIA FILES
// ----------------------------------------------------
const DB_NAME = "JonasBiolinkDB";
const DB_VERSION = 1;
let dbInstance = null;

function initIndexedDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("media")) {
        db.createObjectStore("media");
      }
    };
    req.onsuccess = (e) => {
      dbInstance = e.target.result;
      resolve(dbInstance);
    };
    req.onerror = (e) => reject(e);
  });
}

function saveMediaBlob(key, blob) {
  return new Promise((resolve, reject) => {
    if (!dbInstance) return resolve(null);
    const tx = dbInstance.transaction("media", "readwrite");
    const store = tx.objectStore("media");
    store.put(blob, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = (e) => reject(e);
  });
}

function getMediaBlob(key) {
  return new Promise((resolve, reject) => {
    if (!dbInstance) return resolve(null);
    const tx = dbInstance.transaction("media", "readonly");
    const store = tx.objectStore("media");
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = (e) => reject(e);
  });
}

// ----------------------------------------------------
// DISCORD LANYARD CLIENT & HELPER FUNCTIONS
// ----------------------------------------------------
class LanyardClient {
  constructor(userId, onUpdate) {
    this.userId = userId;
    this.onUpdate = onUpdate;
    this.ws = null;
    this.heartbeatTimer = null;
    this.reconnectTimer = null;
    this.isDestroyed = false;
  }

  start() {
    this.fetchRest();
    this.connectWs();
  }

  updateUserId(newUserId) {
    if (this.userId === newUserId) return;
    this.userId = newUserId;
    this.cleanupWs();
    if (this.ws) {
      try { this.ws.close(); } catch (_) {}
    }
    this.fetchRest();
    this.connectWs();
  }

  async fetchRest() {
    if (!this.userId) return;
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${this.userId}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          this.onUpdate(json.data);
        }
      }
    } catch (err) {
      console.warn("Lanyard REST fetch notice:", err);
    }
  }

  connectWs() {
    if (this.isDestroyed || !this.userId) return;
    try {
      this.ws = new WebSocket("wss://api.lanyard.rest/socket");

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          const { op, t, d } = msg;

          if (op === 1) { // Hello
            const heartbeatInterval = d.heartbeat_interval || 30000;
            this.startHeartbeat(heartbeatInterval);

            // Op 2: Subscribe to user ID
            this.ws.send(JSON.stringify({
              op: 2,
              d: { subscribe_to_id: this.userId }
            }));
          } else if (op === 0) { // Event
            if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
              this.onUpdate(d);
            }
          }
        } catch (e) {
          console.warn("Lanyard WS parse error:", e);
        }
      };

      this.ws.onclose = () => {
        this.cleanupWs();
        if (!this.isDestroyed) {
          this.reconnectTimer = setTimeout(() => this.connectWs(), 4000);
        }
      };

      this.ws.onerror = () => {
        if (this.ws) this.ws.close();
      };
    } catch (e) {
      if (!this.isDestroyed) {
        this.reconnectTimer = setTimeout(() => this.connectWs(), 6000);
      }
    }
  }

  startHeartbeat(interval) {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ op: 3 }));
      }
    }, interval);
  }

  cleanupWs() {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = null;
  }

  destroy() {
    this.isDestroyed = true;
    this.cleanupWs();
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    if (this.ws) {
      try { this.ws.close(); } catch (_) {}
    }
  }
}

function formatActivityElapsed(startTimestamp) {
  if (!startTimestamp) return "";
  const diffSec = Math.floor((Date.now() - startTimestamp) / 1000);
  if (diffSec < 0) return "";
  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  if (hours > 0) {
    return `${hours} Std. ${minutes} Min.`;
  }
  return `${minutes} Min.`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------------------
// STATE & CONFIGURATION MERGE
// ----------------------------------------------------
let activeConfig = JSON.parse(JSON.stringify(CONFIG));
const localConfigStr = localStorage.getItem("jonas_active_config");
if (localConfigStr) {
  try {
    const parsed = JSON.parse(localConfigStr);
    activeConfig = Object.assign(activeConfig, parsed);
  } catch (e) {
    console.error("Config parse error:", e);
  }
}

// Theme Presets Configuration
const THEMES = {
  cyberpunk: {
    name: "Cyberpunk Neon",
    glowColor: "#a855f7",
    ambientMode: "matrix",
    glassBlur: 24,
    badge: "VIP",
    splashText: "[ enter the matrix ]"
  },
  crimson: {
    name: "Blood Crimson",
    glowColor: "#ff0033",
    ambientMode: "embers",
    glassBlur: 20,
    badge: "IMMORTAL",
    splashText: "[ enter bloodline ]"
  },
  ice: {
    name: "Ice Glacier",
    glowColor: "#00f0ff",
    ambientMode: "snow",
    glassBlur: 26,
    badge: "COLD",
    splashText: "[ enter the frost ]"
  },
  gold: {
    name: "Luxury Gold",
    glowColor: "#ffd700",
    ambientMode: "stars",
    glassBlur: 22,
    badge: "ROYAL",
    splashText: "[ welcome to luxury ]"
  },
  stealth: {
    name: "Monochrome Stealth",
    glowColor: "#ffffff",
    ambientMode: "rain",
    glassBlur: 24,
    badge: "VERIFIED",
    splashText: "[ click anywhere to enter ]"
  }
};

// Web Audio API Synthesizer (Instant crisp UI sounds, zero dependencies)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playSfx(type = "click") {
  if (activeConfig.effects?.enableSfx === false) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "hover") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);
      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.07);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === "success") {
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.04, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.25);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.25);
      });
    } else if (type === "enter") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.35);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {}
}

let toastTimer = null;
function showToast(message, type = "info") {
  const toastEl = document.getElementById("admin-toast");
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  playSfx("success");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 3200);
}

// Global Ambient Controller
let ambientMode = (activeConfig.effects && activeConfig.effects.ambientMode) || "stars";

document.addEventListener("DOMContentLoaded", async () => {
  await initIndexedDB().catch(console.warn);

  // Main UI Elements
  const bgVideo = document.getElementById("bg-video");
  const bgAudio = document.getElementById("bg-audio");
  const splashOverlay = document.getElementById("splash-overlay");
  const splashPrompt = document.getElementById("splash-prompt");
  const profileCard = document.getElementById("profile-card");
  const profileName = document.getElementById("profile-name");
  const locationText = document.getElementById("location-text");
  const profileAvatar = document.getElementById("profile-avatar");
  const avatarGlow = document.getElementById("avatar-glow");
  const socialLinksContainer = document.getElementById("social-links");
  const viewCountEl = document.getElementById("view-count");

  // Discord UI Elements
  const avatarWrapper = document.getElementById("avatar-wrapper");
  const avatarRing = document.getElementById("avatar-ring");
  const avatarStatusBadge = document.getElementById("avatar-status-badge");
  const discordCard = document.getElementById("discord-card");
  const discordUsername = document.getElementById("discord-username");
  const discordStatusPill = document.getElementById("discord-status-pill");
  const discordStatusText = document.getElementById("discord-status-text");
  const discordActivityBody = document.getElementById("discord-activity-body");
  
  // Media Controls
  const btnPlayPause = document.getElementById("btn-play-pause");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const btnMute = document.getElementById("btn-mute");
  const iconVolumeHigh = document.getElementById("icon-volume-high");
  const iconVolumeMuted = document.getElementById("icon-volume-muted");
  const volumeSlider = document.getElementById("volume-slider");
  const trackName = document.getElementById("track-name");
  const trackArtist = document.getElementById("track-artist");
  const equalizer = document.getElementById("equalizer");
  const btnCloseBadge = document.getElementById("btn-close-badge");
  const bottomBadge = document.getElementById("bottom-badge");

  // Admin UI Elements
  const adminTriggerBtn = document.getElementById("admin-trigger-btn");
  const adminAuthModal = document.getElementById("admin-auth-modal");
  const adminAuthForm = document.getElementById("admin-auth-form");
  const adminPasswordInput = document.getElementById("admin-password-input");
  const authErrorMsg = document.getElementById("auth-error-msg");
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");
  const btnCancelAuth = document.getElementById("btn-cancel-auth");
  const adminPanelModal = document.getElementById("admin-panel-modal");
  const btnClosePanel = document.getElementById("btn-close-panel");

  // Admin Inputs
  const inputVideoFile = document.getElementById("input-video-file");
  const videoDropzone = document.getElementById("video-dropzone");
  const videoDropzoneLabel = document.getElementById("video-dropzone-label");
  const inputVideoUrl = document.getElementById("input-video-url");
  const inputAudioFile = document.getElementById("input-audio-file");
  const audioDropzone = document.getElementById("audio-dropzone");
  const audioDropzoneLabel = document.getElementById("audio-dropzone-label");
  const inputAudioUrl = document.getElementById("input-audio-url");
  const inputTrackTitle = document.getElementById("input-track-title");
  const inputTrackArtist = document.getElementById("input-track-artist");
  const inputDefaultVolume = document.getElementById("input-default-volume");
  const volumeValDisplay = document.getElementById("volume-val-display");

  const inputAvatarFile = document.getElementById("input-avatar-file");
  const inputAvatarUrl = document.getElementById("input-avatar-url");
  const inputProfileName = document.getElementById("input-profile-name");
  const inputProfileLocation = document.getElementById("input-profile-location");
  const inputProfileViews = document.getElementById("input-profile-views");
  const inputDiscordId = document.getElementById("input-discord-id");
  const checkDiscordAvatar = document.getElementById("check-discord-avatar");
  const checkDiscordPresence = document.getElementById("check-discord-presence");

  const adminLinksList = document.getElementById("admin-links-list");
  const btnAddLink = document.getElementById("btn-add-link");

  const inputSplashText = document.getElementById("input-splash-text");
  const inputGlowColor = document.getElementById("input-glow-color");
  const glowColorPreview = document.getElementById("glow-color-preview");
  const selectAmbientParticles = document.getElementById("select-ambient-particles");
  const inputGlassBlur = document.getElementById("input-glass-blur");
  const selectEqualizerToggle = document.getElementById("select-equalizer-toggle");

  const inputGithubToken = document.getElementById("input-github-token");
  const btnGithubPush = document.getElementById("btn-github-push");
  const btnDownloadConfig = document.getElementById("btn-download-config");
  const githubSyncStatus = document.getElementById("github-sync-status");
  const btnResetDefaults = document.getElementById("btn-reset-defaults");
  const btnSavePanel = document.getElementById("btn-save-panel");
  const inputNewPassword = document.getElementById("input-new-password");
  const btnSaveNewPassword = document.getElementById("btn-save-new-password");
  const passwordChangeStatus = document.getElementById("password-change-status");

  // New Extended Controls
  const profileBadge = document.getElementById("profile-badge");
  const inputProfileBadge = document.getElementById("input-profile-badge");
  const checkCustomCursor = document.getElementById("check-custom-cursor");
  const checkCursorSpotlight = document.getElementById("check-cursor-spotlight");
  const checkClickSparkles = document.getElementById("check-click-sparkles");
  const checkEnableSfx = document.getElementById("check-enable-sfx");
  const btnTestSfx = document.getElementById("btn-test-sfx");
  const btnTestView = document.getElementById("btn-test-view");
  const btnPreviewAudio = document.getElementById("btn-preview-audio");
  const adminCurrentSectionTitle = document.getElementById("admin-current-section-title");
  const adminCurrentSectionDesc = document.getElementById("admin-current-section-desc");

  // Runtime State
  let isPlaying = false;
  let hasEntered = false;
  let previousVolume = activeConfig.media.defaultVolume || 0.5;
  let activeLanyard = null;

  // Discord Live Presence Handler
  function handleDiscordUpdate(data) {
    if (!data) return;

    const status = data.discord_status || "offline";
    const user = data.discord_user;
    const activities = data.activities || [];

    // 1. Status Ring & Badge updates
    const statusClasses = ["status-online", "status-idle", "status-dnd", "status-offline"];
    const targetClass = `status-${status}`;

    const elementsToClass = [avatarWrapper, avatarRing, avatarStatusBadge, discordCard, discordStatusPill];
    elementsToClass.forEach(el => {
      if (el) {
        statusClasses.forEach(c => el.classList.remove(c));
        el.classList.add(targetClass);
      }
    });

    // German status labels
    const statusLabels = {
      online: "Online",
      idle: "Abwesend",
      dnd: "Bitte nicht stören",
      offline: "Offline"
    };

    if (discordStatusText) {
      discordStatusText.textContent = statusLabels[status] || "Offline";
    }

    if (avatarStatusBadge) {
      avatarStatusBadge.title = `Discord: ${statusLabels[status] || "Offline"}`;
    }

    // 2. Dynamic Avatar from Discord
    if (user && user.avatar && activeConfig.discord?.useDiscordAvatar !== false) {
      const isGif = user.avatar.startsWith("a_");
      const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${isGif ? "gif" : "png"}?size=512`;
      if (profileAvatar && profileAvatar.src !== avatarUrl) {
        profileAvatar.src = avatarUrl;
      }
    }

    // 3. Username
    if (discordUsername && user) {
      discordUsername.textContent = user.username ? `@${user.username}` : (user.global_name || "Discord");
    }

    // 4. Presence Display
    if (!discordActivityBody) return;

    if (activeConfig.discord?.showPresenceCard === false) {
      if (discordCard) discordCard.style.display = "none";
      return;
    } else if (discordCard) {
      discordCard.style.display = "block";
    }

    // A. Check Spotify first
    if (data.listening_to_spotify && data.spotify) {
      const s = data.spotify;
      discordActivityBody.innerHTML = `
        <div class="presence-item">
          <div class="presence-img-wrap">
            <img src="${escapeHtml(s.album_art_url)}" alt="Album" class="presence-img">
          </div>
          <div class="presence-info">
            <span class="presence-label" style="color: #1db954;">Hört auf Spotify</span>
            <span class="presence-title">${escapeHtml(s.song)}</span>
            <span class="presence-details">${escapeHtml(s.artist)}</span>
          </div>
          <div class="presence-spotify-bars" title="Spielt Musik">
            <span></span><span></span><span></span>
          </div>
        </div>
      `;
      return;
    }

    // B. Check Game or other rich presence (type !== 4)
    const gameActivity = activities.find(a => a.type !== 4);
    const customStatus = activities.find(a => a.type === 4);

    if (gameActivity) {
      let iconUrl = "";
      if (gameActivity.assets && gameActivity.assets.large_image) {
        const img = gameActivity.assets.large_image;
        if (img.startsWith("mp:external/")) {
          iconUrl = `https://media.discordapp.net/external/${img.replace("mp:external/", "")}`;
        } else {
          iconUrl = `https://cdn.discordapp.com/app-assets/${gameActivity.application_id}/${img}.png`;
        }
      }

      let typeText = "Spielt";
      if (gameActivity.type === 1) typeText = "Streamt";
      else if (gameActivity.type === 2) typeText = "Hört";
      else if (gameActivity.type === 3) typeText = "Schaut";
      else if (gameActivity.type === 5) typeText = "Tritt an in";

      const elapsedStr = formatActivityElapsed(gameActivity.timestamps?.start);

      discordActivityBody.innerHTML = `
        <div class="presence-item">
          <div class="presence-img-wrap">
            ${iconUrl 
              ? `<img src="${escapeHtml(iconUrl)}" alt="${escapeHtml(gameActivity.name)}" class="presence-img" onerror="this.style.display='none'">` 
              : `<div class="presence-fallback-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg></div>`}
          </div>
          <div class="presence-info">
            <span class="presence-label">${typeText}</span>
            <span class="presence-title">${escapeHtml(gameActivity.name)}</span>
            ${gameActivity.details ? `<span class="presence-details">${escapeHtml(gameActivity.details)}</span>` : ""}
            ${gameActivity.state ? `<span class="presence-state">${escapeHtml(gameActivity.state)}</span>` : ""}
            ${elapsedStr ? `<span class="presence-state" style="font-size:0.7rem; opacity:0.85;">⏱️ ${elapsedStr}</span>` : ""}
          </div>
        </div>
      `;
      return;
    }

    // C. Check Custom Status
    if (customStatus && customStatus.state) {
      let emojiHtml = "";
      if (customStatus.emoji) {
        if (customStatus.emoji.id) {
          const ext = customStatus.emoji.animated ? "gif" : "png";
          emojiHtml = `<img src="https://cdn.discordapp.com/emojis/${customStatus.emoji.id}.${ext}" class="presence-custom-emoji" alt="emoji">`;
        } else if (customStatus.emoji.name) {
          emojiHtml = `<span class="presence-emoji-char">${escapeHtml(customStatus.emoji.name)}</span>`;
        }
      }

      discordActivityBody.innerHTML = `
        <div class="presence-custom-status">
          ${emojiHtml}
          <span class="presence-custom-text">${escapeHtml(customStatus.state)}</span>
        </div>
      `;
      return;
    }

    // D. Default / Device State
    let deviceHint = "";
    if (status !== "offline") {
      if (data.active_on_discord_desktop) deviceHint = "🖥️ Aktiv auf Desktop";
      else if (data.active_on_discord_mobile) deviceHint = "📱 Aktiv auf Smartphone";
      else if (data.active_on_discord_web) deviceHint = "🌐 Aktiv im Browser";
      else deviceHint = "🟢 Aktiv auf Discord";
    } else {
      deviceHint = "🌙 Zuletzt offline";
    }

    discordActivityBody.innerHTML = `
      <div class="presence-empty-state">
        <span>${deviceHint}</span>
      </div>
    `;
  }

  // --------------------------------------------------
  // 1. RENDER ACTIVE CONFIG TO LIVE UI
  // --------------------------------------------------
  async function applyActiveConfig() {
    // Profile
    profileName.textContent = activeConfig.profile.name || "Jonas";
    locationText.textContent = activeConfig.profile.location || "FFM";
    
    // Check IndexedDB for custom avatar
    const customAvatarBlob = await getMediaBlob("custom_avatar");
    if (customAvatarBlob) {
      profileAvatar.src = URL.createObjectURL(customAvatarBlob);
    } else {
      profileAvatar.src = activeConfig.profile.avatar || "assets/avatar.jpg";
    }

    // View Counter (Sofortige Cache-Anzeige)
    const cachedViews = parseInt(localStorage.getItem("jonas_profile_views") || activeConfig.profile.viewsStart || 305, 10);
    if (viewCountEl && !viewCountEl.getAttribute("data-raw-views")) {
      viewCountEl.textContent = cachedViews.toLocaleString("de-DE");
      viewCountEl.setAttribute("data-raw-views", cachedViews);
    }

    // Track Meta
    trackName.textContent = activeConfig.media.trackTitle || "Ambient Vibes";
    trackArtist.textContent = activeConfig.media.trackArtist || "Jonas";

    // Video Source (Check DB first)
    const customVideoBlob = await getMediaBlob("custom_video");
    if (customVideoBlob) {
      bgVideo.src = URL.createObjectURL(customVideoBlob);
      bgVideo.load();
    } else if (activeConfig.media.videoSrc) {
      bgVideo.src = activeConfig.media.videoSrc;
      bgVideo.load();
    }

    // Audio Source (Check DB first)
    const customAudioBlob = await getMediaBlob("custom_audio");
    if (customAudioBlob) {
      bgAudio.src = URL.createObjectURL(customAudioBlob);
      bgAudio.load();
    } else if (activeConfig.media.audioSrc) {
      bgAudio.src = activeConfig.media.audioSrc;
      bgAudio.load();
    }

    // Volume
    volumeSlider.value = activeConfig.media.defaultVolume || 0.5;
    bgAudio.volume = volumeSlider.value;
    bgVideo.volume = 0; // muted video

    // Effects & Theme
    const glow = activeConfig.effects.glowColor || "#ffffff";
    document.documentElement.style.setProperty("--accent-glow", glow);
    if (activeConfig.effects.glassBlur) {
      document.documentElement.style.setProperty("--glass-blur", `${activeConfig.effects.glassBlur}px`);
    }

    if (activeConfig.effects.splashText) {
      splashPrompt.textContent = activeConfig.effects.splashText;
    }

    // Profile Badge
    if (profileBadge) {
      profileBadge.textContent = activeConfig.profile.badge || "VIP";
    }

    ambientMode = activeConfig.effects.ambientMode || "stars";

    // Custom Cursor & Spotlight
    document.body.classList.toggle("has-custom-cursor", activeConfig.effects?.customCursor !== false);
    const spotlightEl = document.getElementById("cursor-spotlight");
    if (spotlightEl) {
      spotlightEl.style.display = activeConfig.effects?.cursorSpotlight !== false ? "block" : "none";
    }

    // Render Social Links
    renderSocialLinks();

    // Discord Integration Init / Update
    const discordId = (activeConfig.discord && activeConfig.discord.userId) || "453756683886264321";
    if (activeConfig.discord?.enabled !== false && discordId) {
      if (!activeLanyard) {
        activeLanyard = new LanyardClient(discordId, handleDiscordUpdate);
        activeLanyard.start();
      } else {
        activeLanyard.updateUserId(discordId);
      }
    }
  }

  // Click Discord card to open profile
  if (discordCard) {
    discordCard.style.cursor = "pointer";
    discordCard.title = "Klicken, um Discord-Profil zu öffnen";
    discordCard.addEventListener("click", () => {
      const id = (activeConfig.discord && activeConfig.discord.userId) || "453756683886264321";
      window.open(`https://discord.com/users/${id}`, "_blank", "noopener,noreferrer");
    });
  }

  function renderSocialLinks() {
    socialLinksContainer.innerHTML = "";
    if (activeConfig.links && Array.isArray(activeConfig.links)) {
      activeConfig.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "social-link-item";
        a.setAttribute("data-tooltip", link.description || link.name);
        
        const iconKey = (link.icon || link.name || "").toLowerCase();
        const svgIcon = ICONS[iconKey] || ICONS.default;
        a.innerHTML = svgIcon;
        
        socialLinksContainer.appendChild(a);
      });
    }
  }

  // --------------------------------------------------
  // 1b. GLOBAL REALTIME VIEW COUNTER (CountAPI Integration)
  // --------------------------------------------------
  const COUNTER_API_BASE = "https://countapi.mileshilliard.com/api/v1";
  const getCounterKey = () => (activeConfig.profile && activeConfig.profile.counterKey) || "jonasmzzz_github_io_views";
  let pollViewsTimer = null;

  function updateViewCountDisplay(newVal) {
    if (!viewCountEl || typeof newVal !== "number" || isNaN(newVal)) return;

    const currentRaw = viewCountEl.getAttribute("data-raw-views");
    const currentVal = currentRaw ? parseInt(currentRaw, 10) : parseInt(viewCountEl.textContent.replace(/\D/g, ""), 10);
    viewCountEl.setAttribute("data-raw-views", newVal);

    if (!isNaN(currentVal) && newVal > currentVal) {
      // Glow Bump Animation
      const counterContainer = viewCountEl.closest(".view-counter");
      if (counterContainer) {
        counterContainer.classList.remove("updated");
        void counterContainer.offsetWidth; // Reflow erzwingen
        counterContainer.classList.add("updated");
      }

      // Weicher Hochzähl-Effekt bei kleinen Schritten
      const diff = newVal - currentVal;
      if (diff <= 30) {
        const startTime = performance.now();
        const duration = 500;
        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.round(currentVal + diff * progress);
          viewCountEl.textContent = current.toLocaleString("de-DE");
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            viewCountEl.textContent = newVal.toLocaleString("de-DE");
          }
        }
        requestAnimationFrame(step);
        return;
      }
    }

    viewCountEl.textContent = newVal.toLocaleString("de-DE");
  }

  async function syncGlobalViews(newVal) {
    const key = getCounterKey();
    try {
      const res = await fetch(`${COUNTER_API_BASE}/set/${key}?value=${newVal}`);
      if (res.ok) {
        console.log(`[ViewCounter] Globaler Zähler auf ${newVal} synchronisiert.`);
      }
    } catch (err) {
      console.warn("[ViewCounter] Konnte globalen Zähler nicht synchronisieren:", err);
    }
  }

  async function fetchCurrentGlobalViews() {
    const key = getCounterKey();
    try {
      const res = await fetch(`${COUNTER_API_BASE}/get/${key}`);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.value === "number") {
          updateViewCountDisplay(data.value);
          localStorage.setItem("jonas_profile_views", data.value);
          return data.value;
        }
      }
    } catch (err) {
      // Silent catch
    }
    return null;
  }

  async function recordGlobalPageView() {
    const key = getCounterKey();
    try {
      const res = await fetch(`${COUNTER_API_BASE}/hit/${key}`);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.value === "number") {
          updateViewCountDisplay(data.value);
          localStorage.setItem("jonas_profile_views", data.value);
          return;
        }
      }
      // Falls Key noch nicht existiert (404/Error), initialisieren und erneut versuchen
      const initialStart = activeConfig.profile.viewsStart || 305;
      await syncGlobalViews(initialStart);
      const retryRes = await fetch(`${COUNTER_API_BASE}/hit/${key}`);
      if (retryRes.ok) {
        const data = await retryRes.json();
        if (data && typeof data.value === "number") {
          updateViewCountDisplay(data.value);
          localStorage.setItem("jonas_profile_views", data.value);
        }
      }
    } catch (err) {
      console.warn("[ViewCounter] Offline / API nicht erreichbar, nutze Fallback:", err);
    }
  }

  function initGlobalViewCounter() {
    // 1. Initialer Cache-Wert sofort anzeigen
    const initialCached = parseInt(localStorage.getItem("jonas_profile_views") || activeConfig.profile.viewsStart || 305, 10);
    updateViewCountDisplay(initialCached);

    // 2. Globalen View zählen (nach jedem View hochzählen für alle Nutzer weltweit)
    recordGlobalPageView();

    // 3. Live Auto-Aktualisierung (prüft alle 10 Sekunden, ob andere Nutzer das Profil aufgerufen haben)
    if (pollViewsTimer) clearInterval(pollViewsTimer);
    pollViewsTimer = setInterval(() => {
      if (!document.hidden) {
        fetchCurrentGlobalViews();
      }
    }, 10000);

    // Bei Tab-Rückkehr sofort prüfen
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        fetchCurrentGlobalViews();
      }
    });
  }

  // --------------------------------------------------
  // 2. SPLASH & MEDIA PLAYBACK ENGINE
  // --------------------------------------------------
  function enterExperience() {
    if (hasEntered) return;
    hasEntered = true;
    playSfx("enter");
    splashOverlay.classList.add("fade-out");
    setTimeout(() => profileCard.classList.add("visible"), 200);
    playMedia();
  }

  splashOverlay.addEventListener("click", enterExperience);

  function playMedia() {
    isPlaying = true;
    bgVideo.play().then(() => bgVideo.classList.add("is-playing")).catch(() => {});
    bgAudio.play().then(() => {
      if (activeConfig.effects.audioVisualizer !== false) equalizer.classList.add("active");
    }).catch(() => {});

    iconPlay.classList.add("hidden");
    iconPause.classList.remove("hidden");
  }

  function pauseMedia() {
    isPlaying = false;
    bgVideo.pause();
    bgAudio.pause();
    equalizer.classList.remove("active");
    iconPlay.classList.remove("hidden");
    iconPause.classList.add("hidden");
  }

  btnPlayPause.addEventListener("click", (e) => {
    e.stopPropagation();
    isPlaying ? pauseMedia() : playMedia();
  });

  function updateVolume(val) {
    val = Math.max(0, Math.min(1, parseFloat(val)));
    bgAudio.volume = val;
    volumeSlider.value = val;
    if (val === 0) {
      iconVolumeHigh.classList.add("hidden");
      iconVolumeMuted.classList.remove("hidden");
    } else {
      iconVolumeHigh.classList.remove("hidden");
      iconVolumeMuted.classList.add("hidden");
      previousVolume = val;
    }
  }

  volumeSlider.addEventListener("input", (e) => updateVolume(e.target.value));

  btnMute.addEventListener("click", (e) => {
    e.stopPropagation();
    bgAudio.volume > 0 ? (previousVolume = bgAudio.volume, updateVolume(0)) : updateVolume(previousVolume || 0.5);
  });

  if (btnCloseBadge && bottomBadge) {
    btnCloseBadge.addEventListener("click", () => bottomBadge.classList.add("hidden"));
  }

  // --------------------------------------------------
  // 3. ADMIN AUTHENTICATION ENGINE
  // --------------------------------------------------
  async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function hasAdminPassword() {
    return !!(localStorage.getItem("jonas_admin_hash") || activeConfig.adminPasswordHash);
  }

  function openAuthOrPanel() {
    if (sessionStorage.getItem("jonas_admin_session") === "true") {
      openAdminPanel();
      return;
    }
    
    // Check if initial password setup
    if (!hasAdminPassword()) {
      authTitle.textContent = "Admin-Passwort erstellen";
      authSubtitle.textContent = "Wähle dein persönliches Master-Passwort für das Control Panel.";
      document.getElementById("btn-submit-auth").textContent = "Passwort festlegen";
    } else {
      authTitle.textContent = "Admin Login";
      authSubtitle.textContent = "Gib dein Master-Passwort ein, um das Dashboard zu öffnen.";
      document.getElementById("btn-submit-auth").textContent = "Entsperren";
    }
    
    adminPasswordInput.value = "";
    authErrorMsg.classList.add("hidden");
    adminAuthModal.classList.remove("hidden");
    adminPasswordInput.focus();
  }

  adminTriggerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openAuthOrPanel();
  });

  const splashAdminBtn = document.getElementById("splash-admin-btn");
  if (splashAdminBtn) {
    splashAdminBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openAuthOrPanel();
    });
  }

  // Expose globally for console or external trigger
  window.openAdmin = openAuthOrPanel;

  // Key combo: Ctrl + Shift + A
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      openAuthOrPanel();
    }
  });

  // URL Query: ?admin or #admin
  if (window.location.search.includes("admin") || window.location.hash.includes("admin")) {
    setTimeout(openAuthOrPanel, 200);
  }

  btnCancelAuth.addEventListener("click", () => {
    adminAuthModal.classList.add("hidden");
  });

  adminAuthForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const entered = adminPasswordInput.value.trim();
    if (!entered) return;

    const enteredHash = await hashString(entered);

    if (!hasAdminPassword()) {
      // First time setup
      localStorage.setItem("jonas_admin_hash", enteredHash);
      activeConfig.adminPasswordHash = enteredHash;
      localStorage.setItem("jonas_active_config", JSON.stringify(activeConfig));
      sessionStorage.setItem("jonas_admin_session", "true");
      adminAuthModal.classList.add("hidden");
      openAdminPanel();
    } else {
      const storedHash = localStorage.getItem("jonas_admin_hash") || activeConfig.adminPasswordHash;
      if (enteredHash === storedHash) {
        sessionStorage.setItem("jonas_admin_session", "true");
        adminAuthModal.classList.add("hidden");
        openAdminPanel();
      } else {
        authErrorMsg.classList.remove("hidden");
      }
    }
  });

  // --------------------------------------------------
  // 4. ADMIN CONTROL PANEL LOGIC & TABS
  // --------------------------------------------------
  function openAdminPanel() {
    populateAdminFields();
    adminPanelModal.classList.remove("hidden");
  }

  btnClosePanel.addEventListener("click", () => {
    adminPanelModal.classList.add("hidden");
  });

  // Tabs Switcher & Section Titles
  const tabButtons = document.querySelectorAll(".panel-tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const TAB_INFOS = {
    "tab-presets": { title: "Theme Presets", desc: "Passe das Design deiner Profilseite mit 1 Klick an." },
    "tab-profile": { title: "Profil & Badge", desc: "Passe deinen Namen, dein Abzeichen und den weltweiten Aufrufzähler an." },
    "tab-media": { title: "Medien & Sound", desc: "Konfiguriere Hintergrundvideo, Musik und Lautstärke." },
    "tab-links": { title: "Social Links", desc: "Verwalte deine Social Media Icons mit Schnell-Hinzufügen." },
    "tab-effects": { title: "Effekte & Design", desc: "Passe Glow-Farbe, Matrix/Regen/Glut Partikel und Unschärfe an." },
    "tab-interact": { title: "Cursor & Sound", desc: "Aktiviere den Guns.lol Crosshair-Cursor, Spotlight & Soundeffekte." },
    "tab-discord": { title: "Discord Lanyard", desc: "Echtzeit-Discord-Präsenz, Avatar und Spiele-Status." },
    "tab-publish": { title: "GitHub & Cloud", desc: "Veröffentliche alle Änderungen weltweit auf GitHub Pages." }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add("active");
      if (TAB_INFOS[tabId] && adminCurrentSectionTitle && adminCurrentSectionDesc) {
        adminCurrentSectionTitle.textContent = TAB_INFOS[tabId].title;
        adminCurrentSectionDesc.textContent = TAB_INFOS[tabId].desc;
      }
      playSfx("click");
    });
  });

  // Populate Fields from activeConfig
  function populateAdminFields() {
    inputVideoUrl.value = activeConfig.media.videoSrc || "";
    if (inputAudioUrl) inputAudioUrl.value = activeConfig.media.audioSrc || "";
    inputTrackTitle.value = activeConfig.media.trackTitle || "";
    inputTrackArtist.value = activeConfig.media.trackArtist || "";
    inputDefaultVolume.value = activeConfig.media.defaultVolume || 0.5;
    volumeValDisplay.textContent = `${Math.round((activeConfig.media.defaultVolume || 0.5) * 100)}%`;

    inputAvatarUrl.value = activeConfig.profile.avatar || "";
    inputProfileName.value = activeConfig.profile.name || "";
    inputProfileLocation.value = activeConfig.profile.location || "";
    if (inputProfileBadge) inputProfileBadge.value = activeConfig.profile.badge || "VIP";

    inputProfileViews.value = localStorage.getItem("jonas_profile_views") || activeConfig.profile.viewsStart || 305;
    fetchCurrentGlobalViews().then(val => {
      if (val !== null && inputProfileViews) {
        inputProfileViews.value = val;
      }
    });

    if (inputDiscordId) {
      inputDiscordId.value = (activeConfig.discord && activeConfig.discord.userId) || "453756683886264321";
    }
    if (checkDiscordAvatar) {
      checkDiscordAvatar.checked = activeConfig.discord?.useDiscordAvatar !== false;
    }
    if (checkDiscordPresence) {
      checkDiscordPresence.checked = activeConfig.discord?.showPresenceCard !== false;
    }

    inputSplashText.value = activeConfig.effects.splashText || "[ click anywhere to enter ]";
    inputGlowColor.value = activeConfig.effects.glowColor || "#ffffff";
    glowColorPreview.textContent = activeConfig.effects.glowColor || "#ffffff";
    selectAmbientParticles.value = activeConfig.effects.ambientMode || "stars";
    inputGlassBlur.value = activeConfig.effects.glassBlur || 24;
    selectEqualizerToggle.value = activeConfig.effects.audioVisualizer !== false ? "true" : "false";

    if (checkCustomCursor) checkCustomCursor.checked = activeConfig.effects?.customCursor !== false;
    if (checkCursorSpotlight) checkCursorSpotlight.checked = activeConfig.effects?.cursorSpotlight !== false;
    if (checkClickSparkles) checkClickSparkles.checked = activeConfig.effects?.clickSparkles !== false;
    if (checkEnableSfx) checkEnableSfx.checked = activeConfig.effects?.enableSfx !== false;

    inputGithubToken.value = localStorage.getItem("jonas_gh_token") || "";

    populateAdminLinksList();
  }

  // Volume slider in admin
  inputDefaultVolume.addEventListener("input", (e) => {
    volumeValDisplay.textContent = `${Math.round(e.target.value * 100)}%`;
  });

  // Color picker label in admin
  inputGlowColor.addEventListener("input", (e) => {
    glowColorPreview.textContent = e.target.value;
  });

  // --------------------------------------------------
  // 5. MEDIA UPLOADS (Drag & Drop + File Selector)
  // --------------------------------------------------
  videoDropzone.addEventListener("click", () => inputVideoFile.click());
  inputVideoFile.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleVideoUpload(e.target.files[0]);
    }
  });

  videoDropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    videoDropzone.style.borderColor = "#a855f7";
  });
  videoDropzone.addEventListener("dragleave", () => {
    videoDropzone.style.borderColor = "";
  });
  videoDropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    videoDropzone.style.borderColor = "";
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVideoUpload(e.dataTransfer.files[0]);
    }
  });

  async function handleVideoUpload(file) {
    videoDropzoneLabel.textContent = `⏳ Lade ${file.name}...`;
    await saveMediaBlob("custom_video", file);
    videoDropzoneLabel.textContent = `✅ Video geladen: ${file.name}`;
    bgVideo.src = URL.createObjectURL(file);
    bgVideo.load();
    if (isPlaying) bgVideo.play().catch(() => {});
  }

  audioDropzone.addEventListener("click", () => inputAudioFile.click());
  inputAudioFile.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleAudioUpload(e.target.files[0]);
    }
  });

  async function handleAudioUpload(file) {
    audioDropzoneLabel.textContent = `⏳ Lade ${file.name}...`;
    await saveMediaBlob("custom_audio", file);
    audioDropzoneLabel.textContent = `✅ Musik geladen: ${file.name}`;
    bgAudio.src = URL.createObjectURL(file);
    bgAudio.load();
    if (isPlaying) bgAudio.play().catch(() => {});
  }

  inputAvatarFile.addEventListener("change", async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      await saveMediaBlob("custom_avatar", file);
      profileAvatar.src = URL.createObjectURL(file);
    }
  });

  // --------------------------------------------------
  // 6. ADMIN LINKS LIST MANAGER
  // --------------------------------------------------
  function populateAdminLinksList() {
    adminLinksList.innerHTML = "";
    activeConfig.links.forEach((link, idx) => {
      const row = document.createElement("div");
      row.className = "link-editor-item";

      const iconKey = (link.icon || link.name || "").toLowerCase();
      const svgIcon = ICONS[iconKey] || ICONS.default;

      row.innerHTML = `
        <div class="link-item-icon">${svgIcon}</div>
        <div class="link-item-fields">
          <select class="admin-select link-platform-select" data-idx="${idx}">
            <option value="spotify" ${iconKey === "spotify" ? "selected" : ""}>Spotify</option>
            <option value="instagram" ${iconKey === "instagram" ? "selected" : ""}>Instagram</option>
            <option value="snapchat" ${iconKey === "snapchat" ? "selected" : ""}>Snapchat</option>
            <option value="github" ${iconKey === "github" ? "selected" : ""}>GitHub</option>
            <option value="discord" ${iconKey === "discord" ? "selected" : ""}>Discord</option>
            <option value="tiktok" ${iconKey === "tiktok" ? "selected" : ""}>TikTok</option>
            <option value="youtube" ${iconKey === "youtube" ? "selected" : ""}>YouTube</option>
            <option value="twitch" ${iconKey === "twitch" ? "selected" : ""}>Twitch</option>
            <option value="steam" ${iconKey === "steam" ? "selected" : ""}>Steam</option>
            <option value="telegram" ${iconKey === "telegram" ? "selected" : ""}>Telegram</option>
            <option value="twitter" ${iconKey === "twitter" ? "selected" : ""}>X / Twitter</option>
            <option value="custom" ${!ICONS[iconKey] ? "selected" : ""}>Eigener Link</option>
          </select>
          <input type="text" class="admin-input link-url-input" data-idx="${idx}" placeholder="URL (https://...)" value="${link.url || ""}">
          <input type="text" class="admin-input link-desc-input" data-idx="${idx}" placeholder="Beschreibung / Tooltip" value="${link.description || link.name || ""}">
        </div>
        <button class="btn-del-link" data-idx="${idx}" title="Löschen">
          <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </button>
      `;

      adminLinksList.appendChild(row);
    });

    // Attach listeners
    adminLinksList.querySelectorAll(".link-platform-select").forEach(sel => {
      sel.addEventListener("change", (e) => {
        const i = e.target.getAttribute("data-idx");
        activeConfig.links[i].icon = e.target.value;
        if (e.target.value !== "custom") activeConfig.links[i].name = e.target.options[e.target.selectedIndex].text;
        populateAdminLinksList();
      });
    });

    adminLinksList.querySelectorAll(".link-url-input").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const i = e.target.getAttribute("data-idx");
        activeConfig.links[i].url = e.target.value;
      });
    });

    adminLinksList.querySelectorAll(".link-desc-input").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const i = e.target.getAttribute("data-idx");
        activeConfig.links[i].description = e.target.value;
      });
    });

    adminLinksList.querySelectorAll(".btn-del-link").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const i = parseInt(btn.getAttribute("data-idx"), 10);
        activeConfig.links.splice(i, 1);
        populateAdminLinksList();
      });
    });
  }

  btnAddLink.addEventListener("click", () => {
    activeConfig.links.push({
      name: "Neuer Link",
      url: "https://",
      icon: "spotify",
      description: "Mein Link"
    });
    populateAdminLinksList();
  });

  // --------------------------------------------------
  // 7. SAVE LOCALLY & LIVE PREVIEW
  // --------------------------------------------------
  function saveCurrentAdminInputs() {
    activeConfig.profile.name = inputProfileName.value.trim() || "Jonas";
    activeConfig.profile.location = inputProfileLocation.value.trim() || "FFM";
    if (inputAvatarUrl.value.trim()) activeConfig.profile.avatar = inputAvatarUrl.value.trim();
    
    const views = parseInt(inputProfileViews.value, 10);
    if (!isNaN(views)) {
      activeConfig.profile.viewsStart = views;
      localStorage.setItem("jonas_profile_views", views);
      updateViewCountDisplay(views);
      syncGlobalViews(views);
    }

    if (!activeConfig.discord) activeConfig.discord = {};
    if (inputDiscordId) activeConfig.discord.userId = inputDiscordId.value.trim() || "453756683886264321";
    if (checkDiscordAvatar) activeConfig.discord.useDiscordAvatar = checkDiscordAvatar.checked;
    if (checkDiscordPresence) activeConfig.discord.showPresenceCard = checkDiscordPresence.checked;
    activeConfig.discord.enabled = true;

    if (inputVideoUrl.value.trim()) activeConfig.media.videoSrc = inputVideoUrl.value.trim();
    if (inputAudioUrl && inputAudioUrl.value.trim()) activeConfig.media.audioSrc = inputAudioUrl.value.trim();
    activeConfig.media.trackTitle = inputTrackTitle.value.trim();
    activeConfig.media.trackArtist = inputTrackArtist.value.trim();
    activeConfig.media.defaultVolume = parseFloat(inputDefaultVolume.value);

    activeConfig.effects.splashText = inputSplashText.value.trim();
    activeConfig.effects.glowColor = inputGlowColor.value;
    activeConfig.effects.ambientMode = selectAmbientParticles.value;
    activeConfig.effects.glassBlur = parseInt(inputGlassBlur.value, 10);
    activeConfig.effects.audioVisualizer = selectEqualizerToggle.value === "true";
    if (inputProfileBadge) activeConfig.profile.badge = inputProfileBadge.value.trim() || "VIP";
    if (checkCustomCursor) activeConfig.effects.customCursor = checkCustomCursor.checked;
    if (checkCursorSpotlight) activeConfig.effects.cursorSpotlight = checkCursorSpotlight.checked;
    if (checkClickSparkles) activeConfig.effects.clickSparkles = checkClickSparkles.checked;
    if (checkEnableSfx) activeConfig.effects.enableSfx = checkEnableSfx.checked;

    localStorage.setItem("jonas_active_config", JSON.stringify(activeConfig));
    applyActiveConfig();
    showToast("💾 Einstellungen erfolgreich gespeichert!", "success");
  }

  btnSavePanel.addEventListener("click", () => {
    saveCurrentAdminInputs();
    adminPanelModal.classList.add("hidden");
  });

  // Theme Presets Click Listener
  document.querySelectorAll(".preset-card[data-preset]").forEach(card => {
    card.addEventListener("click", () => {
      const presetKey = card.getAttribute("data-preset");
      const p = THEMES[presetKey];
      if (!p) return;

      document.querySelectorAll(".preset-card").forEach(c => c.classList.remove("active-preset"));
      card.classList.add("active-preset");

      inputGlowColor.value = p.glowColor;
      glowColorPreview.textContent = p.glowColor;
      selectAmbientParticles.value = p.ambientMode;
      inputGlassBlur.value = p.glassBlur;
      if (inputProfileBadge) inputProfileBadge.value = p.badge;
      inputSplashText.value = p.splashText;

      document.documentElement.style.setProperty("--accent-glow", p.glowColor);
      document.documentElement.style.setProperty("--glass-blur", `${p.glassBlur}px`);
      ambientMode = p.ambientMode;
      splashPrompt.textContent = p.splashText;
      if (profileBadge) profileBadge.textContent = p.badge;

      showToast(`🎨 Preset "${p.name}" angewendet!`, "success");
    });
  });

  // Color Swatches Click Listener
  document.querySelectorAll(".color-swatch-circle[data-swatch]").forEach(swatch => {
    swatch.addEventListener("click", () => {
      const col = swatch.getAttribute("data-swatch");
      inputGlowColor.value = col;
      glowColorPreview.textContent = col;
      document.documentElement.style.setProperty("--accent-glow", col);
      playSfx("click");
      showToast(`🎨 Akzentfarbe auf ${col} geändert!`, "info");
    });
  });

  // Quick Add Social Link Chips
  document.querySelectorAll(".chip-btn[data-add-platform]").forEach(btn => {
    btn.addEventListener("click", () => {
      const platform = btn.getAttribute("data-add-platform");
      const platformNames = {
        spotify: "Spotify",
        instagram: "Instagram",
        snapchat: "Snapchat",
        github: "GitHub",
        discord: "Discord",
        tiktok: "TikTok",
        youtube: "YouTube",
        twitch: "Twitch",
        steam: "Steam",
        telegram: "Telegram",
        twitter: "Twitter / X"
      };
      const platformUrls = {
        spotify: "https://open.spotify.com",
        instagram: "https://instagram.com",
        snapchat: "https://snapchat.com",
        github: "https://github.com",
        discord: "https://discord.gg",
        tiktok: "https://tiktok.com",
        youtube: "https://youtube.com",
        twitch: "https://twitch.tv",
        steam: "https://steamcommunity.com",
        telegram: "https://t.me",
        twitter: "https://x.com"
      };

      if (!activeConfig.links) activeConfig.links = [];
      activeConfig.links.push({
        name: platformNames[platform] || platform,
        url: platformUrls[platform] || "https://",
        icon: platform,
        description: `@${(activeConfig.profile.name || "jonas").toLowerCase()}`
      });
      populateAdminLinksList();
      showToast(`🔗 ${platformNames[platform] || platform} hinzugefügt!`, "info");
    });
  });

  // Audio Preview Test Button in Media Tab
  if (btnPreviewAudio) {
    let previewPlaying = false;
    btnPreviewAudio.addEventListener("click", () => {
      const audioUrl = inputAudioUrl.value.trim() || activeConfig.media.audioSrc || "assets/bg-audio.mp3";
      if (!previewPlaying) {
        bgAudio.src = audioUrl;
        bgAudio.play().then(() => {
          previewPlaying = true;
          btnPreviewAudio.innerHTML = `<span>⏸️ Song stoppen</span>`;
          btnPreviewAudio.classList.add("btn-accent-sm");
        }).catch(err => {
          alert("Konnte Audio nicht abspielen: " + err.message);
        });
      } else {
        bgAudio.pause();
        previewPlaying = false;
        btnPreviewAudio.innerHTML = `<span>▶️ Song im Dashboard testen</span>`;
        btnPreviewAudio.classList.remove("btn-accent-sm");
      }
    });
  }

  // SFX Test Button
  if (btnTestSfx) {
    btnTestSfx.addEventListener("click", () => {
      playSfx("click");
      setTimeout(() => playSfx("success"), 140);
      showToast("🔊 Soundeffekt abgespielt!", "info");
    });
  }

  // Test Global View Button
  if (btnTestView) {
    btnTestView.addEventListener("click", async () => {
      btnTestView.disabled = true;
      btnTestView.textContent = "⏳ Lädt...";
      await recordGlobalPageView();
      btnTestView.disabled = false;
      btnTestView.textContent = "+1 Test";
      showToast("📈 +1 Globaler Aufruf simuliert!", "success");
    });
  }

  // Global Keyboard Shortcuts (Esc = close, Ctrl+S = save)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !adminPanelModal.classList.contains("hidden")) {
      adminPanelModal.classList.add("hidden");
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
      if (!adminPanelModal.classList.contains("hidden")) {
        e.preventDefault();
        saveCurrentAdminInputs();
      }
    }
  });

  // Reset Defaults
  btnResetDefaults.addEventListener("click", () => {
    if (confirm("Möchtest du wirklich alle Einstellungen auf die Standardwerte zurücksetzen?")) {
      localStorage.removeItem("jonas_active_config");
      activeConfig = JSON.parse(JSON.stringify(CONFIG));
      applyActiveConfig();
      initGlobalViewCounter();
      populateAdminFields();
      alert("Einstellungen zurückgesetzt!");
    }
  });

  // Change Password
  btnSaveNewPassword.addEventListener("click", async () => {
    const pw = inputNewPassword.value.trim();
    if (!pw) return;
    const h = await hashString(pw);
    localStorage.setItem("jonas_admin_hash", h);
    activeConfig.adminPasswordHash = h;
    localStorage.setItem("jonas_active_config", JSON.stringify(activeConfig));
    inputNewPassword.value = "";
    passwordChangeStatus.textContent = "✅ Admin-Passwort erfolgreich aktualisiert!";
    passwordChangeStatus.classList.remove("hidden");
    setTimeout(() => passwordChangeStatus.classList.add("hidden"), 3500);
  });

  // --------------------------------------------------
  // 8. EXPORT & GITHUB API SYNC
  // --------------------------------------------------
  function generateConfigFileContent() {
    return `/**
 * ========================================================
 * 🌟 JONAS PROFILE CONFIGURATION (guns.lol Style)
 * Generiert über das Web Admin Control Panel
 * ========================================================
 */

const CONFIG = ${JSON.stringify(activeConfig, null, 2)};
`;
  }

  btnDownloadConfig.addEventListener("click", () => {
    saveCurrentAdminInputs();
    const content = generateConfigFileContent();
    const blob = new Blob([content], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.js";
    a.click();
    URL.revokeObjectURL(url);
  });

  // Push to GitHub via API
  btnGithubPush.addEventListener("click", async () => {
    saveCurrentAdminInputs();
    const token = inputGithubToken.value.trim();
    if (!token) {
      alert("Bitte gib zuerst dein GitHub Personal Access Token (PAT) ein!");
      return;
    }

    localStorage.setItem("jonas_gh_token", token);
    githubSyncStatus.className = "sync-status loading";
    githubSyncStatus.textContent = "⏳ Verbinde mit GitHub & speichere config.js...";
    githubSyncStatus.classList.remove("hidden");

    try {
      const repo = "Jonasmzzz/Jonasmzzz.github.io";
      const filePath = "config.js";
      const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;

      // 1. Get current SHA of config.js
      let currentSha = null;
      const getRes = await fetch(apiUrl, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github.v3+json"
        }
      });

      if (getRes.ok) {
        const fileData = await getRes.json();
        currentSha = fileData.sha;
      }

      // 2. Prepare Base64 Content (Unicode safe)
      const newContent = generateConfigFileContent();
      const base64Content = btoa(unescape(encodeURIComponent(newContent)));

      // 3. Commit & Push to GitHub
      const putRes = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "update profile from admin panel [skip ci]",
          content: base64Content,
          sha: currentSha || undefined
        })
      });

      if (!putRes.ok) {
        const errJson = await putRes.json();
        throw new Error(errJson.message || "Fehler beim Hochladen auf GitHub.");
      }

      githubSyncStatus.className = "sync-status success";
      githubSyncStatus.textContent = "🚀 Erfolgreich auf GitHub gespeichert! In ~30 Sekunden ist es weltweit live.";
    } catch (err) {
      console.error("GitHub Sync Error:", err);
      githubSyncStatus.className = "sync-status error";
      githubSyncStatus.textContent = `❌ Fehler: ${err.message}`;
    }
  });

  // Initialize UI & Interactive Effects
  applyActiveConfig();
  initGlobalViewCounter();
  initAmbientCanvas();
  initCardInteractiveEffects();
  initCustomCursor();
});

// ----------------------------------------------------
// 3D CARD PARALLAX TILT, CURSOR SPOTLIGHT & CLICK SPARKLES
// ----------------------------------------------------
let globalMouse = { x: -1000, y: -1000 };

function initCardInteractiveEffects() {
  const card = document.getElementById("profile-card");
  const spotlight = document.getElementById("cursor-spotlight");

  window.addEventListener("mousemove", (e) => {
    globalMouse.x = e.clientX;
    globalMouse.y = e.clientY;

    if (spotlight) {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }

    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const distX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const distY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      const tiltX = -distY * 7;
      const tiltY = distX * 7;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    }
  });

  window.addEventListener("mouseleave", () => {
    if (card) card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });

  // Interactive Click Sparkle Particle Burst
  window.addEventListener("click", (e) => {
    if (activeConfig.effects?.clickSparkles !== false) {
      spawnClickSparkles(e.clientX, e.clientY);
    }
  });
}

const sparkleParticles = [];
function spawnClickSparkles(x, y) {
  const count = 12;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const speed = Math.random() * 3 + 1.5;
    sparkleParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 2 + 1,
      alpha: 1,
      decay: Math.random() * 0.025 + 0.02,
      color: "#ffffff"
    });
  }
}

// ----------------------------------------------------
// DYNAMIC AMBIENT CANVAS (Multi-Mode Particle Engine)
// ----------------------------------------------------
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  // ---- Stars / Snow particles ----
  const particles = [];
  function initParticles() {
    particles.length = 0;
    const count = width < 600 ? 50 : 90;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.75 + 0.2,
        pulseSpeed: Math.random() * 0.025 + 0.008,
      });
    }
  }
  initParticles();

  // ---- Matrix columns ----
  const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF";
  let matrixCols = [];
  function initMatrix() {
    const colWidth = 16;
    const numCols = Math.floor(width / colWidth);
    matrixCols = [];
    for (let i = 0; i < numCols; i++) {
      matrixCols.push({
        x: i * colWidth + colWidth / 2,
        y: Math.random() * -height,
        speed: Math.random() * 1.5 + 0.6,
        length: Math.floor(Math.random() * 18 + 8),
        chars: Array.from({ length: 28 }, () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]),
        charTimer: 0,
      });
    }
  }
  initMatrix();

  // ---- Rain streaks ----
  let rainDrops = [];
  function initRain() {
    rainDrops = [];
    const count = Math.floor(width / 12);
    for (let i = 0; i < count; i++) {
      rainDrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 18 + 8,
        speed: Math.random() * 5 + 4,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }
  }
  initRain();

  // ---- Embers ----
  let embers = [];
  function initEmbers() {
    embers = [];
    const count = 70;
    for (let i = 0; i < count; i++) {
      embers.push(spawnEmber());
    }
  }
  function spawnEmber() {
    return {
      x: Math.random() * width,
      y: height + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 1.5 + 0.5),
      radius: Math.random() * 2.2 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      life: 1,
      decay: Math.random() * 0.004 + 0.002,
    };
  }
  initEmbers();

  // ---- Accent color helper ----
  function getAccentColor() {
    return getComputedStyle(document.documentElement).getPropertyValue("--accent-glow").trim() || "#ffffff";
  }

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return `${r},${g},${b}`;
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const mode = ambientMode;

    if (mode === "none") {
      // Only sparkles
      drawSparkles();
      requestAnimationFrame(render);
      return;
    }

    const accent = getAccentColor();
    const rgb = hexToRgb(accent);

    // =========================================
    // MODE: MATRIX
    // =========================================
    if (mode === "matrix") {
      matrixCols.forEach(col => {
        col.charTimer++;
        if (col.charTimer % 6 === 0) {
          // Randomize one character in the trail
          const idx = Math.floor(Math.random() * col.chars.length);
          col.chars[idx] = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        }

        const charHeight = 16;
        for (let j = 0; j < col.length; j++) {
          const cy = col.y - j * charHeight;
          if (cy < 0 || cy > height) continue;
          const ratio = 1 - j / col.length;
          const a = j === 0 ? 1 : ratio * 0.6;
          // Head is bright accent, trail fades green
          if (j === 0) {
            ctx.fillStyle = `rgba(255,255,255,${a})`;
          } else {
            ctx.fillStyle = `rgba(${rgb},${a})`;
          }
          ctx.font = `${charHeight - 2}px monospace`;
          ctx.fillText(col.chars[j % col.chars.length], col.x - 5, cy);
        }

        col.y += col.speed;
        if (col.y - col.length * 16 > height) {
          col.y = -Math.random() * height * 0.5;
          col.speed = Math.random() * 1.5 + 0.6;
        }
      });
    }

    // =========================================
    // MODE: RAIN
    // =========================================
    else if (mode === "rain") {
      rainDrops.forEach(drop => {
        ctx.beginPath();
        // Slanted rain at 15 degrees
        const angle = Math.PI / 12;
        const dx = Math.sin(angle) * drop.length;
        const dy = Math.cos(angle) * drop.length;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + dx, drop.y + dy);
        ctx.strokeStyle = `rgba(${rgb},${drop.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += drop.speed * Math.tan(angle);
        if (drop.y > height || drop.x > width) {
          drop.x = Math.random() * width;
          drop.y = -drop.length;
        }
      });
    }

    // =========================================
    // MODE: EMBERS
    // =========================================
    else if (mode === "embers") {
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx + Math.sin(Date.now() * 0.001 + i) * 0.3;
        e.y += e.vy;
        e.life -= e.decay;
        e.alpha = e.life * 0.85;

        if (e.life <= 0) {
          embers[i] = spawnEmber();
          continue;
        }

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${e.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${rgb},0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // =========================================
    // MODE: STARS (default constellation)
    // =========================================
    else if (mode === "stars" || mode === "snow") {
      const isSnow = mode === "snow";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isSnow) {
          p.y += Math.abs(p.speedY) + 0.5;
          p.x += Math.sin(Date.now() * 0.001 + i) * 0.25;
        } else {
          p.x += p.speedX;
          p.y += p.speedY;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = isSnow ? 0 : height;

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
        const displayAlpha = Math.max(0.1, Math.min(0.9, p.alpha));

        // Cursor attraction lines
        const dxM = globalMouse.x - p.x;
        const dyM = globalMouse.y - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 120 && !isSnow) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(globalMouse.x, globalMouse.y);
          ctx.strokeStyle = `rgba(${rgb},${0.2 * (1 - distM / 120)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }

        if (isSnow) {
          // Snowflake-ish shape
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${displayAlpha})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${displayAlpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${rgb},0.9)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    drawSparkles();
    requestAnimationFrame(render);
  }

  function drawSparkles() {
    // Click Sparkles
    for (let i = sparkleParticles.length - 1; i >= 0; i--) {
      const sp = sparkleParticles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.vy += 0.045;
      sp.alpha -= sp.decay;
      if (sp.alpha <= 0) { sparkleParticles.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${sp.alpha})`;
      ctx.shadowBlur = 14;
      ctx.shadowColor = "rgba(255,255,255,1)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  render();
}

// ----------------------------------------------------
// CUSTOM CROSSHAIR CURSOR (Guns.lol Style)
// ----------------------------------------------------
function initCustomCursor() {
  const crosshair = document.getElementById("guns-crosshair");
  if (!crosshair) return;

  let cursorX = -200, cursorY = -200;
  let isClicking = false;

  function moveCursor(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursorX = x;
    cursorY = y;
    crosshair.style.transform = `translate(${x}px, ${y}px) ${isClicking ? "scale(0.78)" : "scale(1)"}`;
  }

  document.addEventListener("mousemove", moveCursor);

  document.addEventListener("mousedown", () => {
    isClicking = true;
    crosshair.classList.add("is-clicking");
    crosshair.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(0.78)`;
  });

  document.addEventListener("mouseup", () => {
    isClicking = false;
    crosshair.classList.remove("is-clicking");
    crosshair.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
  });

  document.addEventListener("mouseleave", () => {
    crosshair.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    if (activeConfig.effects?.customCursor !== false) {
      crosshair.style.opacity = "1";
    }
  });
}
