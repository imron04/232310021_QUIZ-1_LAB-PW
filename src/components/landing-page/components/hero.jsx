export default function Hero() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      <div className="container position-relative py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-8 text-center text-lg-start">
            <h1
              className="display-1 fw-bold text-white mb-3"
              style={{ letterSpacing: "-1px" }}
            >
              FORGE YOUR <br />
              <span
                style={{
                  color: "#ff3b3b",
                  textShadow: "0 0 15px rgba(255,59,59,0.5)",
                }}
              >
                ULTIMATE STRENGTH
              </span>
            </h1>
            <p
              className="lead text-white-50 mb-5 fs-4 mx-auto mx-lg-0"
              style={{ maxWidth: "600px" }}
            >
              Train with AI-powered fitness technology and achieve your peak
              performance in a futuristic environment.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button
                className="btn btn-lg px-lg-5 px-4 rounded-0 fw-bold"
                style={{ backgroundColor: "#ff3b3b", color: "#fff" }}
              >
                START TRAINING
              </button>
              <button className="btn btn-outline-light btn-lg px-lg-5 px-4 rounded-0 fw-bold">
                EXPLORE PROGRAMS
              </button>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="position-relative text-center">
              <img
                src="/tes.png"
                alt="Dumbbell Vector"
                className="img-fluid"
                style={{
                  maxHeight: "900px",
                  filter:
                    "invert(100%) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                  transform: "rotate(-15deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
