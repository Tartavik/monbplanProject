import { DatePicker, type DatePickerProps } from '../DatePicker/DatePicker'
import { Image } from '../../shared/ui/Image'
import './Header.scss'

const profileInfo = [
  { label: 'posts', value: '1,333' },
  { label: 'followers', value: '11,2k' },
  { label: 'following', value: '1,236' },
] as const

const chipsInfo = {
  date: '17-02-2016',
} as const

export interface HeaderProps {
  datePicker: DatePickerProps
}

export function Header({ datePicker }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        <Image
          name="logo"
          alt="Monblanproject"
          pictureClassName="header__logo"
          width={138}
          height={138}
        />

        <div className="header__content">
          <div className="header__heading">
            <h1 className="header__title">monblanproject</h1>

            <p className="header__chip">Start on {chipsInfo.date}</p>
          </div>

          <dl className="header__info" aria-label="Profile information">
            {profileInfo.map(({ label, value }) => (
              <div className="header__info-item" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <DatePicker {...datePicker} />
        </div>
      </div>
    </header>
  )
}
