import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuthentication } from "../../hooks/useAuthentication";
import { AllProducts, HeadPage } from "../../components";
import { useAuthContext } from "../../context";

import styles from "../../styles/admin/Dashboard.module.scss";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const { user } = useAuthContext();
  const { logout } = useAuthentication();

  useEffect(() => {
    if (!user) {
      router.push("/admin/");
    }
  }, [user, router]);

  if (!user) return <h1>Carregando...</h1>;

  return (
    <main className={styles.main}>
      <HeadPage />
      <div className={styles.top}>
        <h1>Dashboard</h1>
        <button onClick={logout}>Sair</button>
      </div>
      <AllProducts />
    </main>
  );
};

export default Dashboard;
