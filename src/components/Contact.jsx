import { useState } from "react";

const quickQuestions = [
  "Tell me about your projects",
  "What are your ML skills?",
  "Are you open to opportunities?",
  "How can I contact you?",
];

const projectData = {
  churn: {
    title: "Customer Churn Prediction",
    description:
      "An end-to-end machine learning system designed to identify customers who are at risk of leaving a service.",
    technologies:
      "Python, Pandas, Scikit-learn and Random Forest.",
  },

  placement: {
    title: "Placement Prediction",
    description:
      "A predictive machine learning system that estimates student placement outcomes using academic and profile-based features.",
    technologies:
      "Python, Pandas and Machine Learning.",
  },

  house: {
    title: "House Price Prediction",
    description:
      "A regression-based machine learning system that estimates property prices from important housing characteristics.",
    technologies:
      "Python, Scikit-learn and Regression.",
  },

  interview: {
    title: "InterviewPrep AI",
    description:
      "An AI-powered interview preparation platform designed to help candidates practice questions and improve their preparation.",
    technologies:
      "Python, AI and APIs.",
  },
};

function generateResponse(message) {
  const text = message.toLowerCase();

  /* =========================
     PROJECTS
  ========================= */

  if (
    text.includes("project") ||
    text.includes("projects")
  ) {
    return `I've built four featured projects:

01 — Customer Churn Prediction
${projectData.churn.description}

02 — Placement Prediction
${projectData.placement.description}

03 — House Price Prediction
${projectData.house.description}

04 — InterviewPrep AI
${projectData.interview.description}

You can explore all of them through the Projects section or GitHub.`;
  }


  /* =========================
     CUSTOMER CHURN
  ========================= */

  if (
    text.includes("churn") ||
    text.includes("customer")
  ) {
    return `${projectData.churn.title}

${projectData.churn.description}

Technology stack:
${projectData.churn.technologies}

The goal is to turn customer data into actionable predictions that can help identify customers at risk of leaving.`;
  }


  /* =========================
     PLACEMENT
  ========================= */

  if (
    text.includes("placement") ||
    text.includes("student")
  ) {
    return `${projectData.placement.title}

${projectData.placement.description}

Technology stack:
${projectData.placement.technologies}

The project demonstrates how machine learning can be applied to predictive analytics and student outcome estimation.`;
  }


  /* =========================
     HOUSE PRICE
  ========================= */

  if (
    text.includes("house") ||
    text.includes("price") ||
    text.includes("property")
  ) {
    return `${projectData.house.title}

${projectData.house.description}

Technology stack:
${projectData.house.technologies}

It demonstrates a complete regression workflow from data preparation to prediction.`;
  }


  /* =========================
     INTERVIEW AI
  ========================= */

  if (
    text.includes("interview") ||
    text.includes("interviewprep")
  ) {
    return `${projectData.interview.title}

${projectData.interview.description}

Technology stack:
${projectData.interview.technologies}

The goal is to make interview preparation more interactive and accessible through AI-powered assistance.`;
  }


  /* =========================
     SKILLS
  ========================= */

  if (
    text.includes("skill") ||
    text.includes("skills") ||
    text.includes("technology") ||
    text.includes("technologies") ||
    text.includes("stack")
  ) {
    return `My core technical stack includes:

Python — Core programming
Machine Learning — Predictive modelling
Pandas / NumPy — Data processing
Scikit-learn — ML development
SQL — Data querying
FastAPI — Backend APIs
TensorFlow — Deep learning
Git / GitHub — Version control

I focus mainly on building end-to-end machine learning systems rather than only training isolated models.`;
  }


  /* =========================
     PYTHON
  ========================= */

  if (text.includes("python")) {
    return `Python is my primary programming language.

I use it for data analysis, machine learning, automation and backend development.

My Python workflow commonly involves Pandas, NumPy, Scikit-learn, FastAPI and other ML tools.`;
  }


  /* =========================
     MACHINE LEARNING
  ========================= */

  if (
    text.includes("machine learning") ||
    text.includes("ml")
  ) {
    return `My main area of interest is Machine Learning.

I work with supervised learning, data preprocessing, feature engineering, model evaluation and deployment.

My current toolkit includes Scikit-learn, Random Forest, regression models, Pandas, NumPy and Python.`;
  }


  /* =========================
     SQL
  ========================= */

  if (text.includes("sql") || text.includes("database")) {
    return `I use SQL for querying, filtering, aggregating and analysing structured data.

It is an important part of my data and machine learning workflow because good models start with good data.`;
  }


  /* =========================
     ABOUT
  ========================= */

  if (
    text.includes("about") ||
    text.includes("who are you") ||
    text.includes("ankit")
  ) {
    return `I'm NeuralVerse AI, the portfolio assistant for Ankit.

Ankit is a Computer Science Engineering student specializing in Artificial Intelligence, focused on Machine Learning, Data Science and intelligent applications.

This portfolio represents his journey from data and algorithms to deployable AI systems.`;
  }


  /* =========================
     EDUCATION
  ========================= */

  if (
    text.includes("education") ||
    text.includes("college") ||
    text.includes("study")
  ) {
    return `Ankit is pursuing B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence.

His current focus is strengthening Machine Learning, Data Science, SQL, backend development and practical project building.`;
  }


  /* =========================
     HIRING
  ========================= */

  if (
    text.includes("hire") ||
    text.includes("hiring") ||
    text.includes("job") ||
    text.includes("internship") ||
    text.includes("opportunity")
  ) {
    return `Yes — Ankit is open to internships, projects, freelance opportunities and technical collaborations.

The best way to connect is through LinkedIn or email.

Use the contact links below to start a conversation.`;
  }


  /* =========================
     GITHUB
  ========================= */

  if (text.includes("github")) {
    return `You can explore Ankit's source code, machine learning projects and development work on GitHub.

Use the GitHub button below to visit the profile.`;
  }


  /* =========================
     LINKEDIN
  ========================= */

  if (text.includes("linkedin")) {
    return `You can connect with Ankit professionally through LinkedIn.

Use the LinkedIn button below to view his professional profile.`;
  }


  /* =========================
     CONTACT
  ========================= */

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach")
  ) {
    return `You can contact Ankit directly by email or connect through LinkedIn.

Email:
ankitjangir10054@gmail.com

LinkedIn:
linkedin.com/in/ankit-kumar-52b837380/`;
  }


  /* =========================
     HELLO
  ========================= */

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return `Hello! 👋

Welcome to NeuralVerse.

I'm here to help you explore Ankit's projects, skills, experience and contact information.

What would you like to discover?`;
  }


  /* =========================
     DEFAULT
  ========================= */

  return `I'm not connected to a live AI model yet, but I can help you explore this portfolio.

Try asking:

• Tell me about your projects
• What are your ML skills?
• Tell me about Customer Churn
• Tell me about InterviewPrep AI
• Are you open to internships?
• How can I contact you?`;
}


export default function Contact() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "Hello! I'm NeuralVerse AI. Ask me about Ankit's projects, skills, education or opportunities.",
    },
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);


  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = (text) => {

    const message = text.trim();

    if (!message || typing) return;


    /* USER MESSAGE */

    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInput("");
    setTyping(true);


    /* AI RESPONSE */

    setTimeout(() => {

      const response = generateResponse(message);

      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text: response,
        },
      ]);

      setTyping(false);

    }, 700);
  };


  /* =========================
     FORM
  ========================= */

  const handleSubmit = (event) => {

    event.preventDefault();

    sendMessage(input);
  };


  return (
    <section
      className="contact-section"
      id="contact"
    >

      {/* =================================
          LEFT CONTENT
      ================================= */}

      <div className="contact-content">

        <p className="eyebrow">
          ◈ CONNECT
        </p>


        <h2 className="contact-title">
          LET'S BUILD
          <span>THE FUTURE.</span>
        </h2>


        <p className="contact-description">
          Have an idea, project, or opportunity?
          <br />
          Let's turn it into something intelligent.
        </p>


        {/* =================================
            NEURALVERSE CHAT
        ================================= */}

        <div className="neural-chat">


          {/* HEADER */}

          <div className="chat-header">

            <div className="chat-status">

              <span className="chat-status-dot"></span>

              <div>

                <strong>
                  NEURALVERSE AI
                </strong>

                <small>
                  PORTFOLIO ASSISTANT
                </small>

              </div>

            </div>


            <span className="chat-symbol">
              ◈
            </span>

          </div>


          {/* MESSAGES */}

          <div className="chat-messages">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`chat-message ${message.sender}`}
              >

                <span className="message-label">
                  {message.sender === "ai"
                    ? "NEURAL AI"
                    : "YOU"}
                </span>


                <p>
                  {message.text}
                </p>

              </div>

            ))}


            {/* TYPING */}

            {typing && (

              <div className="chat-message ai">

                <span className="message-label">
                  NEURAL AI
                </span>

                <div className="typing-indicator">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

              </div>

            )}

          </div>


          {/* QUICK QUESTIONS */}

          <div className="quick-questions">

            {quickQuestions.map((question) => (

              <button
                key={question}
                type="button"
                onClick={() =>
                  sendMessage(question)
                }
              >
                {question}
              </button>

            ))}

          </div>


          {/* INPUT */}

          <form
            className="chat-input"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Ask NeuralVerse AI..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              disabled={typing}
            />


            <button
              type="submit"
              aria-label="Send message"
              disabled={typing}
            >
              ↗
            </button>

          </form>

        </div>


        {/* =================================
            SOCIAL LINKS
        ================================= */}

        <div className="social-links">

          <a
            href="https://github.com/ankitjangir10054-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">
              ◇
            </span>

            <span>
              GitHub
            </span>

            <span className="social-arrow">
              ↗
            </span>
          </a>


          <a
            href="https://www.linkedin.com/in/ankit-kumar-52b837380/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">
              ◇
            </span>

            <span>
              LinkedIn
            </span>

            <span className="social-arrow">
              ↗
            </span>
          </a>


          <a
            href="mailto:ankitjangir10054@gmail.com"
            className="social-link"
          >
            <span className="social-icon">
              ◇
            </span>

            <span>
              Email
            </span>

            <span className="social-arrow">
              ↗
            </span>
          </a>

        </div>


        {/* =================================
            FOOTER
        ================================= */}

        <div className="contact-footer">

          <span>
            © 2026 ANKIT
          </span>

          <span>
            BUILT WITH INTELLIGENCE ◈
          </span>

        </div>

      </div>


      {/* =================================
          AI ORBIT
      ================================= */}

      <div className="contact-orbit">

        <div className="orbit-glow"></div>

        <div className="orbit-ring ring-one"></div>

        <div className="orbit-ring ring-two"></div>

        <div className="orbit-ring ring-three"></div>

        <div className="orbit-dot dot-one"></div>

        <div className="orbit-dot dot-two"></div>

        <div className="orbit-dot dot-three"></div>

        <div className="orbit-core">

          <span>
            AI
          </span>

        </div>

      </div>

    </section>
  );
}