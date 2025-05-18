import { useAtom } from 'jotai'
import { Boat, Waves } from 'phosphor-react'

import Buoy from '~/assets/img/buoy.svg'
import { selectedShipList } from '~/state/Atoms'

export const Illustration = () => {
  const [shipList] = useAtom(selectedShipList)
  return (
    <div className="mt-14 flex h-full min-h-[20rem]">
      <div className="w-full self-end">
        {/* Two Ships*/}
        {shipList.length === 2 && (
          <>
            <Boat size="6rem" className="ml-[20%] text-lollipop" />
            <Boat size="8rem" className="ml-[60%] text-ocean-blue" />
          </>
        )}
        {/* One Ship*/}
        {shipList.length === 1 && <Boat size="8rem" className="mx-auto text-ocean-blue" />}
        {/* No Ship(s)*/}
        {shipList.length === 0 && <img src={Buoy} alt="Buoy" className="mx-auto mt-32 w-2/12 sm:w-1/12" />}
        <div className="flex justify-center">
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white md:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] text-white" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white sm:block" />
          <Waves size="5rem" className="mx-[-0.75rem] hidden text-white md:block" />
        </div>
      </div>
    </div>
  )
}
