export default function Technology() {
  const techs = [
    {
      title: "AI MOTION CAPTURE",
      desc: "Kamera pintar yang mengoreksi form latihanmu secara real-time untuk mencegah cedera.",
      icon: "bi-camera-video-fill",
    },
    {
      title: "BIOMETRIC SYNC",
      desc: "Sinkronisasi otomatis dengan smartwatch untuk menyesuaikan intensitas beban latihan.",
      icon: "bi-cpu",
    },
    {
      title: "NEURAL RECOVERY",
      desc: "Teknologi stimulasi otot elektronik untuk mempercepat pemulihan jaringan setelah latihan berat.",
      icon: "bi-activity",
    },
  ];

  return (
    <section id="technology" className="py-5" style={{ background: "#0f0f0f" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <h6
              className="text-danger fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "2px" }}
            >
              Next-Gen Fitness
            </h6>
            <h2 className="display-4 fw-bold text-white mb-4">
              THE <span style={{ color: "#ff3b3b" }}>TECH</span> BEHIND THE
              BEAST
            </h2>
            <p className="text-white-50 fs-5 mb-4">
              Kami tidak hanya menggunakan besi. Kami menggunakan data. Setiap
              gerakan dipantau, setiap kemajuan dihitung oleh sistem AI kami.
            </p>
            <button className="btn btn-outline-danger rounded-0 px-4 py-2 fw-bold">
              VIEW SPECS
            </button>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="d-flex flex-column gap-4">
              {techs.map((t, i) => (
                <div
                  key={i}
                  className="p-4 border-start border-danger border-4"
                  style={{ background: "#1a1a1a", transition: "0.3s" }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <i className={`bi ${t.icon} text-danger fs-3 me-3`}></i>
                    <h4
                      className="fw-bold text-white mb-0"
                      style={{ letterSpacing: "1px" }}
                    >
                      {t.title}
                    </h4>
                  </div>
                  <p className="text-white-50 mb-0 small">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
