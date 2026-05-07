export default function Programs() {
  const programs = [
    { name: "Muscle Building", icon: "bi-hammer" },
    { name: "Fat Loss", icon: "bi-fire" },
    { name: "Strength Training", icon: "bi-lightning-fill" },
    { name: "Athlete Performance", icon: "bi-trophy" },
  ];

  return (
    <section id="programs" className="py-5" style={{ background: "#0f0f0f" }}>
      <div className="container py-5 text-white">
        <h2 className="fw-bold text-center mb-5">
          ELITE <span style={{ color: "#ff3b3b" }}>PROGRAMS</span>
        </h2>
        <div className="row g-4">
          {programs.map((p, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="p-5 h-100 border border-secondary transition"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  transition: "0.3s",
                }}
              >
                <i
                  className={`bi ${p.icon} display-4 mb-3`}
                  style={{ color: "#ff3b3b" }}
                ></i>
                <h4 className="fw-bold">{p.name}</h4>
                <p className="text-white-50">
                  Customized roadmap to hit your physical peak.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
