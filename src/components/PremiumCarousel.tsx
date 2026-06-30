"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cases, environments } from "@/lib/content";

type CarouselControlsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

function CarouselControls({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollPrev}
        className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#d8c8aa] bg-white text-[#201d18] transition hover:bg-[#f5efe4] disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Slide anterior"
        title="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollNext}
        className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#d8c8aa] bg-[#201d18] text-white transition hover:bg-[#3a342b] disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Próximo slide"
        title="Próximo slide"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export function TransformationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);
    queueMicrotask(updateState);

    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  return (
    <section className="bg-[#f6f1e8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Transformações</p>
            <h2 className="section-title">Cases com leitura de arquitetura.</h2>
            <p className="section-copy">
              Cada transformação combina diagnóstico, técnica e acabamento para que
              o material volte a conversar com o projeto.
            </p>
          </div>
          <CarouselControls
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
          />
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex">
            {cases.map((item) => (
              <article
                key={item.title}
                className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_62%] lg:flex-[0_0_38%]"
              >
                <div className="h-full overflow-hidden rounded-[8px] border border-[#ded2bd] bg-white shadow-[0_18px_60px_rgba(64,53,38,0.08)]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={item.after}
                      alt={`Resultado final em ${item.title}`}
                      fill
                      sizes="(min-width: 1024px) 38vw, 88vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-5 p-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[8px] border border-[#e2d3b7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#765d27]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#9b7c37]">
                        {item.environment}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#201d18]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5f594f]">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnvironmentsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);
    queueMicrotask(updateState);

    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  return (
    <section className="bg-[#f1e8da] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Ambientes</p>
            <h2 className="section-title">Da área íntima ao hall social.</h2>
            <p className="section-copy">
              O atendimento considera uso, circulação, exposição à umidade e
              expectativa visual de cada ambiente.
            </p>
          </div>
          <CarouselControls
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
          />
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex">
            {environments.map((item) => (
              <article
                key={item.name}
                className="min-w-0 flex-[0_0_84%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#201d18]">
                  <Image
                    src={item.image}
                    alt={`Atendimento Renovarte Pisos em ${item.name}`}
                    fill
                    sizes="(min-width: 1024px) 32vw, 84vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d49b]">
                      Ambiente
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
