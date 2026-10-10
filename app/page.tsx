const primaryColors = [
  ["Primary 500", "#F97316", "bg-[#F97316]"],
  ["Primary 400", "#F8923C", "bg-[#F8923C]"],
  ["Primary 300", "#FDBA74", "bg-[#FDBA74]"],
  ["Primary 200", "#FED7AA", "bg-[#FED7AA]"],
  ["Primary 100", "#FFF1E8", "bg-[#FFF1E8]"],
];

const neutralColors = [
  ["Neutral 900", "#0F172A", "bg-[#0F172A]"],
  ["Neutral 700", "#334155", "bg-[#334155]"],
  ["Neutral 500", "#64748B", "bg-[#64748B]"],
  ["Neutral 300", "#CBD5E1", "bg-[#CBD5E1]"],
  ["Neutral 200", "#E2E8F0", "bg-[#E2E8F0]"],
  ["Neutral 100", "#F1F5F9", "bg-[#F1F5F9]"],
  ["Neutral 50", "#FAFAFC", "bg-[#FAFAFC]"],
  ["White", "#FFFFFF", "bg-white"],
];

const typeScale = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];

const spacing = [
  ["4", "0.25rem"],
  ["8", "0.5rem"],
  ["12", "0.75rem"],
  ["16", "1rem"],
  ["24", "1.5rem"],
  ["32", "2rem"],
  ["40", "2.5rem"],
  ["48", "3rem"],
  ["64", "4rem"],
];

function Section({
  number,
  title,
  children,
  className = "",
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`spec-section ${className}`}>
      <div className="section-heading">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function VertexMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? "brand-mark-compact" : ""}`}>
      <svg viewBox="0 0 40 36" aria-hidden="true">
        <path d="M2 2h36L20 35 2 2Z" fill="currentColor" />
        <path d="m13 10 7 13 7-13h-5l-2 5-2-5h-5Z" fill="white" />
      </svg>
      <span>Vertex</span>
    </div>
  );
}

function Icon({ name, filled = false }: { name: string; filled?: boolean }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, React.ReactNode> = {
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" /><path d="M10 21h4" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" fill={filled ? "white" : "currentColor"} stroke="none" /></>,
    file: <><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
    bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z" />,
    chart: <><path d="M5 20V12M12 20V6M19 20V3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    chevron: <path d="m9 5 7 7-7 7" />,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    accessibility: <><circle cx="12" cy="5" r="2" /><path d="M5 9h14M12 7v13M8 22l4-8 4 8" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Badge({ children, color = "orange" }: { children: React.ReactNode; color?: "orange" | "blue" }) {
  return <span className={`badge badge-${color}`}>{children}</span>;
}

function CourseCard() {
  return (
    <div className="sample-card course-card">
      <div className="course-logo">N</div>
      <div className="sample-card-copy">
        <strong>Next.js for Production</strong>
        <p>Build scalable, high-performance web applications with Next.js.</p>
      </div>
      <div className="card-meta"><span>▥ Intermediate</span><span>◷ 18h 24m</span><span>□ 12 modules</span></div>
    </div>
  );
}

function LessonCard({ type }: { type: "video" | "lesson" }) {
  return (
    <div className="sample-card lesson-card">
      <Badge color={type === "video" ? "orange" : "blue"}>{type === "video" ? "VIDEO" : "LESSON"}</Badge>
      <strong>{type === "video" ? "Data Fetching in Server Components" : "Data Fetching & Caching"}</strong>
      <p>{type === "video" ? "Learn how to fetch data on the server using async/await and Next.js best practices." : "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."}</p>
      <div className="card-footer"><span>{type === "video" ? "Lesson 5.1  ·  12:45" : "Module 5"}</span><span className="text-link">{type === "video" ? "◉ Watch from 12:45" : "View lesson  ↗"}</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="design-page">
      <div className="design-grid">
        <div className="intro-panel">
          <VertexMark />
          <h1>Design System</h1>
          <p>A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.</p>
          <div className="version">VERSION 1.0 <span>·</span> MAY 2025</div>
        </div>

        <Section number="01" title="Colors" className="colors-section">
          <p className="sub-label">Primary</p>
          <div className="swatches primary-swatches">{primaryColors.map(([name, hex, color]) => <div className="swatch-wrap" key={name}><div className={`swatch ${color}`} /><span>{name}</span><small>{hex}</small></div>)}</div>
          <p className="sub-label">Neutral</p>
          <div className="swatches neutral-swatches">{neutralColors.map(([name, hex, color]) => <div className="swatch-wrap" key={name}><div className={`swatch ${color}`} /><span>{name}</span><small>{hex}</small></div>)}</div>
        </Section>

        <Section number="02" title="Typography" className="typography-section">
          <div className="type-example"><span className="type-sample display-font">Ag</span><div><strong>Playfair Display</strong><p>Elegant <i /> Readable <i /> Timeless</p></div></div>
          <div className="type-example"><span className="type-sample body-font">Ag</span><div><strong>Inter</strong><p>Clean <i /> Modern <i /> Highly legible</p></div></div>
        </Section>

        <Section number="03" title="Type Scale" className="type-scale-section">
          <div className="scale-grid scale-header"><span>Style</span><span>Font</span><span>Size / Line Height</span><span>Weight</span><span>Use</span></div>
          {typeScale.map(([style, font, size, weight, use]) => <div className="scale-grid" key={style}><span className={style.startsWith("Display") ? "display-font" : ""}>{style}</span><span>{font}</span><span>{size}</span><span>{weight}</span><span>{use}</span></div>)}
        </Section>

        <Section number="04" title="Spacing System" className="spacing-section">
          <p className="section-note">Base unit: 4px</p>
          <div className="spacing-grid">{spacing.map(([value, rem]) => <div className="spacing-item" key={value}><div style={{ height: `${Number(value) / 2}px` }} /><strong>{value}</strong><span>({rem})</span></div>)}</div>
        </Section>

        <Section number="05" title="Radius & Shadows" className="radius-section">
          <p className="sub-label">Radius</p>
          <div className="radius-grid">{[["4px", "xs"], ["8px", "sm"], ["12px", "md"], ["16px", "lg"], ["24px", "xl"], ["Full", "circle"]].map(([label, cls]) => <div key={label}><div className={`radius-demo radius-${cls}`} /><span>{label}</span><small>({cls})</small></div>)}</div>
          <p className="sub-label shadows-label">Shadows</p>
          <div className="shadow-grid">{[["Sm", "0 1px 2px 0 rgba(15,23,42,.04)"], ["Md", "0 4px 12px -2px rgba(15,23,42,.08)"], ["Lg", "0 12px 24px -4px rgba(15,23,42,.10)"], ["Xl", "0 20px 40px -8px rgba(15,23,42,.12)"]].map(([name, value]) => <div className="shadow-demo" key={name}><strong>{name}</strong><small>0 {value}</small></div>)}</div>
        </Section>

        <Section number="06" title="Icons" className="icons-section">
          <p className="sub-label">Outline Style</p>
          <div className="icon-row">{["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "chevron"].map((name) => <Icon name={name} key={name} />)}</div>
          <p className="sub-label">Filled Style</p>
          <div className="icon-row">{["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "chevron"].map((name) => <Icon name={name} filled key={name} />)}</div>
          <ul className="spec-list"><li>24x24px icon size</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul>
        </Section>

        <Section number="07" title="Buttons" className="buttons-section">
          <div className="button-headings"><span> </span><span>Primary</span><span>Secondary</span><span>Tertiary</span><span>Text</span></div>
          {["Default", "Hover", "Disabled"].map((state) => <div className="button-row" key={state}><span>{state}</span><button className={`btn btn-primary ${state === "Disabled" ? "is-disabled" : ""}`}>Get Started</button><button className={`btn btn-secondary ${state === "Disabled" ? "is-disabled" : ""}`}>Explore Courses</button><button className={`btn btn-tertiary ${state === "Disabled" ? "is-disabled" : ""}`}>View Lesson ↗</button><button className={`btn btn-text ${state === "Disabled" ? "is-disabled" : ""}`}>Watch Video ◉</button></div>)}
          <div className="button-specs"><strong>Button Specs</strong><ul className="spec-list"><li>Height: 44px (default)</li><li>Padding: 0 16px (lg), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14–16px)</li></ul></div>
        </Section>

        <Section number="08" title="Inputs" className="inputs-section">
          <label>Search / Text Input<div className="input-shell"><Icon name="search" /><input aria-label="Search anything" placeholder="Search anything..." /><kbd>⌘ K</kbd></div></label>
          <label>Select<div className="select-shell"><span>Most Relevant</span><Icon name="chevron" /></div></label>
          <div className="input-specs"><strong>Field Specs</strong><ul className="spec-list"><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #E2E8F0</li><li>Padding: 0 16px</li><li>Focus: Border color #F8923C</li></ul></div>
        </Section>

        <Section number="09" title="Badges / Tags" className="badges-section">
          <div><span>Video</span><Badge>VIDEO</Badge></div><div><span>Lesson</span><Badge color="blue">LESSON</Badge></div><div><span>Popular</span><Badge>POPULAR</Badge></div>
        </Section>
        <Section number="10" title="Status / Indicators" className="status-section">
          <span className="status"><b className="status-progress" /> In Progress</span><span className="status"><b className="status-complete">✓</b> Completed</span><span className="status"><b className="status-playing">▶</b> Now Playing</span><span className="status"><b className="status-locked">♙</b> Locked</span>
        </Section>
        <Section number="11" title="Progress Bar" className="progress-section">
          <div className="progress-track"><div /></div><span><strong>35%</strong> complete</span>
        </Section>

        <Section number="12" title="Cards" className="cards-section">
          <div className="card-column"><span>Course Card</span><CourseCard /></div><div className="card-column"><span>Lesson Card (Video)</span><LessonCard type="video" /></div><div className="card-column"><span>Lesson Card (Lesson)</span><LessonCard type="lesson" /></div><div className="card-column"><span>Resource Card</span><div className="sample-card resource-card"><Icon name="file" /><strong>Caching and Revalidation Guide</strong><p>Deep dive into Next.js caching strategies.</p><div className="card-footer"><span>PDF　·　1.2 MB</span><span className="text-link">↗</span></div></div></div>
        </Section>

        <Section number="13" title="Navigation" className="navigation-section">
          <div className="nav-bar"><VertexMark compact /><span className="active">Courses</span><span>My Learning</span><div className="breadcrumbs"><span>All Courses</span><b>›</b><span>Next.js for Production</span><b>›</b><span>Data Fetching & Caching</span></div><div className="pagination"><b>‹</b><strong>1</strong><span>2</span><span>3</span><span>…</span><span>8</span><b>›</b></div></div>
        </Section>

        <Section number="14" title="Principles" className="principles-section">
          {[["eye", "Clarity First", "Every element should communicate clearly."], ["grid", "Consistency", "Use components and patterns consistently across the platform."], ["target", "Focus & Calm", "Remove noise and help learners focus on what matters."], ["accessibility", "Accessible", "Design with accessibility and inclusivity in mind."]].map(([icon, title, text]) => <div className="principle" key={title}><Icon name={icon} /><div><strong>{title}</strong><p>{text}</p></div></div>)}
        </Section>
      </div>
    </main>
  );
}
