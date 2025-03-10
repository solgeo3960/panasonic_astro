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
    categoryNumber: 1, // 全社規程・決裁
    url: "/link/link_file/notice/jp_Revision_of_Basic_Rules_for_Brand_Matters_241101.pdf",
    title: "「全社 ブランド基本規程」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.10.01",
    categoryNumber: 2, // ブランド表示ガイドライン・ロゴ
    url: "/link/link_file/notice/jp_RevisionHistory_241001.pdf",
    title: "「ブランド表示ガイドライン」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 2, // ブランド表示ガイドライン・ロゴ
    url: "/link/link_file/notice/jp_RevisionHistory_240401.pdf",
    title: "「ブランド表示ガイドライン」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1, // 全社規程・決裁
    url: "/link/link_file/notice/jp_Revision_of_Operational_Standards_for_CoBranding_240401.pdf",
    title: "「ダブルブランド運用基準」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1, // 全社規程・決裁
    url: "/link/link_file/notice/jp_Revision_of_Rules_for_NamingAffiliatedCompanies_240401.pdf",
    title: "「関係会社社名付与基準」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1, // 全社規程・決裁
    url: "/link/link_file/notice/jp_Revision_of_PanasonicGroup_Operational_Rules_for_Brand_Management_240401.pdf",
    title: "「全社 ブランドマネジメント業務規程」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1, // 全社規程・決裁
    url: "/link/link_file/notice/jp_Revision_of_OperationalStandards_for_Approval_for_BrandRelatedMatters_240401.pdf",
    title: "「ブランド関連決裁運用基準」を改定しました。",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.01.12",
    categoryNumber: 3, // その他関連情報
    url: "/other/ot_sb_vs_pbs_report.html",
    title: "2023年（秋期）コーポレートブランド調査レポートを掲載しました。",
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
    title: "全社規程・決裁",
    color: "#FFE397",
    className: "category-1",
  },
  {
    categoryNumber: 2,
    title: "ブランド表示ガイドライン・ロゴ",
    color: "#A0F2AA",
    className: "category-2",
  },
  {
    categoryNumber: 3,
    title: "その他関連情報",
    color: "#EBF2FF",
    className: "category-3",
  },
  
];
