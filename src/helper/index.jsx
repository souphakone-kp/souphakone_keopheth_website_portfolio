import { Link } from "react-router-dom";
import { Paths } from "../routes/app";

export const NavBarItem = ({ item }) => {
  return (
    <a href={item} className="floating-top-btn">
      <i className="fa-solid fa-angle-up"></i>
    </a>
  );
};

export const NavReturn = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Link
        to={Paths.HOME}
        className="logo"
        onClick={() => window.scrollTo(0, 0)}
      >
        Portfolio
      </Link>
      <i
        className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link
          to={Paths.EDUCATION}
          className="btn btn2"
          onClick={() => {
            window.scrollTo(0, 0);

            setMenuOpen(false);
          }}
        >
          &lt; Return
        </Link>
      </nav>
    </>
  );
};

export const skills = [
  // ===== Programming =====
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    descKey: "python",
    cats: ["Programming", "Data", "Backend"],
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    descKey: "java",
    cats: ["Programming", "Backend"],
  },
  {
    name: "Dart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    descKey: "dart",
    cats: ["Programming"],
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    descKey: "typescript",
    cats: ["Programming", "Frontend"],
  },
  {
    name: "Golang",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    descKey: "golang",
    cats: ["Programming", "Backend", "Learning"],
  },

  // ===== Frontend =====
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    descKey: "html",
    cats: ["Frontend"],
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    descKey: "css",
    cats: ["Frontend"],
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    descKey: "javascript",
    cats: ["Frontend", "Programming"],
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    descKey: "react",
    cats: ["Frontend", "Framework"],
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    descKey: "nextjs",
    cats: ["Frontend", "Framework"],
  },

  // ===== Backend =====
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    descKey: "node",
    cats: ["Backend", "Programming"],
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    descKey: "express",
    cats: ["Backend", "Framework"],
  },
  {
    name: "Apollo GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg",
    descKey: "apollo",
    cats: ["Backend", "Framework"],
  },

  // ===== Database =====
  {
    name: "SQL",
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    descKey: "sql",
    cats: ["Database", "Programming"],
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    descKey: "mongodb",
    cats: ["Database"],
  },
  {
    name: "DBeaver",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg",
    descKey: "dbeaver",
    cats: ["Database", "Tools"],
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    descKey: "firebase",
    cats: ["Database", "Backend"],
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    descKey: "supabase",
    cats: ["Database", "Backend", "Learning"],
  },

  // ===== Data =====
  {
    name: "Apache Superset",
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/apache-superset-icon-cyc19fiufldpekdt6c7jg.png/apache-superset-icon-80ygkwbe76iyhvftejjahm.png?_a=DATAiZAAZAA0",
    descKey: "superset",
    cats: ["Data"],
  },
  {
    name: "Dremio",
    logo: "https://vectorlogo.zone/logos/dremio/dremio-icon.svg",
    descKey: "dremio",
    cats: ["Data"],
  },
  {
    name: "Jupyter Notebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
    descKey: "jupyter",
    cats: ["Data", "Programming"],
  },
  {

    name: "phpMyAdmin",
    logo: "https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg",
    descKey: "phpmyadmin",
    cats: ["Database", "Tools"],
  },
  {
    name: "XAMPP",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlQQXjfLFIshkIDRGA_iir5MZ_nRd529BJIsiWwE6-Q&s=10",
    descKey: "xampp",
    cats: ["Tools", "Backend", "Database"],
  },

  // ===== Tools =====
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    descKey: "postman",
    cats: ["Tools"],
  },
  {
    name: "Microsoft 365",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    descKey: "microsoft",
    cats: ["Tools"],
  },

  // ===== Design =====
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    descKey: "figma",
    cats: ["Design"],
  },

  // ===== AI =====

  {
    name: "Cursor",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png",
    descKey: "cursor",
    cats: ["AI"],
  },

  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    descKey: "chatgpt",
    cats: ["AI"],
  },

  {
    name: "Claude AI",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
    descKey: "claude",
    cats: ["AI"],
  },

  {
    name: "Gemini",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png",
    descKey: "gemini",
    cats: ["AI"],
  },

  {
    name: "Antigravity",
    logo: "https://antigravity.google/assets/image/brand/antigravity-icon__white.png", //
    descKey: "antigravity",
    cats: ["AI"],
  },
  {
    name: "GitHub Copilot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    descKey: "copilot",
    cats: ["AI"],
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    descKey: "vuejs",
    cats: ["Frontend", "Framework"],
  },
];
