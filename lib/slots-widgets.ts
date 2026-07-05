import rawWidgets from "@/public/data/slots-widgets.json";

export type SlotWidgetItem = {
  label: string;
  value: string;
  href: string;
};

export type SlotWidgetSection = {
  id: string;
  title: string;
  description: string;
  items: SlotWidgetItem[];
};

export type SlotWidgets = {
  generatedAt: string;
  sourceStatus: string;
  sections: SlotWidgetSection[];
};

export function getSlotWidgets(): SlotWidgets {
  return rawWidgets as SlotWidgets;
}
