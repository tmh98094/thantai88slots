export type SlotPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  body: string[];
};

export const posts: SlotPost[] = [
  {
    slug: "cach-chon-game-slot-online",
    title: "Cách chọn game slot online dễ hiểu cho người mới",
    description: "Các yếu tố nên xem trước khi chọn game slot: chủ đề, nhịp quay, jackpot, mức cược tối thiểu và ngân sách giải trí.",
    category: "Cẩm nang slot",
    image: "/images/slots-guide.webp",
    date: "2026-07-04",
    body: [
      "Người mới không cần bắt đầu bằng quá nhiều thuật ngữ. Hãy nhìn trước vào chủ đề trò chơi, tốc độ quay, mức cược tối thiểu và cảm giác tổng thể của giao diện.",
      "Một game slot tốt để bắt đầu thường có biểu tượng dễ nhận biết, màn hình thưởng rõ ràng và thao tác mobile gọn. Khi mọi thứ dễ hiểu, bạn sẽ ít bị cuốn vào việc bấm liên tục chỉ vì tò mò.",
      "Slot là hình thức giải trí có rủi ro. Không có cách đọc nào đảm bảo thắng, vì vậy ngân sách và thời gian chơi cần được đặt trước khi tham gia.",
    ],
  },
  {
    slug: "jackpot-va-vong-quay-thuong",
    title: "Jackpot và vòng quay thưởng: hiểu đúng trước khi bấm quay",
    description: "Giải thích jackpot, vòng quay thưởng và cách xem chúng như điểm nhấn giải trí thay vì cam kết lợi nhuận.",
    category: "Jackpot",
    image: "/images/jackpot-stage.webp",
    date: "2026-07-04",
    body: [
      "Jackpot tạo cảm giác hấp dẫn vì phần thưởng có thể nổi bật trên màn hình, nhưng xác suất và điều kiện nhận thưởng luôn phụ thuộc vào từng trò chơi.",
      "Trước khi chơi, hãy đọc điều khoản, giới hạn mức cược và điều kiện kích hoạt vòng quay thưởng. Những thông tin này giúp bạn biết mình đang tham gia vì giải trí, không phải vì kỳ vọng chắc chắn.",
      "Nếu phần thưởng hiển thị quá cuốn hút, hãy chậm lại một nhịp. Một phiên chơi an toàn luôn bắt đầu bằng giới hạn rõ ràng và kết thúc đúng lúc.",
    ],
  },
  {
    slug: "uu-dai-slot-online-can-luu-y",
    title: "Ưu đãi slot online: những điều cần đọc kỹ",
    description: "Những điểm cần kiểm tra khi thấy ưu đãi slot: vòng cược, thời hạn, trò chơi hợp lệ và điều kiện rút tiền.",
    category: "Ưu đãi",
    image: "/images/bonus-lounge.webp",
    date: "2026-07-04",
    body: [
      "Ưu đãi có thể làm trải nghiệm thú vị hơn, nhưng điều kiện đi kèm mới là phần cần đọc kỹ: vòng cược, thời hạn, giới hạn trò chơi và mức rút tiền.",
      "Nếu điều khoản không rõ ràng, nên dừng lại thay vì tham gia chỉ vì hình ảnh hoặc thông điệp quảng cáo hấp dẫn.",
      "Cách chọn khuyến mãi thông minh là ưu tiên sự minh bạch. Bạn nên biết mình cần làm gì, trong bao lâu và giới hạn nào đang áp dụng trước khi nhận thưởng.",
    ],
  },
  {
    slug: "choi-slot-tren-dien-thoai",
    title: "Chơi slot trên điện thoại: nhanh, đẹp và cần kiểm soát",
    description: "Gợi ý kiểm tra giao diện mobile, tốc độ tải, nút nạp/rút, bảo mật và thói quen chơi có trách nhiệm.",
    category: "Mobile",
    image: "/images/mobile-slots.webp",
    date: "2026-07-04",
    body: [
      "Trải nghiệm mobile tốt cần tải nhanh, nút thao tác rõ, nội dung không bị che và dễ quay lại màn hình chính. Nếu giao diện gây nhầm lẫn, hãy dừng lại để kiểm tra trước khi bấm tiếp.",
      "Bạn cũng nên chú ý bảo mật: đăng xuất khỏi thiết bị lạ, không lưu mật khẩu ở nơi công cộng và kiểm tra đường dẫn trước khi đăng nhập.",
      "Hãy bật giới hạn thời gian, không chơi khi đang mệt và không cố gỡ khi kết quả không như mong muốn. Chơi vui chỉ thật sự vui khi bạn vẫn kiểm soát được phiên của mình.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
