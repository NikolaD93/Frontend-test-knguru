import { Bell, ChevronDown, Search } from 'lucide-react';

import { Avatar } from '@/assets';

export default function Header() {
  return (
    <div className="flex w-full justify-between px-8 py-5">
      <Search />
      <div className="flex items-center gap-2">
        <Bell className="me-2" />
        <img className="aspect-square" src={Avatar} alt="avatar icon" />
        <ChevronDown />
      </div>
    </div>
  );
}
