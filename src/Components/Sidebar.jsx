import { PencilLine } from "phosphor-react"
import styles from "./sidebar.module.css"

export function Sidebar() {
  return (
    <asside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/talisonsc.png" />
        <strong>Talison Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </asside>
  )
}
