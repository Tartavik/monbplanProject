import { useState } from 'react'

import { Card } from '../components/Card/Card'
import { cardsData } from '../components/Card/cardsData'
import type { DateRange } from '../components/DatePicker/DatePicker'
import { Header } from '../components/Header/Header'
import {
  ViewSwitcher,
  type ViewMode,
} from '../components/ViewSwitcher/ViewSwitcher'
import './styles/globals.scss'

export function App() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: null,
    to: null,
  })
  const [viewMode, setViewMode] = useState<ViewMode>('list')

  return (
    <div className="app">
      <Header
        datePicker={{
          value: dateRange,
          onChange: setDateRange,
        }}
      />

      <main className="app-content">
        <div className="app-content__container">
          <ViewSwitcher value={viewMode} onChange={setViewMode} />

          <section
            className={`cards cards--${viewMode}`}
            aria-label="Image posts"
          >
            {cardsData.map(({ id, ...card }) => (
              <Card
                key={id}
                {...card}
                selectedDate={dateRange.from}
                viewMode={viewMode}
              />
            ))}
          </section>

          <button className="load-more" type="button" disabled>
            Load more
          </button>
        </div>
      </main>
    </div>
  )
}
