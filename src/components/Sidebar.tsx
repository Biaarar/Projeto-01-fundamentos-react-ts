import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar(){
    return(
            <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://th.bing.com/th/id/OIP.a9f06dsAoX4W5vWf5L9edgAAAA?rs=1&pid=ImgDetMain"
             alt="Foto de fundo" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Biaarar.png"/>
            <strong>Beatriz Albino</strong>
            <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
    </aside>

);
}