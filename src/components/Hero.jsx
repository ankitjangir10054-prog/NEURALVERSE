import { useEffect, useRef } from "react";
import Scene from "./Scene";

export default function Hero() {
  const heroRef = useRef(null);

  const enterExperience = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty(
        "--mouse-x",
        x.toFixed(3)
      );

      hero.style.setProperty(
        "--mouse-y",
        y.toFixed(3)
      );
    };

    const handleMouseLeave = () => {
      hero.style.setProperty("--mouse-x", "0");
      hero.style.setProperty("--mouse-y", "0");
    };

    hero.addEventListener(
      "mousemove",
      handleMouseMove
    );

    hero.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      hero.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      hero.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  const particles = Array.from({
    length: 32,
  });

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero"
    >

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />

      <div className="hero-glow hero-glow-two" />


      {/* =================================
          PARTICLES
      ================================= */}

      <div className="hero-particles">

        {particles.map((_, index) => (

          <span
            key={index}
            className="hero-particle"

            style={{
              "--particle-x":
                `${(index * 37) % 100}%`,

              "--particle-y":
                `${(index * 61) % 100}%`,

              "--particle-delay":
                `${(index % 10) * 0.35}s`,

              "--particle-size":
                `${2 + (index % 3)}px`,
            }}
          />

        ))}

      </div>


      {/* =================================
          3D AI SCENE
      ================================= */}

      <div className="hero-scene">

        <div className="scene-parallax">

          <Scene />

        </div>

      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="hero-content">

        {/* SYSTEM STATUS */}

        <div className="hero-status">

          <span className="status-dot" />

          <span>
            NEURAL SYSTEM ONLINE
          </span>

        </div>


        {/* EYEBROW */}

        <p className="eyebrow">
          ◈ DIGITAL INTELLIGENCE
        </p>


        {/* TITLE */}

        <h1 className="hero-title">

          <span className="title-line">
            ENTER THE
          </span>

          <span className="title-gradient">
            NEURALVERSE
          </span>

        </h1>


        {/* DESCRIPTION */}

        <p className="description">
          Explore a digital universe where
          <br />
          artificial intelligence meets creativity.
        </p>


        {/* =================================
            ACTIONS
        ================================= */}

        <div className="hero-actions">

          <button
            className="enter-btn"
            onClick={enterExperience}
            type="button"
          >

            <span>
              ENTER EXPERIENCE
            </span>

            <span className="arrow">
              →
            </span>

          </button>


          <button
            className="explore-btn"
            onClick={enterExperience}
            type="button"
          >
            EXPLORE PROJECTS
          </button>

        </div>

      </div>


      {/* =================================
          RIGHT META
      ================================= */}

      <div className="hero-meta">

        <div className="meta-item">

          <span className="meta-number">
            01
          </span>

          <span>
            AI CORE
          </span>

        </div>


        <div className="meta-item">

          <span className="meta-number">
            ∞
          </span>

          <span>
            CREATIVE INTELLIGENCE
          </span>

        </div>

      </div>


      {/* =================================
          SYSTEM STATUS
      ================================= */}

      <div className="hero-system">

        <span className="system-line" />

        <span>
          SYSTEM READY
        </span>

      </div>


      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <button
        className="scroll"
        onClick={enterExperience}
        type="button"
        aria-label="Scroll to projects"
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <span className="scroll-arrow">
          ↓
        </span>

      </button>


      {/* =================================
          CORNER DECORATIONS
      ================================= */}

      <div className="hero-corner hero-corner-tl">

        <span />
        <span />

      </div>


      <div className="hero-corner hero-corner-br">

        <span />
        <span />

      </div>

    </section>
  );
}