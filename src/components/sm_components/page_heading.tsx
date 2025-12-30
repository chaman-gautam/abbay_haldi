export default function sectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="text-3xl break-keep leading-relaxed font-medium text-center text-black pt-5">
      {children}
    </h1>
  );
}
