"use client";
export default function Programs() {
  const programs = [
    {
      title: "MUSCLE BUILDING",
      desc: "Hypertrophy training with AI-optimized rest periods and load tracking.",
      icon: "bi-hammer",
    },
    {
      title: "FAT LOSS",
      desc: "High-intensity metabolic conditioning monitored via real-time body analytics.",
      icon: "bi-fire",
    },
    {
      title: "STRENGTH TRAINING",
      desc: "Powerlifting programs focused on neurological adaptations and raw power.",
      icon: "bi-lightning-fill",
    },
    {
      title: "ATHLETE PERFORMANCE",
      desc: "Sport-specific agility and explosive power for elite competitive levels.",
      icon: "bi-trophy-fill",
    },
  ];

  return (
    <section
      id="programs"
      className="py-5"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <div className="container py-lg-5">
        <div className="text-center mb-5">
          <h6
            className="text-danger fw-bold text-uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Our Expertise
          </h6>
          <h2 className="display-4 fw-bold text-white">
            ELITE <span style={{ color: "#ff3b3b" }}>PROGRAMS</span>
          </h2>
          <div
            className="mx-auto mt-3"
            style={{ width: "80px", height: "4px", backgroundColor: "#ff3b3b" }}
          ></div>
        </div>

        <div className="row g-4">
          {programs.map((p, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="p-4 h-100 border border-secondary transition-all shadow-hover"
                style={{
                  backgroundColor: "#1a1a1a",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#ff3b3b";
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#444";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="mb-4 d-inline-block p-3"
                  style={{
                    borderLeft: "3px solid #ff3b3b",
                    backgroundColor: "rgba(255, 59, 59, 0.1)",
                  }}
                >
                  <i
                    className={`bi ${p.icon} fs-1`}
                    style={{ color: "#ff3b3b" }}
                  ></i>
                </div>
                <h4
                  className="fw-bold text-white mb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {p.title}
                </h4>
                <p className="text-white-50 small leading-relaxed">{p.desc}</p>
                <a
                  href="#contact"
                  className="text-danger text-decoration-none fw-bold small"
                >
                  LEARN MORE <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
