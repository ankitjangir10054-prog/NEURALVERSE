import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "CUSTOMER CHURN",
    type: "MACHINE LEARNING",
    description:
      "An end-to-end machine learning system that predicts customer churn and identifies customers at risk of leaving.",
    tech: ["Python", "Scikit-learn", "Random Forest"],
    github:
      "https://github.com/ankitjangir10054-prog/customer-churn-prediction",
  },

  {
    number: "02",
    title: "PLACEMENT PREDICTION",
    type: "PREDICTIVE AI",
    description:
      "A predictive model that estimates student placement outcomes using academic and profile-based features.",
    tech: ["Python", "Pandas", "Machine Learning"],
    github:
      "https://github.com/ankitjangir10054-prog/placement-prediction",
  },

  {
    number: "03",
    title: "HOUSE PRICE",
    type: "REGRESSION",
    description:
      "A machine learning regression system designed to estimate property prices from important housing features.",
    tech: ["Python", "Scikit-learn", "Regression"],
    github:
      "https://github.com/ankitjangir10054-prog/House-Price-Prediction",
  },

  {
    number: "04",
    title: "INTERVIEWPREP AI",
    type: "AI APPLICATION",
    description:
      "An AI-powered interview preparation platform designed to help candidates practice questions and improve their preparation.",
    tech: ["Python", "AI", "API"],
    github:
      "https://github.com/ankitjangir10054-prog/InterviewPrep-AI",
  },
];

/* =========================
   GRID ANIMATION
========================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


/* =========================
   CARD ANIMATION
========================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


/* =========================
   PROJECT COMPONENT
========================= */

export default function Projects() {

  /* =========================
     MOUSE MOVE
  ========================= */

  const handleMouseMove = (event) => {

    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY =
      ((x - centerX) / centerX) * 6;

    const rotateX =
      -((y - centerY) / centerY) * 6;

    card.style.setProperty(
      "--rotateX",
      `${rotateX}deg`
    );

    card.style.setProperty(
      "--rotateY",
      `${rotateY}deg`
    );

    card.style.setProperty(
      "--mouseX",
      `${x}px`
    );

    card.style.setProperty(
      "--mouseY",
      `${y}px`
    );
  };


  /* =========================
     MOUSE LEAVE
  ========================= */

  const handleMouseLeave = (event) => {

    const card = event.currentTarget;

    card.style.setProperty(
      "--rotateX",
      "0deg"
    );

    card.style.setProperty(
      "--rotateY",
      "0deg"
    );

    card.style.setProperty(
      "--mouseX",
      "50%"
    );

    card.style.setProperty(
      "--mouseY",
      "50%"
    );
  };


  return (
    <section
      className="projects-section"
      id="projects"
    >

      {/* =========================
          HEADER
      ========================= */}

      <motion.div
        className="section-header"

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}

        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        <p className="eyebrow">
          ◈ THE UNIVERSE
        </p>

        <h2>
          SELECTED
          <span>PROJECTS</span>
        </h2>

        <p className="section-description">
          Intelligent systems built from data,
          experimentation and engineering.
        </p>

      </motion.div>


      {/* =========================
          PROJECT GRID
      ========================= */}

      <motion.div
        className="projects-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}
      >

        {projects.map((project) => (

          <motion.article
            className="project-card"

            key={project.number}

            variants={cardVariants}

            onMouseMove={handleMouseMove}

            onMouseLeave={handleMouseLeave}

            whileTap={{
              scale: 0.98,
            }}
          >

            {/* =========================
                GLOW
            ========================= */}

            <div className="project-glow" />


            {/* =========================
                TOP
            ========================= */}

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

            </div>


            {/* =========================
                CONTENT
            ========================= */}

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="tech-list">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </div>


            {/* =========================
                BOTTOM
            ========================= */}

            <div className="project-bottom">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project"
              >
                VIEW PROJECT
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"

                aria-label={`Open ${project.title} GitHub repository`}
              >
                ↗
              </a>

            </div>

          </motion.article>

        ))}

      </motion.div>

    </section>
  );
}