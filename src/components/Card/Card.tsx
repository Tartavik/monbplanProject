import type { ImageName } from '../../shared/assets/imageRegistry'
import { Icon } from '../../shared/ui/Icon'
import { Image } from '../../shared/ui/Image'
import type { ViewMode } from '../ViewSwitcher/ViewSwitcher'
import type { CardMetrics } from './types'
import './Card.scss'

export interface CardProps {
  image: ImageName
  imageAlt: string
  selectedDate: Date | null
  selectedDateMetrics: CardMetrics
  todayMetrics: CardMetrics
  uploadedAt: Date
  viewMode: ViewMode
}

function formatDate(date: Date) {
  const day = date.getDate()
  const month = String(date.getMonth() + 1).padStart(2, '0')

  return `${day}-${month}-${date.getFullYear()}`
}

function Metrics({ comments, likes }: CardMetrics) {
  return (
    <div className="card__metrics">
      <span className="card__metric" aria-label={`${likes} likes`}>
        <Icon name="heartFill" size={14} aria-hidden="true" />
        {likes}
      </span>

      <span className="card__metric" aria-label={`${comments} comments`}>
        <Icon name="roundComment" size={14} aria-hidden="true" />
        {comments}
      </span>
    </div>
  )
}

export function Card({
  image,
  imageAlt,
  selectedDate,
  selectedDateMetrics,
  todayMetrics,
  uploadedAt,
  viewMode,
}: CardProps) {
  const selectedDateText = selectedDate
    ? formatDate(selectedDate)
    : 'Select date'

  return (
    <article className={`card card--${viewMode}`}>
      <Image
        name={image}
        alt={imageAlt}
        pictureClassName="card__image"
        width={86}
        height={86}
      />

      <section className="card__period">
        <h2 className="card__heading">Today</h2>
        <Metrics {...todayMetrics} />
      </section>

      <section className="card__period">
        <h2 className="card__heading">
          {selectedDate ? (
            <time dateTime={selectedDate.toISOString()}>
              {selectedDateText}
            </time>
          ) : (
            selectedDateText
          )}
        </h2>
        <Metrics {...selectedDateMetrics} />
      </section>

      <section className="card__upload">
        <h2 className="card__heading">Image upload</h2>
        <time dateTime={uploadedAt.toISOString()}>
          {formatDate(uploadedAt)}
        </time>
      </section>
    </article>
  )
}
