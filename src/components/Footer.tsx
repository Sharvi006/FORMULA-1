export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full font-body text-[0.75rem] uppercase tracking-tighter">
      <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-black italic text-orange-600 font-headline">VELOCITY-F1</div>
        <p className="text-neutral-500">© 2024 KINETIC PRECISION. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex gap-12 text-neutral-500">
        <div className="flex flex-col gap-2">
          <a className="hover:text-orange-500 transition-colors hover:transform hover:translate-x-1" href="#">Telemetry</a>
          <a className="hover:text-orange-500 transition-colors hover:transform hover:translate-x-1" href="#">Regulations</a>
        </div>
        <div className="flex flex-col gap-2">
          <a className="hover:text-orange-500 transition-colors hover:transform hover:translate-x-1" href="#">Privacy</a>
          <a className="hover:text-orange-500 transition-colors hover:transform hover:translate-x-1" href="#">Terms</a>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex gap-4">
        <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer group">
          <span className="material-symbols-outlined text-sm text-neutral-500 group-hover:text-white">share</span>
        </div>
        <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer group">
          <span className="material-symbols-outlined text-sm text-neutral-500 group-hover:text-white">rss_feed</span>
        </div>
      </div>
    </footer>
  );
}
