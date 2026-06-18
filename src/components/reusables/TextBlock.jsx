import Badge from "./Badge";

export default function TextBlock({ badgeText, header, body }) {
  return (
    <div className="w-1/2">
      <div className="mb-10">
        <Badge text={badgeText} />
      </div>
      <h2 className="text-[40px]">{header}</h2>
      <p className="text-[#11142DA4] mt-8">{body}</p>
    </div>
  );
}
