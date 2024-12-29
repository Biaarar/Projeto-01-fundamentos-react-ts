import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author{
    name:string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type:'paragraph' | 'link';
    content: string;
}
export interface PostProps{
    id: number;
    author: Author;
    publishedAt:Date;
    content: Content[];
}


export function Post({ author, publishedAt, content } : PostProps) {
    const [comments, setComments] = useState([
        'Nossa, que legal!',
    ])
    const [newCommentText, setNewCommenrText] = useState('')
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'

    }).format(publishedAt)

//#region Funçoes
    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommenrText('');
        console.log(event);
    }
    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        if(event.target){
            const target = event.target as HTMLTextAreaElement
            target.setCustomValidity('Este campo é obrigatório!');
        }
    }
    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        if(event.target){
            const target = event.target as HTMLTextAreaElement
            setNewCommenrText(target.value)
            target.setCustomValidity('');
        }
    }
    function deleteComment(commentToDelete : string) {

        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }
 //#endregion

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateFormatted}</time>
            </header>


            <div className={styles.contents}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    }
                    else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                >

                </textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>
            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return( <Comment 
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment} />)
                })}
            </div>
        </article>
    )
}
