import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome Page</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div>
        <img
          src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2021-11-26/39d24c20-4ea0-11ec-803b-87314da1e02e.png"
          alt="welcome"
        />
      </div>
    </div>
  );
};

export default Main;
