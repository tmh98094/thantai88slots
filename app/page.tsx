import Link from "next/link";
import { PartnerLink } from "@/components/partner-link";
import { SlotsWidgets } from "@/components/slots-widgets";
import { posts } from "@/lib/posts";
import { topicHubs } from "@/lib/topic-hubs";

const freshPosts = posts.slice(0, 3);

const lobbyProviders = [
  { name: "JDB", note: "Sảnh slot, bắn cá và arcade cần được đọc theo từng game." },
  { name: "CQ9", note: "Một nhóm slot và mini game thường gặp trong nhiều lobby châu Á." },
  { name: "HABA", note: "Giao diện game cần được tự kiểm tra trên thiết bị bạn đang dùng." },
  { name: "Pragmatic", note: "Tên provider chỉ là điểm tham khảo, không thay cho bảng thông tin của game." },
  { name: "Red Tiger", note: "Ưu đãi và điều kiện cần được kiểm tra riêng trước khi chọn game." },
  { name: "KA", note: "Một nhóm game nhịp nhanh cần có giới hạn phiên chơi rõ ràng." },
] as const;

const guideSteps = [
  {
    title: "Đọc game trước khi quay",
    text: "Mở bảng thông tin, kiểm tra biểu tượng, mức chơi và điều kiện tính năng trước khi bắt đầu.",
  },
  {
    title: "Đặt giới hạn trước khi mở lobby",
    text: "Xác định khoản giải trí, thời lượng phiên và một thời điểm dừng mà bạn sẽ tôn trọng.",
  },
  {
    title: "Giữ kỳ vọng thực tế",
    text: "RTP, jackpot và hiệu ứng game không dự đoán kết quả của một phiên chơi cụ thể.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="slots-lobby-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Không gian lobby slot hiện đại với máy slot ánh vàng ruby và xanh lục" className="slots-lobby-backdrop" src="/images/hero-slots-lobby-v2.webp" />
        <div className="shell slots-lobby-copy" data-gsap="rise">
          <p className="section-kicker">Thantai88Slots · Sảnh slot dành cho người chơi Việt</p>
          <h1>Slot online rực rỡ. Mỗi vòng quay một nhịp mới.</h1>
          <p>
            Khám phá slot online, jackpot, Wild, Scatter, provider nổi bật và trải nghiệm mobile trong một điểm đến gọn gàng thuộc hệ sinh thái <a href="https://thantai88.online">Thantai88</a>.
          </p>
          <div className="hero-actions">
            <PartnerLink className="btn btn-primary">Vào sảnh slot</PartnerLink>
            <Link className="btn btn-soft" href="#chu-de-slot">
              Xem game và chủ đề
            </Link>
          </div>
          <div className="lobby-facts" aria-label="Phạm vi nội dung slot">
            <div>
              <strong>6</strong>
              <span>Chủ đề bền vững</span>
            </div>
            <div>
              <strong>9</strong>
              <span>Bài nền tảng đã kiểm tra</span>
            </div>
            <div>
              <strong>RTP</strong>
              <span>Giải thích dễ hiểu</span>
            </div>
          </div>
        </div>
      </section>

      <section className="slot-topic-nav" id="chu-de-slot">
        <div className="shell">
          <div className="section-head section-head-left">
            <div>
              <p className="section-kicker">Đi theo câu hỏi của bạn</p>
              <h2>Chủ đề slot cần đọc theo cụm</h2>
            </div>
            <Link href="/tin-tuc">Tất cả bài viết</Link>
          </div>
          <nav className="slot-topic-grid" aria-label="Chủ đề kiến thức slot">
            {topicHubs.map((hub) => (
              <Link href={"/chu-de/" + hub.slug} key={hub.slug}>
                <span>{hub.eyebrow}</span>
                <strong>{hub.title}</strong>
                <small>{hub.description}</small>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section shell fresh-section" id="tin-moi" data-gsap="rise">
        <div className="section-head section-head-left">
          <div>
            <p className="section-kicker">Cẩm nang mới</p>
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
              <Link href={"/tin-tuc/" + freshPosts[0]?.slug}>Đọc hướng dẫn</Link>
              <PartnerLink className="text-cta">Mở nền tảng 18+</PartnerLink>
            </div>
          </article>
          <div className="fresh-list">
            {freshPosts.slice(1).map((post) => (
              <article key={post.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={post.imageAlt} src={post.image} />
                <div>
                  <span>{post.category}</span>
                  <h3>
                    <Link href={"/tin-tuc/" + post.slug}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <SlotsWidgets />
      </section>

      <section className="section shell lobby-provider-section" id="slot-hot" data-gsap="rise">
        <div className="provider-intro">
          <p className="section-kicker">Bản đồ lobby</p>
          <h2>Nền tảng đối tác có nhiều sảnh. Hãy dùng như bản đồ, không phải lời hứa thắng.</h2>
          <p>
            Các lobby có thể hiển thị các tên như JDB, CQ9, HABA, PRG Pragmatic, Red Tiger, KA, NetEnt hoặc Play&apos;n GO. Danh sách này chỉ giúp bạn định hướng nơi cần đọc thêm. Điều kiện game, ưu đãi và khả năng truy cập vẫn cần được kiểm tra trực tiếp trước khi tham gia. Khi cần so sánh rộng hơn theo thương hiệu hoặc danh mục, bạn có thể xem <a href="https://thantai88.com/nha-cung-cap-game">bản đồ sảnh game của Thantai88 Group</a>.
          </p>
        </div>
        <div className="provider-rail" aria-label="Một số provider có thể xuất hiện trong lobby đối tác">
          {lobbyProviders.map((provider) => (
            <article key={provider.name}>
              <strong>{provider.name}</strong>
              <p>{provider.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell slot-guide-section" id="huong-dan-slot">
        <div>
          <p className="section-kicker">Một phiên chơi có kiểm soát</p>
          <h2>Thông tin rõ ràng giúp bạn quyết định chậm hơn.</h2>
          <p>
            Một game có thể đẹp, nhanh và nhiều hiệu ứng, nhưng giới hạn tiền, thời gian và cảm xúc mới là phần bạn chủ động được. Những nguyên tắc dưới đây được lặp lại xuyên suốt các bài hướng dẫn trên Thantai88Slots.
          </p>
        </div>
        <ol className="slot-guide-steps">
          {guideSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell final-panel" id="uu-dai" data-gsap="rise">
        <div>
          <p className="section-kicker">Lối vào có trách nhiệm</p>
          <h2>Sẵn sàng xem sảnh game? Đi qua checklist trước.</h2>
          <p>
            Liên kết bên dưới dẫn sang nền tảng đối tác dành cho thành viên đủ tuổi. Hãy đọc điều kiện hiện hành, đặt giới hạn ngân sách và chỉ xem slot như một hình thức giải trí có rủi ro.
          </p>
        </div>
        <PartnerLink>Vào nền tảng 18+</PartnerLink>
      </section>
    </>
  );
}
