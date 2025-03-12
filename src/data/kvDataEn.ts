export interface KvData {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const kvData: KvData[] = [
  {
    id: 1,
    title: "Panasonic Group Logo",
    image: "/src/assets_2025/images/kv/kv1.png",  
    link: "/en/guidelines/gl_otherrules_en.html",
  },
  {
    id: 2,
    title: "E-learning",
    image: "/src/assets_2025/images/kv/banner_2_e.png",
    link: "/en/faq_el/el_elearningco_en.html",
  },
  {
    id: 3,
    title: "Group Brand Slogan",
    image: "/src/assets_2025/images/kv/kv3.svg",
    link: "/en/guidelines/gl_be_pg_pgrouplogo_en.html",
  },
]
