import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import brandLogo from "@/assets/solu-therm-logo.webp";
import heroDesk from "@/assets/solu-therm-hero-desktop.webp";
import heroMob from "@/assets/solu-therm-hero-mobile.webp";
import splitPhoto from "@/assets/solu-therm-split.webp";
import ceilingPhoto from "@/assets/solu-therm-piso-teto.webp";
import repairPhoto from "@/assets/solu-therm-reparo.webp";
import maintenancePhoto from "@/assets/solu-therm-manutencao.webp";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOLU THERM | Refrigeração e climatização em Joinville – SC" },
      {
        name: "description",
        content:
          "Instalação, manutenção e reparo em climatização e refrigeração comercial e industrial em Joinville. Orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "SOLU THERM | Refrigeração e climatização em Joinville" },
      {
        property: "og:description",
        content:
          "Climatização, refrigeração e manutenção industrial em Joinville. Solicite seu orçamento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroDesk },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    name: "Instalação de ar-condicionado",
    msg: "Olá! Gostaria de um orçamento para instalação de ar-condicionado.",
  },
  {
    name: "Limpeza e manutenção",
    msg: "Olá! Preciso de limpeza ou manutenção no meu ar-condicionado.",
  },
  {
    name: "Conserto de ar-condicionado",
    msg: "Olá! Meu ar-condicionado está com problema e preciso de um orçamento.",
  },
  {
    name: "Refrigeração comercial",
    msg: "Olá! Preciso de atendimento para um equipamento de refrigeração comercial.",
  },
  {
    name: "Manutenção industrial",
    msg: "Olá! Gostaria de um orçamento para manutenção industrial.",
  },
];

const DETAILS = [
  "Não gela ou gela pouco",
  "Fazendo barulho estranho",
  "Vazando água",
  "Não liga",
  "Limpeza preventiva",
  "Instalação nova",
];

const SYSTEMS = [
  "Split",
  "Cassete",
  "Piso-teto",
  "VRF / VRV",
  "Refrigeração comercial",
  "Climatização industrial",
];

const REVIEWS = [
  {
    name: "Ana Vitória Leite",
    text: "um ótimo profissional, atendimento excepcional e trabalho muito bem executado.",
  },
  {
    name: "Leonardo Prado",
    text: "Empresa nos atendeu super bem, pontuais e bem profissionais!! Sempre indicamos para nosso amigos e parceiros...",
  },
  {
    name: "Noeli Tolomiotti",
    text: "Um excelente profissional. Trabalha com muita dedicação e é um trabalho de ótima qualidade. Super recomendo.",
  },
  {
    name: "Isabella Martins Viero",
    text: "ótimo atendimento, serviço bem feito meu ar está gelando meu quarto inteiro sem nenhuma dificuldade",
  },
  {
    name: "Baviera peça automotiva",
    text: "Empresa competente e excelente profissional, resolve o problema, muito bom!",
  },
  {
    name: "Maycon G. Prestes",
    text: "instalaram tudo nas mais perfeitas condições e com excelência",
  },
];

const STEPS = [
  {
    t: "Você chama no WhatsApp",
    d: "Conte qual serviço precisa. Se puder, mande o modelo do equipamento e uma foto.",
  },
  {
    t: "A gente avalia o serviço",
    d: "Conversamos sobre sua necessidade e combinamos uma visita técnica quando for preciso.",
  },
  {
    t: "Agendamos o atendimento",
    d: "Com o orçamento aprovado, marcamos a instalação, manutenção ou reparo.",
  },
];

const FAQ = [
  {
    q: "Vocês atendem no local?",
    a: "Sim. A SOLU THERM realiza serviços no local em Joinville. Envie seu bairro pelo WhatsApp para consultar disponibilidade.",
  },
  {
    q: "Posso pedir orçamento on-line?",
    a: "Sim. Envie pelo WhatsApp o serviço de que precisa e, se possível, o modelo e fotos do equipamento.",
  },
  {
    q: "Vocês fazem instalação e reparos?",
    a: "Sim. Fazemos instalação, manutenção preventiva e reparos em sistemas de climatização.",
  },
  {
    q: "Vocês atendem comércios e indústrias?",
    a: "Sim. Entre em contato para conversar sobre refrigeração comercial, climatização ou manutenção industrial.",
  },
];

const NAVIGATION = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

const PROJECT_PHOTOS = [
  {
    image: splitPhoto,
    title: "Instalação de split",
    alt: "Condensadora de parede com manômetros conectados",
  },
  {
    image: ceilingPhoto,
    title: "Climatização de salão",
    alt: "Ar-condicionado de teto em instalação em um salão com janelas em arco",
  },
  {
    image: repairPhoto,
    title: "Reparo em condensadora",
    alt: "Técnico segurando um componente ao lado de uma condensadora aberta",
  },
];

const REVIEW_COUNT = 18;

function WhatsIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.69L.57 23.7l6.08-1.6a11.36 11.36 0 0 0 5.4 1.38h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.05" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="inline-flex text-accent" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function WhatsButton({
  msg,
  children,
  size = "lg",
  pulse = false,
  onClick,
}: {
  msg: string;
  children: React.ReactNode;
  size?: "lg" | "md";
  pulse?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={whatsappLink(msg)}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-whats font-semibold text-whats-foreground shadow-whats transition-colors hover:bg-whats-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring ${
        size === "lg" ? "h-14 px-7 text-lg" : "h-11 px-5 text-base"
      } ${pulse ? "btn-pulse" : ""}`}
    >
      <WhatsIcon className={size === "lg" ? "size-6" : "size-5"} />
      {children}
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [detail, setDetail] = useState<string | null>(null);
  const quoteMsg = `${SERVICES[selected]?.msg ?? ""}${detail ? ` Detalhe: ${detail.toLowerCase()}.` : ""}`;
  const generic = "Olá! Vim pelo site e gostaria de um orçamento.";
  const menuButton = useRef<HTMLButtonElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setPastHero(!e?.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      id="inicio"
      className="min-h-screen bg-background text-foreground"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <header className="absolute inset-x-0 top-0 z-40 text-primary-foreground md:sticky md:border-b md:border-border md:bg-background/95 md:text-foreground md:backdrop-blur">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a
            href="#inicio"
            className="inline-flex shrink-0 items-center rounded-xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img src={brandLogo} alt="SOLU THERM" className="h-11 w-auto" />
          </a>
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 text-sm font-semibold md:flex"
          >
            {NAVIGATION.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-primary hover:underline">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <WhatsButton msg={generic} size="md">
              WhatsApp
            </WhatsButton>
          </div>
          <button
            type="button"
            ref={menuButton}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-black/35 md:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav
            id="menu-mobile"
            aria-label="Navegação móvel"
            hidden={!menuOpen}
            className="absolute inset-x-4 top-full rounded-2xl border border-border bg-card p-4 text-foreground shadow-xl md:hidden"
          >
            {NAVIGATION.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-semibold hover:bg-secondary"
              >
                {label}
              </a>
            ))}
            <div className="mt-2">
              <WhatsButton msg={generic} size="md" onClick={() => setMenuOpen(false)}>
                Pedir orçamento
              </WhatsButton>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero: fills exactly the first screen (minus header) */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[max(100svh,500px)] md:min-h-[max(calc(100svh-4rem),520px)] items-end overflow-hidden text-primary-foreground md:items-center"
      >
        <picture className="absolute inset-0 -z-10">
          <source media="(min-width: 768px)" srcSet={heroDesk} />
          <img
            src={heroMob}
            alt="Equipamentos de climatização instalados em uma cobertura"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-24 md:py-0">
          <div className="max-w-xl">
            <a href="#avaliacoes" className="inline-flex items-center gap-2 text-sm">
              <Stars /> <strong>5,0</strong> no Google · {REVIEW_COUNT} avaliações
            </a>
            <h1 className="mt-3 text-[2.5rem] font-extrabold leading-[1.02] md:text-6xl">
              Climatização e refrigeração em Joinville
            </h1>
            <p className="mt-3 text-base text-primary-foreground/85 md:mt-5 md:text-lg">
              Instalação, reparos e manutenção para residências, comércios e indústrias.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsButton msg={generic} pulse>
                <span className="whitespace-nowrap">Orçamento no WhatsApp</span>
              </WhatsButton>
              <span className="hidden text-sm text-primary-foreground/75 md:inline">
                Orçamento on-line · Serviço no local
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote builder */}
      <section id="orcamento" className="scroll-mt-16 mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">Qual serviço você precisa?</h2>
        <p className="mt-2 text-muted-foreground">
          Escolha o serviço para montar sua mensagem de orçamento no WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {SERVICES.map((a, i) => (
            <button
              key={a.name}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`rounded-full border px-4 py-2.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                selected === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold">O que está acontecendo? (opcional)</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {DETAILS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setDetail(detail === s ? null : s)}
              aria-pressed={detail === s}
              className={`rounded-xl border px-3 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                detail === s
                  ? "border-accent bg-accent/15 font-semibold"
                  : "border-border bg-card hover:border-accent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <WhatsButton msg={quoteMsg}>Enviar e receber orçamento</WhatsButton>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-16 bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
          <img
            src={maintenancePhoto}
            alt="Equipamento de refrigeração industrial durante manutenção"
            loading="lazy"
            decoding="async"
            width={960}
            height={540}
            className="aspect-video w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Climatização residencial, comercial e industrial
            </h2>
            <dl className="mt-5 space-y-4 text-muted-foreground">
              <div>
                <dt className="font-bold text-foreground">Instalação</dt>
                <dd>
                  Instalação de sistemas split, cassete, piso-teto e VRF/VRV conforme as
                  necessidades do ambiente.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-foreground">Manutenção preventiva e reparos</dt>
                <dd>
                  Limpeza e revisão dos equipamentos, diagnóstico de falhas e reparo no local.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-foreground">Refrigeração comercial e industrial</dt>
                <dd>
                  Atendimento técnico para sistemas de refrigeração de comércios e indústrias.
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <WhatsButton msg={generic} size="md">
                Solicitar orçamento
              </WhatsButton>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="scroll-mt-16 mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">Instalações e reparos em campo</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {PROJECT_PHOTOS.map(({ image, title, alt }) => (
            <figure
              key={title}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={540}
                height={720}
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="px-4 py-4 font-semibold">{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="avaliacoes" className="scroll-mt-16 bg-secondary py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-6xl font-extrabold text-primary md:text-7xl">5,0</p>
              <div className="mt-1 flex items-center gap-2">
                <Stars />
                <span className="text-muted-foreground">{REVIEW_COUNT} avaliações no Google</span>
              </div>
            </div>
            <p className="max-w-sm text-lg text-muted-foreground">
              Nas avaliações, os clientes destacam o{" "}
              <strong className="text-foreground">atendimento</strong> e a{" "}
              <strong className="text-foreground">qualidade do serviço</strong>.
            </p>
          </div>
          <div className="marquee-mask -mx-4 mt-8 overflow-hidden md:mx-0">
            <div className="marquee-track flex w-max gap-4 py-2">
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <figure
                  key={i}
                  aria-hidden={i >= REVIEWS.length}
                  className="w-[290px] shrink-0 rounded-2xl bg-card p-6 md:w-[360px]"
                >
                  <Stars />
                  <blockquote className="mt-3 leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <strong>{r.name}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <WhatsButton msg="Olá! Vi as avaliações no site e quero um orçamento.">
              Quero ser atendido assim
            </WhatsButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">
          Como funciona o atendimento
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="border-t-2 border-primary pt-5">
              <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Brands */}
      <section className="border-y border-border py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-muted-foreground">Sistemas que atendemos</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {SYSTEMS.map((b) => (
              <li
                key={b}
                className="font-display text-xl font-semibold text-primary/70 md:text-2xl"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location + FAQ */}
      <section
        id="contato"
        className="scroll-mt-16 mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2 md:py-20"
      >
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Atendimento em Joinville</h2>

          <address className="mt-5 not-italic leading-relaxed">
            R. Dilma Virgilina Garcia, 107 — Aventureiro
            <br />
            Joinville – SC, 89225-800
          </address>
          <p className="mt-2 text-muted-foreground">Empresa de empreendedoras</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=SOLU+THERM+Refrigera%C3%A7%C3%A3o+Dilma+Virgilina+Garcia+107+Joinville+SC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-primary underline underline-offset-4"
          >
            Ver no Google Maps
          </a>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Dúvidas comuns</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {f.q}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Precisa instalar ou reparar seu equipamento?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Conte o que você precisa e solicite um orçamento pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <WhatsButton msg={generic} pulse>
              Falar com a SOLU THERM
            </WhatsButton>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="text-primary-foreground/80 underline underline-offset-4"
            >
              ou ligue {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-8 md:py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SOLU THERM — Refrigeração, Climatização e Manutenção Industrial
        · Joinville – SC
      </footer>

      {/* Mobile sticky bar: appears only after scrolling past the hero */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 p-3 transition-transform duration-300 md:hidden ${
          pastHero ? "translate-y-0" : "pointer-events-none translate-y-[120%]"
        }`}
      >
        <a
          href={whatsappLink(generic)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={pastHero ? undefined : -1}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-whats text-lg font-semibold text-whats-foreground shadow-whats"
        >
          <WhatsIcon className="size-6" /> Pedir orçamento no WhatsApp
        </a>
      </div>
    </div>
  );
}
