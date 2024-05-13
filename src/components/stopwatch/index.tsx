import Button from "../button";
import Clock from "./clock";
import styles from './Stopwatch.module.scss'

export default function Stopwatch(){
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}