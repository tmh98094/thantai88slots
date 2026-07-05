import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { posts } from "@/lib/posts";

const featureCards = [
  ["Jackpot nổi bật", "Theo dõi game có biểu tượng thưởng, vòng quay đặc biệt và màn hình chiến thắng rõ ràng trước khi bắt đầu."],
  ["Chơi mượt trên điện thoại", "Bố cục gọn, nút vào chơi rõ và trải nghiệm mobile phù hợp với thói quen truy cập nhanh tại Việt Nam."],
  ["Ưu đãi dễ kiểm tra", "Nắm nhanh vòng cược, thời hạn, trò chơi hợp lệ và giới hạn trước khi nhận bất kỳ khuyến mãi nào."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy" data-gsap="rise">
            <span className="eyebrow">18+ · Slot online · Thantai888.co</span>
            <h1>Slot đỏ vàng,<br />jackpot nổi bật,<br />vào chơi thật nhanh.</h1>
            <p>
              Thantai88Slots thuộc hệ sinh thái <a href="https://thantai88.online" rel="noopener noreferrer">Thantai88</a>, tập trung vào slot online, jackpot, ưu đãi minh bạch và lối tắt truy cập cho người chơi 18+.
            </p>
            <div className="hero-actions">
              <PartnerLink>Vào nền tảng ngay</PartnerLink>
              <Link className="btn btn-soft" href="#slot-hot">Xem điểm nổi bật</Link>
            </div>
          </div>
          <div className="hero-card" data-gsap="rise">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Người mẫu casino châu Âu trong sảnh slot jackpot Thantai88Slots" src="/images/hero-slots.webp" />
            <div className="jackpot-badge" data-gsap="pulse">
              <span>Jackpot vibe</span>
              <strong>777</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell feature-strip" id="slot-hot">
        {featureCards.map(([title, text], index) => (
          <article data-gsap="rise" key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <PartnerLink className="text-cta">Chơi ngay</PartnerLink>
          </article>
        ))}
      </section>

      <section className="section shell split-panel" id="uu-dai" data-gsap="rise">
        <div>
          <span className="eyebrow">Ưu đãi & vòng quay</span>
          <h2>Vì sao Thantai88Slots nổi bật với người chơi slot?</h2>
          <p>Thantai88Slots đặt trọng tâm vào giao diện đỏ vàng bắt mắt, lối vào nhanh, chủ đề jackpot rõ ràng và các khối ưu đãi dễ hiểu để bạn chọn điểm bắt đầu phù hợp.</p>
          <p>Từ sảnh game đến cẩm nang, mọi nội dung đều hướng đến trải nghiệm 18+ rõ ràng: biết mình đang chọn gì, kiểm tra điều kiện trước khi chơi và luôn giữ giới hạn cá nhân.</p>
          <PartnerLink>Vào Thantai88Slots ngay</PartnerLink>
        </div>
        <div className="image-stack" data-gsap="rise">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Người mẫu casino châu Âu trong sảnh ưu đãi slot" src="/images/bonus-lounge.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Người mẫu casino châu Âu bên sân khấu jackpot đỏ vàng" src="/images/jackpot-stage.webp" />
        </div>
      </section>

      <section className="section shell" data-gsap="rise">
        <div className="section-head">
          <span className="eyebrow">Cẩm nang slot</span>
          <h2>Tin tức & cẩm nang slot</h2>
          <Link href="/tin-tuc">Xem tất cả</Link>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" data-gsap="rise" key={post.slug}>
              <Link href={`/tin-tuc/${post.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={post.title} src={post.image} />
              </Link>
              <div>
                <span>{post.category}</span>
                <h3><Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.description}</p>
                <div className="card-actions">
                  <PartnerLink className="text-cta">Vào chơi</PartnerLink>
                  <Link href={`/tin-tuc/${post.slug}`}>Đọc thêm</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
