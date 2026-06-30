"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import type { CaseStudy } from "@/lib/content";

type BeforeAfterSliderProps = {
  item: CaseStudy;
};

export function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageClassName =
    item.imageFit === "contain" ? "object-contain" : "object-cover";

  function updatePosition(clientX: number) {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }

  function startDrag(clientX: number) {
    updatePosition(clientX);

    const handleMove = (event: PointerEvent) => {
      updatePosition(event.clientX);
    };

    const stopDrag = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", stopDrag, { once: true });
    window.addEventListener("pointercancel", stopDrag, { once: true });
  }

  return (
    <article
      className="overflow-hidden rounded-[8px] border border-[#ded2bd] bg-white shadow-[0_18px_60px_rgba(64,53,38,0.08)]"
      data-before-after-card
    >
      <div
        ref={frameRef}
        className="relative aspect-[4/3] touch-none overflow-hidden bg-[#d8d0c5] cursor-ew-resize"
        data-before-after-frame
        data-image-fit={item.imageFit ?? "cover"}
        onPointerDown={(event) => {
          event.preventDefault();
          startDrag(event.clientX);
        }}
      >
        <Image
          src={item.after}
          alt={`Depois da limpeza e restauração: ${item.title}`}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className={imageClassName}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          data-before-after-overlay
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`Antes da limpeza e restauração: ${item.title}`}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={imageClassName}
          />
        </div>

        <div className="absolute left-4 top-4 flex gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
          <span className="rounded-[8px] bg-[#201d18]/80 px-3 py-2 text-white backdrop-blur">
            Antes
          </span>
          <span className="rounded-[8px] bg-[#f6f1e8]/90 px-3 py-2 text-[#201d18] backdrop-blur">
            Depois
          </span>
        </div>

        <div
          className="absolute bottom-0 top-0 w-px bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[#201d18]/80 text-white shadow-xl backdrop-blur">
            <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <input
          aria-label={`Comparar antes e depois de ${item.title}`}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="sr-only"
        />
      </div>

      <div className="grid gap-5 p-5 sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7c37]">
            {item.stone} / {item.environment}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#201d18]">{item.title}</h3>
        </div>
        <dl className="grid gap-3 text-sm text-[#5f594f]">
          <div>
            <dt className="font-semibold text-[#201d18]">Problema</dt>
            <dd>{item.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#201d18]">Solução</dt>
            <dd>{item.solution}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#201d18]">Resultado</dt>
            <dd>{item.result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
