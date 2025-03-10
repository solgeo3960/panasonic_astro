export interface HeaderLink {
  url: string;
  text: string;
}


const brandManagementLinks: HeaderLink[] = [
  {
    url: "/other/ot_pb_ms_bmsystem.html",
    text: "全社ブランドマネジメント推進体制",
  },
];

const companyNoticeLinks: HeaderLink[] = [
  {
    url: "/other/ot_nt_notice.html",
    text: "全社通達集",
  },
];

const brandHistoryLinks: HeaderLink[] = [
  {
    url: "/other/ot_pb_ar_logohistory01.html",
    text: "Panasonicの誕生",
  },
  {
    url: "/other/ot_pb_ar_logohistory02.html",
    text: "Panasonicロゴのデザイン",
  },
  {
    url: "/other/ot_pb_ar_logohistory03.html",
    text: "Panasonicブランドの展開",
  },
  {
    url: "http://iweb.is.jp.panasonic.com/cont/history/our-history/",
    text: "Panasonicの歩み（社史室）",
  },
];

const otherCompanyLinks: HeaderLink[] = [
  {
    url: "/other/ot_bc_bi_experience.html",
    text: "ブランディング見聞録",
  },
];

const surveyListLinks: HeaderLink[] = [
  {
    url: "/other/ot_sb_surveyresults.html",
    text: "一覧",
  },
];

const panasonicBrandSurveyLinks: HeaderLink[] = [
  {
    url: "/other/ot_sb_vs_pbs.html",
    text: "Panasonicブランド調査（調査概要）",
  },
  {
    url: "/other/ot_sb_vs_pbs_report.html",
    text: "Panasonicブランド調査（調査レポート一覧）",
  },
];

const externalBrandSurveyLinks: HeaderLink[] = [
  {
    url: "/other/ot_sb_vs_globalbrand.html",
    text: "Best Global Brands（ブランド価値ランキング）",
  },
];

export { 
  brandManagementLinks,
  companyNoticeLinks,
  brandHistoryLinks,
  otherCompanyLinks,
  surveyListLinks,
  panasonicBrandSurveyLinks,
  externalBrandSurveyLinks,
};
