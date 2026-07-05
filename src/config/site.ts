export const siteConfig = {
  name: "Nhà Mộc",
  legalName: "Công ty TNHH Nội Thất Nhà Mộc",
  tagline: "Thiết kế · Thi công · Hoàn thiện nội thất trọn gói",
  description:
    "Đơn vị thiết kế và thi công nội thất trọn gói cho căn hộ, biệt thự, văn phòng, khách sạn, nhà hàng. Từ tư vấn thiết kế, gia công đến hoàn thiện bàn giao. Báo giá minh bạch, bảo hành dài hạn.",
  url: "https://noithatnhamoc.vn",
  phone: "0907 640 698",
  phoneHref: "tel:+84907640698",
  zaloId: "0907640698",
  zaloUrl: "https://zalo.me/0907640698",
  email: "baogia@noithatnhamoc.vn",
  address: "Số 27 Đường số 8, KDC Vạn Phúc, TP. Thủ Đức, TP.HCM",
  workshop: "Xưởng gia công nội thất: Đường ĐT743, TP. Dĩ An, Bình Dương",
  openingHours: "Thứ 2 - Chủ nhật: 8:00 - 19:00",
  foundedYear: 2011,
  socials: {
    facebook: "https://facebook.com/noithatnhamoc",
    youtube: "https://youtube.com/@noithatnhamoc",
    tiktok: "https://tiktok.com/@noithatnhamoc",
  },
  stats: {
    years: new Date().getFullYear() - 2011,
    projects: 1240,
    provinces: 18,
    workshopArea: 3200,
  },
} as const;

export type SiteConfig = typeof siteConfig;
