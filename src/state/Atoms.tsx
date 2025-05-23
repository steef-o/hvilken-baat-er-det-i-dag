import dayjs, { type Dayjs } from 'dayjs'
import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
import { z } from 'zod'

// Zod Validator for Ship Model.
const ship = z
  .object({
    day: z.string(),
    date: z.string(),
    anchorTime: z.string(),
    shipName: z.string(),
    tonnage: z.number(),
    length: z.number(),
    depth: z.string().or(z.number()),
    maxPassengers: z.number(),
    company: z.string(),
    agent: z.string(),
    fromPort: z.string(),
    toPort: z.string(),
    nationality: z.string(),
    dateOrdered: z.string(),
    notes: z.string(),
  })
  .strict()

// Ship[]
const list = z.array(ship)

// Exportable type of Ship for use in application.
export type Ship = z.infer<typeof ship>

// Fetch ship schedule with React Query from GitHub gist and parse the result with Zod.
export const schedule = atomWithQuery(() => ({
  queryKey: ['schedule'],
  queryFn: async () => {
    const res = await fetch(
      'https://gist.githubusercontent.com/steef-o/44bf82ba28a9ab09f681e8f7a3e471c7/raw/6f3b8650906e5a2c59d5faa2e0a8d0b7366a30f6/cruise-2025'
    ).then((res) => res.json())
    return list.parse(res)
  },
}))

// Get the current selected day. defaults to clients local date for today.
export const selectedDay = atom<Dayjs>(dayjs())

// Get list of selected ships.
export const selectedShipList = atom((get) => {
  const scheduleResult = get(schedule)

  // Check if the data property exists and is an array before filtering
  if (scheduleResult.data && Array.isArray(scheduleResult.data)) {
    return scheduleResult.data.filter((ship: Ship) => ship.date === get(selectedDay).format('DD.MM.YYYY'))
  }

  // Return an empty array if data is not available
  return []
})

// Get daily message based on selectedShipLength.
export const dailyMessage = atom((get) => {
  const shipList = get(selectedShipList)

  // Two Ships
  if (shipList.length === 2) {
    return <h2>I dag er det {<span className="font-bold">to</span>} båtere på besøk i Eidfjord</h2>
  }
  // One Ship.
  if (shipList.length === 1) {
    return <h2>I dag er det {<span className="font-bold">{shipList[0].shipName}</span>} som er på besøk i Eidfjord</h2>
  }
  // No Ship(s).
  return <h2>Det er {<span className="font-bold">ingen</span>} båter i Eidfjord i dag</h2>
})
