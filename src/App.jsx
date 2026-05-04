import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronRight, Droplets, Factory,
  Gift, HandHeart, Hotel, Lock, Plane, QrCode, ShieldCheck,
  Sparkles, Trophy, Users, Wallet, Zap, Sun, Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ── THEME ── */
function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('he-theme') !== 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('he-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, setDark];
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)}
      className="flex items-center justify-center w-10 h-10 rounded-2xl border transition"
      style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--text)' }}
      title={dark ? 'Switch to Light' : 'Switch to Dark'}>
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

/* ── DATA ── */
const ecosystemCards = [
  { title: "HTES Environments", copy: "Hotels, travel, entertainment, sports, VIP suites, watch parties, hospitality rooms, and event activations.", icon: Hotel },
  { title: "Airport + Kiosk Network", copy: "Traveler-facing beverage, mobile, eSIM, signage, rewards, and activation bundles across high-traffic airport footprints.", icon: Plane },
  { title: "R.I.S.E. Communities", copy: "Hydration, benefits access, telehealth, prescription support, tokenized rewards, and impact-driven resident engagement.", icon: HandHeart },
  { title: "IBIY Bracelet Community", copy: "Every can becomes a companion access point for identity, wallet, rewards, marketplace offers, and community participation.", icon: Wallet },
];

const products = [
  ["VIBE Water",   "Flagship hydration layer for hospitality, events, campuses, and R.I.S.E. environments."],
  ["VIBE Energy",  "Classic caffeinated beverage line supported by Hell Energy manufacturing infrastructure."],
  ["VIBE Zero",    "Sugar-free functional energy extension for wellness, travel, and performance audiences."],
  ["Juices + Teas","Future functional beverage extensions for hotel rooms, campuses, retail, and marketplace bundles."],
];

const dealPoints = [
  "United States + Canada territory license rights",
  "Secondary options for Mexico and South America",
  "White/private label manufacturing and co-packing through Hell Energy Hungary",
  "QR-enabled can strategy tied to VIBE Network and IBIY community activation",
  "Integrated deployment across TPG-controlled hospitality, travel, entertainment, sports, and R.I.S.E. environments",
];

const kpis = [
  ["100K",   "limited pilot cans"],
  ["253K+",  "MOQ per SKU benchmark"],
  ["4–6",    "week production lead-time target"],
  ["1.6B",   "annual can capacity reference"],
];

const phases = [
  { title: "Phase 1 — Controlled Pilot",     copy: "Deploy QR-enabled VIBE Water and companion IBIY activation into selected HTES, campus, airport, and R.I.S.E. environments." },
  { title: "Phase 2 — Network Expansion",    copy: "Scale into 1M+ units, expand prize pools, add physical bracelets, activate sponsor-funded rewards, and publish dashboard metrics." },
  { title: "Phase 3 — National Distribution",copy: "Move into DSD, strategic wholesale, retail, clubs, marketplaces, and potential U.S. co-pack economics after validation." },
  { title: "Phase 4 — Americas Optionality", copy: "Expand into Canada first, then evaluate Mexico and South America rights based on regulatory, logistics, and partner readiness." },
];

/* ── HELPERS ── */
function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`px-5 md:px-10 py-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {eyebrow && <p className="text-xs uppercase tracking-[0.35em] mb-4" style={{ color: 'var(--text-muted)' }}>{eyebrow}</p>}
        {title && <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-10 text-white">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border px-4 py-2 text-sm"
      style={{ borderColor: 'var(--border)', background: 'var(--card)', color: 'var(--text-muted)' }}>
      {children}
    </span>
  );
}

/* ── MAIN ── */
export default function HelloEnergyMicrosite() {
  const [dark, setDark] = useTheme();
  const [email, setEmail] = useState("");
  const [name,  setName]  = useState("");
  const [role,  setRole]  = useState("Investor");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const projected = useMemo(() => ({
    gross: (100000 * 2.0).toLocaleString(),
    activations: Math.round(100000 * 0.22).toLocaleString(),
  }), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mqenelab", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else alert("Submission error — please try again.");
    } catch { alert("Network error — please try again."); }
  };

  return (
    <div data-theme={dark ? "dark" : "light"}
      style={{ minHeight: "100vh", background: "var(--page-bg)", color: "var(--text)" }}
      className="overflow-hidden">

      {/* BG LAYERS */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: dark
          ? "radial-gradient(circle at 20% 10%,rgba(255,255,255,0.16),transparent 25%),radial-gradient(circle at 80% 40%,rgba(255,255,255,0.08),transparent 25%),linear-gradient(135deg,#050505,#111,#000)"
          : "radial-gradient(circle at 20% 10%,rgba(0,0,0,0.06),transparent 30%),linear-gradient(135deg,#f5f5f0,#ebebeb,#f0f0ea)"
      }} />
      {dark && (
        <div className="fixed inset-0 opacity-[0.08] pointer-events-none"
          style={{ background: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
      )}

      {/* HEADER */}
      <header className="relative z-20 sticky top-0 border-b"
        style={{ borderColor: "var(--border)", background: "var(--header-bg)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <div className="h-11 w-11 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--text)", color: "var(--page-bg)" }}>
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-black leading-none text-white">HELLO ENERGY</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Americas Beverage Platform</p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            {["platform","products","pilot","ecosystem","investor"].map(h => (
              <a key={h} href={`#${h}`} className="hover:text-white capitalize transition">{h === "investor" ? "Investor Access" : h.charAt(0).toUpperCase() + h.slice(1)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle dark={dark} setDark={setDark} />
            <a href="#investor"
              className="hidden md:inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-bold transition hover:opacity-88"
              style={{ background: "var(--text)", color: "var(--page-bg)" }}>
              Request Access
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">

        {/* HERO */}
        <section className="px-5 md:px-10 min-h-[calc(100vh-80px)] flex items-center py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex flex-wrap gap-3 mb-7">
                {["U.S. + Canada Rights","VIBE Network","IBIY Enabled","TPG Ecosystem"].map(p => <Pill key={p}>{p}</Pill>)}
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.92] tracking-tight mb-7 text-white">
                The Beverage Layer For A Connected Economy.
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-8" style={{ color: "var(--text-muted)" }}>
                Hello Energy Beverage Company connects premium beverage manufacturing with TPG-controlled environments, VIBE Network engagement, IBIY bracelet access, rewards, health benefits, marketplace value, and R.I.S.E. impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pilot"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-bold transition hover:opacity-88"
                  style={{ background: "var(--text)", color: "var(--page-bg)" }}>
                  View Pilot System <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#investor"
                  className="inline-flex items-center justify-center rounded-2xl border px-6 py-4 font-semibold transition hover:opacity-80"
                  style={{ borderColor: "var(--border)", color: "var(--text)", background: "var(--card)" }}>
                  <Lock className="mr-2 h-4 w-4" /> Investor Access
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="relative rounded-[2.5rem] border p-6 md:p-8 shadow-2xl overflow-hidden"
                style={{ borderColor: "var(--border)", background: "var(--card)", backdropFilter: "blur(20px)" }}>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 20%,rgba(255,255,255,0.12),transparent 40%)" }} />
                <div className="relative grid grid-cols-2 gap-3" style={{height:"420px"}}>
                  <div className="rounded-[2rem] p-5 flex flex-col justify-between overflow-hidden" style={{height:"100%"}}
                    style={{ background: "var(--text)", color: "var(--page-bg)" }}>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] opacity-45">VIBE Water</p>
                      <h3 className="text-5xl font-black mt-3">ACCESS</h3>
                    </div>
                    <Droplets className="h-14 w-14 opacity-70" />
                    <p className="font-semibold">Scan. Connect. Unlock.</p>
                  </div>
                  <div className="flex flex-col gap-3" style={{height:"100%"}}>
                    {[
                      [QrCode,  "QR Can",         "Each can routes into rewards, identity, and community."],
                      [Wallet,  "IBIY Companion",  "Bracelet, wallet, and digital access layer."],
                      [Trophy,  "Win + Give",       "Rewards, prizes, and proceeds supporting causes."],
                    ].map(([Icon, title, copy]) => (
                      <div key={title} className="rounded-[2rem] border p-4 flex flex-col justify-between flex-1"
                        style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                        <Icon className="h-9 w-9 mb-4" style={{ color: "var(--text)" }} />
                        <h4 className="font-bold text-xl text-white">{title}</h4>
                        <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PLATFORM */}
        <Section id="platform" eyebrow="Platform Thesis" title="Hello Energy Is Not Being Positioned As A Conventional Beverage Brand.">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div className="rounded-[2rem] p-8" style={{ background: "var(--text)", color: "var(--page-bg)" }}>
              <Factory className="h-12 w-12 mb-6" />
              <h3 className="text-3xl font-black mb-4">Manufacturing + Rights Foundation</h3>
              <p className="leading-relaxed mb-6 opacity-70">
                Hello Energy holds territory license rights for the United States and Canada, with secondary optionality for Mexico and South America. The platform uses Hell Energy Hungary white/private label and co-packing resources as the production backbone.
              </p>
              <div className="space-y-3">
                {dealPoints.map(item => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm opacity-75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {kpis.map(([value, label]) => (
                <div key={label} className="rounded-[2rem] border p-6 min-h-40 flex flex-col justify-between"
                  style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                  <p className="text-5xl font-black text-white">{value}</p>
                  <p className="uppercase tracking-[0.18em] text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PRODUCTS */}
        <Section id="products" eyebrow="Product Architecture" title="One Beverage Platform. Multiple Controlled Deployment Paths.">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(([title, copy], i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-[2rem] border p-6 min-h-72 flex flex-col justify-between"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                <div className="text-5xl font-black" style={{ color: "var(--text-muted)", opacity: 0.3 }}>0{i+1}</div>
                <div>
                  <h3 className="text-2xl font-black mb-3 text-white">{title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PILOT */}
        <Section id="pilot" eyebrow="Limited Pilot" title="VIBE × IBIY Access Pilot: Every Can Becomes A Key.">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="rounded-[2.5rem] border p-8 md:p-10" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-white">Drink → Scan → Activate → Earn → Redeem → Repeat</h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                A limited VIBE can pilot routes participants into the IBIY bracelet community, VIBE Network channel, rewards dashboard, impact contribution ledger, marketplace benefits, telemedicine access, prescription programs, and TPG event opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  [QrCode,    "Scan",    "QR-enabled cans launch the activation journey."],
                  [Wallet,    "Connect", "IBIY bracelet or digital wallet profile is created."],
                  [Gift,      "Reward",  "Instant wins, points, tokens, discounts, and prizes."],
                  [HandHeart, "Impact",  "A portion of proceeds supports IBIY-aligned causes."],
                ].map(([Icon, title, copy]) => (
                  <div key={title} className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                    <Icon className="h-8 w-8 mb-4" style={{ color: "var(--text)" }} />
                    <h4 className="font-bold text-xl mb-2 text-white">{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] p-8 md:p-10" style={{ background: "var(--text)", color: "var(--page-bg)" }}>
              <p className="text-xs uppercase tracking-[0.35em] mb-5 opacity-45">Pilot Economics Snapshot</p>
              <div className="space-y-6">
                <div>
                  <p className="text-6xl font-black">${projected.gross}</p>
                  <p className="opacity-55 text-sm mt-1">illustrative gross spread at 100K pilot units and ~$2/unit spread</p>
                </div>
                <div>
                  <p className="text-6xl font-black">{projected.activations}</p>
                  <p className="opacity-55 text-sm mt-1">illustrative consumer activations at 22% scan/activation assumption</p>
                </div>
                <div className="rounded-2xl p-5" style={{ background: "var(--page-bg)", color: "var(--text)" }}>
                  <p className="font-bold mb-2">Pilot Rule</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Prove engagement before going wide. The first victory is not retail. The first victory is activation data.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ECOSYSTEM */}
        <Section id="ecosystem" eyebrow="TPG Ecosystem Integration" title="The Beverage Moves Through Environments TPG Already Understands.">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemCards.map(({ title, copy, icon: Icon }) => (
              <div key={title} className="rounded-[2rem] border p-6 min-h-72 flex flex-col justify-between"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                <Icon className="h-12 w-12" style={{ color: "var(--text)" }} />
                <div>
                  <h3 className="text-2xl font-black mb-3 text-white">{title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ROADMAP */}
        <Section id="roadmap" eyebrow="Roadmap" title="From Limited Pilot To Americas Beverage Network.">
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <div key={phase.title} className="rounded-[2rem] border p-6 md:p-8 grid md:grid-cols-[140px_1fr_auto] gap-5 items-center"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                <div className="text-5xl font-black" style={{ opacity: 0.2, color: "var(--text)" }}>0{i+1}</div>
                <div>
                  <h3 className="text-2xl font-black mb-2 text-white">{phase.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{phase.copy}</p>
                </div>
                <ChevronRight className="hidden md:block h-7 w-7" style={{ color: "var(--border)" }} />
              </div>
            ))}
          </div>
        </Section>

        {/* INVESTOR */}
        <Section id="investor" eyebrow="Investor + Partner Access" title="Enter The Hello Energy Deal Room.">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-stretch">
            <div className="rounded-[2.5rem] border p-8 md:p-10" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <Lock className="h-12 w-12 mb-6" style={{ color: "var(--text)" }} />
              <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-white">Restricted access for investors, sponsors, manufacturing partners, and ecosystem operators.</h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                The deal room houses the investor kill-shot deck, VIBE × IBIY economics, token/points model, pilot dashboard, document vault, signing workflow, soft commitment tracker, and live pitch simulator.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Investor Deck","Economics","Documents","Live Pitch","Commitment Tracker"].map(p => <Pill key={p}>{p}</Pill>)}
              </div>
            </div>

            <div className="rounded-[2.5rem] p-8 md:p-10" style={{ background: "var(--text)", color: "var(--page-bg)" }}>
              <p className="text-xs uppercase tracking-[0.35em] mb-5 opacity-45">Request Access</p>
              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="Hello Energy Deal Room Access Request" />
                  <input name="name" required placeholder="Name" value={name} onChange={e => setName(e.target.value)}
                    className="w-full rounded-2xl border px-5 py-4 outline-none text-sm"
                    style={{ borderColor: "rgba(0,0,0,0.15)", background: "var(--input-bg)", color: "var(--input-text)" }} />
                  <input name="email" type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-2xl border px-5 py-4 outline-none text-sm"
                    style={{ borderColor: "rgba(0,0,0,0.15)", background: "var(--input-bg)", color: "var(--input-text)" }} />
                  <select name="role" value={role} onChange={e => setRole(e.target.value)}
                    className="w-full rounded-2xl border px-5 py-4 outline-none text-sm"
                    style={{ borderColor: "rgba(0,0,0,0.15)", background: "var(--input-bg)", color: "var(--input-text)" }}>
                    <option>Investor</option>
                    <option>Sponsor</option>
                    <option>Distribution Partner</option>
                    <option>Hospitality / Event Partner</option>
                    <option>R.I.S.E. / Community Partner</option>
                  </select>
                  <textarea name="notes" placeholder="What would you like to evaluate?" value={notes} onChange={e => setNotes(e.target.value)}
                    className="w-full rounded-2xl border px-5 py-4 outline-none text-sm min-h-28 resize-none"
                    style={{ borderColor: "rgba(0,0,0,0.15)", background: "var(--input-bg)", color: "var(--input-text)" }} />
                  <button type="submit"
                    className="w-full rounded-2xl py-4 font-bold text-sm transition hover:opacity-88"
                    style={{ background: "var(--page-bg)", color: "var(--text)" }}>
                    Request Deal Room Access <ArrowRight className="inline ml-2 h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="rounded-2xl p-6" style={{ background: "var(--page-bg)", color: "var(--text)" }}>
                  <ShieldCheck className="h-10 w-10 mb-4" style={{ color: "var(--text)" }} />
                  <h4 className="text-2xl font-black mb-2">Access request captured.</h4>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Our team will be in touch within 48 hours. Requested role: {role}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 px-5 md:px-10 py-10 border-t" style={{ borderColor: "var(--border)", background: "var(--header-bg)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5 text-sm" style={{ color: "var(--text-muted)" }}>
          <p>© 2026 Hello Energy Beverage Company — VIBE Network — IBIY Access Pilot — A TPG Initiative</p>
          <p>Confidential strategic microsite. For qualified investors and partners only.</p>
        </div>
      </footer>
    </div>
  );
}
