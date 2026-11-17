/* ============ CẤU HÌNH – CHỈNH THÔNG TIN CÔNG TY Ở ĐÂY ============ */
const SITE = {
  name: "CÔNG TY CỔ PHẦN DỊCH VỤ PHÒNG CHÁY CHỮA CHÁY",
  short: "FPTS",
  english: "FIRE PROTECTION TECHNICAL SERVICES",
  slogan: "An toàn – Chất lượng – Đúng tiến độ",
  mst: "0319481234",
  rep: "VŨ ĐÌNH TOÀN",
  address: "72/11 Nguyễn Văn Lượng, Phường Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
  hotline: "0976 476 785",
  email: "info@fpts.info",      // email nhận yêu cầu từ form liên hệ
  website: "www.fpts.info",
  hours: "Thứ 2 – Thứ 7: 8:00 – 17:30",
  mapQuery: "72/11 Nguyễn Văn Lượng, Phường Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam"
};

const CATEGORIES = [
  { id: "chua-chay", imgs: ['chua-chay-1','chua-chay-0'], icon: "🧯", name: "Thiết bị chữa cháy", desc: "Bình chữa cháy, lăng phun, vòi, bọt chữa cháy, bơm chữa cháy xách tay.",
    items: ["Bình chữa cháy bột ABC, CO₂", "Lăng phun chữa cháy", "Lăng giá chữa cháy", "Vòi chữa cháy", "Bọt chữa cháy", "Bơm chữa cháy xách tay"] },
  { id: "bao-chay", imgs: ['panel-0','bao-chay-1','bao-chay-0','panel-1'], icon: "🚨", name: "Hệ thống báo cháy", desc: "Tủ báo cháy trung tâm, đầu báo khói – nhiệt – lửa, báo cháy không dây.",
    items: ["Tủ báo cháy trung tâm", "Đầu báo khói, báo nhiệt", "Đầu báo lửa (UV/IR)", "Chuông, đèn, nút nhấn khẩn", "Báo cháy không dây", "Module giám sát, điều khiển"] },
  { id: "chua-chay-khi", imgs: ['datacenter-0','datacenter-1'], icon: "💨", name: "Hệ thống chữa cháy bằng khí", desc: "Giải pháp bảo vệ phòng server, tủ điện, phòng điều khiển: FM-200, Novec 1230, CO₂, N₂.",
    items: ["Hệ thống FM-200 (HFC-227ea)", "Hệ thống Novec 1230", "Hệ thống CO₂", "Hệ thống khí N₂/IG-541", "Tủ chữa cháy tự động", "Bình chứa & van xả"] },
  { id: "do-luong", imgs: ['do-luong-0','do-luong-1','thermal-0','thermal-1'], icon: "📟", name: "Thiết bị đo lường & phát hiện khí", desc: "Máy đo khí độc, khí cháy nổ, cảm biến, thiết bị đo & điều khiển tự động hóa.",
    items: ["Máy đo khí đa chỉ tiêu", "Đầu dò khí cháy / khí độc", "Máy đo nồng độ O₂, CO, H₂S", "Camera nhiệt", "Cảm biến & thiết bị tự động hóa", "Hiệu chuẩn thiết bị đo"] }

];

const SERVICES = [{"name": "Tư vấn & thiết kế", "desc": "Khảo sát công trình, đề xuất giải pháp và lập hồ sơ thiết kế hệ thống PCCC.", "id": "tu-van-thiet-ke", "img": "assets/img/news/fpts-design.svg"}, {"name": "Tư vấn giám sát", "desc": "Giám sát chất lượng thi công, đối chiếu hồ sơ thiết kế và phối hợp các bên tại công trình.", "id": "tu-van-giam-sat", "img": "assets/img/news/fpts-supervision.svg"}, {"name": "Hỗ trợ hồ sơ PCCC", "desc": "Hỗ trợ chủ đầu tư chuẩn bị hồ sơ thẩm định thiết kế, hoàn công và nghiệm thu.", "id": "ho-so-pccc", "img": "assets/img/news/fpts-documentation.svg"}, {"name": "Cung cấp thiết bị", "desc": "Thiết bị báo cháy, chữa cháy, vật tư lắp đặt và bảo hộ với nguồn gốc rõ ràng.", "id": "cung-cap-thiet-bi", "img": "assets/img/news/fpts-equipment.svg"}, {"name": "Thi công & lắp đặt", "desc": "Lắp đặt hệ thống báo cháy, chữa cháy khí, sprinkler, trạm bơm và hệ thống phụ trợ.", "id": "thi-cong-lap-dat", "img": "assets/img/news/fpts-installation.svg"}, {"name": "Bảo trì & đào tạo vận hành", "desc": "Kiểm tra, bảo dưỡng, cải tạo hệ thống và hướng dẫn đội ngũ vận hành sau bàn giao.", "id": "bao-tri-van-hanh", "img": "assets/img/news/fpts-maintenance.svg"}];

const PROJECTS = [
  {
    "id": "minh-hoa-1",
    "title": "Thi công lắp đặt hệ thống chữa cháy khí",
    "client": "Trung tâm dữ liệu (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/hero/slide-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục thi công lắp đặt hệ thống chữa cháy khí. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "illustrative": true,
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution"
  },
  {
    "id": "minh-hoa-2",
    "title": "Thi công lắp đặt hệ thống chữa cháy khí",
    "client": "Tòa nhà văn phòng (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/projects/minh-hoa-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục thi công lắp đặt hệ thống chữa cháy khí. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-3",
    "title": "Thi công lắp đặt hệ thống chữa cháy khí",
    "client": "Cơ sở y tế (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/hero/slide-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục thi công lắp đặt hệ thống chữa cháy khí. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "illustrative": true,
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution"
  },
  {
    "id": "minh-hoa-4",
    "title": "Thi công lắp đặt hệ thống chữa cháy khí",
    "client": "Phòng điều khiển (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/projects/minh-hoa-dieu-khien-khi.jpg",
    "desc": "Mẫu trình bày hạng mục thi công lắp đặt hệ thống chữa cháy khí. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-5",
    "title": "Cung cấp thiết bị báo cháy",
    "client": "Cơ sở lưu trú (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/products/panel-0.jpg",
    "desc": "Mẫu trình bày hạng mục cung cấp thiết bị báo cháy. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-6",
    "title": "Cài đặt lập trình, hướng dẫn vận hành hệ thống PCCC",
    "client": "Nhà máy sản xuất (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/hero/slide-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục cài đặt lập trình, hướng dẫn vận hành hệ thống pccc. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "illustrative": true,
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution"
  },
  {
    "id": "minh-hoa-7",
    "title": "Cung cấp thiết bị báo cháy",
    "client": "Trường học (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/products/bao-chay-1.jpg",
    "desc": "Mẫu trình bày hạng mục cung cấp thiết bị báo cháy. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-8",
    "title": "Nạp khí chữa cháy HFC-227ea",
    "client": "Kho hàng (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/projects/minh-hoa-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục nạp khí chữa cháy hfc-227ea. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-9",
    "title": "Cung cấp thiết bị cảnh báo khói sớm",
    "client": "Phòng máy chủ (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/projects/minh-hoa-khoi-som.jpg",
    "desc": "Mẫu trình bày hạng mục cung cấp thiết bị cảnh báo khói sớm. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution",
    "illustrative": true
  },
  {
    "id": "minh-hoa-10",
    "title": "Thi công lắp đặt hệ thống chữa cháy khí",
    "client": "Khu thương mại (minh họa)",
    "place": "Nội dung minh họa",
    "year": "—",
    "cat": "Mẫu dự án",
    "img": "assets/img/hero/slide-chua-chay-khi.jpg",
    "desc": "Mẫu trình bày hạng mục thi công lắp đặt hệ thống chữa cháy khí. Thông tin dự án thực tế của FPTS sẽ được cập nhật sau.",
    "desc_en": "Sample layout for a fire protection project. Actual FPTS project information will be added when available.",
    "illustrative": true,
    "img_alt": "Ảnh minh họa giải pháp PCCC",
    "img_alt_en": "Illustrative fire protection solution"
  }
];

/* ============ HEADER / FOOTER ============ */
const PAGES = [
  ["index.html", "Trang chủ"], ["san-pham.html", "Sản phẩm"], ["dich-vu.html", "Dịch vụ"],
  ["du-an.html", "Dự án"], ["gioi-thieu.html", "Giới thiệu"], ["tin-tuc.html", "Tin tức"], ["lien-he.html", "Liên hệ"]
];
const cur = location.pathname.split("/").pop() || "index.html";
const tel = SITE.hotline.replace(/\s/g, "");

function renderHeader() {
  const mega = CATEGORIES.map(c => {
    const itemNames = c.items.slice(0,5).map(i => typeof i === "object" ? i.name : i);
    return `<div class="mega-col"><a class="mega-title" href="san-pham.html#${c.id}">${c.icon} ${c.name}</a>${itemNames.map(name => `<a href="san-pham.html#${c.id}">${name}</a>`).join("")}</div>`;
  }).join("");
  const nav = PAGES.map(([h, t]) => {
    const act = cur === h ? " active" : "";
    if (h === "san-pham.html") return `<li class="has-mega"><a class="${act}" href="${h}">${t} ▾</a><div class="mega">${mega}</div></li>`;
    return `<li><a class="${act}" href="${h}">${t}</a></li>`;
  }).join("");
  document.getElementById("header").innerHTML = `
  <div class="topbar"><div class="container flex between">
    <span>📍 ${SITE.address}</span>
    <span>✉ ${SITE.email} &nbsp;|&nbsp; ☎ <a href="tel:${tel}">${SITE.hotline}</a></span>
  </div></div>
  <div class="mainbar"><div class="container flex between">
    <a class="logo" href="index.html" aria-label="FPTS - Trang chủ"><img class="brand-logo" src="assets/img/fpts-logo.png" alt="FPTS – Fire Protection Technical Services"><span class="logo-caption">FPTS<span>AN TOÀN · CHẤT LƯỢNG · ĐÚNG TIẾN ĐỘ</span></span></a>
    <button class="burger" onclick="document.body.classList.toggle('nav-open');this.setAttribute('aria-expanded',document.body.classList.contains('nav-open'))" aria-label="Menu" aria-expanded="false" aria-controls="main-nav">☰</button>
    <nav id="main-nav"><ul class="menu">${nav}</ul></nav>
    <div class="right-tools"><form class="search" action="san-pham.html"><input name="q" placeholder="Tìm sản phẩm..."><button>🔍</button></form>
    <button type="button" class="lang-btn" id="lang-btn" onclick="I18N.toggle()">🌐 EN</button></div>
  </div></div>`;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = `
  <div class="footer-main"><div class="container grid g4">
    <div class="footer-col-company"><h4 class="footer-company-name">CÔNG TY CP DỊCH VỤ PHÒNG CHÁY CHỮA CHÁY</h4>
      <p class="footer-website"><b>Website:</b> <a href="https://${SITE.website}">${SITE.website}</a></p>
      <p><b>MST:</b> ${SITE.mst} </p>
      <p><b>Đại diện pháp luật:</b> ${SITE.rep}</p>
      <p>📍 ${SITE.address}</p>
      <p class="nowrap-line">☎ <b>Hotline:</b> <a href="tel:${tel}">${SITE.hotline}</a></p>
      <p class="nowrap-line">✉ <b>Email:</b> <a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    <div class="footer-cats"><h4>Sản phẩm & Giải pháp</h4>${CATEGORIES.map(c => `<a class="footer-cat-link" href="san-pham.html#${c.id}">${c.name}</a>`).join("")}<a class="footer-cat-link" href="dich-vu.html#tu-van-thiet-ke">Tư vấn & thiết kế hệ thống PCCC</a><a class="footer-cat-link" href="dich-vu.html#bao-tri-van-hanh">Bảo trì & đào tạo vận hành</a></div>
    <div><h4>Chính sách & Quy định</h4>
      <a href="chinh-sach-bao-mat.html">Bảo vệ dữ liệu cá nhân</a>
      <a href="dieu-khoan-dich-vu.html">Điều khoản & Quy chế hoạt động</a>
      <a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a>
      <a href="chinh-sach-giao-nhan.html">Chính sách vận chuyển & kiểm hàng</a>
      <a href="chinh-sach-doi-tra.html">Chính sách đổi trả & hoàn tiền</a>
      <a href="chinh-sach-bao-hanh.html">Chính sách bảo hành sản phẩm</a>
    </div>
    <div><h4>Bản đồ vị trí</h4><iframe loading="lazy" title="Bản đồ" src="https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"></iframe></div>
  </div></div>
  <div class="footer-bottom"><div class="container" style="text-align:center;font-size:13px">
    <span>© ${new Date().getFullYear()} <span>${SITE.name}</span>. <span>Bảo lưu mọi quyền.</span></span>
  </div></div>
  <a class="fab call" href="tel:${tel}" title="Gọi FPTS">☎</a>
  <a class="fab zalo" href="https://zalo.me/${tel}" target="_blank" rel="noopener" title="Chat Zalo">Zalo</a>`;
}

const pic = (src, icon, alt) => src ? `<img src="${src}" alt="${alt || ""}" loading="lazy" >` : icon;
const catCard = c => `<a class="card cat-card" href="san-pham.html#${c.id}"><div class="cat-img">${pic("assets/img/products/" + c.imgs[0] + ".jpg", c.icon, c.name)}</div><h3>${c.name}</h3><p>${c.desc}</p><span class="more">Xem chi tiết →</span></a>`;
const svcCard = s => `<article class="card svc-card service-card" id="${s.id}"><img class="service-image" src="${s.img}" alt="${s.name}" width="1200" height="720" loading="lazy"><div class="service-copy"><h3>${s.name}</h3><p>${s.desc}</p></div></article>`;
const prjCard = p => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const cat = (isEn && typeof I18N.t === "function") ? I18N.t(p.cat) : p.cat;
  const clientLbl = isEn ? "Building type:" : "Loại công trình:";
  const yearLbl = isEn ? "Year:" : "Năm:";
  const imageAlt = p.illustrative ? (isEn ? p.img_alt_en : p.img_alt) : p.client;
  const illustrationBadge = p.illustrative ? `<span class="illustration-badge">${isEn ? "Illustrative image" : "Ảnh minh họa"}</span>` : "";
  return `<div class="card prj-card"><div class="thumb ${p.img ? "" : "project-placeholder"}">${p.img ? pic(p.img, "", imageAlt) : `<span class="project-monogram" aria-label="Dự án không có ảnh trong hồ sơ">FPTS<span>${p.client}</span></span>`}${illustrationBadge}<span class="badge-cat">${cat}</span><span class="badge-year">${p.year}</span></div><div class="body"><h3>${isEn ? I18N.t(p.title) : p.title}</h3><p class="prj-client"><b>${clientLbl}</b> ${isEn ? I18N.t(p.client) : p.client}</p><div class="prj-meta"><span>📍 ${isEn ? I18N.t(p.place) : p.place}</span><span>📅 ${yearLbl} ${p.year}</span></div><p class="prj-desc">${isEn ? (p.desc_en || I18N.t(p.desc)) : p.desc}</p></div></div>`;
};
const newsCard = n => {
  const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
  const title = (isEn && n.title_en) ? n.title_en : n.title;
  const sum = (isEn && n.sum_en) ? n.sum_en : n.sum;
  const tag = (isEn && n.tag_en) ? n.tag_en : n.tag;
  const moreText = isEn ? "Read more →" : "Đọc tiếp →";
  return `<article class="card news-card"><div class="thumb">${pic(n.img, "📰", title)}<span class="badge">${tag}</span></div><div class="body"><small>${n.date}</small><h3>${title}</h3><p>${sum}</p><a class="more" href="tin-tuc-chi-tiet.html?id=${encodeURIComponent(n.id)}">${moreText}</a></div></article>`;
};

function fillNewsCards() {
  const fill = (id, arr, fn, n) => { const el = document.getElementById(id); if (el) el.innerHTML = arr.slice(0, n || arr.length).map(fn).join(""); };
  if (typeof NEWS !== "undefined" && Array.isArray(NEWS)) {
    fill("home-news", NEWS, newsCard, 3);
  }
  if (document.getElementById("all-news")) {
    renderNewsPage(window.currentNewsPage || 1);
  }
}

// ============ PHÂN TRANG TIN TỨC (9 TIN / TRANG) ============
const NEWS_PER_PAGE = 9;
window.currentNewsPage = 1;

window.changeNewsPage = function(page) {
  const newsList = (typeof NEWS !== "undefined" && Array.isArray(NEWS)) ? NEWS : [];
  const totalPages = Math.ceil(newsList.length / NEWS_PER_PAGE) || 1;
  if (page < 1 || page > totalPages) return;
  window.currentNewsPage = page;
  renderNewsPage(window.currentNewsPage);
  const newsSec = document.getElementById("all-news");
  if (newsSec) {
    const scroller = document.getElementById("page-scroll");
    const headerHeight = document.getElementById("header").getBoundingClientRect().height || 90;
    const topOffset = newsSec.getBoundingClientRect().top + (scroller ? scroller.scrollTop : window.pageYOffset) - headerHeight - 16;
    (scroller || window).scrollTo({ top: topOffset, behavior: "smooth" });
  }
};

function renderNewsPage(page) {
  const newsContainer = document.getElementById("all-news");
  const pagContainer = document.getElementById("news-pagination");
  if (!newsContainer) return;

  const newsList = (typeof NEWS !== "undefined" && Array.isArray(NEWS)) ? NEWS : [];
  const totalPages = Math.ceil(newsList.length / NEWS_PER_PAGE) || 1;
  const curPage = Math.max(1, Math.min(page, totalPages));
  window.currentNewsPage = curPage;

  const start = (curPage - 1) * NEWS_PER_PAGE;
  const items = newsList.slice(start, start + NEWS_PER_PAGE);

  newsContainer.innerHTML = items.map(newsCard).join("");

  if (pagContainer) {
    if (totalPages <= 1) {
      pagContainer.innerHTML = "";
    } else {
      let pagesHtml = "";
      for (let i = 1; i <= totalPages; i++) {
        pagesHtml += `<button type="button" class="page-btn page-num ${i === curPage ? 'active' : ''}" onclick="changeNewsPage(${i})" aria-label="Trang ${i}">${i}</button>`;
      }

      const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
      const prevText = isEn ? "« Prev" : "« Trước";
      const nextText = isEn ? "Next »" : "Sau »";
      const prevDisabled = curPage === 1 ? "disabled" : "";
      const nextDisabled = curPage === totalPages ? "disabled" : "";
      const infoHtml = isEn
        ? `Page <b>${curPage}</b> / <b>${totalPages}</b> (Showing ${start + 1} – ${Math.min(start + NEWS_PER_PAGE, newsList.length)} of ${newsList.length} news articles)`
        : `Trang <b>${curPage}</b> / <b>${totalPages}</b> (Hiển thị ${start + 1} – ${Math.min(start + NEWS_PER_PAGE, newsList.length)} trên tổng số ${newsList.length} tin tức)`;

      pagContainer.innerHTML = `
        <div class="pagination-nav">
          <button type="button" class="page-btn page-prev ${prevDisabled}" onclick="changeNewsPage(${curPage - 1})" aria-label="Trang trước" ${curPage === 1 ? 'disabled' : ''}>${prevText}</button>
          ${pagesHtml}
          <button type="button" class="page-btn page-next ${nextDisabled}" onclick="changeNewsPage(${curPage + 1})" aria-label="Trang sau" ${curPage === totalPages ? 'disabled' : ''}>${nextText}</button>
        </div>
        <div class="page-info">
          ${infoHtml}
        </div>
      `;
    }
  }
}

// ============ PHÂN TRANG DỰ ÁN (9 DỰ ÁN / TRANG) ============
const PRJ_PER_PAGE = 9;
window.currentPrjPage = 1;

window.changePrjPage = function(page) {
  const prjList = (typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)) ? PROJECTS : [];
  const totalPages = Math.ceil(prjList.length / PRJ_PER_PAGE) || 1;
  if (page < 1 || page > totalPages) return;
  window.currentPrjPage = page;
  renderProjectPage(window.currentPrjPage);
  const prjSec = document.getElementById("all-prj");
  if (prjSec) {
    const scroller = document.getElementById("page-scroll");
    const headerHeight = document.getElementById("header").getBoundingClientRect().height || 90;
    const topOffset = prjSec.getBoundingClientRect().top + (scroller ? scroller.scrollTop : window.pageYOffset) - headerHeight - 16;
    (scroller || window).scrollTo({ top: topOffset, behavior: "smooth" });
  }
};

function renderProjectPage(page) {
  const prjContainer = document.getElementById("all-prj");
  const pagContainer = document.getElementById("prj-pagination");
  if (!prjContainer) return;

  const prjList = (typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS)) ? PROJECTS : [];
  const totalPages = Math.ceil(prjList.length / PRJ_PER_PAGE) || 1;
  const curPage = Math.max(1, Math.min(page, totalPages));
  window.currentPrjPage = curPage;

  const start = (curPage - 1) * PRJ_PER_PAGE;
  const items = prjList.slice(start, start + PRJ_PER_PAGE);

  prjContainer.innerHTML = items.map(prjCard).join("");

  if (pagContainer) {
    if (totalPages <= 1) {
      pagContainer.innerHTML = "";
    } else {
      let pagesHtml = "";
      for (let i = 1; i <= totalPages; i++) {
        pagesHtml += `<button type="button" class="page-btn page-num ${i === curPage ? 'active' : ''}" onclick="changePrjPage(${i})" aria-label="Trang ${i}">${i}</button>`;
      }

      const isEn = typeof I18N !== "undefined" && I18N.lang === "en";
      const prevText = isEn ? "« Prev" : "« Trước";
      const nextText = isEn ? "Next »" : "Sau »";
      const prevDisabled = curPage === 1 ? "disabled" : "";
      const nextDisabled = curPage === totalPages ? "disabled" : "";
      const infoHtml = isEn
        ? `Page <b>${curPage}</b> / <b>${totalPages}</b> (Showing ${start + 1} – ${Math.min(start + PRJ_PER_PAGE, prjList.length)} of ${prjList.length} projects)`
        : `Trang <b>${curPage}</b> / <b>${totalPages}</b> (Hiển thị ${start + 1} – ${Math.min(start + PRJ_PER_PAGE, prjList.length)} trên tổng số ${prjList.length} dự án)`;

      pagContainer.innerHTML = `
        <div class="pagination-nav">
          <button type="button" class="page-btn page-prev ${prevDisabled}" onclick="changePrjPage(${curPage - 1})" aria-label="Trang trước" ${curPage === 1 ? 'disabled' : ''}>${prevText}</button>
          ${pagesHtml}
          <button type="button" class="page-btn page-next ${nextDisabled}" onclick="changePrjPage(${curPage + 1})" aria-label="Trang sau" ${curPage === totalPages ? 'disabled' : ''}>${nextText}</button>
        </div>
        <div class="page-info">
          ${infoHtml}
        </div>
      `;
    }
  }
}

  document.addEventListener("DOMContentLoaded", () => {
  renderHeader(); renderFooter();
  const fixedHeader = document.getElementById("header");
  if (fixedHeader && typeof ResizeObserver !== "undefined") {
    const syncHeaderHeight = () => document.documentElement.style.setProperty("--header-height", fixedHeader.getBoundingClientRect().height + "px");
    syncHeaderHeight();
    new ResizeObserver(syncHeaderHeight).observe(fixedHeader);
  }
  const fill = (id, arr, fn, n) => { const el = document.getElementById(id); if (el) el.innerHTML = arr.slice(0, n || arr.length).map(fn).join(""); };
  fill("home-cats", CATEGORIES, catCard); fill("home-svcs", SERVICES, svcCard);
  fillNewsCards(); fill("home-prj", [PROJECTS[0],PROJECTS[2],PROJECTS[9]], prjCard, 3);
  fill("all-svcs", SERVICES, svcCard); renderProjectPage(1);

  // trang sản phẩm
  const list = document.getElementById("product-list");
  if (list) {
    const q = new URLSearchParams(location.search).get("q");
    const draw = () => {
      const kw = (document.getElementById("pq").value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g,"d").toLowerCase();
      list.innerHTML = CATEGORIES.map(c => {
        const hit = s => (s + " " + I18N.t(s)).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g,"d").toLowerCase().includes(kw);
        const filtered = c.items.filter(item => {
          const name = typeof item === "object" ? item.name : item;
          return !kw || hit(name) || hit(c.name);
        });
        if (!filtered.length) return "";
        return `<section id="${c.id}" class="cat-block"><h2>${c.icon} ${c.name}</h2><p class="muted">${c.desc}</p>
          <div class="grid g3">${filtered.map((item, ix) => {
            const name = typeof item === "object" ? item.name : item;
            const imgSrc = (typeof item === "object" && item.img) ? item.img : ("assets/img/products/" + c.imgs[c.items.indexOf(item) % c.imgs.length] + ".jpg");
            return `<div class="card prod"><div class="thumb">${pic(imgSrc, c.icon, name)}</div><div class="body"><h3>${name}</h3><a class="btn sm" href="lien-he.html?sp=${encodeURIComponent(name)}">Yêu cầu tư vấn</a></div></div>`;
          }).join("")}</div></section>`;
      }).join("") || "<p>Không tìm thấy sản phẩm phù hợp.</p>";
      I18N.apply();
    };
    document.getElementById("pq").value = q || ""; document.getElementById("pq").oninput = draw; draw();
  }

  // form liên hệ – gửi thẳng về email công ty
  const f = document.getElementById("contact-form");
  if (f) {
    const sp = new URLSearchParams(location.search).get("sp");
    if (sp) f.msg.value = "Tôi cần tư vấn về giải pháp / thiết bị: " + sp;
    document.querySelectorAll(".map iframe").forEach(el => el.src="https://maps.google.com/maps?q="+encodeURIComponent(SITE.mapQuery)+"&output=embed");
    const status = document.getElementById("form-status"), btn = f.querySelector("button");
    const show = (msg, ok) => { status.textContent = msg; status.className = "form-status " + (ok ? "ok" : "err"); I18N.apply(); };
    f.onsubmit = async e => {
      e.preventDefault();
      if (f._honey.value) return;                       // chống spam (ô ẩn)
      btn.disabled = true; show("Đang gửi...", true);
      // Gửi trực tiếp vào SITE.email qua dịch vụ FormSubmit (không cần server riêng)
      const payload = {
        "Họ tên": f.elements.name.value, "Số điện thoại": f.phone.value, "Email khách": f.email.value || "(không có)",
        "Nội dung": f.msg.value, "Trang gửi": location.href,
        _subject: "[Website FPTS] Yêu cầu mới từ " + f.elements.name.value, _template: "table", _captcha: "false"
      };
      if (f.email.value) payload._replyto = f.email.value;
      try {
        const r = await fetch("https://formsubmit.co/ajax/" + SITE.email, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(20000)
        });
        const j = await r.json();
        if (!r.ok || String(j.success) !== "true") throw new Error(j.message || r.status);
        f.reset(); show("Cảm ơn quý khách! Yêu cầu đã được gửi, FPTS sẽ liên hệ trong thời gian sớm nhất.", true);
      } catch (err) {
        show("Gửi không thành công. Vui lòng gọi hotline hoặc gửi email trực tiếp cho chúng tôi.", false);
      }
      btn.disabled = false;
    };
  }
  document.querySelectorAll("[data-site]").forEach(el => el.textContent = SITE[el.dataset.site]);
  I18N.apply();
  // slider & dots navigation
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("hero-dots");
  let slideIdx = 0, slideTimer = null;

  const showSlide = (idx) => {
    slides.forEach((s, k) => (s.classList.toggle("on", k === idx), s.inert = k !== idx, s.setAttribute("aria-hidden", k !== idx)));
    if (dotsContainer) {
      dotsContainer.querySelectorAll(".hero-dot").forEach((d, k) => d.classList.toggle("active", k === idx));
    }
    slideIdx = idx;
  };

  const nextSlide = () => {
    showSlide((slideIdx + 1) % slides.length);
  };

  const startAutoPlay = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (slideTimer) clearInterval(slideTimer);
    if (slides.length > 1) {
      slideTimer = setInterval(nextSlide, 6500); // Tự động chuyển sau mỗi 2 giây
    }
  };

  if (dotsContainer && slides.length > 1) {
    dotsContainer.innerHTML = Array.from(slides).map((_, k) => `<button type="button" class="hero-dot ${k === 0 ? 'active' : ''}" data-idx="${k}" aria-label="Slide ${k + 1}"></button>`).join("");
    dotsContainer.querySelectorAll(".hero-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        const targetIdx = parseInt(e.currentTarget.dataset.idx, 10);
        showSlide(targetIdx);
        startAutoPlay(); // Reset timer khi người dùng chủ động click
      });
    });
  }

  if (slides.length) showSlide(0);
  startAutoPlay();
});
