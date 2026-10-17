import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const instant = false;

const courses = [
  {
    name: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    icon: "next",
  },
  {
    name: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    icon: "docker",
  },
  {
    name: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    icon: "typescript",
  },
] as const;

function VertexLogo() {
  return (
    <Link className="vertex-logo" href="/" aria-label="Vertex home">
      <svg viewBox="0 0 40 36" aria-hidden="true">
        <path d="M2 2h36L20 35 2 2Z" fill="currentColor" />
        <path d="m13 10 7 13 7-13h-5l-2 5-2-5h-5Z" fill="white" />
      </svg>
      <span>Vertex</span>
    </Link>
  );
}

function Icon({
  name,
  size = 22,
}: {
  name: "bell" | "search" | "arrow" | "level" | "clock" | "book" | "star";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths = {
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
        <path d="M10 21h4" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    level: (
      <>
        <path d="M5 20V13M9.7 20V9M14.3 20V6M19 20V3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    book: (
      <>
        <path d="M6 4a2 2 0 0 1 2-2h10v18H8a2 2 0 0 1-2-2V4Z" />
        <path d="M6 18a2 2 0 0 0 2 2h10M10 6h4" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function CourseIcon({ type }: { type: (typeof courses)[number]["icon"] }) {
  if (type === "next") {
    return <div className="course-icon course-icon-next">N</div>;
  }

  if (type === "typescript") {
    return <div className="course-icon course-icon-typescript">TS</div>;
  }

  return (
    <div className="course-icon course-icon-docker" role="img" aria-label="Docker">
      <svg viewBox="0 0 100 74" aria-hidden="true">
        <g fill="#13afe0">
          <rect x="9" y="30" width="10" height="10" />
          <rect x="21" y="30" width="10" height="10" />
          <rect x="33" y="30" width="10" height="10" />
          <rect x="45" y="30" width="10" height="10" />
          <rect x="57" y="30" width="10" height="10" />
          <rect x="21" y="18" width="10" height="10" />
          <rect x="33" y="18" width="10" height="10" />
          <rect x="45" y="18" width="10" height="10" />
          <rect x="45" y="6" width="10" height="10" />
          <path d="M0 41h69c8 0 14-2 19-6-1-5 1-10 5-14 4 4 7 8 7 14 0 1 0 2-.1 3 4-1 8-.5 11 2-3 5-8 8-14 9-6 15-19 25-35 29-15 4-31 3-42-3C7 70 1 58 0 41Z" />
          <circle cx="29" cy="59" r="3.2" fill="#101820" />
          <circle cx="30" cy="58" r="1.25" fill="#13afe0" />
          <path d="M9 64c9 2 17 1 24-2" fill="none" stroke="#101820" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function CourseCard({
  course,
}: {
  course: (typeof courses)[number];
}) {
  return (
    <article className="course-card">
      <CourseIcon type={course.icon} />
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>
          <Icon name="level" size={18} />
          {course.level}
        </span>
        <span>
          <Icon name="clock" size={18} />
          {course.duration}
        </span>
        <span>
          <Icon name="book" size={18} />
          {course.modules}
        </span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <div className="page-shell">
        <header className="site-header">
          <VertexLogo />
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#courses">Courses</a>
            <a href="#learning">My Learning</a>
          </nav>
          <div className="header-actions">
            <a className="notification-link" href="#notifications" aria-label="Notifications">
              <Icon name="bell" size={24} />
            </a>
            <Show when="signed-out">
              <div className="auth-links">
                <SignInButton mode="redirect">
                  <button className="auth-link" type="button">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="redirect">
                  <button className="auth-link auth-link-primary" type="button">
                    Sign up
                  </button>
                </SignUpButton>
                </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <span className="eyebrow">Intelligent learning</span>
          <h1 id="hero-title">
            Search your learning
            <br />
            in plain English.
          </h1>
          <p className="hero-copy">
            Vertex understands what you want to learn and
            <br className="desktop-break" /> finds the exact lessons across all your courses.
          </p>
          <a className="primary-button" href="#courses">
            Explore Courses
            <Icon name="arrow" size={24} />
          </a>
          <label className="search-field">
            <Icon name="search" size={30} />
            <input type="search" placeholder="Ask anything about your learning..." />
            <kbd>⌘ K</kbd>
          </label>
        </section>

        <section className="courses-section" id="courses" aria-labelledby="courses-title">
          <div className="section-heading">
            <h2 id="courses-title">All Courses</h2>
            <a href="#courses">
              View all courses <Icon name="arrow" size={20} />
            </a>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard course={course} key={course.name} />
            ))}
          </div>
        </section>

        <section className="weekly-note" id="learning" aria-label="Vertex updates">
          <span className="note-rule" />
          <div className="note-copy">
            <Icon name="star" size={26} />
            <span>New courses and lessons added every week.</span>
          </div>
          <span className="note-rule" />
        </section>

        <div className="bar-decoration" aria-hidden="true">
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
          <span className="bar bar-4" />
          <span className="bar bar-5" />
          <span className="bar bar-6" />
          <span className="bar bar-7" />
          <span className="bar bar-8" />
          <span className="bar bar-9" />
          <span className="bar bar-10" />
          <span className="bar bar-11" />
          <span className="bar bar-12" />
          <span className="bar bar-13" />
          <span className="bar bar-14" />
          <span className="bar bar-15" />
        </div>
      </div>
    </main>
  );
}
