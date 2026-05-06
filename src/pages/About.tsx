export function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMxOsC35x_FKfoHx3zQNOdFk1Kld4yz2z9-jNfXSQqhv-o4t3ldnqb5E8mOgXTRLSLdyBSoXsnVL1od-OlSP7wwx0AYLOTlafwgpxhiqeU1JmrMsE2K0xyD6n_lore5tYf-x7LBGMwQMVe3FhU_of0beZGqdUTu2L6w_UBHAW7znbUYXRywRi8EAHgqa9s5WA2UTxmInpfbQQpw3DG5CE7tu4XCiTy1MyZFCeTeICna0EvaVUYRbciLekZx5pZWbt4d6MDexmeGlQ"
            alt="high-speed Formula 1 car in motion"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 w-full max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-1 w-24 bg-primary"></div>
            <span className="font-headline italic font-bold uppercase tracking-[0.5em] text-primary">Est. 1950</span>
          </div>
          <h1 className="font-headline italic font-black text-7xl md:text-9xl leading-none uppercase tracking-tighter mb-8 max-w-4xl">
            The Pinnacle of <br/><span className="text-primary-container">Motorsport</span>
          </h1>
          <p className="max-w-xl text-lg text-secondary font-light leading-relaxed mb-10 border-l-2 border-primary-container pl-8">
            Formula 1 is the ultimate synthesis of human ambition and technical precision. It is where the laws of physics are pushed to their breaking point in the pursuit of a single millisecond.
          </p>
          <div className="flex gap-6">
            <button className="bg-primary-container text-on-primary-container font-headline italic font-bold uppercase tracking-widest px-10 py-4 transition-transform hover:translate-x-2">
              Explore Telemetry
            </button>
            <button className="border border-outline-variant text-on-background font-headline italic font-bold uppercase tracking-widest px-10 py-4 transition-all hover:bg-white/5">
              Watch History
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="flex flex-col items-end">
            <span className="text-xs font-headline italic font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Current Speed</span>
            <span className="text-6xl font-headline italic font-black text-white">372<span className="text-xl ml-2 text-primary">KM/H</span></span>
          </div>
        </div>
      </section>

      {/* History Narrative */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-headline italic font-black text-5xl uppercase mb-12 leading-tight">
                A Legacy Forged <br/>In <span className="text-primary">Adrenaline</span>
              </h2>
              <div className="space-y-8 text-secondary leading-loose">
                <p>From the first World Championship race at Silverstone in 1950, Formula 1 has evolved from a gentlemen's pursuit into the most technologically advanced sporting competition on the planet.</p>
                <p>It is a story of legends—Fangio, Senna, Schumacher, Hamilton—and the machines that carried them to immortality. Each era brought new challenges: from the cigar-shaped racers of the 50s to the turbocharged monsters of the 80s and today's ultra-efficient hybrid power units.</p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8">
                <div className="p-8 bg-surface-container border-l-4 border-primary">
                  <div className="text-4xl font-headline italic font-black mb-2">74</div>
                  <div className="text-xs font-headline uppercase tracking-widest text-primary">Seasons Completed</div>
                </div>
                <div className="p-8 bg-surface-container border-l-4 border-primary">
                  <div className="text-4xl font-headline italic font-black mb-2">1,000+</div>
                  <div className="text-xs font-headline uppercase tracking-widest text-primary">Grand Prix Wins</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/9] overflow-hidden skew-negative border-r-8 border-primary-container">
                <img 
                  className="w-full h-full object-cover scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87yu9IXQ9azwHmLOlgwHT07OdAxgBT-x6F6Zbe6Q47A8pcl_UdIw4fZMotriFR7FXeZ8O9PxKxoMIVZMlct8eiBoiNTpuTyPt8L2ILvknI3uharIG7PJ7uBUqTONReJZlX6IK1IKwF_zYuWReu-2uz48NTXT2imvGnvhJP9Wzxxb7Kr5VPK2Y1PNcxsyvkE5uUQZLec2cDZvgYjiwgnnIsxOh-aBHG0odiQbQeVeKhLDMAXA_Kfz71oMQiHExzAjZr0lCzWkmTBcH"
                  alt="monochrome vintage 1950s Formula 1 race car"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-12 bg-primary text-on-primary-container max-w-sm hidden md:block">
                <span className="material-symbols-outlined mb-4 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                <p className="font-headline italic font-bold uppercase leading-tight">Every curve tells a story. Every victory demands a sacrifice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Bento Grid */}
      <section className="py-32 bg-background">
        <div className="px-12 max-w-[1920px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-headline italic font-black text-6xl uppercase mb-6 tracking-tight">Engineering Precision</h2>
            <div className="h-1 w-32 bg-primary-container mb-8"></div>
            <p className="max-w-2xl text-secondary">The modern Formula 1 car is the most complex machine ever built for racing, utilizing aerospace-grade materials and hybrid power technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container relative group overflow-hidden">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD47am3mv6MTApdBUiqppkjLunvG0HYKCnq2V7-V5UqrnQyZtRJyluF_dHenFqBkSkBpNwyVUML26G0JZgnyydCwFMP3_8IPAetRSGI2nIGc00iKj3fh8L5RgVivse9-KBRykXMvF3a3uE0zSgSWp4hhpBOWZk8g45nBPx_Arugu44j0_RWLb0g_68gnF3fLC9Sgh7rYFpoNJ5e4fH76iKCxXQ0dxzvjLmwcBgXj1_zfioNUOJlaBqntEiNXcyu_RBY-IC7AJ6e9ZcM"
                alt="close up macro shot of Formula 1 carbon fiber"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-headline italic font-bold uppercase mb-4">Aerodynamics</h3>
                <p className="text-secondary max-w-md">Generating over 5G of lateral force through precise airflow management and active DRS systems.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container relative overflow-hidden flex items-center p-10">
              <div className="z-10">
                <h3 className="text-3xl font-headline italic font-bold uppercase mb-4">The Power Unit</h3>
                <p className="text-secondary">1.6L V6 Hybrid engines producing over 1,000 horsepower with thermal efficiency exceeding 50%.</p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-primary-container skew-negative opacity-10"></div>
            </div>
            <div className="bg-surface-container-high flex flex-col justify-between p-8 border-t-2 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl">memory</span>
              <div>
                <h4 className="font-headline italic font-bold uppercase mb-2">Telemetry</h4>
                <p className="text-xs text-secondary leading-relaxed">Real-time data streaming of 300+ sensors per second.</p>
              </div>
            </div>
            <div className="bg-surface-container-high flex flex-col justify-between p-8 border-t-2 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
              <div>
                <h4 className="font-headline italic font-bold uppercase mb-2">Materials</h4>
                <p className="text-xs text-secondary leading-relaxed">Aerospace carbon fiber and 3D-printed titanium alloys.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why F1? Impact Section */}
      <section className="relative min-h-[819px] flex items-center bg-surface-container-low overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block overflow-hidden">
          <img 
            className="w-full h-full object-cover grayscale opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqjYCtikimi6TZPmr1WbE3h-D7Zm_5otnnsNvRsISl6Xb-vW4tjXJxNTKJCLYE7s-ofuVQgBM99usWIMZFFPoX6JIxL82hMomY-etkvW8NrmXSn5CHb_nQ_5QJStep5qwqmep-MeZyJbplDjfX5muTQJ6OZaDe1Z9b8d5GqJUlp7SrFsePGBQmPNNpVYo8Rngz1uqo0dV_s_SdKxMh1in4r0eqk7be7T8FkrfrgvNCB0AmP15-q2HEca0ubgrG0RrdkYCLDRvX5Vih"
            alt="emotionally intense close-up of a racing driver's eyes"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
        </div>
        <div className="px-12 w-full max-w-[1920px] mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-headline italic font-black text-6xl md:text-8xl uppercase mb-8 leading-none">
              Why Do <br/><span className="text-primary">We Race?</span>
            </h2>
            <p className="text-xl text-on-surface leading-relaxed italic mb-12">
              "Formula 1 is not just a sport. It's the relentless pursuit of perfection. It's the bravery to face the unknown at 300km/h. It's the roar of the crowd and the silence in the cockpit. We race because it's the ultimate test of the human spirit."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-outline-variant">
                <span className="material-symbols-outlined text-primary">play_arrow</span>
              </div>
              <div>
                <p className="font-headline italic font-bold uppercase tracking-widest">Experience the thrill</p>
                <p className="text-xs text-secondary uppercase">2024 Season Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
