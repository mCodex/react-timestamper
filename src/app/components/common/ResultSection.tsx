type ResultSectionProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ResultSection({ title = 'Result', children }: ResultSectionProps) {
  return (
    <section className="mt-8 space-y-4">
      <div className="divider text-orange-400">{title}</div>
      {children}
    </section>
  );
}
