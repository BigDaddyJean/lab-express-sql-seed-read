import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import Songs from "../components/Songs";
import styles from "./index.module.css";

const Home = () => {
  return (
    <Layout>
      <>
        <div className={styles.header}>
          <h2>Index</h2>
          <Link to="/new" className="btn">
            New Song
          </Link>
        </div>
        <Songs />
      </>
    </Layout>
  );
};

export default Home;
