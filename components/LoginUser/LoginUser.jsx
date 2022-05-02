import React from "react";
import styles from "./loginUser.module.scss";

export default function LoginUser() {
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Login</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Password</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className={styles.contetaContaseña}>
              <a className={styles.aContaseña}>Forgot my password</a>
            </div>
          </div>
          <button className={styles.btnL}>Login</button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/picLogW.jpg" alt="" />
      </div>
    </div>
  );
}
