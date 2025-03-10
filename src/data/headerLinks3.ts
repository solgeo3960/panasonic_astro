export interface HeaderLink {
  url: string;
  text: string;
}

const faqLinks: HeaderLink[] = [
  {
    url: "/faq_el/fa_index.html",
    text: "FAQ 一覧",
  },
  {
    url: "/faq_el/ca_index.html",
    text: "判断事例集 一覧",
  },
  {
    url: "/faq_el/el_elearning.html",
    text: "e-ラーニング",
  },
];

export { faqLinks };
