// Dependencies
import { useRouter } from 'next/router'
import { useI18n } from 'next-rosetta'

// Internals
import { ContentCard, Link } from '@/components'
import { PostsQuery } from '@/generated/graphql'
import type { Locale } from 'i18n'

export type LatestPostsProps = {
  posts: PostsQuery['posts']
}

export const LatestPosts = ({ posts }: LatestPostsProps): JSX.Element => {
  const { t } = useI18n<Locale>()
  const router = useRouter()

  return (
    <section className="container py-20" id="danestves-section-hero">
      <h2 className="text-[26px] text-center text-[#071D49] font-black uppercase">
        {t('sections.latest.posts.title')}{' '}
        <span aria-label="victory hand" role="img">
          ✌️
        </span>
      </h2>

      <div className="grid max-w-[977px] grid-cols-1 gap-5 mx-auto mt-6 lg:grid-cols-3">
        {posts.map((post) => (
          <ContentCard
            as={Link}
            date={post.published}
            description={post.seo.description}
            href={`/posts/${post.slug}`}
            image={post.cover}
            key={post.id}
            locale={router.locale}
            title={post.title}
          />
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
