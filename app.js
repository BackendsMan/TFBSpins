const STORAGE_KEY = "tfbSpinHistory";
const SETTINGS_KEY = "tfbSpinSettings";
const THEME_KEY = "tfbTheme";
const ITEM_H = 138;
const WIN_IDX = 62;

const TIERS = {
  test: { label: "TEST", rewards: 2 },
  t1: { label: "TIER 1", rewards: 4 },
  "t1.5": { label: "TIER 1.5", rewards: 4 },
  t2: { label: "TIER 2", rewards: 4 },
};

const TIER_ORDER = ["test", "t1", "t1.5", "t2"];
const SPIN_TYPES = {
  gun: { label: "Gun Spins", detail: "Only weapon drops from your tier pool" },
  drug: { label: "Drug Spins", detail: "Small / large faction drops based on tier" },
  bullet: { label: "Bullet Spins", detail: "Bullet rewards based on tier access" },
};
const FILTERS = ["all", "common", "uncommon", "rare", "epic", "legendary", "mythic"];
const SPEEDS = { fast: 3000, normal: 4650, cinematic: 5800 };

const SETTINGS_DEFAULTS = {
  theme: "dark",
  musicVolume: 60,
  bgOpacity: 48,
  videoBlur: 0,
  videoBrightness: 82,
  floatStrength: 12,
  confetti: true,
  showBgVideo: true,
  showFloating: true,
  managerName: "Faction Management",
  spinSpeed: "normal",
};

const PLAYLIST = [
  { id: 1, title: "Keke", artist: "Headtapp Gz", audio: "MP3/Music1.mp3", video: "MP4/Music1.mp4" },
  { id: 2, title: "Strictly 4 The Fans", artist: "Rennytherapper", audio: "MP3/Music2.mp3", video: "MP4/Music2.mp4" },
  { id: 3, title: "Forget You", artist: "Kdot B", audio: "MP3/Music3.mp3", video: "MP4/Music3.mp4" },
  { id: 4, title: "Clock It", artist: "Dotty B", audio: "MP3/Music4.mp3", video: "MP4/Music4.mp4" },
];

const imageFiles = [
  "WEAPON_SD40T.png", "WEAPON_R57B.png", "WEAPON_PSAP80G19SWITCH.png", "WEAPON_PSAP8019.png", "WEAPON_PSAFN57.png",
  "WEAPON_PSADHALFNHALF.png", "WEAPON_PSADG20.png", "WEAPON_P320CS.png", "WEAPON_MPADC.png", "WEAPON_MP20FRT.png",
  "WEAPON_MICRODRACCUSTOM.png", "WEAPON_KG43X.png", "WEAPON_G45G5RS.png", "WEAPON_G45CAMO.png", "WEAPON_G45AV.png",
  "WEAPON_G40MOSRS.png", "WEAPON_G31G5GS.png", "WEAPON_G24SWITCHI.png", "WEAPON_G23G5SWITCHG.png", "WEAPON_G22G4SR.png",
  "WEAPON_G22G4SP.png", "WEAPON_G22G4SG.png", "WEAPON_G22G4SB.png", "WEAPON_G21CGFLEX.png", "WEAPON_G20CGFLEX.png",
  "WEAPON_G19XCOYOTE.png", "WEAPON_G19G5RS.png", "WEAPON_G19G5MOSSWITCH.png", "WEAPON_G17G3P80.png", "WEAPON_G17CG4.png",
  "WEAPON_FULLYARPCUSTOM.png", "WEAPON_FN502T.png", "WEAPON_CUSTOM75ARP.png", "WEAPON_CMP92.png", "WEAPON_CG45SS.png",
  "WEAPON_BDB.png", "WEAPON_762MINIAR.png", "WEAPON_4INCHARPCUS.png", "WEAPON_4INCHARPBLUE.png", "ammo-rifle2.png",
  "ammo-rifle.png", "ammo-9.png", "ammo-57x28.png", "ammo-45.png", "ammo-40.png", "ammo-357s.png", "ammo-22.png", "ammo-10.png"
];

const nameOverrides = {
  WEAPON_SD40T: "Smith & Wesson SD40 Tactical",
  WEAPON_R57B: "Ruger 57 Blackout",
  WEAPON_PSAP80G19SWITCH: "PSA P80 Glock 19 Switch",
  WEAPON_PSAP8019: "PSA Polymer 80 Glock 19",
  WEAPON_PSAFN57: "PSA FN 5.7",
  WEAPON_PSADHALFNHALF: "PSA Double Tone Glock",
  WEAPON_PSADG20: "PSA Delta Glock 20",
  WEAPON_P320CS: "Sig P320 Compact Slide",
  WEAPON_MPADC: "MPA Defender Compact",
  WEAPON_MP20FRT: "MP20 FRT",
  WEAPON_MICRODRACCUSTOM: "Micro Draco Custom",
  WEAPON_KG43X: "KG 43X",
  WEAPON_G45G5RS: "Glock 45 Gen 5 Red Slide",
  WEAPON_G45CAMO: "Glock 45 Camo",
  WEAPON_G45AV: "Glock 45 Avid Variant",
  WEAPON_G40MOSRS: "Glock 40 MOS Race Slide",
  WEAPON_G31G5GS: "Glock 31 Gen 5 Green Slide",
  WEAPON_G24SWITCHI: "Glock 24 Switch Ice",
  WEAPON_G23G5SWITCHG: "Glock 23 Gen 5 Switch Green",
  WEAPON_G22G4SR: "Glock 22 Gen 4 Scarlet",
  WEAPON_G22G4SP: "Glock 22 Gen 4 Purple",
  WEAPON_G22G4SG: "Glock 22 Gen 4 Sage",
  WEAPON_G22G4SB: "Glock 22 Gen 4 Blue",
  WEAPON_G21CGFLEX: "Glock 21C Flex",
  WEAPON_G20CGFLEX: "Glock 20C Flex",
  WEAPON_G19XCOYOTE: "Glock 19X Coyote",
  WEAPON_G19G5RS: "Glock 19 Gen 5 Red Slide",
  WEAPON_G19G5MOSSWITCH: "Glock 19 Gen 5 MOS Switch",
  WEAPON_G17G3P80: "Glock 17 Gen 3 P80",
  WEAPON_G17CG4: "Glock 17C Gen 4",
  WEAPON_FULLYARPCUSTOM: "Fully Automatic ARP Custom",
  WEAPON_FN502T: "FN 502 Tactical",
  WEAPON_CUSTOM75ARP: "Custom 7.5 ARP",
  WEAPON_CMP92: "CMP 92",
  WEAPON_CG45SS: "Compact Glock 45 Steel Slide",
  WEAPON_BDB: "BDB Bullpup",
  WEAPON_762MINIAR: "7.62 Mini AR",
  WEAPON_4INCHARPCUS: "4 Inch ARP Custom",
  WEAPON_4INCHARPBLUE: "4 Inch ARP Blue",
};

const specialItems = [
  { name: "Street Baggie Pack", rarity: "common", category: "Drug Drops", type: "drug", image: "Images/TFB Logo.png", tierAccess: ["test", "t1"], weight: 36, description: "Small faction package for lower-tier spins." },
  { name: "Vacuum Brick Pack", rarity: "rare", category: "Drug Drops", type: "drug", image: "Images/TFB Logo.png", tierAccess: ["t1", "t1.5", "t2"], weight: 14, description: "Larger faction package with stronger value." },
  { name: "Executive Brick Crate", rarity: "legendary", category: "Drug Drops", type: "drug", image: "Images/TFB Logo.png", tierAccess: ["t2"], weight: 4, description: "Top-tier faction crate reserved for elite management spins." },
];

const state = {
  tier: "test",
  spinType: "gun",
  filter: "all",
  spinning: false,
  pending: [],
  pendingGroup: "",
  history: loadHistory(),
  selectedGroup: "all",
  currentTrackIndex: 0,
  settings: loadSettings(),
  player: null,
};

const elements = mapElements();
const items = [...buildGeneratedItems(), ...specialItems];

function mapElements() {
  return {
    body: document.body,
    ambient: document.querySelector(".ambient"),
    gate: document.getElementById("gate"),
    typeTitle: document.getElementById("typeTitle"),
    navButtons: [...document.querySelectorAll(".navBtn[data-view]")],
    views: {
      spin: document.getElementById("spinView"),
      history: document.getElementById("historyView"),
      settings: document.getElementById("settingsView"),
    },
    bgVideo: document.getElementById("bgVideo"),
    audio: document.getElementById("music"),
    audioAlt: document.getElementById("musicAlt"),
    currentTrackName: document.getElementById("currentTrackName"),
    currentArtist: document.getElementById("currentArtist"),
    songCounter: document.getElementById("songCounter"),
    currentTimeLabel: document.getElementById("currentTimeLabel"),
    remainingTimeLabel: document.getElementById("remainingTimeLabel"),
    totalTimeLabel: document.getElementById("totalTimeLabel"),
    seekSlider: document.getElementById("seekSlider"),
    timelineRail: document.getElementById("timelineRail"),
    timelineBuffer: document.getElementById("timelineBuffer"),
    timelineProgress: document.getElementById("timelineProgress"),
    playBtn: document.getElementById("playBtn"),
    prevTrackBtn: document.getElementById("prevTrackBtn"),
    nextTrackBtn: document.getElementById("nextTrackBtn"),
    muteBtn: document.getElementById("muteBtn"),
    playerVolume: document.getElementById("playerVolume"),
    volumeFill: document.getElementById("volumeFill"),
    playlistStatus: document.getElementById("playlistStatus"),
    groupInput: document.getElementById("groupInput"),
    tierTabs: document.getElementById("tierTabs"),
    filterChips: document.getElementById("filterChips"),
    spinTypes: document.getElementById("spinTypes"),
    poolCount: document.getElementById("poolCount"),
    items: document.getElementById("items"),
    dropBtn: document.getElementById("dropBtn"),
    heroHeading: document.getElementById("heroHeading"),
    heroSub: document.getElementById("heroSub"),
    heroTrackCounter: document.getElementById("heroTrackCounter"),
    historyCountTop: document.getElementById("historyCountTop"),
    heroPlaylistStatus: document.getElementById("heroPlaylistStatus"),
    managerWelcome: document.getElementById("managerWelcome"),
    ruleTier: document.getElementById("ruleTier"),
    themeLabel: document.getElementById("themeLabel"),
    themeButtons: document.getElementById("themeButtons"),
    settingsThemeButtons: document.getElementById("settingsThemeButtons"),
    setMusicVolume: document.getElementById("setMusicVolume"),
    setBgOpacity: document.getElementById("setBgOpacity"),
    setVideoBlur: document.getElementById("setVideoBlur"),
    setVideoBrightness: document.getElementById("setVideoBrightness"),
    setFloatStrength: document.getElementById("setFloatStrength"),
    setShowBgVideo: document.getElementById("setShowBgVideo"),
    setConfetti: document.getElementById("setConfetti"),
    settingsPrevTrack: document.getElementById("settingsPrevTrack"),
    settingsPlayPause: document.getElementById("settingsPlayPause"),
    settingsNextTrack: document.getElementById("settingsNextTrack"),
    settingsMuteToggle: document.getElementById("settingsMuteToggle"),
    settingsTrackLabel: document.getElementById("settingsTrackLabel"),
    playlistIndicator: document.getElementById("playlistIndicator"),
    settingsClearHistory: document.getElementById("settingsClearHistory"),
    settingsReset: document.getElementById("settingsReset"),
    settingsClearLocal: document.getElementById("settingsClearLocal"),
    groupList: document.getElementById("groupList"),
    historyHeading: document.getElementById("historyHeading"),
    historySub: document.getElementById("historySub"),
    historyRows: document.getElementById("historyRows"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn"),
    exportBtn: document.getElementById("exportBtn"),
    spinModal: document.getElementById("spinModal"),
    closeSpin: document.getElementById("closeSpin"),
    rollText: document.getElementById("rollText"),
    track: document.getElementById("track"),
    resultModal: document.getElementById("resultModal"),
    closeResult: document.getElementById("closeResult"),
    resultCount: document.getElementById("resultCount"),
    results: document.getElementById("results"),
    collectBtn: document.getElementById("collectBtn"),
    confettiCanvas: document.getElementById("confettiCanvas"),
    dotCanvas: document.getElementById("dotCanvas"),
  };
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadSettings() {
  try {
    return { ...SETTINGS_DEFAULTS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") };
  } catch {
    return { ...SETTINGS_DEFAULTS };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function buildGeneratedItems() {
  return imageFiles.map((file) => {
    const slug = file.replace(/\.png$/i, "");
    const upper = slug.toUpperCase();
    const lower = slug.toLowerCase();

    if (lower.startsWith("ammo-")) {
      const rifle = lower.includes("rifle");
      return {
        name: prettifyName(slug),
        image: `Images/${file}`,
        type: "bullet",
        category: rifle ? "Rifle Ammo" : "Bullet Drops",
        rarity: lower.includes("rifle2") || lower.includes("57") ? "rare" : lower.includes("rifle") ? "uncommon" : "common",
        tierAccess: rifle ? ["t1", "t1.5", "t2"] : ["test", "t1", "t1.5", "t2"],
        weight: lower.includes("rifle2") ? 8 : 22,
        description: rifle ? "Rifle ammunition reward for upper-tier weapon pools." : "Handgun ammunition reward weighted to the selected tier.",
      };
    }

    return {
      name: nameOverrides[slug] || prettifyName(slug),
      image: `Images/${file}`,
      type: "gun",
      category: categoryForWeapon(upper),
      rarity: rarityForWeapon(upper),
      tierAccess: tierAccessForWeapon(upper),
      weight: weightForWeapon(upper),
      description: descriptionForWeapon(upper),
    };
  });
}

function categoryForWeapon(upper) {
  if (/(SWITCH)/.test(upper)) return "Switch Pistol";
  if (/(FULLY|FRT)/.test(upper)) return "Fully Automatic";
  if (/(DRAC|ARP|BDB|MINIAR|CMP92|MPADC)/.test(upper)) return "Semi Automatic";
  if (/(FN57|FN502|R57|G40|G20|G21|G31)/.test(upper)) return "Enhanced Pistol";
  return "Pistols";
}

function rarityForWeapon(upper) {
  if (upper.includes("FULLY")) return "mythic";
  if (upper.includes("FRT")) return "legendary";
  if (upper.includes("SWITCH") || /(MINIAR|CUSTOM75ARP|DRAC)/.test(upper)) return "epic";
  if (/(MOS|P80|CAMO|AV|RS|GS|SB|SG|SP|SR|COYOTE|G40|G20|G21|G31|BDB|CMP92)/.test(upper)) return "rare";
  return "uncommon";
}

function tierAccessForWeapon(upper) {
  if (upper.includes("FULLY") || upper.includes("FRT")) return ["t1.5", "t2"];
  if (upper.includes("SWITCH")) return ["t1.5", "t2"];
  if (/(MINIAR|CUSTOM75ARP|DRAC|BDB|CMP92|MPADC)/.test(upper)) return ["t1", "t1.5", "t2"];
  if (/(G40|G20|G21|G31|MOS|G24)/.test(upper)) return ["t1", "t1.5", "t2"];
  return ["test", "t1", "t1.5", "t2"];
}

function weightForWeapon(upper) {
  if (upper.includes("FULLY")) return 2;
  if (upper.includes("FRT")) return 4;
  if (upper.includes("SWITCH")) return 6;
  if (/(MINIAR|CUSTOM75ARP|DRAC)/.test(upper)) return 7;
  if (/(G40|G20|G21|G31|MOS)/.test(upper)) return 9;
  return 12;
}

function descriptionForWeapon(upper) {
  if (upper.includes("FULLY") || upper.includes("FRT")) return "High-end faction weapon reward reserved for elite spin pools.";
  if (upper.includes("SWITCH")) return "Upper-tier pistol build that lands only in stronger faction pools.";
  if (/(MINIAR|CUSTOM75ARP|DRAC|BDB|CMP92|MPADC)/.test(upper)) return "Compact rifle or machine-pistol platform weighted into stronger tiers.";
  if (/(FN57|FN502|R57|G40|G20|G21|G31)/.test(upper)) return "Enhanced-caliber sidearm reward with stronger faction value.";
  return "Faction weapon reward that can appear across the standard tier ladder.";
}

function prettifyName(slug) {
  const raw = slug
    .replace(/^WEAPON_/, "")
    .replace(/^ammo-/, "Ammo ")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)(\d)/g, "$1 $2")
    .replace(/(\d)([A-Z]+)/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();

  const map = {
    ammo: "Ammo",
    rifle: "Rifle",
    rifle2: "Rifle Mk2",
    glock: "Glock",
    custom: "Custom",
    fully: "Fully",
    p80: "P80",
    fn: "FN",
    psa: "PSA",
    arp: "ARP",
    mp: "MP",
  };

  return raw.split(" ").filter(Boolean).map((token) => map[token.toLowerCase()] || capitalize(token)).join(" ");
}

function init() {
  renderTypewriter();
  buildControls();
  bindEvents();
  state.player = new MediaPlayer(elements, state);
  applyTheme(state.settings.theme);
  applySettingsToUi();
  renderPool();
  renderHistory();
  setupConfettiCanvas();
  setupDotCanvas();
  state.player.init();
}

function renderTypewriter() {
  const text = "TFB SPINS";
  let index = 0;
  const timer = setInterval(() => {
    elements.typeTitle.textContent = text.slice(0, ++index);
    if (index >= text.length) clearInterval(timer);
  }, 85);
}

function buildControls() {
  elements.tierTabs.innerHTML = TIER_ORDER.map((tier) => `
    <button class="tierTab ${state.tier === tier ? "active" : ""}" data-tier="${tier}">
      ${TIERS[tier].label}
      <small>${TIERS[tier].rewards} Spins</small>
    </button>`).join("");

  elements.filterChips.innerHTML = FILTERS.map((filter) => `
    <button class="chip ${state.filter === filter ? "active" : ""}" data-filter="${filter}">${capitalize(filter)}</button>`).join("");

  elements.spinTypes.innerHTML = Object.entries(SPIN_TYPES).map(([type, meta]) => `
    <button class="spinType ${state.spinType === type ? "active" : ""}" data-type="${type}">
      <b>${meta.label}</b>
      <span>${meta.detail}</span>
    </button>`).join("");

  const themeMarkup = ["light", "dim", "dark"].map((theme) => `
    <button class="themeBtn ${state.settings.theme === theme ? "active" : ""}" data-theme="${theme}">${capitalize(theme)}</button>`).join("");
  elements.themeButtons.innerHTML = themeMarkup;
  elements.settingsThemeButtons.innerHTML = themeMarkup;
}

function bindEvents() {
  elements.gate.addEventListener("click", async () => {
    elements.gate.classList.add("hide");
    await state.player.play();
  });

  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  elements.dropBtn.addEventListener("click", startSpin);
  elements.clearHistoryBtn.addEventListener("click", clearHistory);
  elements.exportBtn.addEventListener("click", exportCSV);
  elements.settingsClearHistory.addEventListener("click", clearHistory);
  elements.settingsReset.addEventListener("click", resetSettings);
  elements.settingsClearLocal.addEventListener("click", clearLocalData);

  elements.playBtn.addEventListener("click", () => state.player.togglePlayback());
  elements.prevTrackBtn.addEventListener("click", () => state.player.changeTrack(-1));
  elements.nextTrackBtn.addEventListener("click", () => state.player.changeTrack(1));
  elements.muteBtn.addEventListener("click", () => state.player.toggleMute());
  elements.settingsPlayPause.addEventListener("click", () => state.player.togglePlayback());
  elements.settingsPrevTrack.addEventListener("click", () => state.player.changeTrack(-1));
  elements.settingsNextTrack.addEventListener("click", () => state.player.changeTrack(1));
  elements.settingsMuteToggle.addEventListener("click", () => state.player.toggleMute());
  elements.playerVolume.addEventListener("input", (event) => updateSetting("musicVolume", Number(event.target.value)));
  elements.setMusicVolume.addEventListener("input", (event) => updateSetting("musicVolume", Number(event.target.value)));
  elements.seekSlider.addEventListener("input", (event) => state.player.previewSeek(Number(event.target.value)));
  elements.seekSlider.addEventListener("change", (event) => state.player.commitSeek(Number(event.target.value)));
  elements.seekSlider.addEventListener("pointerdown", () => state.player.beginSeek());
  elements.seekSlider.addEventListener("pointerup", () => state.player.endSeek(Number(elements.seekSlider.value)));

  elements.setBgOpacity.addEventListener("input", (event) => updateSetting("bgOpacity", Number(event.target.value)));
  elements.setVideoBlur.addEventListener("input", (event) => updateSetting("videoBlur", Number(event.target.value)));
  elements.setVideoBrightness.addEventListener("input", (event) => updateSetting("videoBrightness", Number(event.target.value)));
  elements.setFloatStrength.addEventListener("input", (event) => updateSetting("floatStrength", Number(event.target.value)));
  elements.setShowBgVideo.addEventListener("change", (event) => updateSetting("showBgVideo", event.target.checked));
  elements.setConfetti.addEventListener("change", (event) => updateSetting("confetti", event.target.checked));

  document.addEventListener("click", (event) => {
    const tierButton = event.target.closest(".tierTab[data-tier]");
    const filterButton = event.target.closest(".chip[data-filter]");
    const typeButton = event.target.closest(".spinType[data-type]");
    const groupButton = event.target.closest(".groupRow[data-group]");
    const themeButton = event.target.closest(".themeBtn[data-theme]");

    if (tierButton) {
      state.tier = tierButton.dataset.tier;
      syncTierButtons();
      renderPool();
      return;
    }
    if (filterButton) {
      state.filter = filterButton.dataset.filter;
      syncFilterButtons();
      renderPool();
      return;
    }
    if (typeButton) {
      state.spinType = typeButton.dataset.type;
      syncSpinTypeButtons();
      renderPool();
      return;
    }
    if (groupButton) {
      state.selectedGroup = groupButton.dataset.group;
      renderHistory();
      return;
    }
    if (themeButton) {
      updateSetting("theme", themeButton.dataset.theme);
    }
  });

  elements.closeSpin.addEventListener("click", () => {
    if (!state.spinning) closeModal(elements.spinModal);
  });
  elements.closeResult.addEventListener("click", () => closeModal(elements.resultModal));
  elements.collectBtn.addEventListener("click", collectResults);
}

function setView(viewName) {
  elements.navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  Object.entries(elements.views).forEach(([name, node]) => node.classList.toggle("active", name === viewName));
  if (viewName === "history") renderHistory();
}

function updateSetting(key, value) {
  state.settings[key] = value;
  saveSettings();
  if (key === "theme") applyTheme(value);
  applySettingsToUi();
}

function applyTheme(theme) {
  elements.body.className = theme;
  localStorage.setItem(THEME_KEY, theme);
  buildControls();
}

function applySettingsToUi() {
  elements.setMusicVolume.value = state.settings.musicVolume;
  elements.playerVolume.value = state.settings.musicVolume;
  elements.setBgOpacity.value = state.settings.bgOpacity;
  elements.setVideoBlur.value = state.settings.videoBlur;
  elements.setVideoBrightness.value = state.settings.videoBrightness;
  elements.setFloatStrength.value = state.settings.floatStrength;
  elements.setShowBgVideo.checked = !!state.settings.showBgVideo;
  elements.setConfetti.checked = !!state.settings.confetti;
  elements.managerWelcome.textContent = state.settings.managerName;
  elements.themeLabel.textContent = state.settings.theme.toUpperCase();
  document.documentElement.style.setProperty("--floatAmt", `${state.settings.floatStrength}px`);
  elements.body.classList.toggle("hideBgVideo", !state.settings.showBgVideo);
  elements.body.classList.toggle("hideFloating", !state.settings.showFloating);
  elements.body.classList.toggle("noConfetti", !state.settings.confetti);
  const ambientAlpha = state.settings.bgOpacity / 100;
  elements.ambient.style.background = `radial-gradient(circle at 40% 0, rgba(232,0,13,.10), transparent 34%), radial-gradient(circle at 100% 45%, rgba(232,0,13,.07), transparent 28%), linear-gradient(180deg, rgba(5,6,10,${Math.max(.18, ambientAlpha * .72)}), rgba(2,3,7,${Math.max(.24, ambientAlpha)}))`;
  if (state.player) state.player.applySettings();
}

function syncTierButtons() {
  [...elements.tierTabs.querySelectorAll(".tierTab")].forEach((button) => button.classList.toggle("active", button.dataset.tier === state.tier));
}

function syncFilterButtons() {
  [...elements.filterChips.querySelectorAll(".chip")].forEach((button) => button.classList.toggle("active", button.dataset.filter === state.filter));
}

function syncSpinTypeButtons() {
  [...elements.spinTypes.querySelectorAll(".spinType")].forEach((button) => button.classList.toggle("active", button.dataset.type === state.spinType));
}

function getVisiblePool(ignoreFilter = false) {
  return items.filter((item) => item.type === state.spinType && item.tierAccess.includes(state.tier) && (ignoreFilter || state.filter === "all" || item.rarity === state.filter));
}

function renderPool() {
  const pool = getVisiblePool();
  elements.poolCount.textContent = `${pool.length} items`;
  elements.ruleTier.textContent = TIERS[state.tier].label;
  elements.heroHeading.textContent = SPIN_TYPES[state.spinType].label;
  elements.heroSub.textContent = `${TIERS[state.tier].label} awards ${TIERS[state.tier].rewards} weighted rewards from the ${SPIN_TYPES[state.spinType].label.toLowerCase()} pool.`;

  if (!pool.length) {
    elements.items.innerHTML = `<div class="emptyState">No ${SPIN_TYPES[state.spinType].label.toLowerCase()} are available for this tier and filter.</div>`;
    return;
  }

  elements.items.innerHTML = pool.map((item, index) => `
    <div class="card" style="animation-delay:${Math.min(index, 10) * 42}ms">
      <div class="thumb">${visual(item)}</div>
      <div class="cardInfo">
        <div class="itemName">${escapeHtml(item.name)}</div>
        <div class="itemCat">${escapeHtml(item.category)}</div>
        <div class="itemDesc">${escapeHtml(item.description)}</div>
        <div class="badges">
          <span class="badge ${item.rarity}">${item.rarity}</span>
          <span class="badge">${SPIN_TYPES[state.spinType].label}</span>
        </div>
      </div>
    </div>`).join("");
}

function visual(item) {
  return item.image ? `<img src="${item.image}" alt="${escapeHtml(item.name)}">` : `<div class="emoji">◆</div>`;
}

async function startSpin() {
  if (state.spinning) return;
  const group = elements.groupInput.value.trim();
  if (!group) {
    alert("Type the group name before spinning.");
    elements.groupInput.focus();
    return;
  }

  const pool = getVisiblePool(true).filter((item) => state.filter === "all" || item.rarity === state.filter);
  if (!pool.length) {
    alert(`No ${SPIN_TYPES[state.spinType].label.toLowerCase()} are available for ${TIERS[state.tier].label}.`);
    return;
  }

  state.spinning = true;
  state.pending = [];
  state.pendingGroup = group;
  elements.dropBtn.disabled = true;
  elements.closeSpin.disabled = true;
  openModal(elements.spinModal);

  try {
    for (let roll = 1; roll <= TIERS[state.tier].rewards; roll += 1) {
      elements.rollText.textContent = `ROLL ${roll} OF ${TIERS[state.tier].rewards}`;
      const winner = weightedPick(pool, state.pending[state.pending.length - 1]?.name);
      state.pending.push(winner);
      fillReel(reelItems(pool, winner));
      await animateReelToWinner(winner.name);
      playSpinChime(winner.rarity);
      launchConfetti("small");
      await wait(240);
    }
    renderResults();
    closeModal(elements.spinModal);
    openModal(elements.resultModal);
  } finally {
    state.spinning = false;
    elements.dropBtn.disabled = false;
    elements.closeSpin.disabled = false;
  }
}

function weightedPick(pool, previousName) {
  const adjusted = pool.map((item) => ({ ...item, effectiveWeight: previousName && item.name === previousName ? Math.max(1, item.weight * 0.3) : item.weight }));
  const total = adjusted.reduce((sum, item) => sum + item.effectiveWeight, 0);
  let roll = Math.random() * total;
  for (const item of adjusted) {
    roll -= item.effectiveWeight;
    if (roll <= 0) return item;
  }
  return adjusted[adjusted.length - 1];
}

function reelItems(pool, winner) {
  const output = [];
  for (let index = 0; index < WIN_IDX; index += 1) output.push(pool[Math.floor(Math.random() * pool.length)]);
  output.push(winner);
  for (let index = 0; index < 10; index += 1) output.push(pool[Math.floor(Math.random() * pool.length)]);
  return output;
}

function fillReel(reelPool) {
  elements.track.classList.remove("spinMotion", "settled");
  elements.track.style.transform = "translate3d(0,0,0)";
  elements.track.innerHTML = reelPool.map((item, index) => `
    <div class="reelItem" data-name="${escapeHtml(item.name)}" data-index="${index}">
      ${visual(item)}
      <div class="reelText">
        <strong>${escapeHtml(item.name)}</strong>
        <div class="tiny">${escapeHtml(item.category)} • ${item.rarity}</div>
      </div>
    </div>`).join("");
}

async function animateReelToWinner(winnerName) {
  const targetY = -(WIN_IDX * ITEM_H - 154);
  elements.track.classList.add("spinMotion");
  const animation = elements.track.animate([
    { transform: "translate3d(0,0,0)", offset: 0 },
    { transform: `translate3d(0, ${targetY * .22}px, 0)`, offset: .18 },
    { transform: `translate3d(0, ${targetY * .58}px, 0)`, offset: .55 },
    { transform: `translate3d(0, ${targetY - 120}px, 0)`, offset: .88 },
    { transform: `translate3d(0, ${targetY + 32}px, 0)`, offset: .96 },
    { transform: `translate3d(0, ${targetY}px, 0)`, offset: 1 },
  ], { duration: SPEEDS[state.settings.spinSpeed], easing: "cubic-bezier(.16,.84,.24,1)", fill: "forwards" });

  try {
    await animation.finished;
  } catch {
    return;
  }

  elements.track.classList.remove("spinMotion");
  elements.track.classList.add("settled");
  elements.track.style.transform = `translate3d(0, ${targetY}px, 0)`;
  [...elements.track.querySelectorAll(".reelItem")].forEach((node) => node.classList.toggle("winner", node.dataset.name === winnerName));
}

function renderResults() {
  elements.resultCount.textContent = `${state.pending.length} rewards ready`;
  elements.results.innerHTML = state.pending.map((item, index) => `
    <div class="resultCard" style="animation-delay:${index * 50}ms">
      ${visual(item)}
      <div class="itemName" style="margin-top:12px">${escapeHtml(item.name)}</div>
      <div class="itemCat">${escapeHtml(item.category)}</div>
      <div class="badges" style="justify-content:center; margin-top:12px;">
        <span class="badge ${item.rarity}">${item.rarity}</span>
        <span class="badge">${TIERS[state.tier].label}</span>
      </div>
    </div>`).join("");
}

function collectResults() {
  if (!state.pending.length) return;
  const timestamp = Date.now();
  const time = new Date(timestamp).toLocaleString();
  const rows = state.pending.map((item) => ({
    time,
    ts: timestamp,
    group: state.pendingGroup,
    tier: TIERS[state.tier].label,
    spinType: state.spinType,
    item: item.name,
    category: item.category,
    rank: item.rarity,
    image: item.image,
  }));
  state.history.unshift(...rows);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  state.pending = [];
  elements.historyCountTop.textContent = String(state.history.length);
  launchConfetti("final");
  renderHistory();
  closeModal(elements.resultModal);
}

function renderHistory() {
  const groups = [...new Set(state.history.map((entry) => entry.group))];
  elements.groupList.innerHTML = [`
    <button class="groupRow ${state.selectedGroup === "all" ? "active" : ""}" data-group="all">
      <b>All Groups</b>
      <span>${state.history.length} total drops</span>
    </button>`,
    ...groups.map((group) => {
      const count = state.history.filter((entry) => entry.group === group).length;
      return `<button class="groupRow ${state.selectedGroup === group ? "active" : ""}" data-group="${escapeHtml(group)}"><b>${escapeHtml(group)}</b><span>${count} drops saved</span></button>`;
    })
  ].join("");

  const filtered = state.selectedGroup === "all" ? state.history : state.history.filter((entry) => entry.group === state.selectedGroup);
  elements.historyHeading.textContent = state.selectedGroup === "all" ? "All Groups" : state.selectedGroup;
  elements.historySub.textContent = `${filtered.length} saved drops`;
  elements.historyCountTop.textContent = String(state.history.length);

  if (!filtered.length) {
    elements.historyRows.innerHTML = `<tr><td colspan="7" class="emptyState">No saved history yet.</td></tr>`;
    return;
  }

  elements.historyRows.innerHTML = filtered.map((entry) => `
    <tr>
      <td>${escapeHtml(entry.time)}</td>
      <td><b>${escapeHtml(entry.group)}</b></td>
      <td>${escapeHtml(entry.tier)}</td>
      <td>${escapeHtml(SPIN_TYPES[entry.spinType]?.label || entry.spinType)}</td>
      <td><img class="miniImg" src="${entry.image}" alt="${escapeHtml(entry.item)}"><b>${escapeHtml(entry.item)}</b></td>
      <td>${escapeHtml(entry.category)}</td>
      <td><span class="badge ${entry.rank}">${entry.rank}</span></td>
    </tr>`).join("");
}

function exportCSV() {
  if (!state.history.length) return;
  const rows = [["Time", "Group", "Tier", "Spin Type", "Item Won", "Category", "Rarity"], ...state.history.map((entry) => [entry.time, entry.group, entry.tier, entry.spinType, entry.item, entry.category, entry.rank])];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  link.download = "tfb-spin-history.csv";
  link.click();
}

function clearHistory() {
  if (!confirm("Clear all spin history?")) return;
  state.history = [];
  state.selectedGroup = "all";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  renderHistory();
}

function resetSettings() {
  if (!confirm("Reset all settings?")) return;
  state.settings = { ...SETTINGS_DEFAULTS };
  saveSettings();
  applyTheme(state.settings.theme);
  applySettingsToUi();
}

function clearLocalData() {
  if (!confirm("Clear all local data and reload?")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SETTINGS_KEY);
  localStorage.removeItem(THEME_KEY);
  location.reload();
}

class MediaPlayer {
  constructor(elementsRef, stateRef) {
    this.elements = elementsRef;
    this.state = stateRef;
    this.decks = [{ audio: elementsRef.audio }, { audio: elementsRef.audioAlt }];
    this.video = elementsRef.bgVideo;
    this.activeDeckIndex = 0;
    this.progressFrame = null;
    this.isSeeking = false;
    this.pendingSeekRatio = 0;
    this.pendingVideoTime = null;
  }

  async init() {
    this.video.preload = "auto";
    this.video.muted = true;
    this.video.loop = false;
    this.video.playsInline = true;
    ["loadedmetadata", "canplay", "canplaythrough", "playing", "seeked"].forEach((eventName) => {
      this.video.addEventListener(eventName, () => {
        this.flushPendingVideoTime();
      });
    });
    this.decks.forEach((deck, index) => {
      deck.audio.preload = "auto";
      deck.audio.volume = 0;
      deck.audio.addEventListener("ended", () => {
        if (index === this.activeDeckIndex) this.changeTrack(1);
      });
      deck.audio.addEventListener("loadedmetadata", () => {
        if (index === this.activeDeckIndex) this.renderProgress();
      });
      deck.audio.addEventListener("progress", () => {
        if (index === this.activeDeckIndex) this.updateBuffered();
      });
    });
    await this.loadTrack(this.state.currentTrackIndex, false, false);
    this.applySettings();
  }

  get activeDeck() {
    return this.decks[this.activeDeckIndex];
  }

  get inactiveDeck() {
    return this.decks[(this.activeDeckIndex + 1) % this.decks.length];
  }

  currentTrack() {
    return PLAYLIST[this.state.currentTrackIndex] || null;
  }

  async loadTrack(index, autoplay = false, animate = true) {
    const normalized = (index + PLAYLIST.length) % PLAYLIST.length;
    const nextTrack = PLAYLIST[normalized];
    const targetDeck = animate ? this.inactiveDeck : this.activeDeck;
    const previousDeck = this.activeDeck;
    const shouldPlay = autoplay || !previousDeck.audio.paused;

    this.state.currentTrackIndex = normalized;
    targetDeck.audio.src = nextTrack.audio;
    targetDeck.audio.load();
    targetDeck.audio.currentTime = 0;

    await Promise.all([waitForMedia(targetDeck.audio), this.transitionVideo(nextTrack.video)]);
    this.updateTrackUi(nextTrack);

    if (shouldPlay) {
      try {
        await Promise.all([targetDeck.audio.play(), this.video.play()]);
      } catch {
        this.video.pause();
        targetDeck.audio.pause();
        this.elements.playlistStatus.textContent = "Click to play";
      }
    }

    if (animate && targetDeck !== previousDeck) {
      await this.crossfade(previousDeck, targetDeck, shouldPlay);
      this.activeDeckIndex = (this.activeDeckIndex + 1) % this.decks.length;
    }

    this.ensureSynchronized(true);
    this.renderProgress();
    this.updatePlaybackButtons();
    this.startLoop();
  }

  async play() {
    try {
      await Promise.all([this.activeDeck.audio.play(), this.video.play()]);
      this.ensureSynchronized(true);
      this.elements.playlistStatus.textContent = "Playing";
      this.startLoop();
    } catch {
      this.elements.playlistStatus.textContent = "Click to play";
    }
    this.updatePlaybackButtons();
  }

  pause() {
    this.activeDeck.audio.pause();
    this.video.pause();
    this.stopLoop();
    this.elements.playlistStatus.textContent = "Paused";
    this.updatePlaybackButtons();
  }

  togglePlayback() {
    if (this.activeDeck.audio.paused) this.play();
    else this.pause();
  }

  toggleMute() {
    const willMute = !(this.activeDeck.audio.muted || this.activeDeck.audio.volume === 0);
    this.decks.forEach((deck) => { deck.audio.muted = willMute; });
    this.updatePlaybackButtons();
  }

  async changeTrack(direction) {
    await this.loadTrack(this.state.currentTrackIndex + direction, true, true);
  }

  applySettings() {
    const volume = this.state.settings.musicVolume / 100;
    this.elements.volumeFill.style.width = `${this.state.settings.musicVolume}%`;
    this.video.style.filter = `brightness(${this.state.settings.videoBrightness / 100}) contrast(1.18) saturate(1.12) blur(${this.state.settings.videoBlur}px)`;
    this.decks.forEach((deck, index) => {
      deck.audio.volume = index === this.activeDeckIndex ? volume : 0;
      if (!deck.audio.muted) deck.audio.muted = false;
    });
    this.updatePlaybackButtons();
  }

  beginSeek() {
    this.isSeeking = true;
  }

  previewSeek(value) {
    this.pendingSeekRatio = value / 1000;
    this.renderProgress(this.pendingSeekRatio);
  }

  commitSeek(value) {
    this.seekToRatio(value / 1000);
  }

  endSeek(value) {
    this.seekToRatio(value / 1000);
    this.isSeeking = false;
  }

  seekToRatio(ratio) {
    const duration = this.activeDeck.audio.duration || 0;
    if (!duration) return;
    const nextTime = Math.max(0, Math.min(duration, duration * ratio));
    this.activeDeck.audio.currentTime = nextTime;
    this.syncVideoTime(nextTime, true);
    this.pendingSeekRatio = ratio;
    this.ensureSynchronized(true);
    this.renderProgress();
  }

  updateTrackUi(track) {
    const count = PLAYLIST.length;
    this.elements.currentTrackName.textContent = track.title;
    this.elements.currentArtist.textContent = track.artist;
    this.elements.songCounter.textContent = `${this.state.currentTrackIndex + 1} / ${count}`;
    this.elements.heroTrackCounter.textContent = `${this.state.currentTrackIndex + 1} / ${count}`;
    this.elements.settingsTrackLabel.textContent = `${track.title} - ${track.artist}`;
    this.elements.playlistIndicator.textContent = `Playlist ${this.state.currentTrackIndex + 1} of ${count}`;
  }

  updatePlaybackButtons() {
    const paused = this.activeDeck.audio.paused;
    const muted = this.activeDeck.audio.muted || this.state.settings.musicVolume === 0;
    this.elements.playBtn.textContent = paused ? "Play" : "Pause";
    this.elements.settingsPlayPause.textContent = paused ? "Play" : "Pause";
    this.elements.muteBtn.textContent = muted ? "Unmute" : "Mute";
    this.elements.settingsMuteToggle.textContent = muted ? "Unmute" : "Mute";
    this.elements.heroPlaylistStatus.textContent = paused ? "Paused" : this.elements.playlistStatus.textContent;
    document.body.classList.toggle("isPlaying", !paused);
  }

  renderProgress(forcedRatio = null) {
    const audio = this.activeDeck.audio;
    const duration = audio.duration || 0;
    const currentTime = duration ? duration * (forcedRatio ?? (this.isSeeking ? this.pendingSeekRatio : (audio.currentTime / duration || 0))) : 0;
    const ratio = duration ? currentTime / duration : 0;
    this.elements.seekSlider.value = String(Math.round(ratio * 1000));
    this.elements.timelineProgress.style.width = `${ratio * 100}%`;
    this.elements.currentTimeLabel.textContent = formatTime(currentTime);
    this.elements.totalTimeLabel.textContent = formatTime(duration);
    this.elements.remainingTimeLabel.textContent = `-${formatTime(Math.max(0, duration - currentTime))}`;
    this.updateBuffered();
  }

  updateBuffered() {
    const audio = this.activeDeck.audio;
    const duration = audio.duration || 0;
    if (!duration || !audio.buffered.length) {
      this.elements.timelineBuffer.style.width = "0%";
      return;
    }
    const end = audio.buffered.end(audio.buffered.length - 1);
    this.elements.timelineBuffer.style.width = `${Math.min(100, (end / duration) * 100)}%`;
  }

  startLoop() {
    this.stopLoop();
    const step = () => {
      this.ensureSynchronized();
      if (!this.isSeeking) this.renderProgress();
      if (!this.activeDeck.audio.paused) this.progressFrame = requestAnimationFrame(step);
    };
    this.progressFrame = requestAnimationFrame(step);
  }

  stopLoop() {
    if (this.progressFrame) cancelAnimationFrame(this.progressFrame);
    this.progressFrame = null;
  }

  ensureSynchronized(force = false) {
    const audio = this.activeDeck.audio;
    const drift = Math.abs((this.video.currentTime || 0) - (audio.currentTime || 0));
    if (force || drift > 0.08) this.syncVideoTime(audio.currentTime, force);
    if (audio.paused && !this.video.paused) this.video.pause();
    if (!audio.paused && this.video.paused) this.video.play().catch(() => {});
  }

  async crossfade(fromDeck, toDeck, shouldPlay) {
    if (!shouldPlay) {
      fromDeck.audio.pause();
      return;
    }
    const targetVolume = this.state.settings.musicVolume / 100;
    toDeck.audio.volume = 0;
    const start = performance.now();

    await new Promise((resolve) => {
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / 420);
        fromDeck.audio.volume = Math.max(0, Math.min(1, targetVolume * (1 - progress)));
        toDeck.audio.volume = Math.max(0, Math.min(1, targetVolume * progress));
        if (progress < 1) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });

    fromDeck.audio.pause();
    fromDeck.audio.currentTime = 0;
    toDeck.audio.volume = targetVolume;
  }

  async transitionVideo(src) {
    this.video.pause();
    this.video.src = src;
    this.video.load();
    await waitForMedia(this.video);
    this.pendingVideoTime = 0;
    this.flushPendingVideoTime();
  }

  syncVideoTime(targetTime, force = false) {
    this.pendingVideoTime = targetTime;
    if (this.video.readyState >= 2 || force) {
      try {
        this.video.currentTime = targetTime;
      } catch {
        return;
      }
    }
  }

  flushPendingVideoTime() {
    if (this.pendingVideoTime == null) return;
    if (this.video.readyState < 1) return;
    try {
      this.video.currentTime = this.pendingVideoTime;
      if (Math.abs((this.video.currentTime || 0) - this.pendingVideoTime) < 0.12) this.pendingVideoTime = null;
    } catch {
      return;
    }
  }
}

function waitForMedia(node) {
  const readyTarget = node instanceof HTMLVideoElement ? 3 : 2;
  if (node.readyState >= readyTarget) return Promise.resolve();
  return new Promise((resolve) => {
    const done = () => {
      if (node.readyState < readyTarget) return;
      node.removeEventListener("loadedmetadata", done);
      node.removeEventListener("canplay", done);
      node.removeEventListener("canplaythrough", done);
      resolve();
    };
    node.addEventListener("loadedmetadata", done, { once: true });
    node.addEventListener("canplay", done, { once: true });
    node.addEventListener("canplaythrough", done, { once: true });
  });
}

function setupConfettiCanvas() {
  const resize = () => {
    elements.confettiCanvas.width = window.innerWidth;
    elements.confettiCanvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);
}

function launchConfetti(size = "final") {
  if (!state.settings.confetti) return;
  const ctx = elements.confettiCanvas.getContext("2d");
  const count = size === "small" ? 55 : 180;
  const pieces = Array.from({ length: count }, () => ({
    x: Math.random() * elements.confettiCanvas.width,
    y: -20 - Math.random() * 180,
    w: 4 + Math.random() * 8,
    h: 3 + Math.random() * 5,
    speed: 1.8 + Math.random() * 3.5,
    drift: -2 + Math.random() * 4,
    rotation: Math.random() * Math.PI,
    spin: -0.1 + Math.random() * 0.2,
    color: ["#ffffff", "#12141b", "#3c414d", "#c8ccd3"][Math.floor(Math.random() * 4)],
  }));

  let frame = 0;
  const draw = () => {
    frame += 1;
    ctx.clearRect(0, 0, elements.confettiCanvas.width, elements.confettiCanvas.height);
    pieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.rotation += piece.spin;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      ctx.restore();
    });

    if (frame < 180) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, elements.confettiCanvas.width, elements.confettiCanvas.height);
  };
  draw();
}

function setupDotCanvas() {
  const canvas = elements.dotCanvas;
  const ctx = canvas.getContext("2d");
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };
  resize();
  window.addEventListener("resize", resize);

  const dots = Array.from({ length: 28 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: -0.25 + Math.random() * 0.5,
    dy: -0.25 + Math.random() * 0.5,
    r: 1 + Math.random() * 2,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot) => {
      dot.x += dot.dx;
      dot.y += dot.dy;
      if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,.18)";
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  draw();
}

function playSpinChime(rarity) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!playSpinChime.ctx) playSpinChime.ctx = new AudioCtx();
  const ctx = playSpinChime.ctx;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const base = ({ common: 520, uncommon: 560, rare: 620, epic: 690, legendary: 760, mythic: 820 })[rarity] || 560;
  oscillator.type = rarity === "legendary" || rarity === "mythic" ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(base, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(base * 1.1, ctx.currentTime + 0.18);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.24);
}

function openModal(node) {
  node.classList.add("open");
}

function closeModal(node) {
  node.classList.remove("open");
}

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

init();
