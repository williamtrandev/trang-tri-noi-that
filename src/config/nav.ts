import { routes } from "./routes";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    label: "Dịch vụ",
    href: routes.services,
    children: [
      {
        label: "Thiết kế nội thất",
        href: routes.service("thiet-ke-noi-that"),
        description: "Bản vẽ 3D chân thực, tối ưu công năng",
      },
      {
        label: "Thi công trọn gói",
        href: routes.service("thi-cong-noi-that-tron-goi"),
        description: "Chìa khóa trao tay, đúng tiến độ",
      },
      {
        label: "Sản xuất theo yêu cầu",
        href: routes.service("san-xuat-noi-that-theo-yeu-cau"),
        description: "Xưởng gỗ CNC, nhận đơn số lượng lớn",
      },
    ],
  },
  {
    label: "Sản phẩm",
    href: routes.products,
    children: [
      { label: "Tủ bếp", href: routes.productCategory("tu-bep") },
      { label: "Bàn ăn", href: routes.productCategory("ban-an") },
      { label: "Ghế", href: routes.productCategory("ghe") },
      { label: "Giường ngủ", href: routes.productCategory("giuong-ngu") },
      { label: "Tủ quần áo", href: routes.productCategory("tu-quan-ao") },
      { label: "Kệ tivi", href: routes.productCategory("ke-tivi") },
      { label: "Nội thất văn phòng", href: routes.productCategory("noi-that-van-phong") },
      { label: "Nội thất gỗ tự nhiên", href: routes.productCategory("noi-that-go-tu-nhien") },
    ],
  },
  {
    label: "Giải pháp",
    href: routes.solutions,
    children: [
      { label: "Nội thất chung cư", href: routes.solution("noi-that-chung-cu"), description: "Căn hộ 1-3 phòng ngủ" },
      { label: "Nội thất biệt thự", href: routes.solution("noi-that-biet-thu"), description: "Biệt thự, nhà phố cao cấp" },
      { label: "Nội thất văn phòng", href: routes.solution("noi-that-van-phong"), description: "Doanh nghiệp, công ty" },
      { label: "Nội thất khách sạn", href: routes.solution("noi-that-khach-san"), description: "Khách sạn, resort" },
      { label: "Nội thất nhà hàng", href: routes.solution("noi-that-nha-hang"), description: "Nhà hàng, quán ăn" },
      { label: "Nội thất quán cà phê", href: routes.solution("noi-that-quan-cafe"), description: "Quán cà phê, F&B" },
    ],
  },
  { label: "Dự án", href: routes.projects },
  { label: "Bảng giá", href: routes.pricing },
  { label: "Cẩm nang", href: routes.blog },
  { label: "Liên hệ", href: routes.contact },
];

export const footerNav = {
  services: {
    title: "Dịch vụ",
    links: [
      { label: "Thiết kế nội thất", href: routes.service("thiet-ke-noi-that") },
      { label: "Thi công trọn gói", href: routes.service("thi-cong-noi-that-tron-goi") },
      { label: "Sản xuất theo yêu cầu", href: routes.service("san-xuat-noi-that-theo-yeu-cau") },
    ],
  },
  solutions: {
    title: "Giải pháp",
    links: [
      { label: "Nội thất chung cư", href: routes.solution("noi-that-chung-cu") },
      { label: "Nội thất biệt thự", href: routes.solution("noi-that-biet-thu") },
      { label: "Nội thất văn phòng", href: routes.solution("noi-that-van-phong") },
      { label: "Nội thất khách sạn", href: routes.solution("noi-that-khach-san") },
    ],
  },
  company: {
    title: "Công ty",
    links: [
      { label: "Giới thiệu", href: routes.about },
      { label: "Xưởng sản xuất", href: routes.workshop },
      { label: "Dự án đã thực hiện", href: routes.projects },
      { label: "Cẩm nang", href: routes.blog },
      { label: "Câu hỏi thường gặp", href: routes.faq },
    ],
  },
};
