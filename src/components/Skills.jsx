const skills = [
  {
    name: "Python",
    category: "CORE",
    level: "90%",
  },
  {
    name: "Machine Learning",
    category: "AI",
    level: "88%",
  },
  {
    name: "SQL",
    category: "DATA",
    level: "85%",
  },
  {
    name: "Pandas / NumPy",
    category: "DATA",
    level: "90%",
  },
  {
    name: "Scikit-learn",
    category: "AI",
    level: "88%",
  },
  {
    name: "FastAPI",
    category: "BACKEND",
    level: "80%",
  },
  {
    name: "TensorFlow",
    category: "AI",
    level: "75%",
  },
  {
    name: "Git / GitHub",
    category: "TOOLS",
    level: "85%",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* =========================
          HEADER
      ========================= */}

      <div className="skills-header">

        <div>
          <p className="eyebrow">
            ◈ TECHNOLOGY
          </p>

          <h2>
            MY <span>SKILLS</span>
          </h2>
        </div>

        <p className="skills-intro">
          The technologies I use to transform
          ideas, data and algorithms into
          intelligent digital experiences.
        </p>

      </div>


      {/* =========================
          SKILLS GRID
      ========================= */}

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <article
            className="skill-card"
            key={skill.name}
          >

            {/* Number */}

            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>


            {/* Skill information */}

            <div className="skill-info">

              <span className="skill-category">
                {skill.category}
              </span>

              <h3>
                {skill.name}
              </h3>


              {/* Progress */}

              <div className="skill-bar">

                <div
                  className="skill-progress"
                  style={{
                    width: skill.level,
                  }}
                />

              </div>

            </div>


            {/* Percentage */}

            <span className="skill-level">
              {skill.level}
            </span>

          </article>

        ))}

      </div>

    </section>
  );
}