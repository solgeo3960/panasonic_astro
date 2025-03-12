export interface KvData {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const kvData: KvData[] = [
  {
    id: 1,
    title: "Panasonic Group 标识",
    image: "/src/assets_2025/images/kv/kv1.png",  
    link: "/zh/guidelines/gl_otherrules_zh.html",
  },
  {
    id: 2,
    title: "E-learning",
    image: "/src/assets_2025/images/kv/banner_2_zh.png",
    link: "/zh/faq_el/el_elearningco_zh.html",
  },
  {
    id: 3,
    title: "集团品牌标语",
    image: "/src/assets_2025/images/kv/kv3.svg",
    link: "/zh/guidelines/gl_be_pg_pgrouplogo_zh.html",
  },
]