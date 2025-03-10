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
    url: "/link/link_file/notice/en_Revision_of_Basic_Rules_for_Brand_Matters_241101.pdf",
    title: "Revision of Basic Rules for Brand Matters.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.10.01",
    categoryNumber: 2,
    url: "/link/link_file/notice/en_RevisionHistory_241001.pdf",
    title: "Revision of Brand Expression Guidelines.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 2,
    url: "/link/link_file/notice/en_RevisionHistory_240401.pdf",
    title: "Revision of Brand Expression Guidelines.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/en_Revision_of_Operational_Standards_for_CoBranding_240401.pdf",
    title: "Revision of Operational Standards for Co-Branding.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/en_Revision_of_Rules_for_NamingAffiliatedCompanies_240401.pdf",
    title: "Revision of Rules for Naming Affiliated Companies.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/en_Revision_of_PanasonicGroup_Operational_Rules_for_Brand_Management_240401.pdf",
    title: "Revision of Panasonic Group Operational Rules for Brand Management.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.04.01",
    categoryNumber: 1,
    url: "/link/link_file/notice/en_Revision_of_OperationalStandards_for_Approval_for_BrandRelatedMatters_240401.pdf",
    title: "Revision of Operational Standards for Approval for Brand Related Matters.",
    targetBlank: true,
  },
  {
    year: "2024",
    date: "2024.01.12",
    categoryNumber: 3,
    url: "/en/other/ot_sb_vs_pbs_report_en.html",
    title: "Corporate brand survey 2023 (autumn)",
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
    title: "Corporate Rules & Standards / Apporoval Procedure",
    color: "#FFE397",
    className: "category-1",
  },
  {
    categoryNumber: 2,
    title: "Brand Expression Guidelines / Logo",
    color: "#A0F2AA",
    className: "category-2",
  },
  {
    categoryNumber: 3,
    title: "Other Related Information",
    color: "#EBF2FF",
    className: "category-3",
  },
];
