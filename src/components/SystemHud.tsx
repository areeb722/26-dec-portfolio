import { useEffect, useState } from "react";
import { Activity, Cpu, Clock, Zap } from "lucide-react";

const SystemHud = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-40 border-b border-primary/20 bg-background/70 backdrop-blur-md md:pl-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]">
        <span className="flex items-center gap-1.5 text-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="hidden sm:inline">Status:</span> Open to roles
        </span>
        <span className="hidden items-center gap-1.5 md:flex">
          <Cpu className="h-3 w-3 text-primary" /> Stack: React · TS · Python · SEO
        </span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <Zap className="h-3 w-3 text-primary" /> Perf 99/100
        </span>
        <span className="hidden items-center gap-1.5 lg:flex">
          <Activity className="h-3 w-3 text-primary" /> Uptime 100%
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-primary" /> IST {time}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
};

export default SystemHud;
