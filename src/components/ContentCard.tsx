// Dependencies
import * as React from 'react'
import Image from '@graphcms/react-image'
import { useRouter } from 'next/router'
import { useI18n } from 'next-rosetta'

// Internals
import { clsx, formatDate } from '@/utils'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import type { Locale } from 'i18n'

interface Props {
  description: string
  image: {
    handle: string
    height?: number
    width?: number
  }
  title: string
  date?: string
  descriptionClassName?: string
}

type ContentCardProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

type ContentCardComponent = <C extends React.ElementType = 'div'>(
  props: ContentCardProps<C>
) => React.ReactElement | null

export const ContentCard: ContentCardComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      description,
      image,
      title,
      as,
      date,
      descriptionClassName,
      ...props
    }: ContentCardProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const router = useRouter()
    const { t } = useI18n<Locale>()

    const Component = as || 'div'

    return (
      <Component {...props} ref={ref}>
        <div className="overflow-hidden rounded-lg">
          <Image
            alt={title}
            // We make sure to use the correct image size based on the image's aspect ratio
            image={{
              ...image,
              height: 360,
              width: 640,
            }}
            withWebp
          />
        </div>
        {date && (
          <p className="mt-4 text-xs font-semibold text-primary">
            {t('components.contentcard.published')}{' '}
            <time dateTime={date}>
              {formatDate({
                date: new Date(date).toISOString().slice(0, 19),
                formatter: 'MMM. d yyy',
                locale: router.locale,
              })}
            </time>
          </p>
        )}
        <h2
          className={clsx(
            'text-xl font-bold text-[#071D49]',
            date ? 'mt-[6px]' : 'mt-4'
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            'mt-[6px] text-xs font-semibold text-[#838383]',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </Component>
    )
  }
)

export default ContentCard
