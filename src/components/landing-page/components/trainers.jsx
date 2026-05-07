export default function Trainers() {
  const trainers = [
    {
      name: "Marcus 'Titan' Reed",
      role: "Head of Strength",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLrFlotbgQs5U3df1UQlkOZf71rkzbCnxJXw&s",
    },
    {
      name: "Sarah Volkov",
      role: "AI Biomechanics Specialist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVbgkO6wGKBiiPXgjxxycqYFMtsFYnX4RVg&s",
    },
    {
      name: "Jaxson Ford",
      role: "Pro Athlete Performance",
      img: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/5a/2a/a0/44/3a/v1_E10/E107KP6M.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=884&s=08f5e294e07476ef9c9325bc736d798e33946ba0554df4da3bc57880d02b378b",
    },
  ];

  return (
    <section id="trainers" className="py-5" style={{ background: "#1a1a1a" }}>
      <div className="container py-5">
        <h2 className="fw-bold text-center text-white mb-5">
          ELITE <span style={{ color: "#ff3b3b" }}>FORGERS</span>
        </h2>
        <div className="row g-4">
          {trainers.map((t, i) => (
            <div className="col-md-4" key={i}>
              <div className="border border-secondary bg-black p-0 h-100 overflow-hidden shadow-sm">
                <img
                  src={t.img}
                  alt={t.name}
                  className="img-fluid"
                  style={{
                    filter: "grayscale(100%)",
                    objectFit: "cover",
                    height: "350px",
                    width: "100%",
                  }}
                />
                <div className="p-4 border-top border-danger border-2">
                  <h4 className="fw-bold text-white mb-1">{t.name}</h4>
                  <small className="text-danger fw-bold text-uppercase">
                    {t.role}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
