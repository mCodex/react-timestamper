export default function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-base-300/40 via-base-200/20 to-base-300/40" />
      <div className="pointer-events-none absolute -inset-[25vmax] -z-10 opacity-20 animate-slow-spin">
        <div className="w-full h-full rounded-full bg-gradient-radial from-orange-500/30 via-transparent to-transparent" />
      </div>
    </>
  );
}
