import { useRef, useState } from "react";
import { XCircle, CheckCircle2, MoveHorizontal } from "lucide-react";

interface Props {
  before: string[];
  after: string[];
}

const BeforeAfterSlider = ({ before, after }: Props) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  const Panel = ({ type, items }: { type: "before" | "after"; items: string[] }) => (
    <div className={`absolute inset-0 flex flex-col gap-2 p-4 ${type === "after" ? "bg-primary/10" : "bg-muted"}`}>
      <span
        className={`self-start rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
          type === "after" ? "bg-primary text-primary-foreground" : "bg-destructive/20 text-destructive"
        } ${type === "after" ? "ml-auto" : ""}`}
      >
        {type === "after" ? "After" : "Before"}
      </span>
      {items.map((t) => (
        <p key={t} className="flex gap-2 text-xs text-foreground">
          {type === "after" ? (
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
          ) : (
            <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
          )}
          {t}
        </p>
      ))}
    </div>
  );

  return (
    <div>
      <div
        ref={ref}
        className="relative h-56 cursor-ew-resize select-none overflow-hidden rounded-xl border border-primary/30 touch-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Panel type="after" items={after} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Panel type="before" items={before} />
        </div>
        <div className="absolute inset-y-0 w-0.5 bg-primary shadow-[0_0_12px_hsl(var(--primary))]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background">
            <MoveHorizontal className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
      <p className="mt-1.5 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Drag to compare
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
