import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function CarTelemetry() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-body overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-5 md:px-[5%] flex justify-between items-center z-[100] pointer-events-none">
        <div className="text-2xl font-black tracking-[2px] font-headline italic">Velocity<span className="text-[#b03935]">F1</span></div>
        <Link to="/cars" className="text-white no-underline text-sm uppercase border border-white/30 py-2.5 px-5 rounded-[5px] transition-all duration-300 pointer-events-auto hover:border-[#b03935] hover:bg-[#e10600]/10 hover:text-[#b03935] font-headline font-bold tracking-widest">
          ← Back
        </Link>
      </nav>

      {/* 3D Canvas fixed to the background */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10">
        <div className="sketchfab-embed-wrapper w-full h-full">
          <iframe 
            title="Formula 1 2021 Concept Car" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/f568e4f921e3447ba8744451e1141704/embed?autostart=1&transparent=1&ui_theme=dark&dnt=1" 
            className="w-full h-full"
          > 
          </iframe> 
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A', position: 'absolute', bottom: '10px', right: '10px', zIndex: 100 }}> 
            <a href="https://sketchfab.com/3d-models/formula-1-2021-concept-car-f568e4f921e3447ba8744451e1141704?utm_medium=embed&utm_campaign=share-popup&utm_content=f568e4f921e3447ba8744451e1141704" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> Formula 1 2021 Concept Car </a> by <a href="https://sketchfab.com/GuillaumeDGNS?utm_medium=embed&utm_campaign=share-popup&utm_content=f568e4f921e3447ba8744451e1141704" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}> GuillaumeDGNS </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f568e4f921e3447ba8744451e1141704" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a>
          </p>
        </div>
      </div>
      
      {/* Scroll Interaction Hint */}
      <div className="fixed bottom-10 left-[5%] z-20 text-[#888] text-xs tracking-[2px] uppercase pointer-events-none flex items-center gap-2.5 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-[#b03935] md:bottom-10 max-md:top-[100px] max-md:bottom-auto font-headline font-bold">
        Click & Drag to Inspect
      </div>

      {/* Right Sidebar for Scrolling Specs */}
      <div className="relative z-20 w-[90%] md:w-[40%] ml-[5%] md:ml-[55%] pt-[60vh] md:pt-[120px] pb-[100px] pointer-events-none">
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0a0a0a]/30 backdrop-blur-[20px] border border-white/10 border-l-[3px] border-l-[#b03935] p-10 rounded-[10px] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto"
        >
          <h1 className="text-[3.5rem] uppercase font-black m-0 mb-2.5 leading-none font-headline italic">VF-24 Chassis</h1>
          <div className="text-[#b03935] text-[1.2rem] uppercase tracking-[2px] mb-10 font-headline font-bold">Velocity Scuderia</div>
          <p className="text-[#aaa] leading-[1.8] text-[1rem]">The VF-24 represents a radical departure in aerodynamic philosophy, featuring heavily undercut sidepods and a reprofiled floor edge to maximize ground-effect downforce.</p>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0a0a0a]/30 backdrop-blur-[20px] border border-white/10 border-l-[3px] border-l-[#b03935] p-10 rounded-[10px] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto"
        >
          <h3 className="text-white text-[1.5rem] mt-0 uppercase tracking-[1px] font-headline italic font-bold">Power Unit</h3>
          <p className="text-[#aaa] leading-[1.8] text-[1rem]">A highly efficient 1.6-liter V6 turbocharged hybrid engine. Integrated with an advanced Energy Recovery System (MGU-K and MGU-H) to eliminate turbo lag and provide instantaneous electrical deployment.</p>
          <div className="grid grid-cols-2 gap-5 mt-5 pt-5 border-t border-white/10">
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Horsepower</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">1,050+ HP</strong></div>
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Max RPM</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">15,000</strong></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0a0a0a]/30 backdrop-blur-[20px] border border-white/10 border-l-[3px] border-l-[#b03935] p-10 rounded-[10px] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto"
        >
          <h3 className="text-white text-[1.5rem] mt-0 uppercase tracking-[1px] font-headline italic font-bold">Aerodynamics & DRS</h3>
          <p className="text-[#aaa] leading-[1.8] text-[1rem]">Active Drag Reduction System (DRS) implemented on the rear wing assembly. When deployed within 1 second of a leading car, the flap opens to shed drag, increasing top speed by roughly 15-20 km/h.</p>
          <div className="grid grid-cols-2 gap-5 mt-5 pt-5 border-t border-white/10">
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Downforce</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">2.5 Tons</strong></div>
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Top Speed</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">355 km/h</strong></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#0a0a0a]/30 backdrop-blur-[20px] border border-white/10 border-l-[3px] border-l-[#b03935] p-10 rounded-[10px] mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto"
        >
          <h3 className="text-white text-[1.5rem] mt-0 uppercase tracking-[1px] font-headline italic font-bold">Transmission & Brakes</h3>
          <p className="text-[#aaa] leading-[1.8] text-[1rem]">An 8-speed seamless shift sequential gearbox constructed from carbon fiber. Paired with carbon-ceramic disc brakes capable of decelerating the vehicle from 300 km/h to 0 in under 4 seconds while generating temperatures exceeding 1000°C.</p>
          <div className="grid grid-cols-2 gap-5 mt-5 pt-5 border-t border-white/10">
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Shift Time</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">0.005s</strong></div>
            <div><span className="block text-[#666] text-[0.8rem] uppercase font-headline font-bold tracking-widest">Max G-Force</span><strong className="block text-[#b03935] text-[1.5rem] font-black font-headline italic">5.5 G</strong></div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
