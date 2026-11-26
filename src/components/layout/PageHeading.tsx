export default function PageHeading({ title, period }: { title: string; period?: string }) {
  return (
    <div className="mb-[37px] pt-[66px] [@media(max-width:760px)]:pt-10">
      <div className="flex items-end gap-5">
        <h1
          className="m-0 font-['Chakra_Petch',sans-serif] text-[64px] leading-[1.05] font-medium tracking-[-.065em] [@media(max-width:760px)]:text-[46px]"
          lang="en">
          {title}
        </h1>
        {period && (
          <span className="pb-1.5 font-['Chakra_Petch',sans-serif] text-base leading-[1.3] font-normal tracking-[.02em] whitespace-nowrap text-muted [@media(max-width:760px)]:text-xs">
            [{period}]
          </span>
        )}
      </div>
    </div>
  );
}
