"use client";

import { ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { company, navItems, phoneHref, whatsappHref } from "@/lib/content";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [open, setOpen] = useState(false);

  function handleNav(id: string) {
    scrollToSection(id);
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#171715]/80 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("inicio")}
          className="group flex items-center gap-3 text-left"
          aria-label="Voltar para o início"
        >
          <span className="relative h-[52px] w-[52px] overflow-hidden rounded-full border border-[#d9be7b]/65 bg-[#0e0c09] shadow-[0_0_28px_rgba(217,190,123,0.24)]">
            <Image
              src={company.logo}
              alt="Logo Renovarte Piso"
              fill
              sizes="52px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-[#e8d49b]">
              Renovarte
            </span>
            <span className="block text-lg font-semibold text-white">
              Pisos
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-white/[0.78] transition hover:bg-white/[0.10] hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref}
            className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-white/[0.72] transition hover:text-[#e8d49b]"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#d9be7b] px-4 text-sm font-semibold text-[#171715] transition hover:bg-[#efd590]"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/15 bg-white/[0.10] text-white lg:hidden"
          aria-label="Abrir menu"
          title="Abrir menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[#171715]/45 backdrop-blur-sm transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <aside
          className={`ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-[#f8f3ea] p-5 text-[#201d18] shadow-2xl transition duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#d7c7a6] pb-4">
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-[#b8954d]/60 bg-[#0e0c09] shadow-[0_0_26px_rgba(184,149,77,0.22)]">
                <Image
                  src={company.logo}
                  alt="Logo Renovarte Piso"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7c37]">
                  Renovarte
                </p>
                <p className="text-xl font-semibold">Pisos</p>
                <a
                  href={phoneHref}
                  className="mt-1 block text-xs font-medium text-[#6d6253]"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#d7c7a6]"
              aria-label="Fechar menu"
              title="Fechar menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 grid gap-2" aria-label="Menu mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className="flex items-center justify-between rounded-[8px] border border-[#dfd2b9] bg-white px-4 py-4 text-left text-base font-semibold text-[#201d18] shadow-sm"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-[#9b7c37]" aria-hidden="true" />
              </button>
            ))}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#201d18] px-4 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Solicitar orçamento
          </a>
        </aside>
      </div>
    </header>
  );
}
