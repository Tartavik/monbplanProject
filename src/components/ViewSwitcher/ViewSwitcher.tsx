import { Icon } from '../../shared/ui/Icon'
import './ViewSwitcher.scss'

export type ViewMode = 'grid' | 'list'

export interface ViewSwitcherProps {
  onChange: (mode: ViewMode) => void
  value: ViewMode
}

const squares = Array.from({ length: 9 }, (_, index) => index)

export function ViewSwitcher({ onChange, value }: ViewSwitcherProps) {
  return (
    <div className="view-switcher" role="group" aria-label="Card view">
      <button
        className="view-switcher__button"
        type="button"
        aria-label="Grid view"
        aria-pressed={value === 'grid'}
        onClick={() => onChange('grid')}
      >
        <span className="view-switcher__grid" aria-hidden="true">
          {squares.map((square) => (
            <Icon key={square} name="blueSquare" size={6} />
          ))}
        </span>
      </button>

      <button
        className="view-switcher__button"
        type="button"
        aria-label="List view"
        aria-pressed={value === 'list'}
        onClick={() => onChange('list')}
      >
        <Icon
          name={value === 'list' ? 'tileActive' : 'tile'}
          size={24}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
