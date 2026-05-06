import { motion, useScroll, useTransform } from "motion/react";

export function Future() {
  const { scrollY } = useScroll();
  
  // Fade out heading on scroll (0 to 600px)
  const headingOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const headingY = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-body overflow-x-hidden">
      {/* 1. Spline Background */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <iframe 
          src='https://my.spline.design/untitled-Oij5GLVZSg9Lbrgdn1GBYHmD/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        ></iframe>
      </div>

      {/* THE CINEMATIC HEADING */}
      <motion.div 
        style={{ opacity: headingOpacity, y: headingY }}
        className="fixed top-[25vh] md:top-[40%] left-[5%] md:-translate-y-1/2 z-10 w-[90%] md:w-[50%] pointer-events-none"
      >
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-[clamp(3rem,6vw,7rem)] uppercase font-black m-0 leading-[1.05] drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] font-headline"
        >
          The Future<br/>of F1 &<br/><span className="text-[#e10600]">Automation</span>
        </motion.h1>
      </motion.div>

      {/* 2. Scrolling Content Layout */}
      <div className="relative z-20 mt-[70vh] md:mt-[90vh] pb-[10vh] pointer-events-none">
        <div className="grid grid-cols-1 gap-10 p-10 w-[90%] md:w-[45%] ml-[5%] md:ml-[50%] pointer-events-auto">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#141414]/40 backdrop-blur-md border border-white/15 border-t-white/30 p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.02)]"
          >
            <h2 className="text-[#e10600] text-2xl mt-0 uppercase font-headline font-bold mb-4">Increased AI Usage</h2>
            <p className="text-[#ccc] leading-relaxed text-lg font-body">Artificial Intelligence is increasingly used to aid in strategy, such as analyzing tire degradation and recommending the precise millisecond for pit stop times to outsmart the competition.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#141414]/40 backdrop-blur-md border border-white/15 border-t-white/30 p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.02)]"
          >
            <h2 className="text-[#e10600] text-2xl mt-0 uppercase font-headline font-bold mb-4">Autonomous Advancements</h2>
            <p className="text-[#ccc] leading-relaxed text-lg font-body">While currently slower than humans, AI drivers are catching up to professional racers, with some autonomous systems testing at limits remarkably similar to human drivers in simulated environments.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#141414]/40 backdrop-blur-md border border-white/15 border-t-white/30 p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.02)]"
          >
            <h2 className="text-[#e10600] text-2xl mt-0 uppercase font-headline font-bold mb-4">Regulation Changes</h2>
            <p className="text-[#ccc] leading-relaxed text-lg font-body">The FIA continues to actively update regulations to strike the perfect balance between showcasing raw human driving skill and integrating cutting-edge technological innovations.</p>
          </motion.div>

        </div>

        {/* Conclusion Banner */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-[10vh] mb-[5vh] mx-[5%] md:ml-[50%] md:w-[45%] text-center py-12 px-5 border-y border-[#e10600]/30 bg-gradient-to-r from-transparent via-[#e10600]/5 to-transparent pointer-events-auto"
        >
          <p className="text-xl italic text-[#ddd] leading-relaxed font-body">"Formula 1 cars are highly advanced vehicles heavily designed, simulated, and manufactured using sophisticated robotics and AI. They represent the ultimate 'human-in-the-loop' system."</p>
        </motion.div>
      </div>
    </main>
  );
}
