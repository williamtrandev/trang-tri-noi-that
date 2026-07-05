# Kiến trúc Website Nội thất Cao cấp — Tài liệu Thiết kế Hệ thống

> Phiên bản: 1.0 — 05/07/2026
> Trạng thái: CHỜ REVIEW — chưa viết code cho đến khi toàn bộ quyết định kiến trúc được duyệt.
> Ngôn ngữ website: Tiếng Việt (vi-VN). Thị trường: Việt Nam, đa tỉnh thành.

---

## 1. Phân tích Business

### 1.1 Bản chất doanh nghiệp
Doanh nghiệp có **3 trụ dịch vụ** và **1 trụ sản phẩm**, phục vụ **2 nhóm khách hàng** rất khác nhau:

| Trụ | Nội dung | Hành vi tìm kiếm |
|---|---|---|
| Thiết kế nội thất | Dịch vụ tư vấn, bản vẽ 3D | "thiết kế nội thất chung cư", "mẫu thiết kế..." |
| Thi công nội thất | Trọn gói, phần thô + hoàn thiện | "thi công nội thất trọn gói giá" |
| Sản xuất nội thất theo yêu cầu | Xưởng gỗ, gia công | "xưởng sản xuất nội thất", "đóng tủ bếp theo yêu cầu" |
| Sản phẩm nội thất | Bàn ăn, ghế, giường, tủ áo, tủ bếp, kệ tivi, nội thất văn phòng... | "bàn ăn gỗ óc chó", "giường ngủ hiện đại" |

### 1.2 Hai phân khúc khách — hai hành trình chuyển đổi

**B2C (chủ nhà, chủ căn hộ, biệt thự):**
- Quyết định cảm tính + niềm tin. Cần: hình ảnh dự án thật, bảng giá minh bạch, quy trình rõ ràng, review khách cũ.
- Hành trình: Google/Ads → landing dịch vụ hoặc sản phẩm → xem dự án đã làm → gửi yêu cầu báo giá / gọi / Zalo.

**B2B (nhà hàng, khách sạn, văn phòng, quán cà phê, nhà thầu, kiến trúc sư):**
- Quyết định lý tính. Cần: năng lực xưởng, hồ sơ năng lực (portfolio PDF), chứng chỉ, tiến độ, hợp đồng mẫu.
- Hành trình: tìm "nhà thầu nội thất khách sạn" → trang giải pháp theo ngành → xem case study cùng ngành → liên hệ trực tiếp.

**Hệ quả kiến trúc:** phải tách 2 lớp landing:
- Landing theo **hạng mục** (dịch vụ/sản phẩm) — bắt search intent B2C.
- Landing theo **ngành/không gian** (khách sạn, nhà hàng, văn phòng, biệt thự, chung cư) — bắt search intent B2B và intent "trọn gói theo loại công trình".

### 1.3 Mục tiêu KPI của website
1. **Chuyển đổi:** số form yêu cầu báo giá + cuộc gọi + tin nhắn Zalo (đo được từng kênh).
2. **SEO:** top Google cho cụm từ khóa dịch vụ + sản phẩm + địa phương (hàng nghìn landing page về lâu dài).
3. **Thương hiệu:** cảm nhận "xưởng sản xuất thật, nhà thầu uy tín, chất lượng cao cấp" trong 5 giây đầu.

### 1.4 Design Read (theo taste-skill)
> Reading this as: **website doanh nghiệp premium + SEO lead-gen** cho khách B2C lẫn B2B tại Việt Nam, ngôn ngữ thị giác **sang trọng - tối giản - tin cậy**, nghiêng về **editorial + photography-first**, không phải landing "AI slop".

Dials: `DESIGN_VARIANCE: 7` / `MOTION_INTENSITY: 5` / `VISUAL_DENSITY: 3-4`.
Lý do: trust-first (khách sắp chi hàng trăm triệu) kéo motion xuống mức tinh tế; photography dự án thật là "nhân vật chính", không phải hiệu ứng.

---

## 2. Information Architecture (IA)

Mô hình **Hub & Spoke** — mỗi hub là một cụm chủ đề (topic cluster) phục vụ SEO:

```
Trang chủ
├── DỊCH VỤ (hub)                    ← intent "thuê dịch vụ"
│   ├── Thiết kế nội thất
│   ├── Thi công nội thất trọn gói
│   └── Sản xuất nội thất theo yêu cầu
│
├── SẢN PHẨM (hub)                   ← intent "mua/đóng sản phẩm"
│   ├── Tủ bếp / Bàn ăn / Ghế / Giường ngủ
│   ├── Tủ quần áo / Kệ tivi / Nội thất văn phòng
│   └── (mỗi danh mục → nhiều sản phẩm/mẫu)
│
├── GIẢI PHÁP THEO KHÔNG GIAN (hub)  ← intent B2B + "trọn gói theo công trình"
│   ├── Nội thất chung cư / Nhà phố / Biệt thự
│   └── Nội thất văn phòng / Khách sạn / Nhà hàng / Quán cà phê / Showroom
│
├── DỰ ÁN (proof)                    ← bằng chứng năng lực, lọc theo loại + tỉnh
├── KHU VỰC (hub địa phương)         ← local SEO đa tỉnh
│   └── TP.HCM / Bình Dương / Đồng Nai / Cần Thơ / ... (mở rộng dần)
│
├── BLOG / CẨM NANG (hub nội dung)   ← top-funnel, nuôi cụm chủ đề
├── GIỚI THIỆU (trust)               ← xưởng, đội ngũ, chứng chỉ, quy trình
├── BÁO GIÁ (conversion)             ← form báo giá chính + bảng giá tham khảo
└── LIÊN HỆ (conversion)
```

**Nguyên tắc IA:**
- Mọi trang đều cách trang chủ tối đa **3 click** (crawl depth ≤ 3).
- Mỗi hub tự liên kết nội bộ trong cụm (service ↔ sản phẩm liên quan ↔ dự án cùng loại ↔ bài blog cùng chủ đề ↔ trang khu vực).
- Điều hướng chính (desktop, 1 dòng): `Dịch vụ · Sản phẩm · Giải pháp · Dự án · Bảng giá · Cẩm nang · Liên hệ` + nút CTA "Nhận báo giá".
- Mega menu cho "Sản phẩm" và "Giải pháp" (nhiều danh mục con, có ảnh thumbnail).

---

## 3. Sitemap (cây trang đầy đủ)

```
/                                        Trang chủ
/gioi-thieu                              Giới thiệu công ty
/gioi-thieu/xuong-san-xuat               Năng lực xưởng (trust B2B)
/gioi-thieu/quy-trinh                    Quy trình làm việc 6 bước
/dich-vu                                 Tổng quan dịch vụ (hub)
/dich-vu/[slug]                          VD: thiet-ke-noi-that, thi-cong-noi-that-tron-goi,
                                             san-xuat-noi-that-theo-yeu-cau
/san-pham                                Tổng quan sản phẩm (hub)
/san-pham/[category]                     VD: tu-bep, ban-an, ghe, giuong-ngu, tu-quan-ao,
                                             ke-tivi, noi-that-van-phong, noi-that-go
/san-pham/[category]/[slug]              Trang chi tiết sản phẩm/mẫu
/giai-phap                               Tổng quan giải pháp theo không gian (hub)
/giai-phap/[slug]                        VD: noi-that-chung-cu, noi-that-biet-thu,
                                             noi-that-khach-san, noi-that-nha-hang,
                                             noi-that-van-phong, noi-that-quan-cafe
/du-an                                   Danh sách dự án (lọc theo loại + tỉnh)
/du-an/[slug]                            Chi tiết dự án / case study
/khu-vuc                                 Tổng quan khu vực phục vụ
/khu-vuc/[province]                      VD: ho-chi-minh, binh-duong, dong-nai, can-tho
/khu-vuc/[province]/[service]            VD: /khu-vuc/binh-duong/tu-bep  (ma trận local SEO)
/bang-gia                                Bảng giá tham khảo (SEO "báo giá/đơn giá")
/bao-gia                                 Trang yêu cầu báo giá (conversion, noindex tùy chọn)
/blog                                    Danh sách bài viết
/blog/chu-de/[category]                  VD: cam-nang-thiet-ke, vat-lieu-go, xu-huong
/blog/[slug]                             Bài viết chi tiết
/cau-hoi-thuong-gap                      FAQ tổng (FAQ schema)
/lien-he                                 Liên hệ
/chinh-sach-bao-hanh, /chinh-sach-bao-mat  Trang pháp lý/trust
```

**Quy mô dự kiến:** ~15 trang tĩnh + 3 dịch vụ + ~12 danh mục sản phẩm + hàng trăm sản phẩm + ~8 giải pháp + hàng trăm dự án + N tỉnh × M dịch vụ (ma trận) + blog không giới hạn → **thiết kế cho hàng nghìn URL ngay từ đầu**.

---

## 4. Chiến lược URL

### 4.1 Quyết định quan trọng: slug TIẾNG VIỆT không dấu
Đề bài gợi ý `/services/interior-design`, nhưng với thị trường Việt Nam tôi **khuyến nghị mạnh slug tiếng Việt không dấu**:

| Tiêu chí | `/services/interior-design` | `/dich-vu/thiet-ke-noi-that` ✅ |
|---|---|---|
| Khớp từ khóa người Việt tìm | Không | Có (từ khóa nằm ngay trong URL) |
| CTR trên SERP tiếng Việt | Thấp hơn | Cao hơn (URL đọc hiểu được) |
| Chuẩn thị trường (đối thủ top VN) | Hiếm | Phổ biến |

### 4.2 Quy tắc slug
- Chữ thường, không dấu, nối bằng `-`: `tủ bếp` → `tu-bep`.
- Không có `.html`, không trailing slash, không query param cho trang index được.
- Slug là **dữ liệu** (khai báo trong content layer), không hardcode trong code → đổi slug chỉ cần sửa content + redirect.
- Cấu trúc phân cấp phản chiếu breadcrumb: `san-pham → tu-bep → tu-bep-go-oc-cho-chu-l`.
- **Ma trận địa phương** dạng phân cấp `/khu-vuc/[province]/[service]` (thay vì slug phẳng `tu-bep-tai-binh-duong`) để: breadcrumb tự nhiên, sitemap gọn, và có thể bật/tắt index từng tổ hợp.
- Mọi thay đổi URL phải đi kèm **301 redirect map** quản lý tập trung (file `redirects.ts` đọc từ content).

---

## 5. Cấu trúc thư mục (Next.js App Router, feature-based)

```
src/
├── app/                              # CHỈ chứa routing + composition, không chứa logic
│   ├── layout.tsx                    # Root layout: font, theme, JSON-LD Organization
│   ├── page.tsx                      # Trang chủ
│   ├── sitemap.ts                    # Sitemap index (generateSitemaps — phân mảnh)
│   ├── robots.ts
│   ├── not-found.tsx / error.tsx / loading.tsx
│   ├── (marketing)/                  # Route group — layout marketing chung
│   │   ├── gioi-thieu/...
│   │   ├── dich-vu/{page.tsx, [slug]/page.tsx}
│   │   ├── san-pham/{page.tsx, [category]/{page.tsx, [slug]/page.tsx}}
│   │   ├── giai-phap/{page.tsx, [slug]/page.tsx}
│   │   ├── du-an/{page.tsx, [slug]/page.tsx}
│   │   ├── khu-vuc/{page.tsx, [province]/{page.tsx, [service]/page.tsx}}
│   │   ├── blog/{page.tsx, chu-de/[category]/page.tsx, [slug]/page.tsx}
│   │   ├── bang-gia/  bao-gia/  lien-he/  cau-hoi-thuong-gap/
│   ├── api/
│   │   └── leads/route.ts            # Nhận form báo giá (hoặc Server Action thay thế)
│   └── og/[...]/route.tsx            # OG image động (next/og) theo template
│
├── features/                         # Mỗi feature tự đóng gói: components + hooks + logic
│   ├── quote/                        # Form báo giá: schema Zod, server action, steps
│   ├── catalog/                      # Sản phẩm: card, grid, filter, gallery
│   ├── projects/                     # Dự án: card, filter theo loại/tỉnh, lightbox
│   ├── locations/                    # Trang khu vực: map, vùng phục vụ
│   ├── blog/                         # MDX render, TOC, related posts
│   ├── testimonials/                 # Đánh giá khách hàng
│   └── contact/                      # Floating buttons (Zalo/Phone), click-to-call
│
├── components/
│   ├── ui/                           # shadcn/ui (đã customize theme — KHÔNG để mặc định)
│   ├── layout/                       # Header, MegaMenu, Footer, Breadcrumb, StickyCta
│   ├── sections/                     # Section tái sử dụng: Hero, CtaBand, FaqSection,
│   │                                 #   ProjectShowcase, TrustBar, ProcessSteps, StatsBand
│   └── seo/                          # <JsonLd/> renderer
│
├── lib/
│   ├── content/                      # ★ CONTENT LAYER — repository pattern
│   │   ├── types.ts                  # Toàn bộ interface (mục 9)
│   │   ├── provider.ts               # interface ContentProvider (trừu tượng hóa nguồn)
│   │   ├── file-provider.ts          # Adapter hiện tại: đọc MDX/JSON từ /content
│   │   └── index.ts                  # getServices(), getProduct(slug)... (React.cache)
│   ├── seo/
│   │   ├── metadata.ts               # buildMetadata() cho từng template
│   │   ├── schema.ts                 # Builder JSON-LD (Organization, LocalBusiness,
│   │   │                             #   Product, Service, FAQPage, BreadcrumbList...)
│   │   └── url.ts                    # absoluteUrl(), canonical helpers
│   ├── analytics/                    # GA4 / Ads conversion events (defer sau hydration)
│   └── utils.ts
│
├── config/
│   ├── site.ts                       # Tên, SĐT, Zalo, địa chỉ, social, giờ làm việc
│   ├── nav.ts                        # Cấu trúc menu (đọc từ content, không hardcode)
│   └── routes.ts                     # Hằng số đường dẫn + hàm build URL type-safe
│
├── content/                          # ★ NGUỒN NỘI DUNG (git-based, CMS-ready)
│   ├── services/*.mdx
│   ├── products/{category}/*.mdx
│   ├── solutions/*.mdx
│   ├── projects/*.mdx
│   ├── locations/*.json              # Tỉnh thành + dữ liệu local hóa
│   ├── blog/*.mdx
│   ├── faqs/*.json  testimonials/*.json
│   └── settings/{pricing.json, redirects.json}
│
└── styles/globals.css                # Tailwind v4 @theme tokens
```

**Nguyên tắc:**
- `app/` mỏng — page chỉ gọi content layer + ghép sections. Logic nằm trong `features/` và `lib/`.
- **Repository pattern** ở `lib/content`: hôm nay đọc file MDX, ngày mai thay `file-provider.ts` bằng `cms-provider.ts` (Sanity/Payload/Strapi) mà **không sửa bất kỳ page nào**. Đây là điểm chống-khóa-cứng quan trọng nhất.
- Server Components mặc định; `"use client"` chỉ ở lá: form, gallery/lightbox, mega menu mobile, floating contact, motion islands.

---

## 6. Kiến trúc Component tái sử dụng

### 6.1 Phân tầng 4 lớp
```
Lớp 1 — Primitives (components/ui):    Button, Input, Select, Accordion, Dialog, Badge,
                                        Skeleton... (shadcn đã re-theme)
Lớp 2 — Layout (components/layout):    Header, MegaMenu, Footer, Breadcrumb, Container,
                                        Section (chuẩn hóa py-24/32), StickyCtaBar,
                                        FloatingContact (Zalo + Phone)
Lớp 3 — Sections (components/sections): Các "khối trang" nhận props thuần dữ liệu:
                                        HeroSplit, HeroEditorial, ProjectShowcase,
                                        ProductGrid, ProcessSteps, TrustBar (logo/чỉ số),
                                        TestimonialCarousel, FaqAccordion, CtaBand,
                                        PricingTable, LocationCoverage, BlogTeaser
Lớp 4 — Templates (ghép trong page):   ServicePage = Hero + Benefits + ProjectShowcase
                                        + ProcessSteps + PricingTable + Testimonials
                                        + FaqAccordion + CtaBand
```

### 6.2 Quy tắc thiết kế API component
- Section nhận **dữ liệu đã chuẩn hóa** (`props: { data: ServicePage }`), không tự fetch → tái sử dụng cho mọi nguồn nội dung.
- Composition over configuration: `<Section>` + `<SectionHeading>` + slot children, tránh component "nghìn props boolean".
- Mỗi trang landing được lắp từ **danh sách block khai báo trong content** (`blocks: [{type: "hero", ...}, {type: "faq", ...}]`) → biên tập viên thay đổi bố cục không cần dev → nền tảng cho "hàng nghìn landing page".
- Client islands cô lập: `TestimonialCarousel.client.tsx`, `ProjectLightbox.client.tsx` — mọi thứ còn lại render tĩnh trên server.
- Trạng thái đầy đủ cho mọi component tương tác: loading (skeleton đúng khung layout), empty, error inline.

---

## 7. Kiến trúc SEO

### 7.1 Metadata
- `buildMetadata()` tập trung trong `lib/seo/metadata.ts` — mỗi template (service, product, project, location, blog) có công thức title/description riêng, đọc override từ frontmatter.
- Công thức title mẫu: `{Tên trang} | {Brand}`; trang địa phương: `{Dịch vụ} tại {Tỉnh} — Báo giá {năm} | {Brand}` (năm lấy từ build-time, tự cập nhật).
- `metadataBase` khai báo 1 lần ở root layout; canonical **tự tham chiếu** trên mọi trang; trang lọc/phân trang canonical về trang gốc hoặc dùng `rel=prev/next` logic qua canonical trang 1.
- Open Graph + Twitter Card đầy đủ; **OG image động** qua `next/og` route theo template (ảnh dự án + tên trang + logo).

### 7.2 JSON-LD (lib/seo/schema.ts — builder type-safe bằng `schema-dts`)
| Trang | Schema |
|---|---|
| Toàn site (root layout) | `Organization` (logo, sameAs, contactPoint) |
| Trang chủ + Liên hệ + Khu vực | `LocalBusiness` (`FurnitureStore` + `GeneralContractor`), `areaServed` theo tỉnh, `geo`, `openingHours` |
| Dịch vụ / Giải pháp | `Service` (+ `areaServed`, `provider`) |
| Sản phẩm | `Product` (+ `offers` dạng `AggregateOffer` khoảng giá, `material`, ảnh) |
| Dự án | `CreativeWork` hoặc `Article` + `ImageObject` gallery |
| Blog | `Article` (+ author, datePublished/Modified) |
| FAQ (mọi trang có FAQ block) | `FAQPage` |
| Mọi trang con | `BreadcrumbList` (sinh tự động từ cây route) |
| Testimonials trên trang dịch vụ | `AggregateRating` (chỉ khi có review thật — không fake) |

### 7.3 Sitemap & Robots
- `app/sitemap.ts` dùng **`generateSitemaps()` phân mảnh**: `sitemap/0.xml` (tĩnh + dịch vụ), `/1` (sản phẩm), `/2` (dự án), `/3` (blog), `/4` (khu vực)... — sẵn sàng cho >50.000 URL (giới hạn 50k/sitemap).
- `lastModified` lấy từ frontmatter/git — Google ưu tiên crawl trang mới sửa.
- `robots.ts`: chặn `/api`, `/bao-gia/thanh-cong` (trang cảm ơn), query param lọc; khai báo sitemap index.
- Trang cảm ơn sau submit form = trang riêng (`noindex`) → dùng làm mốc conversion cho GA4/Google Ads.

### 7.4 Rendering & indexability
- **SSG + ISR** cho toàn bộ landing (`generateStaticParams` + `revalidate` theo tag khi nội dung đổi) → HTML đầy đủ cho Googlebot, không phụ thuộc JS.
- Nội dung SEO (heading, body, FAQ) luôn nằm trong Server Components — không bao giờ nằm sau `dynamic(..., { ssr: false })`.

---

## 8. Kiến trúc Nội dung

### 8.1 Các loại nội dung (content types) và vai trò funnel
| Loại | Funnel | Tần suất | Ghi chú |
|---|---|---|---|
| Trang dịch vụ | BOFU | Ít, chăm kỹ | 1.500-2.500 từ, FAQ, giá, quy trình |
| Trang danh mục sản phẩm | MOFU-BOFU | Theo danh mục | Grid mẫu + nội dung tư vấn chọn mua |
| Trang sản phẩm/mẫu | BOFU | Nhiều | Ảnh + spec + khoảng giá + CTA báo giá |
| Trang giải pháp không gian | BOFU (B2B) | ~8-12 trang | Case study cùng ngành nhúng trong trang |
| Dự án / case study | Proof | 2-4/tháng | Ảnh thật before/after, số liệu, testimonial |
| Trang khu vực | Local SEO | Mở dần từng tỉnh | Xem 8.2 |
| Blog/cẩm nang | TOFU | 4-8 bài/tháng | Nuôi topic cluster, internal link về hub |

### 8.2 Ma trận Dịch vụ × Tỉnh — quy tắc chống "doorway page"
Đây là rủi ro SEO lớn nhất (mục 17). Quy tắc bắt buộc:
- Trang `/khu-vuc/[province]/[service]` **chỉ được publish khi có đủ dữ liệu địa phương thật**: ≥2 dự án tại tỉnh đó, testimonial khách địa phương, thông tin giao hàng/lắp đặt/khảo sát riêng, đơn giá vận chuyển.
- Content model có cờ `publishable: boolean` — tổ hợp thiếu dữ liệu tồn tại ở dạng draft, KHÔNG render, KHÔNG vào sitemap.
- Nội dung khung (quy trình, cam kết) được viết lại theo ngữ cảnh tỉnh, không find-replace tên tỉnh.
- Mở tỉnh theo lộ trình: 4 tỉnh trọng điểm trước → đo → mở tiếp.

### 8.3 Internal linking tự động
- Mỗi content khai báo quan hệ: `relatedServices`, `relatedProducts`, `relatedProjects`, `province`.
- Component `RelatedGrid` render link chéo trong cụm → topic cluster tự vận hành, không phụ thuộc biên tập viên nhớ đi link tay.

---

## 9. Data Model (TypeScript — chưa ràng buộc database)

```
SiteConfig      { name, legalName, phone, zaloUrl, email, addresses[], socials[],
                  openingHours, defaultOgImage }

Service         { id, slug, title, shortDescription, heroImage, body(MDX),
                  benefits[], processSteps[], priceRange?, faqs: FaqItem[],
                  relatedProjectIds[], relatedProductCategoryIds[],
                  seo: SeoOverride, blocks: PageBlock[] }

ProductCategory { id, slug, title, description, heroImage, body(MDX),
                  parentId?, faqs[], seo, blocks[] }

Product         { id, slug, categoryId, title, images: ImageAsset[],
                  materials[], dimensions?, colors[], priceRange?,
                  description(MDX), faqs[], relatedProductIds[], seo }

Solution        { id, slug, title, audience: "B2C"|"B2B", heroImage, body,
                  caseStudyIds[], faqs[], seo, blocks[] }         # giải pháp không gian

Project         { id, slug, title, type: SolutionRef, provinceId, client?,
                  area?, budgetRange?, durationDays?, images[], body(MDX),
                  testimonialId?, servicesUsed[], featured: boolean, seo }

Location        { id, slug, name, region, geo?, serviceAreaNote,
                  publishableServices: { serviceSlug, publishable, localBody?,
                    localProjects[], localFaqs[], deliveryInfo }[],
                  addressIfAny?, seo }

Post            { id, slug, title, category, excerpt, cover, body(MDX),
                  author, publishedAt, updatedAt, relatedIds[], seo }

FaqItem         { question, answer(rich) }
Testimonial     { id, author, role?, company?, provinceId?, quote(≤3 dòng),
                  avatar?, projectId?, rating? }

Lead            { id, name, phone, email?, provinceId?, serviceInterest,
                  budgetRange?, message?, source: "form"|"call"|"zalo",
                  utm: UtmParams, createdAt }                     # gửi đi, không lưu DB giai đoạn 1

PageBlock       = HeroBlock | RichTextBlock | ProjectShowcaseBlock | FaqBlock
                | PricingBlock | TestimonialBlock | CtaBlock | GalleryBlock ...
                  (discriminated union — nền tảng "lắp trang bằng block")

SeoOverride     { title?, description?, ogImage?, noindex?, canonical? }
ImageAsset      { src, alt(bắt buộc), width, height, caption? }
```

**Nguyên tắc:** mọi truy cập dữ liệu đi qua `ContentProvider` interface (`getServices()`, `getProductsByCategory()`, `getPublishableLocationPages()`...). Giai đoạn 1 dữ liệu là MDX/JSON trong git (được validate bằng **Zod schema lúc build** — sai frontmatter là build fail). Giai đoạn 2 thay adapter sang headless CMS, model giữ nguyên.

---

## 10. Thư viện khuyến nghị

| Nhu cầu | Thư viện | Ghi chú |
|---|---|---|
| Framework | `next@15.x` (App Router) + `react@19` | SSG/ISR/PPR |
| Ngôn ngữ | `typescript@5.x` strict | `noUncheckedIndexedAccess: true` |
| CSS | `tailwindcss@4` | Token qua `@theme` CSS variables |
| UI primitives | `shadcn/ui` (Radix) | Re-theme toàn bộ, không dùng mặc định |
| Animation | `motion` (import `motion/react`) | Framer Motion thế hệ mới; chỉ ở client leaf |
| Form | `react-hook-form` + `zod` + `@hookform/resolvers` | Schema Zod dùng chung client + server action |
| Icons | `lucide-react` | Theo yêu cầu stack; khóa `strokeWidth: 1.75`, 1 bộ duy nhất |
| Content layer | `velite` (hoặc `contentlayer2`) | Validate frontmatter bằng Zod, typegen |
| MDX | `next-mdx-remote-client` / MDX pipeline của Velite | |
| JSON-LD | `schema-dts` | Type-safe schema builder |
| Ảnh | `next/image` + `sharp` | AVIF/WebP tự động |
| OG image | `next/og` (Satori) | OG động theo template |
| Email lead | `resend` + `react-email` | Gửi lead về email/CRM webhook |
| Chống spam form | Cloudflare Turnstile | Nhẹ hơn reCAPTCHA, không phạt UX |
| Analytics | GA4 + `@vercel/analytics` + `@vercel/speed-insights` | Load sau hydration |
| Carousel | `embla-carousel-react` | Nhẹ, accessible, dùng cho testimonial/gallery |
| Lightbox | `yet-another-react-lightbox` | Lazy import |

**Không dùng:** Redux/Zustand (chưa cần state toàn cục), styled-components/emotion (xung đột RSC), thư viện UI thứ hai, jQuery-era slider.

---

## 11. Design System

- **Nguồn token duy nhất:** CSS variables trong `globals.css` (`@theme` của Tailwind v4) — semantic tokens: `--surface`, `--surface-elevated`, `--ink`, `--ink-muted`, `--brand`, `--brand-foreground`, `--line`.
- **Radius lock (một hệ duy nhất):** nút và input `10px`, card `14px`, ảnh `14px`. Không trộn pill với vuông.
- **Elevation:** ưu tiên **border + khoảng trắng** thay vì shadow. Khi cần shadow: tint theo màu nền, không đen thuần.
- **Spacing scale:** hệ 4px; section desktop `py-24` → `py-32` (hero và CTA band lớn hơn); container `max-w-[1320px]`.
- **Grid:** 12 cột desktop, layout bất đối xứng có chủ đích (7/5, 8/4), mobile về 1 cột tuyệt đối.
- **Photography là hệ nhận diện chính:** ảnh dự án thật, tông ấm, ánh sáng tự nhiên; tỷ lệ chuẩn hóa 4:3 (dự án), 3:4 (sản phẩm đứng), 21:9 (hero band). Cấm ảnh stock "văn phòng người mẫu cười".
- **Trạng thái tương tác:** `:active` scale `0.98`; focus ring 2px màu brand trên mọi phần tử tương tác.
- Toàn bộ shadcn components được re-skin theo token ngay từ Phase 1 — có file `THEME.md` ghi quy tắc để mọi component sau này nhất quán.

## 12. Bảng màu (khuyến nghị)

Tránh cliché "beige + đồng thau" của mọi website nội thất AI-gen. Chọn họ **Forest & Bone** — sang, hiếm gặp ở đối thủ VN, hợp gỗ tự nhiên:

| Token | Màu | Dùng cho |
|---|---|---|
| `--ink` | `#101613` (near-black ánh lục) | Chữ chính, footer/section tối |
| `--surface` | `#FCFCFB` (trắng ngà rất nhạt, không kem) | Nền chính |
| `--surface-2` | `#F2F3F0` | Nền section xen kẽ |
| `--brand` | `#1F4D3A` (xanh rêu rừng đậm) | CTA, link, accent DUY NHẤT |
| `--brand-hover` | `#173D2E` | Hover |
| `--wood` | `#B98A5E` (tan gỗ) | CHỈ xuất hiện trong ảnh/vật liệu minh họa, KHÔNG làm accent UI thứ hai |
| `--line` | `#E4E6E1` | Border, divider |
| `--ink-muted` | `#5B655F` | Body text phụ (đạt AA trên `--surface`) |

- **1 accent duy nhất** (`--brand`) khóa toàn site — mọi CTA, badge, link cùng màu.
- Theme lock: site nền sáng; section tối (`--ink`) dùng làm điểm nhấn CTA band/footer nhưng cùng họ màu, không đảo theme giữa trang.
- Kiểm tra contrast: `--brand` trên trắng đạt AA cho large text và button (kèm chữ trắng đạt 4.5:1+); body text tối thiểu 4.5:1.

## 13. Typography

**Ràng buộc cứng: font phải có subset `vietnamese` đầy đủ dấu** (kiểm tra ả ằ ẵ ệ ỡ ữ... không vỡ baseline).

- **Khuyến nghị chính: `Be Vietnam Pro`** (Google Fonts, thiết kế cho tiếng Việt, dấu đặt chuẩn) dùng cho **cả display lẫn body**, phân cấp bằng weight + size:
  - Display/H1-H2: weight 600-700, `tracking-tight`, `clamp(2.25rem, 4.5vw, 4rem)`, tối đa 2 dòng.
  - Body: weight 400, `text-base/relaxed`, `max-w-[65ch]`.
  - Số liệu/bảng giá: tabular-nums.
- Phương án thay thế (nếu muốn khác biệt hơn): display `Archivo` (có vietnamese subset, expanded width rất "kiến trúc") + body `Be Vietnam Pro`.
- **Không dùng serif mặc định**; không Inter; không trộn serif vào giữa headline sans.
- Tải qua `next/font/google` với `subsets: ["vietnamese", "latin"]`, `display: "swap"`, preload weight 400/600/700 duy nhất (tránh tải 9 weight).
- Line-height tiếng Việt cần thoáng hơn tiếng Anh (dấu chồng cao): heading `leading-[1.15]` thay vì `leading-none`, body `leading-[1.75]`.

## 14. Chiến lược Animation

`MOTION_INTENSITY: 5` — tinh tế, phục vụ sự sang trọng, không "làm xiếc":

| Vị trí | Hiệu ứng | Công cụ |
|---|---|---|
| Hero | Fade-up 1 lần cho headline + CTA (0.6s, ease `[0.16,1,0.3,1]`); ảnh hero KHÔNG animate (bảo vệ LCP) | Motion |
| Sections | `whileInView` reveal + stagger nhẹ (1 lần, `viewport: {once: true}`) | Motion (5.C pattern) |
| Card dự án/sản phẩm | Ảnh `scale-105` trong container `overflow-hidden`, duration 700ms | CSS thuần |
| Trang chủ — showcase dự án | 1 khối scrolltelling duy nhất (ảnh dự án pin + caption đổi) — chỉ nếu Phase 2 cho phép | GSAP ScrollTrigger, isolated client leaf |
| CTA/Buttons | `:active scale-[0.98]`, hover đổi nền 200ms | CSS |
| Số liệu (năm kinh nghiệm, dự án) | Count-up khi vào viewport, 1 lần | Motion |

**Quy tắc cứng:** chỉ animate `transform`/`opacity` · mọi motion tôn trọng `prefers-reduced-motion` (degrade về static) · không `window.addEventListener("scroll")` · không marquee quá 1/trang · không mix GSAP và Motion trong cùng component tree · mọi animation phải trả lời được "nó truyền đạt điều gì".

## 15. Chiến lược Responsive

- **Mobile-first thực chất** — dự kiến >70% traffic từ mobile (đặc thù VN, traffic từ Ads + Zalo).
- Breakpoints chuẩn Tailwind (`sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`); layout bất đối xứng desktop **collapse về 1 cột** dưới `md`.
- Hero dùng `min-h-[100dvh]` hoặc thấp hơn (không `h-screen`); ảnh hero art-direction riêng cho mobile (crop dọc) qua `<Image sizes>`.
- **Thanh CTA sticky đáy màn hình mobile**: `Gọi ngay · Zalo · Nhận báo giá` — 3 nút, thumb-reachable, đây là bộ phận chuyển đổi quan trọng nhất trên mobile.
- Bảng (bảng giá, spec) → card stack hoặc scroll ngang có snap trên mobile, không bóp chữ.
- Touch target tối thiểu 44×44px; mega menu desktop → accordion trong drawer mobile.
- Test bắt buộc trên viewport 360px (phổ biến nhất VN) và iOS Safari (dvh, safe-area-inset cho sticky bar).

---

## 16. Rủi ro Scalability (và cách kiến trúc đã phòng)

| Rủi ro | Phòng ngừa |
|---|---|
| Hàng nghìn trang làm build quá lâu | SSG có chọn lọc: `generateStaticParams` chỉ pre-build trang trọng yếu; phần đuôi dài dùng ISR on-demand (`dynamicParams: true`) |
| Content trong git vượt tầm biên tập viên | Repository pattern → thay file-provider bằng CMS adapter, không sửa page |
| Ảnh dự án phình to (hàng chục GB) | Ngay từ đầu đặt ảnh qua abstraction `ImageAsset.src` — chuyển sang CDN/Cloudinary chỉ đổi loader |
| Ma trận tỉnh × dịch vụ bùng nổ tổ hợp | Cờ `publishable` + lộ trình mở tỉnh; sitemap phân mảnh sẵn |
| Đổi cấu trúc URL sau này | Slug là data + redirect map tập trung |
| Thêm ngôn ngữ (EN cho khách B2B nước ngoài) | Cây route đặt dưới group; khi cần thêm `[locale]` prefix + hreflang — không hardcode chuỗi vi trong component (copy tập trung ở content/config) |
| Form lead cần CRM sau này | Lead đi qua 1 server action duy nhất → thêm webhook CRM tại 1 điểm |

## 17. Rủi ro SEO

1. **Doorway pages** (ma trận tỉnh) — rủi ro án phạt lớn nhất → quy tắc 8.2 (chỉ publish khi có dữ liệu địa phương thật).
2. **Trùng lặp nội dung** giữa dịch vụ ↔ giải pháp ↔ danh mục sản phẩm gần nghĩa (VD "tủ bếp" vừa là sản phẩm vừa là dịch vụ) → **mapping từ khóa 1-1 với URL** trước khi viết: mỗi cụm intent chỉ có 1 trang đích; trang kia internal link sang.
3. **Cannibalization blog vs landing** → blog nhắm intent thông tin, landing nhắm intent giao dịch; blog luôn link về landing với anchor giao dịch.
4. **Ảnh thiếu alt tiếng Việt / tên file vô nghĩa** → `ImageAsset.alt` bắt buộc trong schema, build fail nếu thiếu.
5. **Schema fake** (rating không có thật) → chỉ render `AggregateRating` khi có review thật; tránh án phạt structured data.
6. **Đổi slug tùy tiện** → redirect map + quy trình duyệt.
7. **Nội dung sau JS** → toàn bộ nội dung SEO ở Server Components (đã chốt ở 7.4).
8. **Trang lọc/phân trang loãng index** → canonical + robots quy hoạch từ đầu.

## 18. Rủi ro Performance

1. **Ảnh là 90% trọng lượng trang** → `next/image` bắt buộc, `priority` duy nhất cho ảnh hero LCP, `sizes` đúng cho grid; lazy toàn bộ dưới fold.
2. **Font tiếng Việt nặng hơn** (subset vietnamese lớn) → chỉ 3 weight, `display: swap`, không load font thứ hai.
3. **Script bên thứ ba (GA4, Google Ads, Zalo widget)** — thủ phạm INP số 1 → load sau hydration (`afterInteractive`/idle); KHÔNG nhúng Zalo chat widget chính thức (nặng), thay bằng nút deep-link `https://zalo.me/{oaid}` thuần HTML.
4. **Motion/GSAP vào bundle chung** → dynamic import trong client leaf; GSAP chỉ tải ở trang có scrolltelling.
5. **Lightbox/carousel** → lazy import khi tương tác.
6. **CLS từ ảnh/testimonial** → mọi ảnh có width/height; skeleton đúng kích thước; không inject banner đẩy layout.
7. Ngân sách: LCP < 2.0s (4G), JS first-load < 120KB gzip cho trang landing, Lighthouse Perf > 95 — đo bằng CI (Lighthouse CI) mỗi PR.

## 19. Rủi ro Accessibility

1. **Chữ trắng đè ảnh hero** → bắt buộc scrim gradient tối ≥ 40% phía sau text, kiểm 4.5:1.
2. **Floating buttons che nội dung** (Zalo/phone) → chừa `padding-bottom` an toàn + safe-area; nút có `aria-label` ("Nhắn Zalo cho chúng tôi").
3. **Carousel testimonial/gallery** → điều khiển được bằng bàn phím, có nút prev/next thật, pause khi focus, không auto-play quá nhanh.
4. **Form báo giá nhiều bước** → label thật (không placeholder-as-label), error text gắn `aria-describedby`, thông báo lỗi bằng text không chỉ bằng màu.
5. **Mega menu** → focus trap đúng, `Esc` đóng, điều hướng mũi tên; drawer mobile khóa scroll nền.
6. **Màu brand xanh rêu trên nền tối** → kiểm tra riêng contrast link trong footer/section tối.
7. **`lang="vi"`** ở html root — screen reader đọc đúng tiếng Việt.
8. **Skip-link** "Bỏ qua đến nội dung chính" + heading hierarchy chuẩn (1 H1/trang, không nhảy cấp).

---

## 20. Lộ trình Triển khai

### Phase 0 — Nền móng (tuần 1)
- Khởi tạo Next.js 15 + TS strict + Tailwind v4 + shadcn; cấu trúc thư mục mục 5.
- Design tokens (màu, radius, spacing, font Be Vietnam Pro vietnamese subset) + re-theme shadcn + `THEME.md`.
- Content layer: Velite + Zod schemas cho toàn bộ content types (mục 9) + `ContentProvider`.
- `lib/seo`: buildMetadata, schema builders, sitemap/robots khung, redirect map.
- CI: typecheck + lint + Lighthouse CI budget.
- **Cổng nghiệm thu:** build xanh, 1 trang mẫu đạt Lighthouse 95+/100/100/100.

### Phase 1 — Khung trang & hệ chuyển đổi (tuần 2-3)
- Layout: Header + mega menu, Footer, Breadcrumb, StickyCtaBar mobile, FloatingContact.
- Sections lớp 3 (Hero, CtaBand, FaqAccordion, TrustBar, ProcessSteps, TestimonialCarousel...).
- **Form báo giá** (RHF + Zod + server action + Resend + Turnstile + UTM capture) + trang cảm ơn (mốc conversion GA4/Ads).
- Trang chủ, Giới thiệu, Liên hệ, Bảng giá.
- **Cổng nghiệm thu:** submit form nhận được email lead kèm UTM; đo được sự kiện conversion.

### Phase 2 — Template SEO landing (tuần 4-5)
- Template + content đầu tiên: 3 trang dịch vụ, 6-8 danh mục sản phẩm, 4-6 giải pháp, 6-10 dự án.
- JSON-LD đầy đủ theo bảng 7.2; OG image động; sitemap phân mảnh chạy thật.
- Hệ block khai báo (PageBlock) hoạt động cho ít nhất template dịch vụ.
- **Cổng nghiệm thu:** Rich Results Test pass toàn bộ schema; Search Console index sạch.

### Phase 3 — Blog + Khu vực (tuần 6-7)
- Blog MDX (TOC, related, author) + 6-10 bài đầu tiên theo keyword map.
- Trang khu vực: 4 tỉnh trọng điểm, tuân thủ quy tắc chống doorway 8.2.
- Internal linking tự động (RelatedGrid) chạy toàn site.

### Phase 4 — Đánh bóng & phát hành (tuần 8)
- Motion layer hoàn chỉnh + reduced-motion audit; a11y audit (bàn phím, screen reader, contrast) đạt WCAG AA.
- Perf audit thật trên 4G/mobile; ảnh art-direction mobile.
- Redirect từ site cũ (nếu có), Search Console + GA4 + Google Ads conversion linking, submit sitemap.

### Phase 5 — Vận hành tăng trưởng (liên tục)
- Nhịp nội dung: 4-8 bài blog + 2-4 dự án/tháng; mở thêm tỉnh theo dữ liệu.
- A/B test CTA/form (thứ tự field, số bước); xem xét CMS headless khi biên tập viên non-tech tham gia.
- Review quý: Core Web Vitals field data, vị trí từ khóa, tỷ lệ chuyển đổi theo landing.

---

## Các quyết định cần chủ đầu tư xác nhận trước khi code

1. **Slug tiếng Việt không dấu** (`/dich-vu/thiet-ke-noi-that`) thay vì tiếng Anh — khuyến nghị mạnh, cần chốt vì đổi sau rất tốn kém.
2. **Bảng màu Forest & Bone** (xanh rêu đậm làm accent duy nhất) — thay cho lối mòn nâu/vàng đồng của ngành.
3. **Font Be Vietnam Pro** cho toàn site.
4. Giai đoạn 1 nội dung quản lý bằng **file MDX trong git** (dev hỗ trợ đăng), CMS headless để Phase 5 — chấp nhận được không?
5. Danh sách **4 tỉnh trọng điểm** mở đầu cho local SEO.
6. Có website cũ cần redirect/bảo toàn thứ hạng không?
