import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroDesk from "@/assets/hero-desktop.jpg";
import heroMob from "@/assets/hero-mobile.jpg";
import logo from "@/assets/qualitech-logo.png";
import fachada from "@/assets/fachada-loja.jpg";
import { PHONE_DISPLAY, whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qualitech | Conserto de geladeira e eletrodomésticos em São José - SC" },
      {
        name: "description",
        content:
          "Geladeira parou? Assistência técnica nota 5,0 no Google com 252 avaliações. Orçamento pelo WhatsApp (48) 99132-1945. São José e Grande Florianópolis.",
      },
      { property: "og:title", content: "Qualitech — Conserto de geladeira em São José - SC" },
      {
        property: "og:description",
        content: "Nota 5,0 no Google. Chame no WhatsApp e receba atendimento rápido.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const APPLIANCES = [
  { name: "Geladeira e freezer", msg: "Olá! Minha geladeira está com problema e preciso de um orçamento." },
  { name: "Máquina de lavar", msg: "Olá! Minha máquina de lavar está com problema e preciso de um orçamento." },
  { name: "Lava e seca", msg: "Olá! Minha lava e seca está com problema e preciso de um orçamento." },
  { name: "Micro-ondas", msg: "Olá! Meu micro-ondas está com problema e preciso de um orçamento." },
  { name: "Outro aparelho", msg: "Olá! Preciso de conserto em um eletrodoméstico. Podem me ajudar?" },
];

const SYMPTOMS = [
  "Não gela ou gela pouco",
  "Fazendo barulho estranho",
  "Vazando água",
  "Não liga",
  "Não centrifuga",
  "Formando gelo demais",
];

const BRANDS = ["Brastemp", "Consul", "Electrolux", "Samsung", "LG", "Panasonic", "Fischer", "Philco"];

const REVIEWS = [
  {
    name: "Rafael Lima",
    when: "7 meses atrás",
    text: "Deixou uma geladeira para meu uso na minha casa enquanto realizava o conserto da minha. Não perdi as compras da semana. Tudo que foi acordado foi cumprido.",
  },
  {
    name: "Bruno Medeiros",
    when: "7 meses atrás",
    text: "O valor do conserto do meu micro-ondas ficou a metade do que havia orçado em outro local, o que demonstra a honestidade da Qualitech.",
  },
  {
    name: "Jussara Martins",
    when: "8 meses atrás",
    text: "Precisei de atendimento com urgência e prontamente fui atendida. Sérgio super paciente pra explicar e solucionar o problema. Recomendo de olhos fechados.",
  },
  {
    name: "Andreia Mattos",
    when: "3 meses atrás",
    text: "Tivemos uma situação com nossa lava e seca. Eles prontamente nos ajudaram a resolver o problema e deixaram tudo ok. Ótimo preço.",
  },
  {
    name: "Tania Marlise Arnold",
    when: "8 meses atrás",
    text: "Visita técnica, orçamento, condições no cartão e um trabalho de excelente qualidade. Ainda retornaram dias depois para saber se deu tudo certo.",
  },
  {
    name: "Lucas Souza",
    when: "4 meses atrás",
    text: "Atendimento online e presencial super cordial. Foram transparentes e objetivos quanto à resolução do problema e muito ágeis.",
  },
];

const STEPS = [
  { t: "Você chama no WhatsApp", d: "Conta qual é o aparelho e o que está acontecendo. Se puder, manda uma foto." },
  { t: "Visita técnica", d: "O técnico vai até você, encontra o defeito e passa o orçamento antes de mexer." },
  { t: "Conserto e acompanhamento", d: "Serviço feito com peça certa, pagamento no cartão, e a gente liga depois pra saber se ficou tudo bem." },
];

const FAQ = [
  { q: "Vocês atendem em domicílio?", a: "Sim. Atendemos em São José e região da Grande Florianópolis com visita técnica na sua casa." },
  { q: "Quais formas de pagamento?", a: "Cartão de crédito (com condições de parcelamento) e pagamento por aproximação no celular." },
  { q: "Qual o horário de atendimento?", a: "Respondemos pelo WhatsApp todos os dias até meia-noite." },
  { q: "Vou ficar sem geladeira durante o conserto?", a: "Quando o aparelho precisa ir para a oficina, conversamos sobre alternativas para você não perder seus alimentos." },
];

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
}: {
  msg: string;
  children: React.ReactNode;
  size?: "lg" | "md";
  pulse?: boolean;
}) {
  return (
    <a
      href={whatsappLink(msg)}
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
  const [selected, setSelected] = useState(0);
  const [symptom, setSymptom] = useState<string | null>(null);
  const quoteMsg = `${APPLIANCES[selected]?.msg ?? ""}${symptom ? ` Problema: ${symptom.toLowerCase()}.` : ""}`;
  const generic = "Olá! Vim pelo site e gostaria de um orçamento.";
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40 md:sticky md:border-b md:border-border md:bg-background/90 md:backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <img src={logo} alt="Qualitech — Solução em refrigeração" className="h-12 w-auto rounded-xl md:h-14 md:rounded-none" width={56} height={56} />
          <div className="hidden items-center gap-4 md:flex">
            <a href={`tel:+5548991321945`} className="hidden text-sm font-semibold text-primary md:block">
              {PHONE_DISPLAY}
            </a>
            <WhatsButton msg={generic} size="md">
              <span className="hidden sm:inline">Chamar no</span> WhatsApp
            </WhatsButton>
          </div>
        </div>
      </header>

      {/* Hero: fills exactly the first screen (minus header) */}
      <section ref={heroRef} className="relative isolate flex h-[100svh] min-h-[560px] md:h-[calc(100svh-4rem)] md:min-h-[520px] items-end overflow-hidden text-primary-foreground md:items-center">
        <picture className="absolute inset-0 -z-10">
          <source media="(min-width: 768px)" srcSet={heroDesk} />
          <img
            src={heroMob}
            alt="Técnico consertando uma geladeira na cozinha do cliente"
            className="h-full w-full object-cover object-[50%_35%] md:object-center"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-10 md:pb-0">
          <div className="max-w-xl">
            <a href="#avaliacoes" className="inline-flex items-center gap-2 text-sm">
              <Stars /> <strong>5,0</strong> no Google · 252 avaliações
            </a>
            <h1 className="mt-3 text-[2.5rem] font-extrabold leading-[1.02] md:text-6xl">
              Geladeira parou? A gente resolve rápido.
            </h1>
            <p className="mt-3 text-base text-primary-foreground/85 md:mt-5 md:text-lg">
              Conserto de geladeira, máquina de lavar e micro-ondas em São José e região.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsButton msg={generic} pulse>
                <span className="hidden sm:inline">Pedir orçamento</span><span className="sm:hidden">Orçamento</span> no WhatsApp
              </WhatsButton>
              <span className="hidden text-sm text-primary-foreground/75 md:inline">Resposta rápida · Aberto até 00h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote builder */}
      <section id="orcamento" className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">Qual aparelho está com problema?</h2>
        <p className="mt-2 text-muted-foreground">Escolha e já mandamos sua mensagem pronta no WhatsApp.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {APPLIANCES.map((a, i) => (
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
          {SYMPTOMS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSymptom(symptom === s ? null : s)}
              aria-pressed={symptom === s}
              className={`rounded-xl border px-3 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                symptom === s ? "border-accent bg-accent/15 font-semibold" : "border-border bg-card hover:border-accent"
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

      {/* Reviews */}
      <section id="avaliacoes" className="bg-secondary py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-6xl font-extrabold text-primary md:text-7xl">5,0</p>
              <div className="mt-1 flex items-center gap-2">
                <Stars />
                <span className="text-muted-foreground">252 avaliações no Google</span>
              </div>
            </div>
            <p className="max-w-sm text-lg text-muted-foreground">
              Os clientes falam mais de duas coisas: <strong className="text-foreground">honestidade</strong> e{" "}
              <strong className="text-foreground">atendimento rápido</strong>.
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
                    <strong>{r.name}</strong> <span className="text-muted-foreground">· {r.when}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <WhatsButton msg="Olá! Vi as avaliações no site e quero um orçamento.">Quero ser atendido assim</WhatsButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">Do primeiro “oi” ao aparelho funcionando</h2>
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
          <p className="text-center text-muted-foreground">Assistência técnica especializada nas marcas</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {BRANDS.map((b) => (
              <li key={b} className="font-display text-xl font-semibold text-primary/70 md:text-2xl">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location + FAQ */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Empresa de verdade, endereço de verdade</h2>
          <img
            src={fachada}
            alt="Fachada da Qualitech em São José"
            loading="lazy"
            className="mt-6 aspect-video w-full rounded-2xl object-cover"
          />
          <address className="mt-5 not-italic leading-relaxed">
            R. João Paulo Gaspar, 2331 — Ipiranga
            <br />
            São José - SC, 88111-671
          </address>
          <p className="mt-2 text-muted-foreground">Aberto todos os dias · Fecha 00:00</p>
          <p className="mt-2 text-muted-foreground">Empresa de empreendedoras · Acesso para cadeirantes</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Qualitech+Solu%C3%A7%C3%A3o+em+refrigera%C3%A7%C3%A3o+S%C3%A3o+Jos%C3%A9+SC"
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
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
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
          <h2 className="text-4xl font-extrabold md:text-5xl">Não deixe a comida estragar.</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Manda uma mensagem agora e a gente te diz o que fazer.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <WhatsButton msg={generic} pulse>
              Falar com a Qualitech
            </WhatsButton>
            <a href="tel:+5548991321945" className="text-primary-foreground/80 underline underline-offset-4">
              ou ligue {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-8 md:py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Qualitech — Solução em refrigeração · São José - SC
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
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-whats text-lg font-semibold text-whats-foreground shadow-whats"
        >
          <WhatsIcon className="size-6" /> Pedir orçamento no WhatsApp
        </a>
      </div>
    </div>
  );
}
