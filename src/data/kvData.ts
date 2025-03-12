export interface KvData {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const kvData: KvData[] = [
  {
    id: 1,
    title: "Panasonic Groupロゴ",
    image: "/src/assets_2025/images/kv/kv1.png",  
    link: "/guidelines/gl_otherrules.html",
  },
  {
    id: 2,
    title: "ブランドe-ラーニング",
    image: "/src/assets_2025/images/kv/kv2.png",
    link: "/faq_el/el_elearningco.html",
  },
  {
    id: 3,
    title: "グループブランドスローガン",
    image: "/src/assets_2025/images/kv/kv3.svg",
    link: "/guidelines/gl_be_pg_pgrouplogo.html",
  },
]