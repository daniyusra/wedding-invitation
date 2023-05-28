import Title from "../title";

export default function YourBlessing({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={className}>
      {children || (
        <Title>
          WE APPRECIATE
          <br />
          YOUR BLESSING
        </Title>
      )}
      <div className="text-sm font-bold text-center">
        Your kind blessing can be sent to this information below.
        <br />
        Also please fill your address information so that we can
        <br />
        send you a gratitude gift.
      </div>
      <button
        className="flex justify-center text-sm text-white mt-12 px-6 py-2 rounded-full cursor-pointer"
        style={{ background: "#50657F" }}
      >
        Bank Transfer
      </button>
    </article>
  );
}
