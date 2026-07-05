import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { posts } from "@/lib/posts";

const freshPosts = posts.slice(0, 3);

const lobbyProviders = [
  { name: "JDB", note: "sảnh slot, bắn cá và arcade cần kiểm tra theo từng trò" },
  { name: "CQ9", note: "nhóm slot/mini game phổ biến trong nhiều lobby châu Á" },
  { name: "HABA", note: "slot nhẹ, dễ đọc giao diện, phù hợp nội dung hướng dẫn người mới" },
  { name: "Pragmatic", note: "hiển thị trong bundle dưới nhóm PRG; chỉ dùng như bối cảnh sảnh" },
  { name: "Red Tiger", note: "nhóm game cần kiểm tra điều kiện thưởng trước khi chơi" },
  { name: "KA", note: "thường gắn với slot, arcade và game nhịp nhanh" },
] as const;

const authorityTopics = [
  {
    title: "Đọc điều kiện trước khi nhận thưởng",
    text: "Ưu đãi slot chỉ hữu ích khi bạn hiểu vòng cược, thời hạn, trò chơi hợp lệ và giới hạn rút tiền. Nếu điều kiện chưa rõ, hãy dừng lại để kiểm tra thay vì bấm nhận ngay.",
  },
  {
    title: "Hiểu jackpot như điểm nhấn giải trí",
    text: "Jackpot tạo cảm giác hấp dẫn, nhưng không phải cam kết lợi nhuận. Nội dung trên Thantai88Slots luôn nhắc người chơi 18+ đặt ngân sách trước khi tham gia.",
  },
  {
    title: "Ưu tiên trải nghiệm mobile rõ ràng",
    text: "Một sảnh slot tốt trên điện thoại cần nút thao tác dễ thấy, tốc độ tải ổn định và lối thoát rõ ràng để người chơi kiểm soát phiên của mình.",
  },
] as const;

const quickChecks = [
  "Xác nhận bạn đủ 18 tuổi và chơi bằng ngân sách giải trí.",
  "Kiểm tra điều khoản khuyến mãi, vòng cược và thời hạn.",
  "Không xem RTP, jackpot hoặc bảng xếp hạng như lời hứa thắng.",
  "Dừng phiên nếu bạn đang cố gỡ thua hoặc mất kiểm soát thời gian.",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy" data-gsap="rise">
            <p className="section-kicker">Thantai88Slots · hướng dẫn slot 18+</p>
            <h1>Sảnh slot có ngữ cảnh, nội dung rõ ràng, vào chơi có kiểm soát.</h1>
            <p>
              Thantai88Slots thuộc hệ sinh thái{" "}
              <a href="https://thantai88.online" rel="noopener noreferrer">
                Thantai88
              </a>
              , tập trung vào blog slot, jackpot, ưu đãi, nhà cung cấp game và checklist an toàn trước khi bạn truy cập
              nền tảng đối tác.
            </p>
            <div className="hero-actions">
              <PartnerLink>Vào nền tảng 18+</PartnerLink>
              <Link className="btn btn-soft" href="#tin-moi">
                Xem tin mới
              </Link>
            </div>
          </div>
          <div className="hero-card" data-gsap="rise">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Sảnh slot đỏ vàng với khu vực jackpot và điện thoại hiển thị game" src="/images/hero-slots.webp" />
            <div className="hero-card-panel">
              <span>Checklist trước khi chơi</span>
              <strong>18+ · ngân sách · điều kiện</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell fresh-section" id="tin-moi" data-gsap="rise">
        <div className="section-head section-head-left">
          <div>
            <p className="section-kicker">Blog & bản tin nội bộ</p>
            <h2>Nhịp mới từ sảnh slot</h2>
          </div>
          <Link href="/tin-tuc">Xem tất cả bài viết</Link>
        </div>
        <div className="fresh-grid">
          <article className="fresh-lead">
            <span>Mới nên đọc</span>
            <h3>{freshPosts[0]?.title}</h3>
            <p>{freshPosts[0]?.description}</p>
            <div className="card-actions">
              <Link href={`/tin-tuc/${freshPosts[0]?.slug}`}>Đọc hướng dẫn</Link>
              <PartnerLink className="text-cta">Vào sảnh 18+</PartnerLink>
            </div>
          </article>
          <div className="fresh-list">
            {freshPosts.slice(1).map((post) => (
              <article key={post.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={post.title} src={post.image} />
                <div>
                  <span>{post.category}</span>
                  <h3>
                    <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell provider-section" id="slot-hot" data-gsap="rise">
        <div className="provider-intro">
          <p className="section-kicker">Từ nền tảng đối tác</p>
          <h2>Nền tảng đối tác có nhiều sảnh — hãy dùng như bản đồ, không phải lời hứa thắng.</h2>
          <p>
            Khi kiểm tra bundle từ thantai688.com, tôi thấy nhiều lobby slot/casino như JDB, CQ9, HABA, PRG
            Pragmatic, Red Tiger, KA, NetEnt, Play’n GO và các nhóm khác. Trang này dùng thông tin đó để định hướng
            nội dung; mọi điều kiện trò chơi vẫn cần kiểm tra trực tiếp trên nền tảng trước khi tham gia.
          </p>
        </div>
        <div className="provider-rail" aria-label="Một số sảnh/provider thấy trong nền tảng đối tác">
          {lobbyProviders.map((provider) => (
            <article key={provider.name}>
              <strong>{provider.name}</strong>
              <p>{provider.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell authority-section" id="kien-thuc-slot">
        <div className="authority-copy" data-gsap="rise">
          <p className="section-kicker">Kiến thức trước khi bấm quay</p>
          <h2>Xây authority bằng nội dung hữu ích, không phải khẩu hiệu jackpot.</h2>
          <p>
            Thantai88Slots nên giúp người đọc hiểu lựa chọn của mình: game nào dễ đọc giao diện, ưu đãi nào cần xem
            kỹ, và lúc nào nên dừng. Đây là phần tạo độ tin cậy lâu dài cho website.
          </p>
          <ul className="quick-checks">
            {quickChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="authority-grid" data-gsap="rise">
          {authorityTopics.map((topic) => (
            <article key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell final-panel" id="uu-dai" data-gsap="rise">
        <div>
          <p className="section-kicker">Lối vào có trách nhiệm</p>
          <h2>Sẵn sàng xem sảnh game? Đi qua checklist trước.</h2>
          <p>
            Link bên dưới dẫn sang nền tảng đối tác dành cho thành viên đủ tuổi. Hãy đọc điều kiện khuyến mãi, đặt giới
            hạn ngân sách và chỉ xem slot như một hình thức giải trí có rủi ro.
          </p>
        </div>
        <PartnerLink>Chơi ngay 18+</PartnerLink>
      </section>
    </>
  );
}
