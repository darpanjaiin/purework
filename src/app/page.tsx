export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black font-sans">
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Get website <span className="relative inline-block">
            within 10 minutes
            <span className="absolute left-0 bottom-1 w-full h-2 bg-black/10 rounded-full -z-10" style={{height:'0.5em'}}></span>
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-500 mb-10 max-w-md">
          Launch your professional portfolio or business site in minutes. No code, no hassle—just beautiful, minimal design and instant results.
        </p>
        <a
          href="/auth"
          className="inline-block bg-black text-white rounded-full px-8 py-4 text-lg font-semibold shadow hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 mb-8"
        >
          Create Website
        </a>
        <div className="w-[320px] h-[220px] border-2 border-dashed border-neutral-200 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-neutral-300">[ Illustration ]</span>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-8 text-center mt-2">
          <div>
            <div className="text-2xl font-bold mb-1">1000+</div>
            <div className="text-neutral-400 text-sm">Websites created</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">4.9/5</div>
            <div className="text-neutral-400 text-sm">Average user rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">10 min</div>
            <div className="text-neutral-400 text-sm">Avg. setup time</div>
          </div>
        </div>
      </main>
    </div>
  );
}
