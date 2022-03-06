import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page = ({ slug, page }: Props) => {
  return (
    <div>
      {slug?.map((v) => (
        <p key={v}>Post: {v}</p>
      ))}
      {page && <p>page query: {page}</p>}
    </div>
  )
}

export const getServerSideProps = async ({
  params,
  query,
}: GetServerSidePropsContext<{ slug: string[] }>) => {
  const slug = params?.slug
  const { page = 1 } = query
  if (!slug) return { props: {}, notFound: true }

  return {
    props: { slug, page },
  }
}

export default Page
