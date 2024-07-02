import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import "./global.css"
import styles from "./app.module.css"
import { Sidebar } from "./Components/Sidebar"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Talison Silva"
            content="Este é um post novo muito legal"
          />

          <Post
            author="Larissa Fagundes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, aliquam?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
