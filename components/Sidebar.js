import React from 'react'
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
}  from '@heroicons/react/outline'

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid"
import SidebarRow from './SidebarRow'

  



function Sidebar() {
  const[session, loding] = useSession()

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px] '>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='Friends' />
      <SidebarRow Icon={DesktopComputerIcon} title='Friends' />
      <SidebarRow Icon={CalendarIcon} title='Friends' />
      <SidebarRow Icon={ClockIcon} title='Friends' />
      <SidebarRow Icon={ChevronDownIcon} title='Friends' />

        
    </div>
  )
}

export default Sidebar