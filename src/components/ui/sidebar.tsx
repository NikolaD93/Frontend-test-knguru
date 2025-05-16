import { Link } from 'react-router';

import logo from '@/assets/app-logo.svg';
import SidebarMini from '@/components/ui/sidebar-mini';
import { sidebarApplications, sidebarPages } from '@/constants';

export default function Sidebar() {
  return (
    <div className="flex h-screen w-sm gap-4 pe-4">
      <SidebarMini />
      <div className="w-3/4 pe-4 pt-5">
        <div className="flex items-center gap-2.5 ps-3">
          <img src={logo} alt="app logo" />
          <p className="font-bold">Productname</p>
        </div>
        <div className="pt-10">
          <p className="text-muted-foreground ps-3 text-xs font-semibold">Applications</p>
          <div className="border-b border-[#E0E6EB] py-4">
            {sidebarApplications.map((app, id) => {
              return (
                <Link
                  to="products"
                  className={`flex items-center gap-2.5 px-4 py-2.5 ${id === 1 ? 'bg-accent rounded-lg text-white shadow-[1px_7px_20px_-8px_rgba(77,91,236,0.5)]' : ''} `}
                  key={id}
                >
                  <img src={app.icon} alt={app.appName} />
                  <p>{app.appName}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="pt-6">
          <p className="text-muted-foreground ps-3 text-xs font-semibold">Pages</p>
          <div className="py-4">
            {sidebarPages.map((app, id) => {
              return (
                <div className="border-accent flex items-center gap-2.5 px-4 py-2.5" key={id}>
                  <img src={app.icon} alt="" />
                  <p>{app.appName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
