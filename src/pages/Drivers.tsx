export function Drivers() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
      {/* Hero Section Title */}
      <header className="mb-16 md:mb-24 flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 text-primary font-headline italic font-bold tracking-[0.2em] uppercase text-sm">
          <span className="w-12 h-[2px] bg-primary"></span>
          The Grid 2024
        </div>
        <h1 className="text-6xl md:text-8xl font-headline italic font-black uppercase tracking-tighter leading-none">
          ELITE <span className="text-primary-container">PILOTS</span>
        </h1>
      </header>

      {/* Driver Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Driver Card 1: Max Verstappen */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="Max Verstappen" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCvtrOsG4KzsiPL-Hszm68YjStecE2zfavgMf8YNW1tauvKMMNHI2JtnvKRLD20mWZXU1uvx-Ym4TAQhjcng5uTLLHOrhjd6XCiWOPm6V0sQzFQWQLBl2HXlRMZpgNo7HLzEFXT8ED78SG1_nQxu3xZJjOrMTKjUhs-rX9Y0j4jOkybhkw4hFPfKrE0Tt2kPqEhIHG1tf0XyHsAylMGHRRK-BybF9DlrSj-Jk_EsZd5NAKZy9RDFizVN994Tb3ZWVw6HzfCOKe4hSr"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">01</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">Red Bull Racing</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">MAX VERSTAPPEN</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">61</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">03</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">2974.5</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                The youngest driver ever to compete in Formula One, Max Verstappen has rewritten the record books with his uncompromising speed and relentless racing instinct.
              </p>
            </div>
          </div>
        </div>

        {/* Driver Card 2: Lewis Hamilton */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="Lewis Hamilton" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpz1LV0AFdbfovdOBQqIa_0ezetDksRru4yCAwSaRULcgjtOiS9jgnDKmr45o3-msjLjb4WzoIjBr3S6E2wr6M7uGPSeKyULANZmsS_QcsCeBUl8Y079ieyDuIk6V8kIGZFdSVdjpHtVvWLqmkzJP4tO0NzGMwCbWBgJDoe291eBRxsMjVL8GruExaQAHxFNg8e-J2pp2hwhYmUXI5MpJHC39ZgZmTX8Q5l9T026G-n261KaD8xT_onZ5Hh7SaM7OXiOgG3775DIEc"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">44</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">Mercedes-AMG Petronas</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">LEWIS HAMILTON</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">103</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">07</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">4789.5</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                Statistically the greatest driver in F1 history, Lewis Hamilton's legacy extends beyond the track into fashion, activism, and global cultural influence.
              </p>
            </div>
          </div>
        </div>

        {/* Driver Card 3: Charles Leclerc */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="Charles Leclerc" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWQwrF8fj0tE1Ybn0sMXYUWtbp74YkifzoGlM5jDi6wtlbxtrAJ6dAPrNIX6oBdRNFFbZ7r1geld5cSU-80-0SCx0p3Zz2hsnTkRBL9xLqILfHa9h3GoeDWrQJ8TEf4QIC4auIEyJFhJ7lwPZ_o_RQhbPngyD86WFA-JwRJ0whcTzN99siojebw_M6h4V1NKPh9qMjdE8sag2KT2QqptaJFiSoXEuqJATxZJtIGkdclWYhizAKbHIHiaIzHvPxpIE0qTymWcI6amM_"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">16</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">Scuderia Ferrari</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">CHARLES LECLERC</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">06</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">1234</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                The 'Prince of Monaco' and Ferrari's chosen one, Leclerc possesses an ethereal qualifying pace that has earned him the nickname of 'The Master of Saturday'.
              </p>
            </div>
          </div>
        </div>

        {/* Driver Card 4: Fernando Alonso */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="Fernando Alonso" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASyu3Steq8M7_7-v-qS9GGhL6rP0NjJYtY2d9wraKwaEDOhZMiToBJuDwuxnbRQySQvXqpDahnPrkZtXGk4x-8hveROFeVIzf6dNHaI-Lx1lFEaNf1Edji4EcqTAS_0XfOaful0Svfzi1K3GoESUD4WC_boys-E531_yB1BZXD-qotY7frrFbh19CPhWBXbOBoD6tPzbBuYetvoPfcAhzbGfNdopSbkF-9LRLUOD9tRxipywsLtEkD9qNUl1xfeFaFSNbv3AviTzMB"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">14</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">Aston Martin Aramco</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">FERNANDO ALONSO</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">32</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">02</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">2316</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                A legendary figure whose tactical intelligence and sheer adaptability across multiple racing series have made him one of the most respected figures in motorsport history.
              </p>
            </div>
          </div>
        </div>

        {/* Driver Card 5: Lando Norris */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="Lando Norris" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2xZ9Cdk17MPJ1zgsmOTfy-YQvsySLQ7dxqfCS8DQsl9NLUwbp8_oJTpA7IPYr5TKLsHSyyvIlTwoueisNCe-nr0Znx9aURhDpLqjEnUMLBQxn_2HK33wgQChap45kUcy0AINEq3IeY82MmJea4XE7FtX4bywZeC8xKBU8qHFZtfjW5UoZeYs0s2K7QeDbHLhYwKe8hNcFgLgLF_0ubxmKnTmx7qYLfSOhuglrhX4lmo_T7E9O7EUO9K7MDc-sCXvNm4T1heDJqd0-"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">04</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">McLaren Racing</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">LANDO NORRIS</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">01</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">812</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                Blending massive online popularity with serious racing pedigree, Norris has evolved into the definitive leader of a resurgent McLaren outfit.
              </p>
            </div>
          </div>
        </div>

        {/* Driver Card 6: George Russell */}
        <div className="driver-card-perspective group cursor-pointer">
          <div className="driver-card-inner bg-surface-container-low border-b-4 border-primary-container h-full flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img 
                alt="George Russell" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7RDJz9OpOjIIQoKu1Mc4_9iOiyvp7ROGDbhdIc2V6UsQsjodzjwh7w7C_qEb8X1goC0Fa9zyVyUxMw-M0TQhvF-8UU_o-eQLXIgP56m4KvGo-71Avb0MC7Ch4L-rJ_evFdA65N3QW40RGj2O0jVthXbCZE1qwBagmkFbw3TrcBJ8xKxYgMgZbvN-G9PVvzfGPX_mgJRt2ddo4u91THWhgus2m5k3RnUsrc03gHACC7M8xgb_d-jPWSn-j5eqEpATaywuGJyNIQA6I"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 skew-element bg-primary-container px-4 py-2">
                <span className="unskew-content block font-headline italic font-black text-on-primary-container text-2xl">63</span>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <p className="text-primary font-headline italic font-bold uppercase tracking-widest text-xs mb-2">Mercedes-AMG Petronas</p>
                <h2 className="text-4xl font-headline italic font-black uppercase tracking-tighter leading-tight">GEORGE RUSSELL</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Wins</span>
                  <span className="text-2xl font-headline italic font-bold">02</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Champs</span>
                  <span className="text-2xl font-headline italic font-bold text-primary">00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 mb-1">Points</span>
                  <span className="text-2xl font-headline italic font-bold">598</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-body leading-relaxed line-clamp-3">
                A product of the Mercedes junior academy, Russell's path to the top seat has been marked by patience, technical precision, and a relentless work ethic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
