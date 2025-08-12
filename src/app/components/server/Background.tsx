export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-base-300/40 via-base-200/20 to-base-300/40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 opacity-20 animate-slow-spin" style={{ width: '120vmin', height: '120vmin', transform: 'translate(-50%, -50%)' }}>
        <div className="w-full h-full rounded-full bg-gradient-radial from-orange-500/30 via-transparent to-transparent" />
      </div>
    </>
  );
}
