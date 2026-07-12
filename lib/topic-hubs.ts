export type TopicHub = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  checkpoints: string[];
  relatedSlugs: string[];
};

export const topicHubs: TopicHub[] = [
  {
    slug: "rtp-bien-dong",
    title: "RTP và biến động slot",
    description: "Giải thích RTP, biến động và cách đặt kỳ vọng thực tế khi đọc thông tin game slot.",
    eyebrow: "Cơ chế game",
    intro: "RTP và biến động là hai khái niệm giúp người chơi đọc cấu trúc một game, không phải công cụ dự đoán kết quả của một phiên quay. Hub này gom các bài viết nền tảng để bạn hiểu ngôn ngữ game trước khi quyết định có tiếp tục hay dừng lại.",
    checkpoints: ["Đọc RTP như chỉ báo dài hạn, không phải lời hứa cho phiên hiện tại.", "Chọn mức chi tiêu và thời lượng trước khi mở game.", "Dừng khi thông tin trong game hoặc điều kiện ưu đãi không rõ ràng."],
    relatedSlugs: ["rtp-va-bien-dong-slot", "gioi-han-ngan-sach-khi-choi-slot"],
  },
  {
    slug: "tinh-nang-slot",
    title: "Tính năng và bảng trả thưởng slot",
    description: "Tìm hiểu Wild, Scatter, jackpot và bảng trả thưởng trước khi bắt đầu một game slot.",
    eyebrow: "Biểu tượng và tính năng",
    intro: "Wild, Scatter, vòng quay thưởng và jackpot thường được trình bày bằng hiệu ứng rất nổi bật. Nội dung tại đây tập trung vào cách đọc điều kiện kích hoạt, bảng thông tin và giới hạn, để người chơi không biến hiệu ứng thành suy đoán về kết quả.",
    checkpoints: ["Mở bảng thông tin của game trước khi quay.", "Kiểm tra biểu tượng nào được thay thế và điều kiện nào không áp dụng.", "Không tăng mức cược chỉ vì một tính năng vừa xuất hiện."],
    relatedSlugs: ["wild-scatter-slot-la-gi", "doc-bang-tra-thuong-slot", "jackpot-va-vong-quay-thuong"],
  },
  {
    slug: "nha-cung-cap-slot",
    title: "Nhà cung cấp và cách chọn game slot",
    description: "Cẩm nang đọc lobby, chọn game và so sánh trải nghiệm theo tiêu chí rõ ràng.",
    eyebrow: "Lobby và nhà cung cấp",
    intro: "Một lobby lớn có thể có nhiều nhà cung cấp và thể loại game. Thay vì chọn theo tên hoặc hiệu ứng nổi bật, hãy dùng tiêu chí giao diện, luật chơi, bảng thông tin, mức cược và khả năng dừng phiên để thu hẹp lựa chọn.",
    checkpoints: ["Xem phần hướng dẫn và mức cược tối thiểu của từng game.", "Ưu tiên giao diện dễ đọc trên thiết bị bạn đang dùng.", "Chỉ coi tên nhà cung cấp là một điểm tham khảo, không phải bảo chứng kết quả."],
    relatedSlugs: ["cach-chon-game-slot-online", "doc-bang-tra-thuong-slot"],
  },
  {
    slug: "slot-di-dong",
    title: "Chơi slot trên điện thoại",
    description: "Hướng dẫn trải nghiệm slot trên điện thoại với thao tác rõ ràng và giới hạn phiên chơi.",
    eyebrow: "Trải nghiệm mobile",
    intro: "Điện thoại khiến việc mở game và quay liên tục trở nên rất nhanh. Hub này tập trung vào các điểm thực tế: độ rõ của nút thao tác, kết nối, cách xem bảng thông tin, thời gian nghỉ và vị trí dễ tìm để dừng phiên.",
    checkpoints: ["Dùng kết nối ổn định và kiểm tra trang đang mở trước khi đăng nhập.", "Đặt thời gian nghỉ trước khi bắt đầu phiên chơi trên điện thoại.", "Giữ quyền kiểm soát thiết bị và không chia sẻ thông tin tài khoản."],
    relatedSlugs: ["choi-slot-tren-dien-thoai"],
  },
  {
    slug: "uu-dai-slot",
    title: "Ưu đãi slot và điều kiện cần đọc",
    description: "Cách đọc vòng cược, thời hạn, game hợp lệ và giới hạn trước khi nhận ưu đãi slot.",
    eyebrow: "Khuyến mãi và điều kiện",
    intro: "Một ưu đãi không thể được hiểu chỉ qua con số trên banner. Tại đây, bạn có thể xem cách đối chiếu vòng cược, thời hạn, danh sách game hợp lệ và các giới hạn liên quan trước khi chọn nhận hay bỏ qua.",
    checkpoints: ["Tìm điều kiện áp dụng trước khi nhấn nhận ưu đãi.", "Kiểm tra trò chơi nào được tính và thời hạn hoàn tất.", "Bỏ qua ưu đãi khiến bạn phải chi vượt quá ngân sách đã đặt."],
    relatedSlugs: ["uu-dai-slot-online-can-luu-y", "doc-bang-tra-thuong-slot"],
  },
  {
    slug: "choi-co-trach-nhiem-slot",
    title: "Ngân sách và chơi slot có trách nhiệm",
    description: "Đặt giới hạn ngân sách, thời gian và cảm xúc khi tham gia slot online dành cho người từ 18 tuổi.",
    eyebrow: "Kiểm soát phiên chơi",
    intro: "Cơ chế bảo vệ thiết thực nhất nằm ở những quyết định trước khi quay: xác định khoản giải trí có thể mất, giới hạn thời gian và không cố bù một kết quả vừa xảy ra. Các bài trong hub này giúp biến nguyên tắc đó thành một quy trình dễ làm theo.",
    checkpoints: ["Chỉ sử dụng khoản tiền dành cho giải trí.", "Dừng phiên khi chạm giới hạn tiền hoặc thời gian đã đặt.", "Không dùng quay tự động để tránh việc theo dõi phiên chơi của mình."],
    relatedSlugs: ["gioi-han-ngan-sach-khi-choi-slot", "tu-dong-quay-slot-an-toan", "jackpot-va-vong-quay-thuong"],
  },
];

export function getTopicHubBySlug(slug: string) {
  return topicHubs.find((hub) => hub.slug === slug);
}

export function getTopicHub(postSlug: string) {
  return topicHubs.find((hub) => hub.relatedSlugs.includes(postSlug));
}
