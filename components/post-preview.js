import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <div className={"mb-4 rounded shadow-lg hover:shadow-xl p-8"}>
      <h3 className="text-4xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed">{excerpt}</p>
    </div>
    </>
  )
}
