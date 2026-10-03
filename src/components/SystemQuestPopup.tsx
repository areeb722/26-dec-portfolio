import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageSquare } from "lucide-react";

const CHAT_URL = `https://wa.me/918210967985?text=${encodeURIComponent("Hi! There")}`;
const KEY = "quest-popup-dismissed";

const SystemQuestPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-label="System notification"
            onClick={(e) => e.stopPropagation()}
            initial={{ scaleY: 0.02, scaleX: 0.4, opacity: 0 }}
            animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
            exit={{ scaleY: 0.02, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-md border border-primary/60 bg-card/80 backdrop-blur-xl p-6 shadow-[0_0_40px_hsl(var(--primary)/0.45),inset_0_0_30px_hsl(var(--primary)/0.15)]"
          >
            {/* corner brackets */}
            {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
              <span key={c} className={`absolute w-5 h-5 border-primary ${c}`} />
            ))}
            {/* scan line */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/15 to-transparent"
              animate={{ top: ["-20%", "110%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            <button
              onClick={close}
              aria-label="Close notification"
              className="absolute top-3 right-3 p-1.5 rounded border border-primary/40 text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="font-mono text-xs sm:text-sm tracking-[0.3em] text-primary uppercase">
                System Notification
              </h3>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-5" />

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-foreground text-base sm:text-lg font-semibold mb-2"
            >
              [ New Quest Unlocked ]
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-muted-foreground text-sm mb-6"
            >
              Have a project or opportunity in mind? Let's talk — I reply fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-3"
            >
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded border border-primary bg-primary/20 px-4 py-2.5 font-mono text-sm uppercase tracking-wider text-foreground hover:bg-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Talk With Me
              </a>
              <button
                onClick={close}
                className="rounded border border-border px-4 py-2.5 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                Later
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SystemQuestPopup;
