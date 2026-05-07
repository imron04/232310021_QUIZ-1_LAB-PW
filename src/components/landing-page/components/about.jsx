export default function About() {
  const stats = [
    { label: "Active Members", value: "10K+" },
    { label: "AI Body Tracking", value: "ENABLED" },
    { label: "Smart Recovery", value: "SYSTEM" },
  ];

  return (
    <section id="about" className="py-5" style={{ background: "#1a1a1a" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold text-white mb-4">
              GYM OF THE <span style={{ color: "#ff3b3b" }}>FUTURE</span>
            </h2>
            <p className="text-white-50 fs-5 mb-4">
              TitanForge is more than a gym. We combine cutting-edge AI
              analytics with premium hardware to rebuild your body from the
              ground up.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {stats.map((stat, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="p-4 border border-secondary text-center">
                    <h3 className="fw-bold text-white mb-1">{stat.value}</h3>
                    <small className="text-danger fw-bold">{stat.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
