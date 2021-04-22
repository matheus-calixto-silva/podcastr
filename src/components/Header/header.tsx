import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";  
import styles from "./styles.module.scss";

export function Header(){
  const currDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="podcastr logo" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currDate}</span>
    </header>
  );
}