import { AcademicShell, Arrow, Section } from "./site-components";

const recentNews = [
  {
    date: "2026-11",
    text: <><strong>Jeongin Choi</strong> joined our lab as an M.S. student. Welcome, Jeongin!</>,
  },
  {
    date: "2026-10",
    text: <>Our paper was published in <cite><a href="https://link.springer.com/article/10.1007/s11222-026-11026-0" target="_blank" rel="noopener noreferrer">Statistics and Computing{"\u202f"}<Arrow /></a></cite>.</>,
  },
  {
    date: "2026-08",
    text: <><strong>Odonchimeg Senden</strong> earned an M.S. degree. Congratulations, Odonchimeg!</>,
  },
  {
    date: "2026-07",
    text: <>Our paper was published in <cite><a href="https://www.jmlr.org/papers/v27/25-2717.html" target="_blank" rel="noopener noreferrer">Journal of Machine Learning Research{"\u202f"}<Arrow /></a></cite>.</>,
  },
  {
    date: "2026-03",
    text: <>I received an <strong>Early Career Research Grant (Type B)</strong> from the National Research Foundation of Korea.</>,
  },
];

export default function HomePage() {
  return (
    <AcademicShell active="home">
      <header className="page-heading welcome-heading"><h1>Welcome!</h1><p className="intro">I'm Seong-ho Lee, an assistant professor in the Department of Statistics at the University of Seoul. Before joining UoS, I was a research fellow at the University of Michigan. I completed my Ph.D. in Statistics at The Pennsylvania State University under the guidance of <a href="http://sites.psu.edu/yanyuanma/" target="_blank" rel="noopener noreferrer">Dr. Yanyuan Ma{"\u202f"}<Arrow /></a>.</p></header>
      <Section title="Recent News" id="recent-news">
        <ul className="news-list" role="list">
          {recentNews.map(({ date, text }) => (
            <li className="record-row" key={date}>
              <time className="record-date" dateTime={date}>{date.replace("-", ".")}</time>
              <div className="record-body"><p>{text}</p></div>
            </li>
          ))}
        </ul>
      </Section>
    </AcademicShell>
  );
}
