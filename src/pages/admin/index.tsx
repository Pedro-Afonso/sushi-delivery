import { getAuth } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { HeadPage, Login } from "../../components";
import { useAuthContext } from "../../context";

import styles from "../../styles/admin/Admin.module.scss";

const Admin: NextPage = () => {
  const router = useRouter();

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/admin/Dashboard");
    }
  }, [user, router]);

  return (
    <main className={styles.main}>
      <HeadPage />

      <Login />
    </main>
  );
};

export default Admin;
