import { photo } from "@/lib/utils";
import type {
  Location,
  Post,
  Product,
  ProductCategory,
  Project,
  Service,
  Solution,
  Testimonial,
} from "./types";

/* ----------------------------- DỊCH VỤ ----------------------------- */
export const services: Service[] = [
  {
    slug: "thiet-ke-noi-that",
    title: "Thiết kế nội thất",
    shortDescription:
      "Bản vẽ 3D chân thực, phương án công năng tối ưu cho từng mét vuông. Miễn phí thiết kế khi thi công trọn gói.",
    heroImage: photo("interior-design-livingroom-warm", 1920, 1080),
    intro:
      "Đội ngũ kiến trúc sư của Nhà Mộc thiết kế không gian sống dựa trên thói quen sinh hoạt thật của gia đình bạn, không rập khuôn mẫu có sẵn. Mỗi phương án đi kèm bản vẽ 3D chân thực, bóc tách vật liệu và dự toán chi tiết trước khi thi công.",
    benefits: [
      {
        title: "Khảo sát tận nơi miễn phí",
        description:
          "Kiến trúc sư đo đạc thực tế, tư vấn công năng và phong cách phù hợp ngân sách ngay tại công trình.",
        icon: "Ruler",
      },
      {
        title: "Phối cảnh 3D chân thực",
        description:
          "Bạn thấy trước không gian hoàn thiện đến từng chi tiết vật liệu, ánh sáng trước khi quyết định.",
        icon: "Box",
      },
      {
        title: "Tối ưu công năng",
        description:
          "Bố trí thông minh cho căn hộ nhỏ, tận dụng từng góc chết, tăng diện tích lưu trữ.",
        icon: "LayoutGrid",
      },
      {
        title: "Dự toán minh bạch",
        description:
          "Bảng bóc tách chi tiết từng hạng mục, không phát sinh mập mờ trong quá trình thi công.",
        icon: "ReceiptText",
      },
    ],
    processSteps: [
      { title: "Tiếp nhận & khảo sát", description: "Lắng nghe nhu cầu, đo đạc hiện trạng, chốt ngân sách." },
      { title: "Concept & mặt bằng", description: "Đề xuất phong cách, bố trí công năng, layout 2D." },
      { title: "Dựng 3D & vật liệu", description: "Phối cảnh 3D từng phòng, chọn vật liệu, màu sắc." },
      { title: "Hồ sơ & dự toán", description: "Bản vẽ kỹ thuật chi tiết và dự toán bàn giao." },
    ],
    priceFrom: 150000,
    priceUnit: "m²",
    faqs: [
      {
        question: "Chi phí thiết kế nội thất tính như thế nào?",
        answer:
          "Phí thiết kế tính theo m² sàn, từ 150.000đ/m². Nếu bạn thi công trọn gói tại Nhà Mộc, chúng tôi hoàn lại 100% phí thiết kế.",
      },
      {
        question: "Thời gian hoàn thành bản vẽ thiết kế bao lâu?",
        answer:
          "Trung bình 5-10 ngày làm việc cho một căn hộ, tùy diện tích và số lượng phòng cần dựng 3D.",
      },
      {
        question: "Tôi có được chỉnh sửa phương án không?",
        answer:
          "Có. Gói thiết kế bao gồm tối đa 3 lần chỉnh sửa lớn để phương án đúng ý bạn nhất trước khi thi công.",
      },
    ],
    relatedProjectSlugs: ["can-ho-vinhomes-grand-park", "biet-thu-thao-dien-modern"],
  },
  {
    slug: "thi-cong-noi-that-tron-goi",
    title: "Thi công nội thất trọn gói",
    shortDescription:
      "Một đầu mối duy nhất từ thiết kế đến bàn giao chìa khóa trao tay. Đúng tiến độ, đúng dự toán, bảo hành đến 5 năm.",
    heroImage: photo("interior-construction-site-wood", 1920, 1080),
    intro:
      "Thi công trọn gói giúp bạn không phải chạy theo nhiều đội thợ. Nhà Mộc chịu trách nhiệm toàn bộ: đóng mới nội thất tại xưởng, thi công phần hoàn thiện, lắp đặt và bàn giao. Cam kết tiến độ bằng hợp đồng, phạt chậm rõ ràng.",
    benefits: [
      {
        title: "Trọn gói một đầu mối",
        description: "Không phải làm việc với nhiều nhà thầu. Một hợp đồng, một người chịu trách nhiệm.",
        icon: "Handshake",
      },
      {
        title: "Sản xuất tại xưởng",
        description: "Nội thất gỗ đóng mới tại xưởng 3.200m², kiểm soát chất lượng từng chi tiết.",
        icon: "Factory",
      },
      {
        title: "Cam kết tiến độ",
        description: "Tiến độ ràng buộc trong hợp đồng, có điều khoản phạt chậm bàn giao.",
        icon: "CalendarCheck",
      },
      {
        title: "Bảo hành đến 5 năm",
        description: "Bảo hành kết cấu gỗ và phụ kiện, bảo trì trọn đời với chi phí ưu đãi.",
        icon: "ShieldCheck",
      },
    ],
    processSteps: [
      { title: "Ký hợp đồng & dự toán", description: "Chốt hạng mục, vật liệu, tiến độ và điều khoản." },
      { title: "Sản xuất tại xưởng", description: "Gia công nội thất gỗ, nghiệm thu nội bộ trước khi lắp." },
      { title: "Thi công hoàn thiện", description: "Sơn, trần, điện, lắp đặt nội thất tại công trình." },
      { title: "Nghiệm thu & bàn giao", description: "Vệ sinh, nghiệm thu cùng khách, kích hoạt bảo hành." },
    ],
    priceFrom: 3500000,
    priceUnit: "m²",
    faqs: [
      {
        question: "Thi công nội thất trọn gói giá bao nhiêu một m²?",
        answer:
          "Đơn giá trọn gói dao động từ 3.500.000đ/m² tùy vật liệu và mức độ hoàn thiện. Chúng tôi báo giá chi tiết sau khảo sát.",
      },
      {
        question: "Thời gian thi công một căn hộ mất bao lâu?",
        answer:
          "Căn hộ 2 phòng ngủ trung bình 25-35 ngày. Biệt thự và mặt bằng thương mại tùy quy mô, được cam kết cụ thể trong hợp đồng.",
      },
      {
        question: "Có phát sinh chi phí trong quá trình thi công không?",
        answer:
          "Không phát sinh nếu không thay đổi thiết kế. Mọi thay đổi từ phía khách được báo giá và ký xác nhận trước khi làm.",
      },
    ],
    relatedProjectSlugs: ["can-ho-vinhomes-grand-park", "van-phong-cong-nghe-quan-1"],
  },
  {
    slug: "san-xuat-noi-that-theo-yeu-cau",
    title: "Sản xuất nội thất theo yêu cầu",
    shortDescription:
      "Nhận gia công nội thất theo bản vẽ cho kiến trúc sư, nhà thầu và dự án số lượng lớn. Chuẩn xác, đồng đều, đúng tiến độ.",
    heroImage: photo("furniture-workshop-woodworking", 1920, 1080),
    intro:
      "Là xưởng sản xuất trực tiếp, Nhà Mộc nhận đóng mới nội thất theo bản vẽ của bạn hoặc của kiến trúc sư riêng. Phù hợp cho chủ nhà muốn món đồ độc bản, và cho nhà thầu, kiến trúc sư cần đối tác gia công số lượng lớn, đúng tiến độ.",
    benefits: [
      {
        title: "Giá tận xưởng",
        description: "Sản xuất trực tiếp, không qua trung gian, tối ưu chi phí cho dự án lớn.",
        icon: "Factory",
      },
      {
        title: "Máy móc CNC hiện đại",
        description: "Cắt CNC, dán cạnh tự động cho đường nét chính xác, sắc sảo đồng đều.",
        icon: "Cog",
      },
      {
        title: "Đa dạng vật liệu",
        description: "Gỗ óc chó, sồi, xoan đào, plywood phủ melamine, laminate, acrylic, veneer.",
        icon: "Layers",
      },
      {
        title: "Nhận đơn số lượng lớn",
        description: "Đối tác gia công tin cậy cho kiến trúc sư, nhà thầu và chuỗi thương mại.",
        icon: "PackageCheck",
      },
    ],
    processSteps: [
      { title: "Nhận bản vẽ", description: "Tiếp nhận bản vẽ hoặc yêu cầu, tư vấn vật liệu và giải pháp." },
      { title: "Báo giá & mẫu", description: "Báo giá chi tiết, làm mẫu vật liệu để duyệt." },
      { title: "Gia công tại xưởng", description: "Sản xuất theo quy trình, QC từng công đoạn." },
      { title: "Giao & lắp đặt", description: "Vận chuyển, lắp đặt tận nơi trên toàn quốc." },
    ],
    priceFrom: undefined,
    faqs: [
      {
        question: "Xưởng có nhận gia công theo bản vẽ của kiến trúc sư không?",
        answer:
          "Có. Chúng tôi là đối tác gia công quen thuộc của nhiều kiến trúc sư và nhà thầu, nhận sản xuất theo hồ sơ kỹ thuật có sẵn.",
      },
      {
        question: "Đơn hàng tối thiểu là bao nhiêu?",
        answer:
          "Chúng tôi nhận cả đơn lẻ một món đồ độc bản lẫn đơn dự án số lượng lớn. Liên hệ để được báo giá theo quy mô.",
      },
    ],
    relatedProjectSlugs: ["nha-hang-fine-dining-quan-3", "khach-san-boutique-da-lat"],
  },
];

/* -------------------------- DANH MỤC SẢN PHẨM ---------------------- */
export const productCategories: ProductCategory[] = [
  {
    slug: "tu-bep",
    title: "Tủ bếp",
    shortDescription: "Tủ bếp gỗ tự nhiên và công nghiệp, thiết kế theo không gian, tối ưu công năng nấu nướng.",
    heroImage: photo("modern-kitchen-cabinet-wood", 1600, 900),
    intro:
      "Tủ bếp là hạng mục được đặt hàng nhiều nhất. Nhà Mộc đóng tủ bếp theo đúng kích thước không gian, tối ưu tam giác bếp và khả năng lưu trữ, dùng phụ kiện Blum, Hafele chính hãng.",
    faqs: [
      {
        question: "Nên chọn tủ bếp gỗ tự nhiên hay gỗ công nghiệp?",
        answer:
          "Gỗ tự nhiên bền và sang, hợp không gian cổ điển. Gỗ công nghiệp phủ melamine, acrylic chống ẩm tốt, giá hợp lý, hợp phong cách hiện đại. Chúng tôi tư vấn theo ngân sách và điều kiện bếp của bạn.",
      },
    ],
  },
  {
    slug: "ban-an",
    title: "Bàn ăn",
    shortDescription: "Bàn ăn gỗ nguyên tấm và ghép thanh, nhiều kích thước cho căn hộ đến biệt thự.",
    heroImage: photo("dining-table-solid-wood", 1600, 900),
    intro:
      "Bàn ăn gỗ tự nhiên là điểm nhấn của phòng ăn. Chúng tôi cung cấp bàn 4, 6, 8, 10 chỗ từ gỗ óc chó, sồi, me tây nguyên tấm với mặt bàn xử lý chống thấm, chống xước.",
    faqs: [],
  },
  {
    slug: "ghe",
    title: "Ghế",
    shortDescription: "Ghế ăn, ghế thư giãn, ghế bàn làm việc bọc nệm cao cấp, khung gỗ chắc chắn.",
    heroImage: photo("designer-wooden-chair", 1600, 900),
    intro:
      "Bộ sưu tập ghế đa dạng phong cách, khung gỗ tự nhiên kết hợp nệm bọc vải, da microfiber cao cấp, êm ái và bền màu.",
    faqs: [],
  },
  {
    slug: "giuong-ngu",
    title: "Giường ngủ",
    shortDescription: "Giường ngủ gỗ tự nhiên bọc đầu giường, tích hợp hộc kéo, thiết kế hiện đại.",
    heroImage: photo("bedroom-wooden-bed-frame", 1600, 900),
    intro:
      "Giường ngủ được thiết kế để nâng tầm giấc ngủ: đầu giường bọc nệm êm, khung gỗ chịu lực, tùy chọn tích hợp hộc kéo lưu trữ và bệ nâng.",
    faqs: [],
  },
  {
    slug: "tu-quan-ao",
    title: "Tủ quần áo",
    shortDescription: "Tủ áo cánh mở, cánh lùa, tủ âm tường, thiết kế khoang chức năng khoa học.",
    heroImage: photo("wardrobe-closet-interior", 1600, 900),
    intro:
      "Tủ quần áo đóng theo chiều cao trần, tận dụng tối đa không gian lưu trữ với khoang treo, ngăn kéo, kệ giày và phụ kiện thông minh.",
    faqs: [],
  },
  {
    slug: "ke-tivi",
    title: "Kệ tivi",
    shortDescription: "Kệ tivi phòng khách kết hợp lam gỗ, tủ trang trí, tối ưu dây điện gọn gàng.",
    heroImage: photo("tv-cabinet-living-room", 1600, 900),
    intro:
      "Kệ tivi là điểm nhấn phòng khách. Chúng tôi thiết kế kệ kết hợp mảng lam gỗ, tủ lưu trữ và giấu dây điện, đồng bộ phong cách toàn phòng.",
    faqs: [],
  },
  {
    slug: "noi-that-van-phong",
    title: "Nội thất văn phòng",
    shortDescription: "Bàn làm việc, vách ngăn, tủ tài liệu, quầy lễ tân cho văn phòng chuyên nghiệp.",
    heroImage: photo("office-furniture-workspace", 1600, 900),
    intro:
      "Giải pháp nội thất văn phòng đồng bộ: bàn làm việc cụm, vách ngăn acoustic, tủ tài liệu, quầy lễ tân và phòng họp, tối ưu cho hiệu suất và hình ảnh doanh nghiệp.",
    faqs: [],
  },
  {
    slug: "noi-that-go-tu-nhien",
    title: "Nội thất gỗ tự nhiên",
    shortDescription: "Đồ gỗ nguyên khối óc chó, sồi, me tây cho không gian đẳng cấp, bền vững.",
    heroImage: photo("natural-solid-wood-furniture", 1600, 900),
    intro:
      "Dòng nội thất gỗ tự nhiên cao cấp cho khách yêu vẻ đẹp mộc mạc, bền bỉ theo thời gian. Gỗ được tuyển chọn, sấy đạt chuẩn độ ẩm, hoàn thiện dầu lau an toàn.",
    faqs: [],
  },
];

/* ----------------------------- SẢN PHẨM --------------------------- */
export const products: Product[] = [
  {
    slug: "tu-bep-chu-l-go-oc-cho",
    categorySlug: "tu-bep",
    title: "Tủ bếp chữ L gỗ óc chó",
    images: [
      { src: photo("kitchen-l-shape-walnut", 1200, 900), alt: "Tủ bếp chữ L gỗ óc chó cho căn hộ hiện đại" },
      { src: photo("kitchen-walnut-detail", 1200, 900), alt: "Chi tiết cánh tủ bếp gỗ óc chó và phụ kiện Blum" },
    ],
    materials: ["Gỗ óc chó tự nhiên", "Phụ kiện Blum", "Mặt đá thạch anh"],
    dimensions: "3.2m x 2.4m",
    priceFrom: 42000000,
    description:
      "Tủ bếp chữ L tối ưu cho căn hộ, kết hợp gỗ óc chó ấm áp với mặt đá thạch anh chống trầy. Phụ kiện ray giảm chấn Blum êm ái, tay nâng cánh trên tiện lợi.",
  },
  {
    slug: "ban-an-go-me-tay-nguyen-tam",
    categorySlug: "ban-an",
    title: "Bàn ăn gỗ me tây nguyên tấm 8 chỗ",
    images: [
      { src: photo("dining-monkeypod-slab", 1200, 900), alt: "Bàn ăn gỗ me tây nguyên tấm 8 chỗ vân gỗ tự nhiên" },
    ],
    materials: ["Gỗ me tây nguyên tấm", "Chân sắt sơn tĩnh điện"],
    dimensions: "2.2m x 1.0m",
    priceFrom: 28000000,
    description:
      "Mặt bàn me tây nguyên tấm vân gỗ độc bản, mỗi sản phẩm là duy nhất. Xử lý chống thấm, chống xước, kết hợp chân sắt hiện đại vững chắc.",
  },
  {
    slug: "giuong-ngu-boc-nem-hien-dai",
    categorySlug: "giuong-ngu",
    title: "Giường ngủ bọc nệm đầu giường",
    images: [
      { src: photo("upholstered-bed-modern", 1200, 900), alt: "Giường ngủ bọc nệm đầu giường phong cách hiện đại" },
    ],
    materials: ["Khung gỗ sồi", "Vải bọc cao cấp", "Hộc kéo tùy chọn"],
    dimensions: "1.8m x 2.0m",
    priceFrom: 18500000,
    description:
      "Giường ngủ với đầu giường bọc nệm êm ái, khung gỗ sồi chịu lực, tùy chọn tích hợp hộc kéo lưu trữ thông minh dưới gầm.",
  },
  {
    slug: "tu-quan-ao-canh-lua-am-tuong",
    categorySlug: "tu-quan-ao",
    title: "Tủ quần áo cánh lùa âm tường",
    images: [
      { src: photo("sliding-wardrobe-builtin", 1200, 900), alt: "Tủ quần áo cánh lùa âm tường kịch trần" },
    ],
    materials: ["Gỗ công nghiệp phủ melamine", "Ray lùa Hafele", "Gương tùy chọn"],
    dimensions: "2.4m x 2.7m",
    priceFrom: 22000000,
    description:
      "Tủ áo cánh lùa tiết kiệm diện tích, đóng kịch trần tận dụng tối đa lưu trữ. Bố trí khoang treo, ngăn kéo, kệ khoa học theo nhu cầu.",
  },
];

/* -------------------- GIẢI PHÁP THEO KHÔNG GIAN -------------------- */
export const solutions: Solution[] = [
  {
    slug: "noi-that-chung-cu",
    title: "Nội thất chung cư",
    audience: "B2C",
    shortDescription: "Giải pháp trọn gói cho căn hộ 1-3 phòng ngủ, tối ưu diện tích, bàn giao nhanh.",
    heroImage: photo("apartment-interior-modern-vn", 1920, 1080),
    intro:
      "Chuyên thiết kế và thi công nội thất căn hộ chung cư, tối ưu từng mét vuông cho không gian sống thoáng đãng và tiện nghi. Kinh nghiệm bàn giao hàng trăm căn tại Vinhomes, Masteri, The Origami.",
    highlights: [
      "Tối ưu công năng cho căn hộ nhỏ",
      "Thi công nhanh, ít ảnh hưởng hàng xóm",
      "Tuân thủ quy định ban quản lý tòa nhà",
      "Gói hoàn thiện phù hợp nhiều mức ngân sách",
    ],
    faqs: [
      {
        question: "Thi công nội thất chung cư có cần xin phép ban quản lý không?",
        answer:
          "Có. Nhà Mộc hỗ trợ hoàn tất thủ tục đăng ký thi công với ban quản lý tòa nhà, tuân thủ giờ giấc và quy định vận chuyển vật tư.",
      },
    ],
    relatedProjectSlugs: ["can-ho-vinhomes-grand-park"],
  },
  {
    slug: "noi-that-biet-thu",
    title: "Nội thất biệt thự",
    audience: "B2C",
    shortDescription: "Thiết kế và thi công nội thất biệt thự, nhà phố cao cấp, đồng bộ từ nội đến ngoại thất.",
    heroImage: photo("villa-interior-luxury-vn", 1920, 1080),
    intro:
      "Với biệt thự, chi tiết và vật liệu quyết định đẳng cấp. Nhà Mộc thi công nội thất biệt thự đồng bộ, sử dụng gỗ tự nhiên cao cấp, phối hợp cùng đội ngũ thiết kế riêng của gia chủ nếu có.",
    highlights: [
      "Vật liệu gỗ tự nhiên cao cấp",
      "Đồng bộ nhiều tầng, nhiều không gian",
      "Phối hợp cùng KTS riêng của gia chủ",
      "Giám sát thi công chuyên trách",
    ],
    faqs: [],
    relatedProjectSlugs: ["biet-thu-thao-dien-modern"],
  },
  {
    slug: "noi-that-van-phong",
    title: "Nội thất văn phòng",
    audience: "B2B",
    shortDescription: "Thi công văn phòng làm việc chuyên nghiệp, đúng tiến độ khai trương, xuất hóa đơn VAT.",
    heroImage: photo("office-interior-design-vn", 1920, 1080),
    intro:
      "Giải pháp nội thất văn phòng trọn gói cho doanh nghiệp: từ quầy lễ tân, khu làm việc, phòng họp đến pantry. Cam kết tiến độ bám sát ngày khai trương, đầy đủ hồ sơ và hóa đơn VAT.",
    highlights: [
      "Bám sát tiến độ khai trương",
      "Xuất hóa đơn VAT, hồ sơ đầy đủ",
      "Tối ưu chi phí trên đầu nhân sự",
      "Thi công ngoài giờ hạn chế gián đoạn",
    ],
    faqs: [],
    relatedProjectSlugs: ["van-phong-cong-nghe-quan-1"],
  },
  {
    slug: "noi-that-khach-san",
    title: "Nội thất khách sạn",
    audience: "B2B",
    shortDescription: "Sản xuất và thi công nội thất khách sạn, resort số lượng lớn, đồng bộ theo tiêu chuẩn phòng.",
    heroImage: photo("hotel-interior-boutique-vn", 1920, 1080),
    intro:
      "Xưởng sản xuất của Nhà Mộc đáp ứng đơn hàng nội thất khách sạn số lượng lớn, đồng bộ chất lượng giữa các phòng, đúng tiêu chuẩn vận hành và tiến độ khai trương của chủ đầu tư.",
    highlights: [
      "Năng lực sản xuất số lượng lớn",
      "Đồng bộ chất lượng giữa các phòng",
      "Vật liệu bền, dễ vệ sinh, chống cháy",
      "Quản lý tiến độ theo giai đoạn bàn giao",
    ],
    faqs: [],
    relatedProjectSlugs: ["khach-san-boutique-da-lat"],
  },
  {
    slug: "noi-that-nha-hang",
    title: "Nội thất nhà hàng",
    audience: "B2B",
    shortDescription: "Thiết kế thi công nhà hàng, quán ăn tạo dấu ấn thương hiệu, tối ưu vận hành phục vụ.",
    heroImage: photo("restaurant-interior-fine-dining", 1920, 1080),
    intro:
      "Không gian nhà hàng vừa phải đẹp để khách check-in, vừa phải tối ưu luồng phục vụ. Nhà Mộc thiết kế và thi công nhà hàng cân bằng thẩm mỹ thương hiệu và hiệu quả vận hành.",
    highlights: [
      "Không gian tạo dấu ấn thương hiệu",
      "Tối ưu luồng phục vụ và sức chứa",
      "Vật liệu chịu lực, dễ bảo trì",
      "Thi công nhanh để sớm khai trương",
    ],
    faqs: [],
    relatedProjectSlugs: ["nha-hang-fine-dining-quan-3"],
  },
  {
    slug: "noi-that-quan-cafe",
    title: "Nội thất quán cà phê",
    audience: "B2B",
    shortDescription: "Concept quán cà phê cá tính, thi công gọn nhẹ, tối ưu ngân sách khởi nghiệp F&B.",
    heroImage: photo("coffee-shop-interior-cozy", 1920, 1080),
    intro:
      "Quán cà phê cần concept đủ cá tính để nổi bật và chi phí đủ hợp lý để hoàn vốn nhanh. Nhà Mộc đồng hành cùng chủ quán từ ý tưởng đến thi công, tối ưu ngân sách mà vẫn giữ được chất riêng.",
    highlights: [
      "Concept cá tính, hợp thị hiếu check-in",
      "Tối ưu ngân sách khởi nghiệp",
      "Thi công nhanh gọn",
      "Tư vấn bố trí quầy và luồng khách",
    ],
    faqs: [],
    relatedProjectSlugs: [],
  },
];

/* ------------------------------ DỰ ÁN ------------------------------ */
export const projects: Project[] = [
  {
    slug: "can-ho-vinhomes-grand-park",
    title: "Căn hộ 3PN Vinhomes Grand Park",
    solutionSlug: "noi-that-chung-cu",
    provinceSlug: "ho-chi-minh",
    provinceName: "TP.HCM",
    area: "82 m²",
    durationDays: 30,
    cover: photo("apartment-vinhomes-livingroom", 1600, 1200),
    gallery: [
      { src: photo("apartment-vinhomes-livingroom", 1200, 900), alt: "Phòng khách căn hộ Vinhomes Grand Park tông gỗ ấm" },
      { src: photo("apartment-vinhomes-kitchen", 1200, 900), alt: "Bếp căn hộ Vinhomes với tủ bếp gỗ óc chó" },
      { src: photo("apartment-vinhomes-bedroom", 1200, 900), alt: "Phòng ngủ master căn hộ Vinhomes Grand Park" },
    ],
    summary:
      "Cải tạo và hoàn thiện nội thất căn hộ 3 phòng ngủ theo phong cách hiện đại ấm, tối ưu lưu trữ cho gia đình trẻ.",
    scope: ["Thiết kế 3D", "Tủ bếp", "Tủ áo toàn căn", "Kệ tivi", "Bàn ăn"],
    featured: true,
    testimonialId: "t1",
  },
  {
    slug: "biet-thu-thao-dien-modern",
    title: "Biệt thự Thảo Điền phong cách Modern",
    solutionSlug: "noi-that-biet-thu",
    provinceSlug: "ho-chi-minh",
    provinceName: "TP.HCM",
    area: "320 m²",
    durationDays: 90,
    cover: photo("villa-thaodien-interior", 1600, 1200),
    gallery: [
      { src: photo("villa-thaodien-living", 1200, 900), alt: "Phòng khách biệt thự Thảo Điền phong cách modern" },
      { src: photo("villa-thaodien-stairs", 1200, 900), alt: "Cầu thang và sảnh biệt thự Thảo Điền" },
    ],
    summary:
      "Thi công nội thất trọn gói biệt thự 3 tầng, đồng bộ gỗ óc chó và đá tự nhiên, phối hợp cùng KTS của gia chủ.",
    scope: ["Thi công trọn gói", "Nội thất gỗ óc chó", "Tủ rượu", "Phòng ngủ master"],
    featured: true,
    testimonialId: "t2",
  },
  {
    slug: "van-phong-cong-nghe-quan-1",
    title: "Văn phòng công ty công nghệ Quận 1",
    solutionSlug: "noi-that-van-phong",
    provinceSlug: "ho-chi-minh",
    provinceName: "TP.HCM",
    area: "450 m²",
    durationDays: 40,
    cover: photo("office-tech-quan1", 1600, 1200),
    gallery: [
      { src: photo("office-tech-workspace", 1200, 900), alt: "Khu làm việc mở văn phòng công nghệ Quận 1" },
      { src: photo("office-tech-meeting", 1200, 900), alt: "Phòng họp kính văn phòng công nghệ" },
    ],
    summary:
      "Thi công văn phòng 60 chỗ ngồi đúng tiến độ khai trương, tối ưu âm học phòng họp và khu vực sáng tạo.",
    scope: ["Bàn làm việc cụm", "Vách acoustic", "Phòng họp", "Quầy lễ tân"],
    featured: true,
    testimonialId: "t3",
  },
  {
    slug: "nha-hang-fine-dining-quan-3",
    title: "Nhà hàng Fine Dining Quận 3",
    solutionSlug: "noi-that-nha-hang",
    provinceSlug: "ho-chi-minh",
    provinceName: "TP.HCM",
    area: "220 m²",
    durationDays: 45,
    cover: photo("restaurant-finedining-q3", 1600, 1200),
    gallery: [
      { src: photo("restaurant-finedining-hall", 1200, 900), alt: "Không gian chính nhà hàng fine dining Quận 3" },
      { src: photo("restaurant-finedining-bar", 1200, 900), alt: "Quầy bar nhà hàng fine dining" },
    ],
    summary:
      "Thiết kế và sản xuất nội thất nhà hàng fine dining, tông gỗ trầm sang trọng, tối ưu luồng phục vụ.",
    scope: ["Thiết kế concept", "Bàn ghế đóng mới", "Quầy bar", "Vách trang trí"],
    featured: true,
  },
  {
    slug: "khach-san-boutique-da-lat",
    title: "Khách sạn Boutique 40 phòng Đà Lạt",
    solutionSlug: "noi-that-khach-san",
    provinceSlug: "lam-dong",
    provinceName: "Lâm Đồng",
    area: "1.800 m²",
    durationDays: 120,
    cover: photo("hotel-boutique-dalat", 1600, 1200),
    gallery: [
      { src: photo("hotel-boutique-room", 1200, 900), alt: "Phòng nghỉ khách sạn boutique Đà Lạt tông gỗ ấm" },
      { src: photo("hotel-boutique-lobby", 1200, 900), alt: "Sảnh khách sạn boutique Đà Lạt" },
    ],
    summary:
      "Sản xuất và thi công nội thất 40 phòng khách sạn đồng bộ, chịu được khí hậu ẩm Đà Lạt, đúng tiến độ khai trương.",
    scope: ["Sản xuất số lượng lớn", "Nội thất phòng ngủ", "Sảnh & lễ tân", "Nhà hàng"],
    featured: true,
  },
  {
    slug: "can-ho-masteri-thao-dien",
    title: "Căn hộ 2PN Masteri Thảo Điền",
    solutionSlug: "noi-that-chung-cu",
    provinceSlug: "ho-chi-minh",
    provinceName: "TP.HCM",
    area: "68 m²",
    durationDays: 25,
    cover: photo("apartment-masteri-2pn", 1600, 1200),
    gallery: [
      { src: photo("apartment-masteri-living", 1200, 900), alt: "Phòng khách căn hộ Masteri Thảo Điền 2 phòng ngủ" },
    ],
    summary:
      "Hoàn thiện nội thất căn hộ 2 phòng ngủ cho thuê, tối ưu chi phí và độ bền, bàn giao nhanh trong 25 ngày.",
    scope: ["Tủ bếp", "Tủ áo", "Kệ tivi", "Giường ngủ"],
    featured: false,
  },
];

/* ----------------------------- KHU VỰC ---------------------------- */
export const locations: Location[] = [
  {
    slug: "ho-chi-minh",
    name: "TP. Hồ Chí Minh",
    region: "Đông Nam Bộ",
    serviceAreaNote: "Khảo sát miễn phí toàn TP.HCM, thi công tất cả các quận huyện.",
    publishable: true,
  },
  {
    slug: "binh-duong",
    name: "Bình Dương",
    region: "Đông Nam Bộ",
    serviceAreaNote: "Xưởng sản xuất đặt tại Dĩ An, Bình Dương — giao lắp nhanh toàn tỉnh.",
    publishable: true,
  },
  {
    slug: "dong-nai",
    name: "Đồng Nai",
    region: "Đông Nam Bộ",
    serviceAreaNote: "Phục vụ Biên Hòa, Long Thành, Nhơn Trạch và các khu vực lân cận.",
    publishable: true,
  },
  {
    slug: "can-tho",
    name: "Cần Thơ",
    region: "Đồng bằng sông Cửu Long",
    serviceAreaNote: "Đội thi công phục vụ Cần Thơ và các tỉnh miền Tây lân cận.",
    publishable: true,
  },
];

/* --------------------------- ĐÁNH GIÁ ----------------------------- */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Chị Nguyễn Thanh Hương",
    role: "Chủ căn hộ Vinhomes Grand Park",
    quote:
      "Bên Nhà Mộc làm rất tâm huyết, bản vẽ 3D giống y như thực tế. Bàn giao đúng hẹn, thợ dọn dẹp sạch sẽ. Gia đình mình rất ưng.",
    provinceName: "TP.HCM",
    rating: 5,
  },
  {
    id: "t2",
    author: "Anh Trần Quốc Bảo",
    role: "Chủ biệt thự Thảo Điền",
    quote:
      "Gỗ óc chó đẹp, hoàn thiện tỉ mỉ. Đội giám sát báo cáo tiến độ mỗi tuần nên mình rất yên tâm dù đi công tác nhiều.",
    provinceName: "TP.HCM",
    rating: 5,
  },
  {
    id: "t3",
    author: "Chị Lê Phương Vy",
    role: "Trưởng phòng hành chính",
    quote:
      "Văn phòng kịp khai trương đúng ngày, hồ sơ VAT đầy đủ. Không gian làm việc được nhân viên khen rất nhiều.",
    provinceName: "TP.HCM",
    rating: 5,
  },
  {
    id: "t4",
    author: "Anh Phạm Đức Long",
    role: "Chủ đầu tư khách sạn",
    quote:
      "Đặt 40 phòng mà chất lượng đồng đều, đúng tiến độ từng đợt bàn giao. Sẽ tiếp tục hợp tác cho dự án tiếp theo.",
    provinceName: "Lâm Đồng",
    rating: 5,
  },
];

/* ------------------------------ BLOG ------------------------------ */
export const posts: Post[] = [
  {
    slug: "kinh-nghiem-chon-go-lam-noi-that",
    title: "Kinh nghiệm chọn gỗ làm nội thất bền đẹp cho gia đình",
    category: "cam-nang-thiet-ke",
    excerpt:
      "Gỗ tự nhiên hay gỗ công nghiệp? Bài viết giúp bạn chọn đúng loại gỗ theo ngân sách, khí hậu và phong cách sống.",
    cover: photo("wood-materials-guide", 1600, 900),
    author: "KTS. Đỗ Minh Khôi",
    publishedAt: "2026-05-12",
    readingMinutes: 8,
    body: "Việc chọn gỗ là quyết định đầu tiên và quan trọng nhất khi làm nội thất...\n\nGỗ tự nhiên như óc chó, sồi mang lại vẻ đẹp sang trọng và độ bền cao. Gỗ công nghiệp phủ melamine hay acrylic lại có lợi thế về giá và khả năng chống ẩm.",
  },
  {
    slug: "chi-phi-thi-cong-noi-that-can-ho-2026",
    title: "Chi phí thi công nội thất căn hộ năm 2026 cập nhật mới nhất",
    category: "chi-phi-bao-gia",
    excerpt:
      "Bảng tham khảo chi phí thi công nội thất căn hộ theo diện tích và mức hoàn thiện, giúp bạn dự trù ngân sách chính xác.",
    cover: photo("interior-cost-planning", 1600, 900),
    author: "Nhà Mộc",
    publishedAt: "2026-06-02",
    readingMinutes: 6,
    body: "Chi phí thi công nội thất căn hộ phụ thuộc vào nhiều yếu tố: diện tích, vật liệu, mức độ hoàn thiện...\n\nVới căn hộ 2 phòng ngủ khoảng 65m², ngân sách phổ biến dao động tùy gói hoàn thiện cơ bản hay cao cấp.",
  },
  {
    slug: "xu-huong-thiet-ke-noi-that-2026",
    title: "5 xu hướng thiết kế nội thất được ưa chuộng năm 2026",
    category: "xu-huong",
    excerpt:
      "Từ tông màu đất ấm áp đến vật liệu bền vững, khám phá những xu hướng định hình không gian sống năm nay.",
    cover: photo("interior-trends-2026", 1600, 900),
    author: "KTS. Đỗ Minh Khôi",
    publishedAt: "2026-06-20",
    readingMinutes: 7,
    body: "Năm 2026 chứng kiến sự lên ngôi của phong cách gần gũi thiên nhiên...\n\nTông màu đất, gỗ tự nhiên, cây xanh trong nhà và vật liệu tái chế là những từ khóa nổi bật.",
  },
];
