export interface HeaderLink {
  url: string;
  text: string;
  urlEn: string;
  textEn: string;
  urlZh: string;
  textZh: string;
}

const kessaiLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_procedure.html",
    text: "一覧",
    urlEn: "/en/rules_approval/cr_procedure_en.html",
    textEn: "Approval Procedure",
    urlZh: "/zh/rules_approval/cr_procedure_zh.html",
    textZh: "一览"
  },
];

const brandEstablishmentLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_estarevision_termi.html",
    text: "ブランドの制定・改廃について",
    urlEn: "/en/rules_approval/cr_estarevision_termi_en.html",
    textEn: "Brand Establishment, Revision, and Termination",
    urlZh: "/zh/rules_approval/cr_estarevision_termi_zh.html",
    textZh: "关于品牌的制定、修改和废除"
  },
];

const affiliateNamingLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_cn_rulenaming_affil.html",
    text: "関係会社社名付与基準について",
    urlEn: "/en/rules_approval/cr_cn_rulenaming_affil_en.html",
    textEn: "Rules for Naming Affiliated Companies",
    urlZh: "/zh/rules_approval/cr_cn_rulenaming_affil_zh.html",
    textZh: "关于相关公司名称赋予基准"
  },
  {
    url: "/rules_approval/cr_cn_basic_requirement.html",
    text: "基本条件",
    urlEn: "/en/rules_approval/cr_cn_basic_requirement_en.html",
    textEn: "Basic Requirements",
    urlZh: "/zh/rules_approval/cr_cn_basic_requirement_zh.html",
    textZh: "基本条件"
  },
  {
    url: "/rules_approval/cr_cn_create_comname.html",
    text: "社名作成ルール",
    urlEn: "/en/rules_approval/cr_cn_create_comname_en.html",
    textEn: "How to Create a Company Name",
    urlZh: "/zh/rules_approval/cr_cn_create_comname_zh.html",
    textZh: "公司起名规则"
  },
  {
    url: "/rules_approval/cr_cn_chine_comname.html",
    text: "中国語社名表記",
    urlEn: "/en/rules_approval/cr_cn_chine_comname_en.html",
    textEn: "Chinese Company Names",
    urlZh: "/zh/rules_approval/cr_cn_chine_comname_zh.html",
    textZh: "中文公司名称记载"
  },
  {
    url: "/rules_approval/cr_cn_nameaffil_com.html",
    text: "社名付与決裁",
    urlEn: "/en/rules_approval/cr_cn_nameaffil_com_en.html",
    textEn: "Approval Procedure for Naming Affiliated Companies",
    urlZh: "/zh/rules_approval/cr_cn_nameaffil_com_zh.html",
    textZh: "公司名称赋予审批"
  },
];

const brandLicenseLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_tr_brand_license.html",
    text: "ブランドライセンス規程について",
    urlEn: "/en/rules_approval/cr_tr_brand_license_en.html",
    textEn: "Brand License",
    urlZh: "/zh/rules_approval/cr_tr_brand_license_zh.html",
    textZh: "关于品牌许可规程"
  },
  {
    url: "/rules_approval/cr_tr_basic_requirements.html",
    text: "基本条件",
    urlEn: "/en/rules_approval/cr_tr_basic_requirements_en.html",
    textEn: "Basic Requirements",
    urlZh: "/zh/rules_approval/cr_tr_basic_requirements_zh.html",
    textZh: "基本条件"
  },
  {
    url: "/rules_approval/cr_tr_agreement.html",
    text: "ブランドライセンス契約",
    urlEn: "/en/rules_approval/cr_tr_agreement_en.html",
    textEn: "Brand License Agreement",
    urlZh: "/zh/rules_approval/cr_tr_agreement_zh.html",
    textZh: "品牌许可协议"
  },
  {
    url: "/rules_approval/cr_tr_app_licensing.html",
    text: "ブランドのライセンス決裁",
    urlEn: "/en/rules_approval/cr_tr_app_licensing_en.html",
    textEn: "Approval Procedure for Brand Licensing",
    urlZh: "/zh/rules_approval/cr_tr_app_licensing_zh.html",
    textZh: "品牌许可审批"
  },
];

const domainNameLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_domain_name.html",
    text: "ドメインネーム運用基準について",
    urlEn: "/en/rules_approval/cr_domain_name_en.html",
    textEn: "Operational Standards for Domain Name",
    urlZh: "/zh/rules_approval/cr_domain_name_zh.html",
    textZh: "关于域名运用基准"
  },
];

const nameDisplayLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_corprules_standard_names.html",
    text: "ネーム表示の特例",
    urlEn: "/en/rules_approval/cr_corprules_standard_names_en.html",
    textEn: "Special Rules for Name Expression",
    urlZh: "/zh/rules_approval/cr_corprules_standard_names_zh.html",
    textZh: "名称标注的特例"
  },
];

const brandCrownLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_na_panasonic_brand.html",
    text: "ブランド冠称名称について",
    urlEn: "/en/rules_approval/cr_na_panasonic_brand_en.html",
    textEn: "Names Including the Panasonic Brand",
    urlZh: "/zh/rules_approval/cr_na_panasonic_brand_zh.html",
    textZh: "关于以品牌冠名的名称"
  },
  {
    url: "/rules_approval/cr_na_scope_registration.html",
    text: "決裁対象",
    urlEn: "/en/rules_approval/cr_na_scope_registration_en.html",
    textEn: "Scope of Registration",
    urlZh: "/zh/rules_approval/cr_na_scope_registration_zh.html",
    textZh: "审批对象"
  },
  {
    url: "/rules_approval/cr_na_method_disp.html",
    text: "表示方法",
    urlEn: "/en/rules_approval/cr_na_method_disp_en.html",
    textEn: "Method of Display",
    urlZh: "/zh/rules_approval/cr_na_method_disp_zh.html",
    textZh: "标注方法"
  },
  {
    url: "/rules_approval/cr_na_app_name_pbrand.html",
    text: "ブランド冠称名称決裁",
    urlEn: "/en/rules_approval/cr_na_app_name_pbrand_en.html",
    textEn: "Approval Procedure for Names Including the Panasonic Brand",
    urlZh: "/zh/rules_approval/cr_na_app_name_pbrand_zh.html",
    textZh: "以品牌冠名的名称审批"
  },
];

const merchandiseLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_mc_licens_merchand.html",
    text: "商品化権許諾について",
    urlEn: "/en/rules_approval/cr_mc_licens_merchand_en.html",
    textEn: "Licensing of Merchandising Rights",
    urlZh: "/zh/rules_approval/cr_mc_licens_merchand_zh.html",
    textZh: "关于商品化权许可"
  },
  {
    url: "/rules_approval/cr_mc_basic_requirement.html",
    text: "基本条件",
    urlEn: "/en/rules_approval/cr_mc_basic_requirement_en.html",
    textEn: "Basic Requirements",
    urlZh: "/zh/rules_approval/cr_mc_basic_requirement_zh.html",
    textZh: "基本条件"
  },
  {
    url: "/rules_approval/cr_mc_app_licensing.html",
    text: "商品化権許諾決裁",
    urlEn: "/en/rules_approval/cr_mc_app_licensing_en.html",
    textEn: "Approval Procedure for Licensing Merchandising Rights",
    urlZh: "/zh/rules_approval/cr_mc_app_licensing_zh.html",
    textZh: "商品化权许可审批"
  },
];

const noBrandLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_nb_good_service.html",
    text: "ノーブランドについて",
    urlEn: "/en/rules_approval/cr_nb_good_service_en.html",
    textEn: "Goods / Services with No Brand Name",
    urlZh: "/zh/rules_approval/cr_nb_good_service_zh.html",
    textZh: "关于无品牌"
  },
  {
    url: "/rules_approval/cr_nb_app_good_service.html",
    text: "ノーブランド決裁",
    urlEn: "/en/rules_approval/cr_nb_app_good_service_en.html",
    textEn: "Approval Procedure for Goods / Services with No Brand Name",
    urlZh: "/zh/rules_approval/cr_nb_app_good_service_zh.html",
    textZh: "无品牌的审批"
  },
];

const doubleBrandLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_cs_cobranding.html",
    text: "ダブルブランドについて",
    urlEn: "/en/rules_approval/cr_cs_cobranding_en.html",
    textEn: "Co-Branding",
    urlZh: "/zh/rules_approval/cr_cs_cobranding_zh.html",
    textZh: "关于双重品牌"
  },
  {
    url: "/rules_approval/cr_cs_ope_cobrand.html",
    text: "ダブルブランドの種類と例外対応について",
    urlEn: "/en/rules_approval/cr_cs_ope_cobrand_en.html",
    textEn: "Categories and Exceptional Cases of Co-Branding",
    urlZh: "/zh/rules_approval/cr_cs_ope_cobrand_zh.html",
    textZh: "关于双重品牌的种类和例外应对"
  },
  {
    url: "/rules_approval/cr_cs_good_service.html",
    text: "商品・サービスのダブルブランド",
    urlEn: "/en/rules_approval/cr_cs_good_service_en.html",
    textEn: "Goods / Services",
    urlZh: "/zh/rules_approval/cr_cs_good_service_zh.html",
    textZh: "商品和服务中的双重品牌"
  },
  {
    url: "/rules_approval/cr_cs_promotion.html",
    text: "宣伝・販促のダブルブランド",
    urlEn: "/en/rules_approval/cr_cs_promotion_en.html",
    textEn: "Ads and Sales Promotion",
    urlZh: "/zh/rules_approval/cr_cs_promotion_zh.html",
    textZh: "宣传、促销的双重品牌"
  },
  {
    url: "/rules_approval/cr_cs_tech_standard_mark.html",
    text: "技術・規格、認証、受賞マーク",
    urlEn: "/en/rules_approval/cr_cs_tech_standard_mark_en.html",
    textEn: "Technology / Standard / Certification / Award-winning Marks",
    urlZh: "/zh/rules_approval/cr_cs_tech_standard_mark_zh.html",
    textZh: "技术、规格、认证、获奖标志"
  },
  {
    url: "/rules_approval/cr_cs_app_cobrand.html",
    text: "ダブルブランド決裁",
    urlEn: "/en/rules_approval/cr_cs_app_cobrand_en.html",
    textEn: "Approval Procedure for Co-Branding",
    urlZh: "/zh/rules_approval/cr_cs_app_cobrand_zh.html",
    textZh: "双重品牌审批"
  },
];

const oemLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_oe_oem.html",
    text: "OEM供給について",
    urlEn: "/en/rules_approval/cr_oe_oem_en.html",
    textEn: "OEM Supply",
    urlZh: "/zh/rules_approval/cr_oe_oem_zh.html",
    textZh: "关于OEM供应"
  },
  {
    url: "/rules_approval/cr_oe_oem_transprecaut.html",
    text: "OEM供給取引上の留意事項",
    urlEn: "/en/rules_approval/cr_oe_oem_transprecaut_en.html",
    textEn: "OEM Transaction Precautions",
    urlZh: "/zh/rules_approval/cr_oe_oem_transprecaut_zh.html",
    textZh: "OEM供应交易中的注意事项"
  },
];

const productBrandLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_sp_disp_product.html",
    text: "商品ブランド表示の特例について",
    urlEn: "/en/rules_approval/cr_sp_disp_product_en.html",
    textEn: "Special Rules for Display on Products",
    urlZh: "/zh/rules_approval/cr_sp_disp_product_zh.html",
    textZh: "关于商品品牌标注的特例"
  },
];

const compositeLogoLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_co_composite_logo.html",
    text: "コンポジットロゴについて",
    urlEn: "/en/rules_approval/cr_co_composite_logo_en.html",
    textEn: "Composite Logo",
    urlZh: "/zh/rules_approval/cr_co_composite_logo_zh.html",
    textZh: "关于复合标识"
  },
  {
    url: "/rules_approval/cr_co_app_composite_logo.html",
    text: "コンポジットロゴ決裁",
    urlEn: "/en/rules_approval/cr_co_app_composite_logo_en.html",
    textEn: "Approval Procedure for Composite Logo",
    urlZh: "/zh/rules_approval/cr_co_app_composite_logo_zh.html",
    textZh: "复合标识的审批"
  },
];

const backgroundColorLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_co_spe_backcolor.html",
    text: "背景色の特例について",
    urlEn: "/en/rules_approval/cr_co_spe_backcolor_en.html",
    textEn: "Special Use of Background Colors",
    urlZh: "/zh/rules_approval/cr_co_spe_backcolor_zh.html",
    textZh: "关于背景色的特例"
  },
  {
    url: "/rules_approval/cr_co_app_backcolor.html",
    text: "背景色特例決裁",
    urlEn: "/en/rules_approval/cr_co_app_backcolor_en.html",
    textEn: "Approval in the Special Cases of Background Colors",
    urlZh: "/zh/rules_approval/cr_co_app_backcolor_zh.html",
    textZh: "背景色特例审批"
  },
];

const brandLogoSpecialLinks: HeaderLink[] = [
  {
    url: "/rules_approval/cr_co_spe_brandlogo.html",
    text: "ブランドロゴ特別使用について",
    urlEn: "/en/rules_approval/cr_co_spe_brandlogo_en.html",
    textEn: "Special Use of the Brand Logo",
    urlZh: "/zh/rules_approval/cr_co_spe_brandlogo_zh.html",
    textZh: "关于品牌标识的特殊使用"
  },
];

export { kessaiLinks, brandEstablishmentLinks, affiliateNamingLinks, brandLicenseLinks, domainNameLinks, nameDisplayLinks, brandCrownLinks, merchandiseLinks, noBrandLinks, doubleBrandLinks, oemLinks, productBrandLinks, compositeLogoLinks, backgroundColorLinks, brandLogoSpecialLinks };
