// Shared shell utilities. RootLayout owns the maximum width for content and navigation.
export const portfolioViewport = "mx-auto w-full max-w-[var(--page-max-width,1480px)]";
export const portfolioSurface = "[&_button]:cursor-pointer [&_:is(a,button)]:[-webkit-tap-highlight-color:transparent] [&_:is(a,button)]:focus-visible:outline-2 [&_:is(a,button)]:focus-visible:outline-solid [&_:is(a,button)]:focus-visible:outline-current motion-reduce:[&_*]:scroll-auto motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:[transition:none] motion-reduce:[&_*::before]:animate-none motion-reduce:[&_*::after]:animate-none";
export const projectsTypography = "font-portfolio leading-[1.7] tracking-[-.025em] text-ink [overflow-wrap:anywhere] [&_*]:min-w-0 [&_:is(a,button)]:focus-visible:outline-offset-4";
export const profileTypography = "font-profile text-[17px] leading-[1.9] tracking-[-.025em] text-ink [overflow-wrap:anywhere] [&_*]:min-w-0 [&_:is(a,button)]:focus-visible:outline-offset-[5px]";
export const projectsGutter = "px-28 projects-md:px-11 projects-sm:px-6";
export const profileGutter = "px-11 profile-md:px-7 profile-sm:px-5";
