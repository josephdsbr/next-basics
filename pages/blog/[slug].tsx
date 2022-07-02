import { GetStaticProps, GetStaticPaths } from 'next';

export default function BlogPost({ date }) {
    return <h1>{date}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async () => {  
    return {
      props: {
        date: new Date().toISOString()
      },
      revalidate: 5
    }
  }