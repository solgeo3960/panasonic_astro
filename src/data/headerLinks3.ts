export interface HeaderLink {
  url: string;
  text: string;
  urlEn: string;
  textEn: string;
  urlZh: string;
  textZh: string;
}

const faqLinks: HeaderLink[] = [
  {
    url: "/faq_el/fa_index.html",
    text: "FAQ 一覧",
    urlEn: "/en/faq_el/fa_index_en.html",
    textEn: "FAQ",
    urlZh: "/zh/faq_el/fa_index_zh.html",
    textZh: "FAQ一览"
  },
  {
    url: "/faq_el/ca_index.html",
    text: "判断事例集 一覧",
    urlEn: "/en/faq_el/ca_index_en.html",
    textEn: "Case Studies",
    urlZh: "/zh/faq_el/ca_index_zh.html",
    textZh: "判断事例集一览"
  },
  {
    url: "/faq_el/el_elearning.html",
    text: "e-ラーニング",
    urlEn: "/en/faq_el/el_elearning_en.html",
    textEn: "E-learning",
    urlZh: "/zh/faq_el/el_elearning_zh.html",
    textZh: "e-learning"
  },
];

export { faqLinks };
