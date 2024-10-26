
export default function Home() {
  return (
    <div className=" min-h-screen overflow-hidden font-[Cinzel]">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/caeser_hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-center tracking-widest">
          Welcome to Caeser Nigeria
        </h1>
        <p className="text-lg md:text-xl text-center mt-4">
          Experience the best nightlife in Awka
        </p>
      </main>

      {/* Optional overlay for a darker or tinted video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
}
