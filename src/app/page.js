import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./Components/MainSection"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div class="Main">
          <div class="text_introduction" id="text_introduction">
            <h1>Lukáš Minda</h1>
            <h2 id="heading">JUNIOR FRONTEND DEVELOPER & CODER</h2>
            <div class="icons" id="icons">

              <a href="https://github.com/minda23" target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-minda-b4a756119/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              <a href="mailto:someone@example.com"><i class="fa fa-envelope"></i></a>

            </div>
          </div>

        </div>

        <a href="#description" class="arrow arrow-first arrow_stop" id="arrow_scroll"></a>

      </div>
    </main>
  );
}
