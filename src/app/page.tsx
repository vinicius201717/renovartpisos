import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Check,
  ClipboardCheck,
  Gem,
  Hammer,
  Home,
  KeyRound,
  Landmark,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FadeIn } from "@/components/FadeIn";
import { Header } from "@/components/Header";
import {
  EnvironmentsCarousel,
  TransformationsCarousel,
} from "@/components/PremiumCarousel";
import {
  architectCards,
  authorityPoints,
  cases,
  company,
  faqs,
  materials,
  problems,
  processSteps,
  qualityCards,
  services,
  testimonials,
  whatsappHref,
} from "@/lib/content";

const heroChips = [
  "Pós-obra",
  "Mármore",
  "Granito",
  "Polimento",
  "Impermeabilização",
];

const serviceIcons = [
  Sparkles,
  Gem,
  ShieldCheck,
  Hammer,
  BadgeCheck,
  Home,
  ClipboardCheck,
  Building2,
];

const architectIcons = [
  KeyRound,
  Camera,
  ClipboardCheck,
  Home,
  Landmark,
  BadgeCheck,
];

function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Empresa especializada em limpeza pós-obra premium, polimento, restauração e impermeabilização de pisos e pedras nobres.",
    image: "/images/stone/transition-after.jpeg",
    logo: company.logo,
    telephone: company.phoneDisplay,
    priceRange: "Sob consulta",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "BR",
    },
    areaServed: ["Residências de alto padrão", "Condomínios", "Arquitetos", "Construtoras"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpeza pós-obra e restauração de pisos nobres",
    serviceType: "Limpeza técnica, polimento e restauração de pedras",
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusiness, service, faqPage]),
      }}
    />
  );
}

function SectionIntro({
  kicker,
  title,
  copy,
  light = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className={light ? "section-title-light" : "section-title"}>{title}</h2>
      {copy ? (
        <p className={light ? "section-copy-light" : "section-copy"}>{copy}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />

      <main>
        <section
          id="inicio"
          className="relative isolate min-h-[82svh] overflow-hidden bg-[#171715] pt-28 text-white sm:pt-32"
        >
          <Image
            src="/images/stone/transition-after.jpeg"
            alt="Sala mobiliada com piso claro limpo após limpeza pós-obra"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.82]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,21,0.92)_0%,rgba(23,23,21,0.76)_42%,rgba(23,23,21,0.18)_100%)]" />
          <div className="noise-layer absolute inset-0 opacity-45" />

          <div className="relative mx-auto flex min-h-[calc(82svh-7rem)] max-w-7xl flex-col justify-end px-5 pb-10 sm:px-6 lg:px-8">
            <FadeIn className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-[8px] border border-[#e8d49b]/35 bg-white/[0.10] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d49b] backdrop-blur">
                Atendimento técnico para imóveis de alto padrão
              </p>
              <h1 className="text-5xl font-semibold leading-[0.94] text-white sm:text-7xl lg:text-8xl">
                Renovarte Pisos
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
                O último detalhe da obra é o que define o luxo do imóvel.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/[0.78] sm:text-lg">
                Limpeza pós-obra, polimento e restauração de mármores,
                granitos e pedras nobres para casas, apartamentos, áreas
                gourmet, banheiros, escadas, halls e projetos assinados por
                arquitetos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#d9be7b] px-6 text-sm font-semibold text-[#171715] transition hover:bg-[#efd590]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar diagnóstico pelo WhatsApp
                </a>
                <a
                  href="#antes-depois"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[8px] border border-white/25 bg-white/[0.10] px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.16]"
                >
                  Ver antes e depois
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="flex flex-wrap gap-2">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-[8px] border border-white/[0.18] bg-white/[0.12] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/[0.86] backdrop-blur"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="rounded-[8px] border border-[#d9be7b]/35 bg-[#171715]/60 p-4 text-sm text-white/[0.76] backdrop-blur sm:max-w-xs">
                <strong className="block text-white">Metodo antes de produto.</strong>
                Análise da pedra, do dano e do acabamento antes de qualquer
                intervenção.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#faf7ef] pb-20 pt-10 sm:pb-24 sm:pt-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Não é limpeza comum"
                title="Limpeza comum remove sujeira. Limpeza técnica preserva acabamento."
                copy="Pisos e pedras nobres reagem de formas diferentes a cimento, tinta, rejunte, óleo, ácidos e abrasivos. A Renovarte Pisos trabalha com leitura técnica antes da execução."
              />
            </FadeIn>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {qualityCards.map((card, index) => (
                <FadeIn key={card.title} delay={index * 0.05}>
                  <article className="h-full rounded-[8px] border border-[#ded2bd] bg-white p-6 shadow-[0_18px_60px_rgba(64,53,38,0.07)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#48665a] text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <h3 className="mt-8 text-xl font-semibold text-[#201d18]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f594f]">
                      {card.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="antes-depois" className="bg-[#f6f1e8] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Antes e depois"
                title="Transformacoes que respeitam o material original."
                copy="Compare limpeza técnica, polimento e restauração em diferentes ambientes, com foco em problema, solução, resultado, tipo de pedra e contexto de uso."
              />
            </FadeIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {cases.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.04}>
                  <BeforeAfterSlider item={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <TransformationsCarousel />

        <section id="servicos" className="bg-[#fbf8f1] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Serviços principais"
                title="Uma etapa final para elevar a percepção de valor do imóvel."
                copy="Da limpeza fina ao polimento, cada serviço é definido pelo estado da superfície, pelo tipo de pedra e pelo resultado esperado."
              />
            </FadeIn>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const ServiceIcon = serviceIcons[index % serviceIcons.length];
                return (
                  <FadeIn key={service.title} delay={index * 0.04}>
                    <article className="flex h-full flex-col rounded-[8px] border border-[#ded2bd] bg-white p-6 shadow-[0_18px_60px_rgba(64,53,38,0.07)]">
                      <ServiceIcon className="h-7 w-7 text-[#48665a]" aria-hidden="true" />
                      <h3 className="mt-6 text-xl font-semibold text-[#201d18]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5f594f]">
                        {service.description}
                      </p>
                      <ul className="mt-5 grid gap-2 text-sm text-[#39342d]">
                        {service.deliveries.map((delivery) => (
                          <li key={delivery} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9b7c37]" aria-hidden="true" />
                            <span>{delivery}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6b2e]">
                        {service.use}
                      </p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex pt-6 text-sm font-semibold text-[#48665a] transition hover:text-[#201d18]"
                      >
                        Solicitar avaliação
                      </a>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pedras" className="bg-[#201d18] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Materiais atendidos"
                title="Pedras nobres pedem critério, não improviso."
                copy="A técnica muda conforme porosidade, composição, acabamento e exposição do material. Por isso, cada superfície passa por leitura própria."
                light
              />
            </FadeIn>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {materials.map((material) => (
                <div
                  key={material}
                  className="rounded-[8px] border border-white/[0.12] bg-white/[0.08] p-5 backdrop-blur"
                >
                  <Gem className="h-5 w-5 text-[#d9be7b]" aria-hidden="true" />
                  <p className="mt-5 text-lg font-semibold text-white">{material}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-[#f6f1e8] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Processo de atendimento"
                title="Do diagnóstico por foto à revisão final do acabamento."
                copy="Um fluxo claro evita retrabalho, protege o entorno e ajuda proprietários, arquitetos e obras a saber exatamente o que esperar."
              />
            </FadeIn>

            <div className="mt-14 grid gap-4 lg:grid-cols-6">
              {processSteps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.05}>
                  <article className="relative h-full rounded-[8px] border border-[#ded2bd] bg-white p-5 shadow-[0_18px_60px_rgba(64,53,38,0.06)]">
                    <span className="text-sm font-semibold text-[#9b7c37]">
                      Etapa {index + 1}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-[#201d18]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f594f]">
                      {step.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="arquitetos" className="relative overflow-hidden bg-[#171715] py-20 text-white sm:py-24">
          <div className="noise-layer absolute inset-0 opacity-45" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <FadeIn>
                <SectionIntro
                  kicker="Arquitetos, engenheiros e construtoras"
                  title="Seu projeto merece ser entregue com a mesma precisão com que foi desenhado."
                  copy="A Renovarte Pisos atua como etapa final de valorização do projeto: remove marcas de obra, recupera o acabamento e prepara o imóvel para vistoria, fotografia e entrega."
                  light
                />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#d9be7b] px-5 text-sm font-semibold text-[#171715] transition hover:bg-[#efd590]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Enviar briefing da obra
                </a>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-2">
                {architectCards.map((card, index) => {
                  const ArchitectIcon = architectIcons[index % architectIcons.length];
                  return (
                    <FadeIn key={card} delay={index * 0.05}>
                      <article className="rounded-[8px] border border-white/[0.12] bg-white/[0.08] p-5 backdrop-blur">
                        <ArchitectIcon className="h-6 w-6 text-[#d9be7b]" aria-hidden="true" />
                        <p className="mt-5 text-lg font-semibold text-white">{card}</p>
                      </article>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f1] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Problemas que resolvemos"
                title="Quando a pedra ainda tem valor, o primeiro passo é diagnosticar."
                copy="Antes de trocar uma superfície nobre, vale entender o tipo de dano, a profundidade da mancha e o acabamento desejado."
              />
            </FadeIn>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 rounded-[8px] border border-[#ded2bd] bg-white px-4 py-4 text-sm font-semibold text-[#39342d]"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#48665a]" aria-hidden="true" />
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        <EnvironmentsCarousel />

        <section className="bg-[#faf7ef] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
              <FadeIn>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#201d18]">
                  <Image
                    src="/images/stone/escada-restaurada.png"
                    alt="Escada de mármore com acabamento restaurado"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <SectionIntro
                  kicker="Autoridade técnica"
                  title="Acabamento de alto padrão exige método, não improviso."
                  copy="A entrega premium nasce de escolhas pequenas: produto certo, disco certo, proteção certa e revisão visual no fim."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {authorityPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-[8px] border border-[#ded2bd] bg-white px-4 py-4 text-sm font-semibold text-[#39342d]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-[#201d18] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="Depoimentos"
                title="Formatos de prova social para substituir por relatos reais."
                copy="Exemplos de formato — substitua por depoimentos reais."
                light
              />
            </FadeIn>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.role}
                  className="rounded-[8px] border border-white/[0.12] bg-white/[0.08] p-6 backdrop-blur"
                >
                  <p className="text-lg leading-8 text-white/[0.86]">“{item.text}”</p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#d9be7b]">
                    {item.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f6f1e8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionIntro
                kicker="FAQ"
                title="Perguntas frequentes antes do diagnóstico."
                copy="As respostas abaixo ajudam a separar limpeza comum, tratamento técnico, restauração, polimento e proteção."
              />
            </FadeIn>

            <div className="mt-10 grid gap-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[8px] border border-[#ded2bd] bg-white p-5 shadow-[0_18px_60px_rgba(64,53,38,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#201d18]">
                    {item.question}
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#9b7c37] transition group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#5f594f]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#171715] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <p className="section-kicker">Diagnostico final</p>
              <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Antes de trocar a pedra, descubra se ela pode ser restaurada.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
                Envie fotos, vídeos, metragem aproximada e localização.
                Retornamos com uma primeira análise técnica.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#d9be7b] px-7 text-sm font-semibold text-[#171715] transition hover:bg-[#efd590]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Enviar fotos pelo WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
