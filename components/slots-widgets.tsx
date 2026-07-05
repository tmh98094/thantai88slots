import Link from "next/link";
import { getSlotWidgets } from "@/lib/slots-widgets";

export function SlotsWidgets() {
  const widgets = getSlotWidgets();
  const updatedAt = new Date(widgets.generatedAt).toLocaleString("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <section className="slot-widget-panel" aria-label="Nội dung slot tự động">
      <div className="slot-widget-head">
        <div>
          <p className="section-kicker">Widget nội dung</p>
          <h2>Bài nổi bật, tin mới và checklist 18+</h2>
        </div>
        <span>Cập nhật: {updatedAt}</span>
      </div>
      <div className="slot-widget-grid">
        {widgets.sections.map((section) => (
          <article key={section.id}>
            <strong>{section.title}</strong>
            <p>{section.description}</p>
            <ul>
              {section.items.slice(0, 4).map((item) => (
                <li key={`${section.id}-${item.href}-${item.value}`}>
                  <span>{item.label}</span>
                  <Link href={item.href}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
