// Shared content for the website and printable CV. Edit factual content here once.
// Welcome copy and Recent News stay in app/page.tsx; Lab data stays in app/lab/members.ts.
export type AcademicRecord = { date: string; title: string; details: string; location?: string };
export type AcademicSection = { id: string; title: string; records: AcademicRecord[] };

export const profile = {
  "name": "Seong-ho Lee",
  "role": "Assistant Professor",
  "department": "Department of Statistics",
  "university": "University of Seoul",
  "scholarUrl": "http://scholar.google.co.kr/citations?hl=en&user=Eq__vRcAAAAJ&view_op=list_works&sortby=pubdate",
  "websiteUrl": "https://seongholee5-github-io.pages.dev/"
};

export const academicSections: AcademicSection[] = [
  {
    "id": "employment",
    "title": "Employment",
    "records": [
      {
        "date": "2024 ~ Present",
        "title": "Assistant Professor",
        "details": "Department of Statistics, University of Seoul",
        "location": "Seoul, South Korea"
      },
      {
        "date": "2023 ~ 2024",
        "title": "Research Fellow",
        "details": "Department of Biostatistics, University of Michigan",
        "location": "Ann Arbor, MI, USA"
      }
    ]
  },
  {
    "id": "education",
    "title": "Education",
    "records": [
      {
        "date": "2018 ~ 2023",
        "title": "Ph.D. in Statistics",
        "details": "The Pennsylvania State University",
        "location": "University Park, PA, USA"
      },
      {
        "date": "2016 ~ 2018",
        "title": "M.A. in Applied Statistics",
        "details": "Yonsei University",
        "location": "Seoul, South Korea"
      },
      {
        "date": "2009 ~ 2016",
        "title": "B.S. in Mathematics and B.A. in Applied Statistics",
        "details": "Yonsei University",
        "location": "Seoul, South Korea"
      }
    ]
  },
  {
    "id": "grants",
    "title": "Grants",
    "records": [
      {
        "date": "2026.03 ~ 2031.02",
        "title": "Principal Investigator",
        "details": "Outstanding Research - Early Career (Type B)",
        "location": "National Research Foundation of Korea"
      }
    ]
  },
  {
    "id": "appointment",
    "title": "Appointment",
    "records": [
      {
        "date": "2026 ~ Present",
        "title": "Vice Director",
        "details": "Big Data Innovation and Convergence University Project Group",
        "location": "University of Seoul"
      }
    ]
  },
  {
    "id": "awards",
    "title": "Awards",
    "records": [
      {
        "date": "2024",
        "title": "Distinguished Teaching Award",
        "details": "University of Seoul"
      },
      {
        "date": "2019",
        "title": "Eberly College of Science Innovative Teaching Award",
        "details": "The Pennsylvania State University"
      }
    ]
  }
];

export const interests = [
  ["Semiparametric theory", "for developing efficient inference methods in models with nonparametric components"],
  ["Incomplete data analysis", "for constructing valid inference methods based on partially observed data"],
  ["Distribution shift", "for enabling reliable inference under distributional differences between source and target data"],
  ["Optimal sampling", "for designing sampling strategies that minimize loss or maximize efficiency under resource constraints"],
];
export const publications = [
  { year: "2026+", title: "Optimal two-phase sampling design for out-of-sample prediction in linear regression", authors: "Sangjoon An⁺⁼, Geonho Byeon⁺⁼, Seong-ho Lee*", journal: "submitted" },
  { year: "2026+", title: "Surrogate-assisted optimal sampling for risk prediction under measurement constraints", authors: "Sunhyun Park⁺, Seong-ho Lee*", journal: "submitted", url: "https://arxiv.org/abs/2606.03477" },
  { year: "2026", title: "DOD: Detection of outliers in high dimensional data with distance of distances", authors: "Seong-ho Lee, Yongho Jeon*", journal: "Statistics and Computing", url: "https://doi.org/10.1007/s11222-026-11026-0" },
  { year: "2026", title: "Efficient inference under label shift in unsupervised domain adaptation", authors: "Seong-ho Lee, Yanyuan Ma, Jiwei Zhao*", journal: "Journal of Machine Learning Research", url: "https://www.jmlr.org/papers/v27/25-2717.html" },
  { year: "2025", title: "SPARCC: Semi-parametric robust estimation in a right-censored covariate model", authors: "Seong-ho Lee, Brian Richardson⁼, Yanyuan Ma, Karen Marder, Tanya Garcia*", journal: "Journal of the American Statistical Association: Theory and Methods", url: "https://doi.org/10.1080/01621459.2025.2562645" },
  { year: "2024", title: "Doubly flexible estimation under label shift", authors: "Seong-ho Lee, Yanyuan Ma, Jiwei Zhao*", journal: "Journal of the American Statistical Association: Theory and Methods", url: "https://doi.org/10.1080/01621459.2024.2321653" },
  { year: "2023", title: "Semiparametric approach to estimation of marginal mean effects and marginal quantile effects", authors: "Seong-ho Lee*, Yanyuan Ma, Elvezio Ronchetti", journal: "Journal of Econometrics", url: "https://doi.org/10.1016/j.jeconom.2023.05.002" },
  { year: "2023", title: "Optimal sampling for positive only electronic health record data", authors: "Seong-ho Lee*, Yanyuan Ma, Ying Wei, Jinbo Chen", journal: "Biometrics", url: "https://doi.org/10.1111/biom.13824" },
  { year: "2022", title: "Covariate balancing for causal inference on categorical and continuous treatments", authors: "Seong-ho Lee, Yanyuan Ma, Xavier de Luna*", journal: "Econometrics and Statistics", url: "https://doi.org/10.1016/j.ecosta.2022.01.007" },
];
