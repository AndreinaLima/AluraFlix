import { Link } from "react-router-dom"
import logo from "./logo.png"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "../CabecalhoLink"

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./" className={styles.link}>
        <img src={logo} alt="logo do AluxaFlix"></img>
      </Link>
      <nav className={styles.nav}>
        <CabecalhoLink url="./">
          <Link>Home</Link>
        </CabecalhoLink>
        <CabecalhoLink url="./novoVideo">
          <Link>Novo Vídeo</Link>
        </CabecalhoLink>
      </nav>
    </header>
  )
}

export default Cabecalho
