"use client";

import { useRef } from "react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      className="hero wrap"
      onPointerMove={(event) => {
        if (document.documentElement.dataset.motion === "off" || event.pointerType === "touch") return;
        const box = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width - 0.5) * 9;
        const y = ((event.clientY - box.top) / box.height - 0.5) * 6;
        titleRef.current?.style.setProperty("--hero-shift-x", `${x.toFixed(2)}px`);
        titleRef.current?.style.setProperty("--hero-shift-y", `${y.toFixed(2)}px`);
      }}
      onPointerLeave={() => {
        titleRef.current?.style.setProperty("--hero-shift-x", "0px");
        titleRef.current?.style.setProperty("--hero-shift-y", "0px");
      }}
    >
      <h1 ref={titleRef} data-reveal>SLP</h1>
      <p className="sub" data-reveal>
        record label — signal from fukuoka. techno, ambient, post rock, minimal, pop, electro, electronica, dance, world.
      </p>
    </section>
  );
}
