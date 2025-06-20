type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div>
      {' '}
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">{children}</h2>
    </div>
  );
}
