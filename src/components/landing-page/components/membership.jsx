export default function Membership() {
  const tiers = [
    { name: "BASIC", price: "299", perks: ["Gym Access", "Basic Locker"] },
    {
      name: "PRO",
      price: "599",
      perks: ["All Access", "AI Coach", "Sauna"],
      active: true,
    },
    {
      name: "ELITE",
      price: "999",
      perks: ["Personal VIP", "Nutrition App", "Full Wearable"],
    },
  ];

  return (
    <section id="membership" className="py-5" style={{ background: "#0f0f0f" }}>
      <div className="container py-5">
        <h2 className="fw-bold text-center text-white mb-5">
          MEMBERSHIP <span style={{ color: "#ff3b3b" }}>PLANS</span>
        </h2>
        <div className="row g-4">
          {tiers.map((t, i) => (
            <div className="col-lg-4" key={i}>
              <div
                className={`p-5 h-100 ${t.active ? "border border-danger border-2" : "border border-secondary"}`}
                style={{ background: "#1a1a1a" }}
              >
                <h3 className="fw-bold text-white">{t.name}</h3>
                <h2 className="display-4 fw-bold text-danger">
                  IDR {t.price}k<small className="fs-6 text-white">/mo</small>
                </h2>
                <ul className="list-unstyled text-white-50 my-4">
                  {t.perks.map((p, idx) => (
                    <li key={idx} className="mb-2">
                      ✓ {p}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn w-100 rounded-0 fw-bold ${t.active ? "btn-danger" : "btn-outline-light"}`}
                >
                  SELECT PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
