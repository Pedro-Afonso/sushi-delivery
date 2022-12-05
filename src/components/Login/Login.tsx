import { useState } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useAuthentication();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) return;

    login(email, password);
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Entrar</h2>
        <div className={styles.labelInput}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <button disabled={!email || !password}>Entrar</button>
        </div>
        {error ? <div>{error}</div> : null}
        {loading ? <div>Carregando...</div> : null}
      </form>
    </section>
  );
};
