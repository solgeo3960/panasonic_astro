export interface NewsItem {
  year: string;
  date: string;
  categoryNumber: number;
  url: string;
  title: string;
  targetBlank: boolean;
}
export const newsList = [
  {
    year: "2024",
    date: "2024.11.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/zh_Revision_of_Basic_Rules_for_Brand_Matters_241101.pdf",
    title: "关于《全公司 品牌基本规程》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.10.01",
    categoryNumber: 2,
    url: "/link/link_file/notice/zh_RevisionHistory_241001.pdf",
    title: "关于《品牌表示指南》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 2,
    url: "/link/link_file/notice/zh_RevisionHistory_240401.pdf",
    title: "关于《品牌表示指南》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/zh_Revision_of_Operational_Standards_for_CoBranding_240401.pdf",
    title: "关于《双重品牌运用基准》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/zh_Revision_of_Rules_for_NamingAffiliatedCompanies_240401.pdf",
    title: "关于《相关公司名称赋予基准》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/zh_Revision_of_PanasonicGroup_Operational_Rules_for_Brand_Management_240401.pdf",
    title: "关于《全公司 品牌管理业务规程》的修订。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.01.12",
    categoryNumber: 3,
    url: "/zh/other/ot_sb_vs_pbs_report_zh.html",
    title: "2023年（秋季）企业品牌调查报告已刊载。",
    targetBlank: false,
  },
];

export interface CategoryItem {
  categoryNumber: number;
  title: string;
  color: string;
  className: string;
}

export const categoryList: CategoryItem[] = [
  {
    categoryNumber: 1,
    title: "全公司规程、审批",
    color: "#FFE397",
    className: "category-1",
  },
  {
    categoryNumber: 2,
    title: "品牌表示指南・标识",
    color: "#A0F2AA",
    className: "category-2",
  },
  {
    categoryNumber: 3,
    title: "其他相关信息",
    color: "#EBF2FF",
    className: "category-3",
  },
];
