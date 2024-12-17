import React from "react";

export const Testimonials = () => {
  const clientLogos = [
    { name: "Bjorkman Concentric Blue", path: "/img/logos/Bjorkman Concentric Blue Logo.png" },
    { name: "Concentric", path: "/img/logos/Concentric.png" },
    { name: "COTA", path: "/img/logos/COTA.png" },
    { name: "Cureatr", path: "/img/logos/Cureatr.png" },
    { name: "Fullbridge", path: "/img/logos/Fullbridge.png" },
    { name: "Hyperwave", path: "/img/logos/Hyperwave.jpg" },
    { name: "LifePod", path: "/img/logos/LifePod (1).png" },
    { name: "Location Inc", path: "/img/logos/Location Inc.png" },
    { name: "LoopedIn", path: "/img/logos/LoopedIn.jpg" },
    { name: "Meister", path: "/img/logos/Meister (1).png" },
    { name: "POCN", path: "/img/logos/POCN.png" },
    { name: "Vias Scientific", path: "/img/logos/ViasScientific.png" }
  ];

  const styles = {
    wrapper: {
      backgroundColor: '#f8f8f8',  // Light gray background
      padding: '60px 0'  // Added more padding to match the reference
    },
    section: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '40px',
      textAlign: 'center'
    },
    period: {
      color: '#ff0000'
    },
    logoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      alignItems: 'center',
      '@media (max-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      '@media (max-width: 480px)': {
        gridTemplateColumns: '1fr'
      }
    },
    logo: {
      maxWidth: '160px',
      height: 'auto',
      margin: '0 auto',
      display: 'block'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Our Clients
        </h2>
        
        <div style={styles.logoGrid}>
          {clientLogos.map((client) => (
            <div key={client.name}>
              <img
                src={client.path}
                alt={`${client.name} logo`}
                style={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};