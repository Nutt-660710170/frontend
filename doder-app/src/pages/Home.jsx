function Home() {
  return (
    <div style={{
      height: "calc(100vh - 80px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome!
      </h1>
      <p style={{ maxWidth: "500px", fontSize: "1.1rem" }}>
        This is my final project built with React.  
        I hope you enjoy exploring it!
      </p>
    </div>
  );
}

export default Home;
