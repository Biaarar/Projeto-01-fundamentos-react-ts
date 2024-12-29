import { Post, PostProps } from './components/Post';
import { Header } from './components/Header';
import './global.css';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

export function App() {
  const posts: PostProps[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/Biaarar.png',
        name: 'Beatriz Albino',
        role: 'DevEstudante'
      },
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Hoje eu finalizei um projeto incrível! 🚀'
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2024-12-27 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/gu.png',
        name: 'João Doe',
        role: 'Frontend Developer'
      },
      content: [
        { type: 'paragraph', content: 'E aí pessoal! 👨‍💻' },
        {
          type: 'paragraph',
          content: 'Trabalhando em um novo projeto que vai mudar tudo. Fiquem ligados! 🔥'
        },
        { type: 'link', content: '👉 github.com/joaodoe' }
      ],
      publishedAt: new Date('2024-12-28 14:30:00')
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                id={post.id}
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

