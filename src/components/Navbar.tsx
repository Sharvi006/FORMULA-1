import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navbar() {
  const location = useLocation();

  // Hide the global navbar on the CarTelemetry page
  if (location.pathname.startsWith("/cars/")) {
    return null;
  }

  const links = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Drivers", path: "/drivers" },
    { name: "About", path: "/about" },
    { name: "3D", path: "/visualisations" },
    { name: "Future", path: "/future" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
      <div className="text-2xl italic font-black text-white font-headline">VELOCITY-F1</div>
      <div className="hidden md:flex items-center gap-10 font-headline italic font-bold uppercase tracking-widest">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "transition-all duration-300 hover:text-white hover:skew-x-[-10deg]",
                isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-6">
        <button className="font-headline italic font-bold uppercase tracking-widest bg-primary-container text-on-primary-container px-8 py-2 hover:skew-x-[-10deg] active:scale-95 transition-all duration-300 hidden md:block">
          LOGIN
        </button>
        <span className="material-symbols-outlined text-white md:hidden cursor-pointer">menu</span>
      </div>
    </nav>
  );
}
