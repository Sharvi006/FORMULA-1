import { Link } from "react-router-dom";

export function Cars() {
  return (
    <main className="pb-16">
      {/* Hero Section Asymmetry */}
      <section className="relative min-h-[70vh] flex items-center px-12 mb-24 overflow-hidden pt-32 pb-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-surface-container-lowest">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            crossOrigin="anonymous"
            poster="https://images.unsplash.com/photo-1532981084288-7576595c25ce?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://videos.pexels.com/video-files/857032/857032-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full grid grid-cols-12 gap-8 items-end max-w-[1920px] mx-auto">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-headline italic font-bold text-[clamp(3rem,8vw,6rem)] leading-[0.9] uppercase tracking-tighter mb-8">
              The <span className="text-primary">Monocoque</span><br/>Selection
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl border-l-2 border-primary pl-6">
              Engineering masterpieces designed for the bleeding edge of physics. Explore the grid's most advanced aerodynamic platforms.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-end">
            <div className="text-right">
              <span className="font-headline italic text-4xl text-outline-variant block">SCUDERIA 2024</span>
              <span className="font-headline italic text-xl text-primary block">PRECISION TELEMETRY READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Car Showcase */}
      <section className="relative">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 px-12 pb-24">
          {/* Car Card 1 */}
          <Link to="/cars/1" className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] group relative block">
            <div className="bg-surface-container-low aspect-[16/9] relative overflow-hidden transition-all duration-500 group-hover:bg-surface-container-high">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8JbxpnQBGa6AW7QS0oSYktW2LJkBEgXzqayd0rPAHtDRLOuPDWVqq0mUmxbKetbWdO5cwl__7InAQqgLmWs3c-j8m0e50c1FCKZPig3gg66doYbMNIpUMz_g0PowOmb9Ph75VQ3NkNKyCZbwkq7wHOrFa4cUXrDXLKbPBw2qXmsyrg4Vd00Nsb5qyGKA5sHy3NCtRM03HNFk_Jf2dNjIY_dIfXRs6TD4HjxPRWPd0eI96atNzKMuF12_0ZrtH1FyERNw0jb0jef1c"
                alt="V-STREAK R1"
                referrerPolicy="no-referrer"
              />
              {/* Technical Overlay */}
              <div className="absolute top-6 right-6 z-20 font-headline italic text-white/20 text-6xl select-none">01</div>
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-headline italic font-black text-4xl uppercase mb-2">V-STREAK R1</h3>
                <div className="flex gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] bg-primary text-on-primary px-3 py-1 uppercase">Carbon Core</span>
                  <span className="text-xs font-bold tracking-[0.2em] border border-white/20 text-white px-3 py-1 uppercase">Hybrid V6</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Downforce</p>
                  <p className="font-headline italic font-bold">4.2 G</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Top Speed</p>
                  <p className="font-headline italic font-bold">365 KM/H</p>
                </div>
              </div>
              <button className="bg-white text-black p-4 hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </Link>

          {/* Car Card 2 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] group relative">
            <div className="bg-surface-container-low aspect-[16/9] relative overflow-hidden transition-all duration-500 group-hover:bg-surface-container-high">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCUjNZ-dYeg1MRas9GVGJxzOtDDXwaZRG2DjXX_eYucOkAkXPfLVJxi4-FYTUBasdbsVPvT4GOAlVfrp6ih4UMigcrExmGNoQBDURotFWZNbOaBgzz3EAI6iBVaOPNWD2ritNV0RmSTtQdVsR_43VuIFmmnK-PGPBpHQLxl_i9MZKrrPeGaPNlH1jrTw-z79TDowU5Q1zVDgJ77mzUVFi2MCUF8LWMwkX6wqUjMIyuubVxXbpNWvcYSWPd8OpX_SyL4xo1OfGjeKx"
                alt="SILVER HAWK"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 z-20 font-headline italic text-white/20 text-6xl select-none">02</div>
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-headline italic font-black text-4xl uppercase mb-2">SILVER HAWK</h3>
                <div className="flex gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] bg-primary text-on-primary px-3 py-1 uppercase">Aero-Spec</span>
                  <span className="text-xs font-bold tracking-[0.2em] border border-white/20 text-white px-3 py-1 uppercase">Twin-Turbo</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Downforce</p>
                  <p className="font-headline italic font-bold">4.5 G</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Top Speed</p>
                  <p className="font-headline italic font-bold">358 KM/H</p>
                </div>
              </div>
              <button className="bg-white text-black p-4 hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] group relative">
            <div className="bg-surface-container-low aspect-[16/9] relative overflow-hidden transition-all duration-500 group-hover:bg-surface-container-high">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhuSsYO-OOGd3pFrDFQqQfHVPfLkjLX2N1ycSizLUTo_gooA7ROV4m3uyy-DNwHvvDEBSQNFUNMK70SqhKu28vEcLBXIzIYkU5GVLTAa0R3HOPoogNiHG-9THwO3P9oHhTebVmCYSQJPXIfYgWD0Cpv7pEP1kPB4HoKpfe1w3TY2RLWpSCgzMFIWroUzpmsHwvDLdhA3BD96vN_qrf-EwqXxK3zLNGmP3-VVxADZlt7y02x_iWe2HkWj9SA6zWgkaeyY1VZfuStcN9"
                alt="NIGHT FURY"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 z-20 font-headline italic text-white/20 text-6xl select-none">03</div>
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-headline italic font-black text-4xl uppercase mb-2">NIGHT FURY</h3>
                <div className="flex gap-4">
                  <span className="text-xs font-bold tracking-[0.2em] bg-primary text-on-primary px-3 py-1 uppercase">Stealth</span>
                  <span className="text-xs font-bold tracking-[0.2em] border border-white/20 text-white px-3 py-1 uppercase">E-Performance</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Downforce</p>
                  <p className="font-headline italic font-bold">4.1 G</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline">Top Speed</p>
                  <p className="font-headline italic font-bold">372 KM/H</p>
                </div>
              </div>
              <button className="bg-white text-black p-4 hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="px-12 flex items-center gap-4">
          <div className="h-1 w-24 bg-primary"></div>
          <div className="h-1 w-12 bg-surface-container-highest"></div>
          <div className="h-1 w-12 bg-surface-container-highest"></div>
        </div>
      </section>

      {/* Technical Specs Bento */}
      <section className="px-12 mt-32 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-surface-container-low p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          </div>
          <h4 className="font-headline italic font-bold text-2xl uppercase mb-6">Chassis Engineering</h4>
          <p className="text-on-surface-variant mb-8 max-w-md">Our monocoque is built from over 1,000 individual carbon fiber sheets, hand-laid for optimal torsional rigidity.</p>
          <a className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all" href="#">View Schematics</a>
        </div>
        <div className="bg-primary-container p-8 group">
          <h4 className="font-headline italic font-bold text-xl uppercase text-on-primary-container mb-4">Aero Balance</h4>
          <div className="h-32 flex items-end gap-2 mb-4">
            <div className="w-full bg-on-primary-container/20 h-[40%]"></div>
            <div className="w-full bg-on-primary-container/20 h-[70%]"></div>
            <div className="w-full bg-on-primary-container/20 h-[90%]"></div>
            <div className="w-full bg-on-primary-container h-[60%]"></div>
          </div>
          <p className="text-xs font-bold uppercase tracking-tighter text-on-primary-container/70">Real-time Wind Tunnel Data</p>
        </div>
        <div className="bg-surface-container-high p-8 flex flex-col justify-between">
          <span className="material-symbols-outlined text-primary text-4xl">speed</span>
          <div>
            <h4 className="font-headline italic font-bold text-xl uppercase mb-2">0-100 KM/H</h4>
            <p className="text-4xl font-headline italic font-black text-white">1.92s</p>
          </div>
        </div>
      </section>

      {/* Dynamic Texture Quote Section */}
      <section className="mt-32 px-12 py-32 bg-neutral-950 relative overflow-hidden">
        {/* Background Blueprint Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: `url('/blueprint.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary font-headline italic font-bold uppercase tracking-[0.5em] text-sm block mb-8">Design Philosophy</span>
          <blockquote className="font-headline italic font-bold text-[clamp(2rem,5vw,4rem)] leading-tight uppercase tracking-tighter">
            "If everything seems under control, you're not going fast enough."
          </blockquote>
          <p className="mt-8 font-body uppercase tracking-widest text-outline">— Mario Andretti</p>
        </div>
      </section>
    </main>
  );
}
