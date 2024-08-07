import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/talisonsc.png" />
          <div className={styles.authorInfo}>
            <strong>Talison Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de Julho as 20:11h" dateTime="01/07/2024 20:11:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no discovery, evento da Rocketseat. O nome do projeto é Devlinks 🚀{" "}
        </p>

        <p>
          <a href="https://talisonsc.github.io/projetodev/" target="_blank">
            #talisonsc/devlinks
          </a>{" "}
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Escreva seu comentário" />
        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
