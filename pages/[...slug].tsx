import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post = ({ slug }: Props) => {
  const router = useRouter()
  const { page } = router.query

  return (
    <div>
      {slug.map((v) => (
        <p key={v}>Post: {v}</p>
      ))}
      {page && <p>page query: {page}</p>}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: { slug: params && Array.isArray(params.slug) ? params.slug : [''] },
  }
}

export default Post
