import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content:string;
    onDeleteComment:(comment: string) => void;
}

export function Comment({content, onDeleteComment} : CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);

    }
    
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
    setLikeCount((state) => {
      return state 
    });
}
    return(
        <div className={styles.comment}>
            <Avatar
             hasBorder={false} 
             src="https://github.com/Biaarar.png" 
             alt="foto de perfil"
              />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Beatriz Albino</strong>
                        <time title='27 de Dezembro' dateTime="2024-12-27 19:02:00">Publicado há 1h</time>
                    </div>
                    
                    <button onClick={handleDeleteComment} title='Deletar Comentário'>
                    <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}