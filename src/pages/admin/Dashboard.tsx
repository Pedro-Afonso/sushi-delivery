import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { HeadPage } from "../../components";
import { useAuthContext } from "../../context";
import { useAuthentication } from "../../hooks/useAuthentication";

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
      <h1>Dashboard</h1>
      <button onClick={logout}>Sair</button>
    </main>
  );
};

export default Dashboard;
