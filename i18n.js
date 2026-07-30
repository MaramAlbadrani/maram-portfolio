// Shared translation dictionary + language toggle.
// Default language is English; user can switch to Arabic from the nav button.
// Choice is stored in localStorage so it stays consistent across pages
// (index.html <-> project-zad.html) once this site is actually hosted.

const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    lang_btn: "العربية",

    hero_hi: "Hi, I'm Maram Faris Albadrani 👋",
    hero_contact_btn: "Contact",

    stat1_num: "1,000+",
    stat1_label: "Operational issues resolved",
    stat2_num: "10+",
    stat2_label: "KPI dashboards maintained",
    stat3_num: "100%",
    stat3_label: "Team quality improvement",

    sec_about: "About",
    about_text:
      "I'm an organized, tech-savvy operations professional with a Bachelor's degree in Information Systems and hands-on experience across CRM systems, data handling, Excel reporting, and administrative coordination. I'm seeking an administrative or technical role where I can apply digital and analytical skills to improve how teams operate.",

    sec_experience: "Experience",
    exp1_role: "Operational Support Specialist",
    exp1_org: "Tamkeen Technologies",
    exp1_dates: "Nov 2023 — Mar 2026",
    exp1_b1: "Ensured full compliance with approved policies and operating procedures amid frequent updates.",
    exp1_b2: "Identified and triaged over 1,000 operational issues, routing each to the right department.",
    exp1_b3: "Supported day-to-day operations to maintain a smooth, efficient workflow.",

    exp2_role: "Performance Evaluation Specialist",
    exp2_org: "Tamkeen Technologies",
    exp2_dates: "Apr 2024 — Apr 2024",
    exp2_b1: "Partnered with cross-functional teams to raise performance and quality levels by up to 100%.",

    exp3_role: "Data Analyst — Cooperative Training",
    exp3_org: "Takamol Holding",
    exp3_dates: "Jan 2019 — Aug 2019",
    exp3_b1: "Designed and maintained dashboards tracking more than 10 key performance indicators.",
    exp3_b2: "Prepared Excel reports to support decision-making across departments.",

    exp4_role: "Product Manager — Cooperative Training",
    exp4_org: "Takamol Holding",
    exp4_dates: "Jan 2019 — Aug 2019",
    exp4_b1: "Actively participated in Daily Scrum, Sprint Planning, and Sprint Review meetings.",
    exp4_b2: "Managed product workflows using Agile processes, ensuring efficient sprint execution.",

    sec_skills: "Skills",
    skills_hard_title: "Hard Skills",
    skill_hard1: "CRM Systems Management",
    skill_hard2: "Microsoft Office",
    skill_hard3: "Ticketing / Case Management",
    skill_hard4: "Data Entry, Cleaning & Validation",
    skill_hard5: "Workflow Coordination",
    skills_soft_title: "Soft Skills",
    skill_soft1: "Communication",
    skill_soft2: "Problem Solving",
    skill_soft3: "Attention to Detail",
    skill_soft4: "Time Management",
    skill_soft5: "Adaptability",

    sec_projects: "Projects",
    proj_zad_name: "Zad",
    proj_zad_view: "View details →",

    sec_education: "Education",
    edu_degree: "Bachelor's Degree in Information Systems",
    edu_school: "Prince Sultan University",
    edu_year: "2019",

    sec_contact: "Let's talk",
    contact_text: "If you'd like to get in touch about an opportunity, reach out using any of the details below.",
    contact_linkedin: "LinkedIn Profile",

    footer: "© 2026 Maram Faris Albadrani",

    // project detail page
    back_link: "← Back to portfolio",
    detail_role_label: "Role",
    detail_tools_label: "Tools Used",
    detail_desc_label: "Project Description",
    detail_visit_btn: "Visit Project ↗",
    zad_role: "Product Manager",
    zad_tools: "Agile / Scrum, JIRA, Requirements Documentation, Cross-functional Coordination",
    zad_desc_1:
      "Zad is an information-access platform that gives entrepreneurs and business owners the data, reports, and tools they need to make sound, evidence-based business decisions.",
    zad_desc_2:
      "As Product Manager, I managed the product using Agile development processes — participating in daily standups, sprint planning, and sprint reviews with the product owner, scrum master, business analyst, QA expert, UI/UX designer, and development team, to keep everyone aligned on tasks and to properly plan and review each sprint.",
  },

  ar: {
    nav_about: "نبذة",
    nav_experience: "الخبرة",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_education: "التعليم",
    nav_contact: "تواصل",
    lang_btn: "English",

    hero_hi: "مرحباً، أنا مرام فارس البدراني 👋",
    hero_contact_btn: "تواصل",

    stat1_num: "+1,000",
    stat1_label: "مشكلة تشغيلية تم حلها",
    stat2_num: "+10",
    stat2_label: "لوحة مؤشرات أداء تمت صيانتها",
    stat3_num: "100%",
    stat3_label: "تحسين جودة الفريق",

    sec_about: "نبذة عني",
    about_text:
      "أنا موظفة عمليات منظمة وملمّة بالتقنية، حاصلة على بكالوريوس في نظم المعلومات، ولدي خبرة عملية في أنظمة CRM ومعالجة البيانات وإعداد تقارير Excel والتنسيق الإداري. أبحث عن دور إداري أو تقني أستطيع من خلاله توظيف مهاراتي الرقمية والتحليلية لتحسين طريقة عمل الفرق.",

    sec_experience: "الخبرة العملية",
    exp1_role: "أخصائي دعم العمليات",
    exp1_org: "شركة تمكين للتقنية",
    exp1_dates: "نوفمبر 2023 — مارس 2026",
    exp1_b1: "ضمان الالتزام الكامل بالسياسات وإجراءات التشغيل المعتمدة مع التحديثات المتكررة.",
    exp1_b2: "تحديد وتصنيف أكثر من 1,000 مشكلة تشغيلية وتوجيه كل منها للقسم المختص.",
    exp1_b3: "دعم العمليات اليومية للحفاظ على سير عمل سلس وفعّال.",

    exp2_role: "أخصائي تقييم الأداء",
    exp2_org: "شركة تمكين للتقنية",
    exp2_dates: "أبريل 2024 — أبريل 2024",
    exp2_b1: "العمل مع فرق متعددة التخصصات لرفع مستويات الأداء والجودة حتى 100%.",

    exp3_role: "محلل بيانات — تدريب تعاوني",
    exp3_org: "مجموعة تكامل القابضة",
    exp3_dates: "يناير 2019 — أغسطس 2019",
    exp3_b1: "تصميم وصيانة لوحات معلومات لتتبع أكثر من 10 مؤشرات أداء رئيسية.",
    exp3_b2: "إعداد تقارير Excel لدعم اتخاذ القرار عبر الأقسام المختلفة.",

    exp4_role: "مدير منتج — تدريب تعاوني",
    exp4_org: "مجموعة تكامل القابضة",
    exp4_dates: "يناير 2019 — أغسطس 2019",
    exp4_b1: "المشاركة الفعالة في اجتماعات Daily Scrum وتخطيط السبرنت ومراجعته.",
    exp4_b2: "إدارة سير عمل المنتج باستخدام منهجية Agile لضمان تنفيذ فعّال للسبرنت.",

    sec_skills: "المهارات",
    skills_hard_title: "المهارات التقنية",
    skill_hard1: "إدارة أنظمة CRM",
    skill_hard2: "مايكروسوفت أوفيس",
    skill_hard3: "إدارة التذاكر والحالات",
    skill_hard4: "إدخال البيانات وتنظيفها والتحقق منها",
    skill_hard5: "تنسيق سير العمل",
    skills_soft_title: "المهارات الشخصية",
    skill_soft1: "التواصل",
    skill_soft2: "حل المشكلات",
    skill_soft3: "الدقة والانتباه للتفاصيل",
    skill_soft4: "إدارة الوقت",
    skill_soft5: "المرونة والتكيّف",

    sec_projects: "المشاريع",
    proj_zad_name: "زاد",
    proj_zad_view: "عرض التفاصيل ←",

    sec_education: "التعليم",
    edu_degree: "بكالوريوس نظم المعلومات",
    edu_school: "جامعة الأمير سلطان",
    edu_year: "2019",

    sec_contact: "لنتحدث",
    contact_text: "إذا كنت تودين التواصل بخصوص فرصة عمل، يمكنك التواصل عبر أي من الوسائل التالية.",
    contact_linkedin: "الملف الشخصي على لينكدإن",

    footer: "© 2026 مرام فارس البدراني",

    // project detail page
    back_link: "→ العودة إلى البورتفوليو",
    detail_role_label: "الدور",
    detail_tools_label: "الأدوات المستخدمة",
    detail_desc_label: "وصف المشروع",
    detail_visit_btn: "زيارة المشروع ↗",
    zad_role: "مدير منتج (Product Manager)",
    zad_tools: "Agile / Scrum، JIRA، توثيق المتطلبات، التنسيق بين الفرق",
    zad_desc_1:
      "زاد منصة تقدم لرواد الأعمال وأصحاب المنشآت البيانات والتقارير والأدوات التي تساعدهم على اتخاذ القرارات المتعلقة بأعمالهم بحيث تكون مبنية على أساس علمي وصحيح.",
    zad_desc_2:
      "بصفتي مدير المنتج، أدرت المنتج باستخدام منهجية Agile، وشاركت في اجتماعات Daily Scrum وتخطيط السبرنت ومراجعته مع مالك المنتج وSCRUM Master ومحلل الأعمال وخبير الجودة ومصمم UI/UX وفريق التطوير، للحفاظ على توافق الجميع حول المهام والتخطيط السليم لمراجعة السبرنت السابق والقادم.",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  localStorage.setItem("site-lang", lang);
}

function initLanguage() {
  const saved = localStorage.getItem("site-lang") || "en";
  applyLanguage(saved);

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang") || "en";
      applyLanguage(current === "en" ? "ar" : "en");
    });
  }
}

document.addEventListener("DOMContentLoaded", initLanguage);
