import { motion } from "motion/react";

export function Home() {
  return (
    <main className="relative min-h-[1024px] overflow-hidden">
      {/* Hero Section: The Aerodynamic Canvas */}
      <section className="relative h-[1024px] flex items-center px-12 pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-surface-container-lowest overflow-hidden">
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
        
        <div className="container mx-auto relative z-10 grid grid-cols-12 gap-8 items-center">
          {/* Left: Hero Text */}
          <div className="col-span-12 flex flex-col items-start">
            <div className="overflow-hidden">
              <h1 className="text-[clamp(4rem,15vw,12rem)] font-headline font-black italic uppercase leading-[0.8] tracking-tighter text-primary-container drop-shadow-2xl whitespace-nowrap">
                FORMULA 1
              </h1>
            </div>
            <div className="mt-8 max-w-xl">
              <p className="text-on-surface-variant font-body text-xl uppercase tracking-[0.2em] mb-4">
                The Kinetic Precision Series
              </p>
              <p className="text-secondary-fixed-dim text-sm max-w-md leading-relaxed border-l-2 border-primary-container pl-6">
                Witness the convergence of high-stakes engineering and absolute velocity. Designed for the pursuit of the ultimate lap time, where milliseconds define legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Cinematic Section: Stats & Specs (Continuous Wave Animation) */}
      <section className="bg-surface-container-lowest relative overflow-hidden h-[500px] flex items-center w-full">
        <motion.div 
          className="flex gap-24 absolute left-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {[
            { value: "350+", label: "Top Speed km/h" },
            { value: "1.8S", label: "0-100 acceleration" },
            { value: "5.0G", label: "Cornering Force" },
            { value: "1000+", label: "Brake Horsepower" },
            { value: "350+", label: "Top Speed km/h" },
            { value: "1.8S", label: "0-100 acceleration" },
            { value: "5.0G", label: "Cornering Force" },
            { value: "1000+", label: "Brake Horsepower" },
            { value: "350+", label: "Top Speed km/h" },
            { value: "1.8S", label: "0-100 acceleration" },
            { value: "5.0G", label: "Cornering Force" },
            { value: "1000+", label: "Brake Horsepower" },
            { value: "350+", label: "Top Speed km/h" },
            { value: "1.8S", label: "0-100 acceleration" },
            { value: "5.0G", label: "Cornering Force" },
            { value: "1000+", label: "Brake Horsepower" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              animate={{ y: [-60, 60, -60] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
              className="w-[280px] shrink-0 bg-surface-container p-8 border-l-4 border-primary shadow-2xl skew-slant"
            >
              <p className="text-primary font-headline italic font-bold text-4xl mb-2">{stat.value}</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technical Showcase: The Cockpit */}
      <section className="min-h-[1024px] flex items-center bg-background py-32 px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50"></div>
            <img 
              alt="F1 Cockpit Details" 
              className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjrZ69SpKxdZOTspez98ReELp3vDZfxU2eqtAzjNvGOrpFe9UmLk_b1MuB56amzBstXnFQ0381iUGC0MDOfuKwNZcBdXa0r5mYpSElsu8SjlKthBQPLYfv5mKNZsHJCR9U7adxPvkTAHwk5mUv9aVM0VX1DoJ125wOgMbdlcf3Ut1iwv_5EmlqGJhrmqCQfEPysE2TYyBiUKlLIz2yUHid4z-WugCY0IFc2M3YMqsPofixtq0QJAAGORuMmGxufrxbFb3I8DL9o3KQ"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-6xl font-headline font-bold italic uppercase leading-none whitespace-nowrap">
              The Precision<span className="text-primary-container">Monocoque</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Engineered from high-modulus carbon fiber and Kevlar, the chassis is a masterpiece of safety and performance. Every surface is sculpted by the wind, ensuring maximum downforce with minimal drag.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-3">settings_input_component</span>
                <span className="font-headline font-bold uppercase italic tracking-wider group-hover:translate-x-2 transition-transform">Telemetry Integration</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-3">air</span>
                <span className="font-headline font-bold uppercase italic tracking-wider group-hover:translate-x-2 transition-transform">Advanced Aerodynamics</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-3">shield</span>
                <span className="font-headline font-bold uppercase italic tracking-wider group-hover:translate-x-2 transition-transform">Titanium Halo Structure</span>
              </div>
            </div>
            
            <button className="self-start mt-4 bg-transparent border border-outline-variant px-10 py-4 font-headline font-bold italic uppercase tracking-widest hover:bg-on-background hover:text-background transition-all skew-slant">
              Explore Telemetry
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
