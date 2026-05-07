export default function Contact() {
  const inputStyle = {
    backgroundColor: "#1a1a1a",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: "0",
    padding: "12px",
  };

  return (
    <section id="contact" className="py-5" style={{ background: "#0f0f0f" }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5 text-white">
            <h2 className="display-5 fw-bold mb-4">
              READY TO <span style={{ color: "#ff3b3b" }}>EVOLVE?</span>
            </h2>
            <p className="text-white-50 mb-5">
              Visit our digital district sector or send us a message.
            </p>

            <div className="mb-4">
              <h6 className="fw-bold text-danger mb-1">LOCATION</h6>
              <p className="text-white-50">Bogor, Jln No 1</p>
            </div>

            <div>
              <h6 className="fw-bold text-danger mb-1">PHONE</h6>
              <p className="text-white-50">+62 812 3333 3333</p>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className="p-4 border border-secondary"
              style={{ background: "#1a1a1a" }}
            >
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold text-white-50 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-white-50 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-white-50 mb-1">
                      Your Message
                    </label>
                    <textarea
                      className="form-control shadow-none"
                      rows="4"
                      style={inputStyle}
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      className="btn w-100 py-3 fw-bold rounded-0 text-white"
                      style={{ backgroundColor: "#ff3b3b" }}
                    >
                      SEND DRILL REQUEST
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
