import { Menu } from 'lucide-react';

import { miniSidebarImages } from '@/constants';

export default function SidebarMini() {
  return (
    <div className="bg-muted w-1/4 px-4 pt-5">
      <Menu className="mx-auto" />
      <div className="mt-10 flex flex-col gap-5 border-b border-[#E0E6EB] pb-4">
        {miniSidebarImages.map((img, id) => (
          <img
            className={`object-cover p-2.5 ${id === 0 ? 'bg-accent rounded-lg' : ''} ${id === 2 ? 'border-b border-[#E0E6EB] pb-6' : ''}`}
            key={id}
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>
    </div>
  );
}
