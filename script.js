// 이 파일의 CONFIG 값만 바꾸면 청첩장 전체 내용이 함께 변경됩니다.
const CONFIG = {
  groom: "김승건",
  bride: "강선화",
  // 인트로 편지지에 쓰이는 이름 (성 없이)
  groomShort: "승건",
  brideShort: "선화",
  datingSince: "2013-05-18",   // 사귄 날 — 플레이어 진행바의 시작점
  weddingDate: "2026-12-27T14:00:00+09:00",
  venue: "라비니움",
  hall: "1층 리츄얼홀",
  address: "서울 송파구 천호대로 996 라비니움 (풍납동 473-1)",
  tel: "02-472-7004",
  // 오시는 길 안내 — 항목을 자유롭게 추가·삭제하면 화면이 따라옵니다.
  // 교통편은 크게 지하철 / 자차 두 갈래. 갈래 안의 세부 항목만 라벨을 답니다.
  directions: [
    { label: "지하철", icon: "subway", items: [
      // lines 는 노선 번호. 색은 CSS 의 .line-no--5 / --8 이 정합니다.
      { lines: ["5", "8"], text: "천호역 10번 출구 앞" },
    ] },
    { label: "버스", icon: "bus", items: [
      { text: "천호역 또는 천호사거리 하차" },
      // tag 는 서울 버스 유형. 색은 CSS 의 .bus-tag[data-tag] 가 정합니다.
      { tag: "지선", text: "3316, 3411, 3412, 3413, 3414" },
      { tag: "간선", text: "342, 360, 361, 362, 363, 730" },
    ] },
    { label: "자차", icon: "car", items: [
      { label: "내비 검색", text: "천호지하공영주차장 천호입구\n서울 강동구 천호대로 1026-1 (6번 출구 앞)" },
      { label: "주차 위치", text: "지하 1·2층\nA·B·C·D 구역 20~60번 기둥 사이" },
      { label: "예식장까지", text: "지하통로 도보 5분\n현대백화점 방향 직진 → 천호역 10번 출구" },
      { label: "주차 등록", text: "2층 연회장 입구에서 차량번호 등록\n1시간 30분 무료" },
    ] },
  ],
  // INFORMATION 캐러셀 — 지금은 더미 데이터입니다. 실제 안내로 교체하세요.
  information: [
    { photo: "./images/info/1.jpg", caption: "Reception", text: "식사는 2층 연회장에 준비되어 있습니다.\n오후 1시 30분부터 3시 30분까지,\n예식 전후 2시간 동안 이용하실 수 있습니다." },
    { photo: "./images/info/2.jpg", caption: "ATM", text: "1층 출입구 왼쪽,\n계단과 엘리베이터 사이 공간에\nATM 2대가 마련되어 있습니다." },
    { photo: "./images/info/3.jpg", caption: "Thank You", text: "먼 길 찾아와 주시는 마음에\n미리 감사드립니다.\n따뜻한 축복 속에서 첫걸음을 내딛겠습니다." },
  ],
  // Kakao Developers에서 발급받은 JavaScript 키. 카카오톡 공유와 지도에 함께 쓰입니다.
  // 비워두면 공유는 기기 공유 창으로, 지도는 키가 필요 없는 구글 지도로 대체됩니다.
  // 공유에 쓰는 정식 주소. location.href 를 쓰면 페이지를 연 주소가 그대로 나가서
  // localhost 나 ?t=1 같은 임시 주소, 예전 도메인이 링크로 박힐 수 있습니다.
  siteUrl: "https://sunhwa-seunggeon.github.io/wedding/",
  shareImage: "./images/share.jpg",   // 카카오·OG 공유 카드에 쓰는 사진
  kakaoJsKey: "0f0f31b7b43376570ea7609128c57a8f",
  family: {
    groomFather: "김재국", groomMother: "송경희",
    brideFather: "강승묵", brideMother: "심정미",
  },
  contacts: [
    { label: "신랑", name: "김승건", phone: "010-0000-0000" },
    { label: "신부", name: "강선화", phone: "010-0000-0000" },
    { label: "신랑 아버지", name: "김재국", phone: "010-0000-0000" },
    { label: "신랑 어머니", name: "송경희", phone: "010-0000-0000" },
    { label: "신부 아버지", name: "강승묵", phone: "010-0000-0000" },
    { label: "신부 어머니", name: "심정미", phone: "010-0000-0000" },
  ],
  // side 가 탭(신랑 측 / 신부 측), role 은 카드 안 작은 라벨입니다.
  // 전화번호는 위 contacts 에서 이름으로 찾아 쓰므로 여기 적지 않습니다.
  // pay 에 카카오페이 송금 링크를 넣으면 pay 버튼이 생기고, 비우면 버튼이 나오지 않습니다.
  accounts: [
    { side: "신랑", role: "신랑", name: "김승건", bank: "은행", number: "000-0000-0000", pay: "" },
    { side: "신랑", role: "혼주", name: "김재국", bank: "은행", number: "000-0000-0000", pay: "" },
    { side: "신랑", role: "혼주", name: "송경희", bank: "은행", number: "000-0000-0000", pay: "" },
    { side: "신부", role: "신부", name: "강선화", bank: "은행", number: "000-0000-0000", pay: "" },
    { side: "신부", role: "혼주", name: "강승묵", bank: "은행", number: "000-0000-0000", pay: "" },
    { side: "신부", role: "혼주", name: "심정미", bank: "은행", number: "000-0000-0000", pay: "" },
  ],
};

const GALLERY_PHOTOS = [
  "DSC00018_1.jpg", "DSC00059_1.jpg", "DSC00229_1.jpg", "DSC00609_1.jpg", "DSC00700_1.jpg",
  "DSC00749_1.jpg", "DSC00913_1.jpg", "DSC01064_1.jpg", "DSC01246_1.jpg", "DSC01303_1.jpg",
  "DSC01339_1.jpg", "DSC01369_1.jpg", "DSC01503_1.jpg", "DSC01655_1.jpg", "DSC01692_1.jpg",
  "DSC02348_1.jpg", "DSC02453_1.jpg", "DSC02506_1.jpg", "DSC02548_1.jpg", "DSC02694_1.jpg",
  "DSC02767_1.jpg", "DSC03123_1.jpg", "DSC03219_1.jpg", "DSC03299_1.jpg", "DSC03437_1.jpg",
  "DSC03660_1.jpg", "DSC03874_1.jpg", "DSC03902_1.jpg", "DSC04067_1.jpg", "DSC04115_1.jpg",
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const weddingDate = new Date(CONFIG.weddingDate);
const [weddingYear, weddingMonth, weddingDay] = CONFIG.weddingDate.slice(0, 10).split("-").map(Number);
const weddingWeekday = new Date(Date.UTC(weddingYear, weddingMonth - 1, weddingDay)).getUTCDay();
const WEDDING_TIME_ZONE = "Asia/Seoul";
const weddingDateText = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "long", timeZone: WEDDING_TIME_ZONE }).format(weddingDate);

function fillText(selector, value) {
  $$(selector).forEach((element) => { element.textContent = value; });
}

function hydrateInvitation() {
  const dateText = weddingDateText;
  const timeText = new Intl.DateTimeFormat("ko-KR", { hour: "numeric", minute: "2-digit", timeZone: WEDDING_TIME_ZONE }).format(weddingDate);
  const englishDate = `${weddingYear}. ${String(weddingMonth).padStart(2, "0")}. ${String(weddingDay).padStart(2, "0")}. ${["SUN","MON","TUE","WED","THU","FRI","SAT"][weddingWeekday]} · ${new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: WEDDING_TIME_ZONE }).format(weddingDate)}`;
  fillText("[data-groom]", CONFIG.groom);
  fillText("[data-bride]", CONFIG.bride);
  fillText("[data-groom-short]", CONFIG.groomShort);
  fillText("[data-bride-short]", CONFIG.brideShort);
  fillText("[data-venue]", CONFIG.venue);
  fillText("[data-hall]", CONFIG.hall);
  $$("[data-hall]").forEach((element) => { element.hidden = !CONFIG.hall; });
  fillText("[data-address]", CONFIG.address);
  fillText("[data-tel]", CONFIG.tel);
  fillText("[data-date-long]", englishDate);
  fillText("[data-date-title]", dateText);
  fillText("[data-time]", timeText);
  fillText("[data-groom-father]", CONFIG.family.groomFather);
  fillText("[data-groom-mother]", CONFIG.family.groomMother);
  fillText("[data-bride-father]", CONFIG.family.brideFather);
  fillText("[data-bride-mother]", CONFIG.family.brideMother);
  document.title = `${CONFIG.groom} ♥ ${CONFIG.bride}, 결혼합니다`;
  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(CONFIG.address)}`;
  $("#naverMap").href = naverMapUrl;
  $("#kakaoMap").href = `https://map.kakao.com/link/search/${encodeURIComponent(CONFIG.address)}`;
  $$("a[data-tel]").forEach((element) => { element.href = `tel:${CONFIG.tel.replaceAll("-", "")}`; });
  // 티맵은 웹 주소가 없어 앱 스킴을 씁니다(앱이 설치된 기기에서만 열립니다).
  $("#tmapLink").href = `tmap://search?name=${encodeURIComponent(CONFIG.venue)}`;
}

// 네이버·카카오 지도는 iframe 임베드를 막아 두어서 JavaScript SDK 로만 표시할 수 있습니다.
// 카카오 SDK 는 지오코더를 포함해서 좌표 없이 주소만으로 위치를 찾습니다.
// 주의: 지도 SDK 는 소문자 window.kakao, 공유 SDK 는 대문자 window.Kakao 로 서로 다른 객체입니다.
function renderFallbackMap(box) {
  // 키가 없을 때 쓰는 대체 지도. 괄호 안 지번은 지오코딩을 방해해서 떼고 넘깁니다.
  const query = CONFIG.address.replace(/\s*\([^)]*\)\s*$/, "").trim();
  box.innerHTML = `<iframe title="${CONFIG.venue} 위치 지도" loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(query)}&z=17&hl=ko&output=embed"></iframe>`;
}

function drawKakaoMap(box, latitude, longitude) {
  // 카카오 검색 결과의 좌표는 문자열로 내려옵니다.
  const position = new kakao.maps.LatLng(Number(latitude), Number(longitude));
  const map = new kakao.maps.Map(box, { center: position, level: 3 });
  new kakao.maps.Marker({ position, map });
  map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
}

function renderMap() {
  const box = $("#mapCanvas");
  if (!CONFIG.kakaoJsKey) return renderFallbackMap(box);
  const script = document.createElement("script");
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(CONFIG.kakaoJsKey)}&autoload=false&libraries=services`;
  script.onerror = () => renderFallbackMap(box);
  script.onload = () => kakao.maps.load(() => {
    const address = CONFIG.address.replace(/\s*\([^)]*\)\s*$/, "").trim();
    new kakao.maps.services.Geocoder().addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) return drawKakaoMap(box, result[0].y, result[0].x);
      // 주소 검색이 실패하면 예식장 이름으로 장소를 찾습니다.
      new kakao.maps.services.Places().keywordSearch(`${CONFIG.venue} ${address}`, (places, placeStatus) => {
        if (placeStatus === kakao.maps.services.Status.OK) drawKakaoMap(box, places[0].y, places[0].x);
        else renderFallbackMap(box);
      });
    });
  });
  document.head.appendChild(script);
}

// 신랑·신부 사진은 어느 쪽을 눌러도 두 장이 함께 현재 <-> 아기 때로 바뀝니다.
// 자동 전환이 아니라 사용자가 누른 만큼만 움직이므로 prefers-reduced-motion 예외가 필요 없습니다.
function setupProfiles() {
  // 아기 때 사진 파일이 없어 onerror 로 지워진 카드는 넘길 대상이 없습니다.
  const cards = $$(".profile__card").filter((card) => $$(".profile__photo", card).length > 1);
  if (!cards.length) {
    // 넘길 사진이 없으면 깜빡이는 커서도 지웁니다 — 없는 동작을 안내하지 않도록.
    $$(".profile__card").forEach((card) => { card.style.cursor = "default"; });
    $$(".profile__cue").forEach((cue) => cue.remove());
    return;
  }

  const wrap = $(".profiles");
  let showBaby = false;
  function render() {
    cards.forEach((card) => {
      $$(".profile__photo", card).forEach((photo, index) => photo.classList.toggle("is-active", index === (showBaby ? 1 : 0)));
      card.setAttribute("aria-label", showBaby ? "지금 모습 보기" : "아기 때 모습 보기");
      card.setAttribute("aria-pressed", String(showBaby));
    });
    wrap.classList.toggle("is-baby", showBaby);
  }
  cards.forEach((card) => card.addEventListener("click", () => {
    showBaby = !showBaby;
    // 한 번 눌러 본 사람에게는 더 권하지 않습니다. 어른 사진으로 돌아와도 다시 깜빡이지 않습니다.
    wrap.classList.add("is-seen");
    render();
  }));
  render();
}

// 한 번에 그은 낙서 별 두 개. 꼭짓점 0->2->4->1->3->0 순서로 한 붓에 긋고,
// 시작점을 조금 지나치게 그어 손으로 그린 느낌을 냅니다.
// (좌우 꼭짓점 y 는 -5.9 로 위쪽입니다 — 아래로 잡으면 별이 아니라 뭉개진 도형이 됩니다.)
// 큰 별은 왼쪽 위, 작은 별은 오른쪽 아래 — 숫자가 그 사이 대각선 빈자리에 앉습니다.
const WEDDING_STARS = '<svg class="daystrip__stars" viewBox="0 0 115 100" aria-hidden="true"><g transform="translate(25 25) scale(1.05) rotate(-12)" stroke-width="2.1"><path d="M0 -19 12 16-19-5 19-6-11 16 1-18 3-10"/><path d="M-2 -17 10 18-20-4" opacity=".65"/></g><g transform="translate(93 75) scale(.58) rotate(14)" stroke-width="3.1"><path d="M0 -19 12 16-19-5 19-6-11 16 1-18 3-10"/></g></svg>';

function fillDateCard() {
  const base = new Date(Date.UTC(weddingYear, weddingMonth - 1, weddingDay));
  const weekdayOf = (date) => new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" }).format(date).toUpperCase();
  const monthOf = (date) => new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(date).toUpperCase();
  fillText("[data-cal-month]", `${monthOf(base)} ${weddingYear}`);

  // 예식일이 든 한 주(월요일 시작). dow 0=일 이므로 월요일까지 거슬러 갈 일수는 (dow+6)%7.
  const mondayOffset = (base.getUTCDay() + 6) % 7;
  const days = Array.from({ length: 7 }, (unused, index) => {
    const date = new Date(Date.UTC(weddingYear, weddingMonth - 1, weddingDay - mondayOffset + index));
    const dow = date.getUTCDay();
    return {
      weekday: weekdayOf(date).slice(0, 3),
      date: date.getUTCDate(),
      isWedding: date.getTime() === base.getTime(),
      weekendClass: dow === 0 ? "is-sun" : dow === 6 ? "is-sat" : "",
    };
  });

  $("#dayStrip").innerHTML = `
    <div class="daystrip__head">${days.map((day) => `<span class="${day.weekendClass}">${day.weekday}</span>`).join("")}</div>
    <div class="daystrip__body">${days.map((day) => `
      <div class="daystrip__cell${day.isWedding ? " is-wedding" : ""}${day.weekendClass ? " " + day.weekendClass : ""}">
        <b class="daystrip__num">${day.date}</b>
        ${day.isWedding ? WEDDING_STARS : ""}
      </div>`).join("")}</div>`;

}


// 오시는 길 안내 항목.
// 갈래 제목 옆 아이콘. 선으로만 그려 올리브 라벨과 같은 무게로 보입니다.
const DIRECTION_ICONS = {
  subway: '<path d="M6 4.5h12v10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 14.5z"/><path d="M6 9.5h12"/><path d="M9 13.5h.01M15 13.5h.01"/><path d="M8.5 17 7 20M15.5 17 17 20"/>',
  bus: '<rect x="4.5" y="4" width="15" height="12" rx="2.5"/><path d="M4.5 10.5h15"/><path d="M8 13.6h.01M16 13.6h.01"/><path d="M7.5 16v2.5M16.5 16v2.5"/>',
  car: '<path d="M4 14.5h16v3.5h-3v-1.5H7V18H4z"/><path d="M5.5 14.5 7.5 8h9l2 6.5"/><path d="M7.5 11.5h9"/>',
};

function renderDirections() {
  const icon = (name) => DIRECTION_ICONS[name]
    ? `<svg class="direction-group__icon" viewBox="0 0 24 24" aria-hidden="true">${DIRECTION_ICONS[name]}</svg>`
    : "";
  // 노선 번호는 색 있는 동그라미로. 실제 노선 색이라 한눈에 어느 선인지 읽힙니다.
  const lines = (list) => (list || []).map((no) => `<b class="line-no line-no--${no}">${no}</b>`).join("");
  const tag = (name) => name ? `<b class="bus-tag" data-tag="${name}">${name}</b>` : "";

  $("#directions").innerHTML = CONFIG.directions.map((group) => `
    <div class="direction-group">
      <span class="direction-group__title">${icon(group.icon)}${group.label}</span>
      ${group.items.map((item) => `
      <div class="direction${item.label ? " direction--titled" : ""}">
        ${item.label ? `<span class="direction__label">${item.label}</span>` : ""}
        <p>${lines(item.lines)}${tag(item.tag)}${item.text}</p>
      </div>`).join("")}
    </div>`).join("");
}

// INFORMATION 캐러셀. 좌우로 밀어 넘기고 점이 현재 위치를 표시합니다.
function setupInformation() {
  const track = $("#infoTrack");
  const dots = $("#infoDots");
  track.innerHTML = CONFIG.information.map((item) => `
    <article class="info-slide">
      <img src="${item.photo}" alt="" loading="lazy" onerror="this.remove()" />
      <p class="info-slide__caption">${item.caption}</p>
      <p class="info-slide__text">${item.text}</p>
    </article>`).join("");
  dots.innerHTML = CONFIG.information.map((_, index) =>
    `<button class="info-dot${index ? "" : " is-active"}" type="button" data-index="${index}" aria-label="${index + 1}번째 안내"></button>`).join("");

  const slides = $$(".info-slide", track);
  const marks = $$(".info-dot", dots);
  const goTo = (index) => track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: "smooth" });
  marks.forEach((mark) => mark.addEventListener("click", () => goTo(Number(mark.dataset.index))));

  // 스크롤이 멈춘 뒤 가장 가까운 슬라이드를 현재로 표시합니다.
  track.addEventListener("scroll", () => {
    const middle = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    slides.forEach((slide, index) => {
      const center = slide.offsetLeft - track.offsetLeft + slide.clientWidth / 2;
      if (Math.abs(center - middle) < Math.abs(slides[nearest].offsetLeft - track.offsetLeft + slides[nearest].clientWidth / 2 - middle)) nearest = index;
    });
    marks.forEach((mark, index) => mark.classList.toggle("is-active", index === nearest));
  }, { passive: true });
}

function updateCountdown() {
  const days = Math.ceil((weddingDate.getTime() - Date.now()) / 86400000);
  $("#dDayText").textContent = days > 0 ? `D-${days}` : days === 0 ? "D-DAY" : "감사합니다";
}

function renderContacts() {
  $("#contactList").innerHTML = CONFIG.contacts.map((item) => `
    <div class="contact-row">
      <span>${item.label} <b>${item.name}</b></span>
      <a href="tel:${item.phone.replaceAll("-", "")}" aria-label="${item.label}에게 전화">전화</a>
      <a href="sms:${item.phone.replaceAll("-", "")}" aria-label="${item.label}에게 문자">문자</a>
    </div>`).join("");
}

const COPY_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M15 5.5H7A2 2 0 0 0 5 7.5v8"/></svg>`;

// 신랑 측 / 신부 측 밑줄 탭 + 한 줄짜리 계좌 행.
function renderAccounts() {
  const sides = [...new Set(CONFIG.accounts.map((item) => item.side))];

  $("#accountTabs").innerHTML = sides.map((side, index) => `
    <button class="account-tab${index ? "" : " is-active"}" type="button" role="tab" data-side="${side}" aria-selected="${!index}">${side}측에게</button>`).join("");

  function renderSide(side) {
    $("#accountList").innerHTML = CONFIG.accounts.filter((item) => item.side === side).map((item) => `
      <div class="account-row">
        <span class="account-row__who"><small>${item.role}</small><i>|</i><b>${item.name}</b></span>
        <span class="account-row__acc">
          <span class="account-row__bank">${item.bank}</span>
          <span class="account-row__num">${item.number}</span>
        </span>
        <button class="account-copy" type="button" data-account="${item.number}">COPY ${COPY_ICON}</button>
      </div>`).join("");
    $$("[data-account]").forEach((button) => button.addEventListener("click", () => copyText(button.dataset.account, "계좌번호를 복사했습니다.")));
  }

  $$(".account-tab").forEach((tab) => tab.addEventListener("click", () => {
    $$(".account-tab").forEach((other) => {
      other.classList.toggle("is-active", other === tab);
      other.setAttribute("aria-selected", String(other === tab));
    });
    renderSide(tab.dataset.side);
  }));

  renderSide(sides[0]);
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    window.prompt("아래 내용을 복사해 주세요.", text);
  }
}

function setupDialogs() {
  const dialogs = { contact: $("#contactDialog") };
  $$("[data-open]").forEach((button) => button.addEventListener("click", () => dialogs[button.dataset.open].showModal()));
  $$("dialog .dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
  $$("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }));
}

// 필름 가장자리 각인 — 사귄 날과 결혼식 날.
function fillFilmEdge() {
  const dot = (iso) => iso.slice(0, 10).split("-").map(Number).join(".");
  $("#edgeStart").textContent = dot(CONFIG.datingSince);
  $("#edgeEnd").textContent = dot(CONFIG.weddingDate);
}

// 플레이어 모양 갤러리. 컨트롤이 실제로 동작합니다.
const SLIDESHOW_MS = 2000;

function setupGallery() {
  const strip = $("#filmstrip");
  const main = $("#viewerImage");
  strip.innerHTML = GALLERY_PHOTOS.map((filename, index) => `
    <button class="filmstrip__item" type="button" data-index="${index}" aria-label="${index + 1}번째 사진 보기">
      <img src="./images/gallery/thumb/${filename}" alt="" loading="${index < 8 ? "eager" : "lazy"}" />
    </button>`).join("");

  const thumbs = $$(".filmstrip__item");
  const total = GALLERY_PHOTOS.length;
  $("#playerTotal").textContent = String(total).padStart(2, "0");
  let current = 0;
  let timer = null;

  // 썸네일을 스트립 가운데로. 페이지가 튀지 않도록 스트립만 스크롤합니다.
  function centerThumb() {
    const thumb = thumbs[current];
    strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2, behavior: "smooth" });
  }

  function show(index, scroll = true) {
    current = (index + total) % total;
    const source = `./images/gallery/full/${GALLERY_PHOTOS[current]}`;
    main.src = source;
    main.alt = `${CONFIG.groom}과 ${CONFIG.bride}의 웨딩 사진 ${current + 1}`;
    $("#lightboxImage").src = source;
    $("#playerFill").style.width = `${((current + 1) / total) * 100}%`;
    $("#playerNow").textContent = String(current + 1).padStart(2, "0");
    thumbs.forEach((thumb, i) => thumb.classList.toggle("is-active", i === current));
    if (scroll) centerThumb();
  }

  function setPlaying(on) {
    $("#playToggle").classList.toggle("is-on", on);
    $("#playLabel").textContent = on ? "STOP" : "AUTO";
    $("#playToggle").setAttribute("aria-label", on ? "자동 넘기기 정지" : "자동 넘기기 시작");
  }
  function stop() { clearInterval(timer); timer = null; setPlaying(false); }
  $("#playToggle").addEventListener("click", () => {
    if (timer) return stop();
    timer = setInterval(() => show(current + 1), SLIDESHOW_MS);
    setPlaying(true);
  });

  // 직접 넘기면 자동 넘김을 멈춥니다(둘이 다투지 않도록).
  const manual = (index) => { if (timer) stop(); show(index); };
  thumbs.forEach((thumb) => thumb.addEventListener("click", () => manual(Number(thumb.dataset.index))));
  $("#viewerPrev").addEventListener("click", () => manual(current - 1));
  $("#viewerNext").addEventListener("click", () => manual(current + 1));
  $("#prevImage").addEventListener("click", () => show(current - 1));
  $("#nextImage").addEventListener("click", () => show(current + 1));

  // 썸네일 스트립을 한 화면씩 좌우로 굴립니다.
  const pageWidth = () => strip.clientWidth * 0.8;
  $("#stripPrev").addEventListener("click", () => strip.scrollBy({ left: -pageWidth(), behavior: "smooth" }));
  $("#stripNext").addEventListener("click", () => strip.scrollBy({ left: pageWidth(), behavior: "smooth" }));

  main.addEventListener("click", () => {
    document.documentElement.classList.add("lightbox-open");
    document.body.classList.add("lightbox-open");
    $("#lightbox").showModal();
  });
  $("#lightbox").addEventListener("close", () => {
    document.documentElement.classList.remove("lightbox-open");
    document.body.classList.remove("lightbox-open");
  });

  setPlaying(false);
  show(0, false);
}

async function shareInvitation() {
  const data = { title: SHARE_TITLE, text: SHARE_DESCRIPTION, url: SHARE_URL };
  try {
    if (navigator.share) await navigator.share(data);
    else await copyText(SHARE_URL, "초대장 주소를 복사했습니다.");
  } catch (error) {
    if (error.name !== "AbortError") copyText(SHARE_URL, "초대장 주소를 복사했습니다.");
  }
}







function loadKakaoSdk() {
  return new Promise((resolve) => {
    if (!CONFIG.kakaoJsKey) return resolve(false);
    if (window.Kakao?.isInitialized()) return resolve(true);
    const ready = () => {
      try {
        if (!window.Kakao?.isInitialized()) window.Kakao?.init(CONFIG.kakaoJsKey);
        resolve(true);
      } catch {
        resolve(false);
      }
    };
    const existing = $("#kakao-sdk");
    if (existing) {
      existing.addEventListener("load", ready, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.id = "kakao-sdk";
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.crossOrigin = "anonymous";
    script.onload = ready;
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

// 공유 문구는 여기서 한 번만 만듭니다. 카카오 카드와 웹 공유가 같은 문장을 씁니다.
const SHARE_URL = CONFIG.siteUrl || location.href;
const SHARE_TITLE = `${CONFIG.groom} \u2665 ${CONFIG.bride} 결혼합니다`;
const SHARE_DESCRIPTION = `${weddingDateText} ${new Intl.DateTimeFormat("ko-KR", { hour: "numeric", minute: "2-digit", timeZone: WEDDING_TIME_ZONE }).format(weddingDate)}`;

async function shareToKakao() {
  const ok = await loadKakaoSdk();
  if (ok && window.Kakao) {
    // 카카오 피드 카드: 큰 사진 + 제목 + 날짜 한 줄 + 버튼.
    // imageUrl 은 카카오 서버가 직접 긁어가므로 반드시 공개된 절대 주소여야 합니다
    // (localhost 에서는 사진이 비어 보이는 게 정상입니다).
    const link = { mobileWebUrl: SHARE_URL, webUrl: SHARE_URL };
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: SHARE_TITLE,
        description: SHARE_DESCRIPTION,
        imageUrl: new URL(CONFIG.shareImage, SHARE_URL).href,
        link,
      },
      buttons: [{ title: "청첩장 보기", link }],
    });
    return;
  }
  await shareInvitation();
}


function setupReveal() {
  const observer = new IntersectionObserver((entries, self) => {
    // 같은 순간에 함께 들어온 것들만 시차를 둡니다.
    // 고정 지연을 요소마다 박아 두면, 혼자 들어올 때도 괜히 기다렸다 나타납니다.
    entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
      entry.target.style.transitionDelay = `${Math.min(index, 4) * 90}ms`;
      entry.target.classList.add("visible");
      self.unobserve(entry.target);   // 한 번 뜨면 다시 감추지 않습니다
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal > *").forEach((element) => observer.observe(element));
}

hydrateInvitation();
renderMap();
fillDateCard();
renderDirections();
setupInformation();
setupProfiles();
renderContacts();
renderAccounts();
setupDialogs();
setupGallery();
fillFilmEdge();
setupReveal();
updateCountdown();
setInterval(updateCountdown, 60000);
$(".scroll-cue").addEventListener("click", () => $(".greeting").scrollIntoView());
$("#copyAddress").addEventListener("click", () => copyText(CONFIG.address, "주소를 복사했습니다."));
$("#kakaoShare").addEventListener("click", shareToKakao);
$("#copyUrl").addEventListener("click", () => copyText(SHARE_URL, "초대장 주소를 복사했습니다."));
// 인트로 애니메이션(봉투 열림 → 편지 올라옴)이 끝난 뒤 걷어냅니다.
