const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-warm" />

      {/* Soft floating blobs */}
      <div
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full opacity-60 blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, hsl(28 60% 85% / 0.7), transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full opacity-50 blur-3xl animate-drift"
        style={{ background: 'radial-gradient(circle, hsl(16 60% 82% / 0.55), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-40 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, hsl(38 65% 84% / 0.55), transparent 70%)' }}
      />

      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.15 0 0 0 0 0.1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
