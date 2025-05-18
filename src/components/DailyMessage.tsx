import { useAtom } from 'jotai'

import { dailyMessage } from '~/state/Atoms'

export const DailyMessage = () => {
  const [message] = useAtom(dailyMessage)

  return (
    <div className="mt-8 min-h-[3.5rem] text-center text-midnight-blue text-md max-w-[14rem] mx-auto">{message}</div>
  )
}
