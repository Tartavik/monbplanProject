import type { ComponentPropsWithoutRef, MouseEventHandler, Ref } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Icon } from '../../shared/ui/Icon'
import './DatePicker.scss'

const DATE_FORMAT = 'dd_MM_yyyy'

type DateInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'onClick' | 'size'
> & {
  clearTitle: string
  hasValue: boolean
  inputRef?: Ref<HTMLInputElement>
  onClear: () => void
  onClick?: MouseEventHandler<HTMLElement>
}

function DateInput({
  clearTitle,
  hasValue,
  inputRef,
  onClear,
  onClick,
  ...inputProps
}: DateInputProps) {
  return (
    <div className="date-picker__control">
      <input
        ref={inputRef}
        onClick={(event) => onClick?.(event)}
        {...inputProps}
      />

      {hasValue && (
        <button
          className="date-picker__clear"
          type="button"
          title={clearTitle}
          onClick={onClear}
        >
          <Icon name="plus" size={24} />
        </button>
      )}

      <button
        className="date-picker__calendar-button"
        type="button"
        title="Open calendar"
        onClick={(event) => onClick?.(event)}
      >
        <Icon name="calendar" size={24} />
      </button>
    </div>
  )
}

export interface DateRange {
  from: Date | null
  to: Date | null
}

export interface DatePickerProps {
  onChange: (value: DateRange) => void
  value: DateRange
}

export function DatePicker({ onChange, value }: DatePickerProps) {
  const { from: startDate, to: endDate } = value

  const handleStartDateChange = (date: Date | null) => {
    onChange({
      from: date,
      to: date && endDate && date > endDate ? null : endDate,
    })
  }

  return (
    <div className="date-picker">
      <span className="date-picker__title">Date</span>

      <ReactDatePicker
        id="start-date"
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        maxDate={endDate ?? undefined}
        dateFormat={DATE_FORMAT}
        placeholderText="from"
        calendarClassName="date-picker__calendar"
        popperClassName="date-picker__popper"
        portalId="date-picker-portal"
        className="date-picker__input"
        wrapperClassName="date-picker__picker"
        customInput={
          <DateInput
            hasValue={Boolean(startDate)}
            clearTitle="Clear start date"
            onClear={() => onChange({ from: null, to: endDate })}
          />
        }
        customInputRef="inputRef"
      />

      <ReactDatePicker
        id="end-date"
        selected={endDate}
        onChange={(date: Date | null) =>
          onChange({ from: startDate, to: date })
        }
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate ?? undefined}
        dateFormat={DATE_FORMAT}
        placeholderText="to"
        calendarClassName="date-picker__calendar"
        popperClassName="date-picker__popper"
        portalId="date-picker-portal"
        className="date-picker__input"
        wrapperClassName="date-picker__picker"
        customInput={
          <DateInput
            hasValue={Boolean(endDate)}
            clearTitle="Clear end date"
            onClear={() => onChange({ from: startDate, to: null })}
          />
        }
        customInputRef="inputRef"
      />
    </div>
  )
}
