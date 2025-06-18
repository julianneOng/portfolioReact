import React from "react";

const martialArts = [
  {
    name: "Karate",
    description: "Traditional striking martial art focusing on punches and kicks.",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1a8a184?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Brazilian Jiu-Jitsu",
    description: "Ground fighting martial art emphasizing submissions and control.",
    image:
      "https://images.unsplash.com/photo-1590080877777-4f1a92310a1b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Taekwondo",
    description: "Korean martial art known for fast and high kicks.",
    image:
      "https://images.unsplash.com/photo-1600862629932-67354fbb217d?auto=format&fit=crop&w=400&q=80"
  }
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        <h1>Martial Arts Portfolio</h1>
        <p>Discover my martial arts journey and styles I practice.</p>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
        {martialArts.map((art, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              width: 280,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <img
              src={art.image}
              alt={art.name}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 15 }}>
              <h3>{art.name}</h3>
              <p>{art.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", marginTop: 40, color: "#555" }}>
        &copy; 2025 My Martial Arts Portfolio
      </footer>
    </div>
  );
}

export default App;
