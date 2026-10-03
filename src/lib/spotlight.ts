import type { PointerEvent } from "react";

/** Updates CSS vars used by the `.spotlight` class for cursor glow + 3D tilt. */
export const spotlightMove = (e: PointerEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
  el.style.setProperty("--rx", `${((y / r.height) - 0.5) * -8}deg`);
  el.style.setProperty("--ry", `${((x / r.width) - 0.5) * 8}deg`);
};

export const spotlightLeave = (e: PointerEvent<HTMLElement>) => {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};
