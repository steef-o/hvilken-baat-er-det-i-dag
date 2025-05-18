import dayjs from 'dayjs'
import { useAtom } from 'jotai'
import { CaretLeft, CaretRight } from 'phosphor-react'
import type { ChangeEvent } from 'react'
import { useCallback, useEffect } from 'react'

import { selectedDay } from '~/state/Atoms'

export const Toolbar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDay)

  const addDay = useCallback(() => {
    setSelectedDate((prevState) => prevState.add(1, 'day'))
  }, [setSelectedDate])

  const subtractDay = useCallback(() => {
    setSelectedDate((prevState) => prevState.subtract(1, 'day'))
  }, [setSelectedDate])

  const handleDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setSelectedDate(dayjs(e.target.value))
      }
    },
    [setSelectedDate]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          subtractDay()
          break
        case 'ArrowRight':
          addDay()
          break
      }
    },
    [addDay, subtractDay]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className="mt-8 flex justify-center w-full text-midnight-blue">
      <button type="button" onClick={subtractDay}>
        <CaretLeft size="2rem" />
      </button>
      <input
        type="date"
        id="calendar"
        onChange={handleDateChange}
        value={selectedDate.format('YYYY-MM-DD')}
        className="bg-transparent text-xl font-medium px-9 max-w-[14rem] cursor-pointer"
      />
      <button type="button" onClick={addDay}>
        <CaretRight size="2rem" />
      </button>
    </div>
  )
}
