"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "problem", label: "The Problem", icon: "alert" },
  { id: "how-it-works", label: "How It Works", icon: "gear" },
  { id: "fcc", label: "FCC", icon: "lock" },
  { id: "cryptography", label: "Cryptography", icon: "lock" },
  { id: "flare-infra", label: "Flare Infrastructure", icon: "gear" },
  { id: "features", label: "What's Private", icon: "eye" },
  { id: "selective-disclosure", label: "Selective Disclosure", icon: "eye" },
  { id: "security", label: "Security", icon: "lock" },
  { id: "gas", label: "Gas", icon: "gear" },
  { id: "faq", label: "FAQ", icon: "question" },
];

function NavIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5L8 2L14 6.5V13.5C14 14 13.5 14.5 13 14.5H3C2.5 14.5 2 14 2 13.5V6.5Z" /><path d="M6 14.5V8.5H10V14.5" /></svg>;
    case "alert":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1.5L1.5 13H14.5L8 1.5Z" /><path d="M8 6V9" /><circle cx="8" cy="11" r="0.5" fill="currentColor" /></svg>;
    case "gear":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="2.5" /><path d="M8 1V3M8 13V15M1 8H3M13 8H15M2.5 2.5L4 4M12 12L13.5 13.5M13.5 2.5L12 4M4 12L2.5 13.5" /></svg>;
    case "lock":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="10" height="7" rx="1" /><path d="M5 7V5C5 3.3 6.3 2 8 2C9.7 2 11 3.3 11 5V7" /></svg>;
    case "eye":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 8C1 8 4 3 8 3C12 3 15 8 15 8C15 8 12 13 8 13C4 13 1 8 1 8Z" /><circle cx="8" cy="8" r="2" /></svg>;
    case "question":
      return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6.5" /><path d="M6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7 9 7.5 8 7.5V9" /><circle cx="8" cy="11" r="0.5" fill="currentColor" /></svg>;
    default: return null;
  }
}

export default function FlarePage() {
  const [active, setActive] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[240px] shrink-0 flex-col border-r border-white/[0.06] bg-[#0d0d0f] px-3 py-5 sticky top-0 h-screen overflow-y-auto">
        <a href="/" className="flex items-center gap-2.5 mb-8 px-3">
          <img src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg" alt="Flare" className="h-6 w-6 rounded-md" />
          <span className="text-sm font-semibold">Encrypted Finance</span>
        </a>
        <nav className="flex flex-col gap-0.5">
          {nav.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setActive(s.id)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[12px] transition-colors ${active === s.id ? "bg-white/[0.08] text-white font-medium" : "text-white/35 hover:text-white/65 hover:bg-white/[0.04]"}`}>
              <span className={active === s.id ? "text-white/70" : "text-white/25"}><NavIcon icon={s.icon} /></span>
              {s.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 px-3">
          <a href="/" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">Back to home</a>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d0d0f]/95 backdrop-blur-md border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg" alt="Flare" className="h-6 w-6 rounded-md" />
          <span className="text-sm font-semibold">Docs</span>
        </a>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/[0.06]">
          {mobileMenuOpen
            ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4L12 12M12 4L4 12" /></svg>
            : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4H14M2 8H14M2 12H14" /></svg>}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0d0d0f] pt-16 px-4 overflow-y-auto">
          <nav className="flex flex-col gap-1 mt-4">
            {nav.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => { setActive(s.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${active === s.id ? "bg-white/[0.08] text-white font-medium" : "text-white/40 hover:text-white/70"}`}>
                <span className={active === s.id ? "text-white/80" : "text-white/30"}><NavIcon icon={s.icon} /></span>
                {s.label}
              </a>
            ))}
          </nav>
          <a href="/" className="mt-8 block text-xs text-white/20 px-4">Back to home</a>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 py-12 md:px-14 md:py-14 max-w-[700px] pt-20 md:pt-14">

        <Section id="overview">
          <h1 className="text-[26px] font-bold leading-tight md:text-[30px]">Private DeFi on Flare</h1>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.</p>
          <p className="mt-3 text-[14px] text-white/50 leading-[1.8]">Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one, not even us, can peek into.</p>
        </Section>

        <Hr />

        <Section id="problem">
          <h2 className="text-[20px] font-bold">The Problem</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.</p>
        </Section>

        <Hr />

        <Section id="how-it-works">
          <h2 className="text-[20px] font-bold">How It Works</h2>
          <div className="mt-6 space-y-5">
            <Step n="1" title="You deposit once" text="Your tokens go into the EncryptedVault smart contract. This is your only on-chain transaction. After this, you are invisible." />
            <Step n="2" title="You sign instructions off-chain" text="Zero gas. You sign an encrypted instruction from your wallet. Nothing hits the chain yet." />
            <Step n="3" title="FCC executes privately" text="Your instruction runs inside Flare's secure hardware from a shared execution wallet. SparkDEX, Kinetic, Firelight see our contract address. No link back to you." />
            <Step n="4" title="You receive encrypted notes" text="Your balance lives on-chain as encrypted data. Only your key can read it. To everyone else it is unreadable noise." />
          </div>
        </Section>

        <Hr />

        <Section id="fcc">
          <h2 className="text-[20px] font-bold">FCC (Flare Confidential Compute)</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">All private execution on Flare runs inside FCC. TEE-based secure hardware built natively into the Flare network. No one, including Encrypted Finance, can see what happens inside. Your transactions are signed off-chain and executed from a shared wallet, breaking any on-chain link to your identity.</p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <InfoBox label="Encryption" value="ECIES" />
            <InfoBox label="Authorization" value="EIP-712 Signatures" />
            <InfoBox label="Trust" value="TEE Attestation" />
            <InfoBox label="Price Feeds" value="FTSO Oracle" />
          </div>
        </Section>

        <Hr />

        <Section id="cryptography">
          <h2 className="text-[20px] font-bold">How the Cryptography Actually Works</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">This section is for people who want to understand exactly what is happening under the hood. If you are not technical, skip to the next section.</p>
          <div className="mt-6 space-y-4">
            <CryptoBlock title="Note encryption" text="When you deposit, your balance is stored as an encrypted note on-chain. Each note is encrypted using secp256k1 ECDH. A fresh ephemeral keypair is generated for every single note. The KDF is SHA-256 over the x-coordinate of the ECDH shared point. The symmetric cipher is AES-256-GCM with a random 12-byte IV and a 16-byte authentication tag. The on-chain format is: ephemeralPub (65 bytes) + iv (12 bytes) + ciphertext (128 bytes) + tag (16 bytes). Total: 221 bytes per note." />
            <CryptoBlock title="No public key is stored on-chain" text="The ephemeral public key in each note header is generated fresh for that note and has no connection to your wallet address or your long-term key. An attacker scraping the chain gets a pile of one-time ephemeral keys that are cryptographically useless. There is no public key registry. There is no ownership mapping." />
            <CryptoBlock title="Note commitments" text="The vault stores a commitment for each note: keccak256(noteId, amount, token, salt). This is a hash. It contains no identifying information. It is used to verify that a spend is valid without the vault knowing who is spending." />
            <CryptoBlock title="Ownership is determined off-chain" text="You own a note if you can decrypt it. When your SDK scans for your notes, it tries to decrypt every NoteCreated event with your spending key. Success means the note is yours. Failure means it belongs to someone else. The chain has no idea who owns what." />
            <CryptoBlock title="Your spending key never touches the chain" text="It is derived deterministically from a signature you make during onboarding. It never leaves your device. It is backed up as a BIP-39 mnemonic. The vault never sees it. The TEE never sees it. Only you have it." />
            <CryptoBlock title="User to TEE payloads" text="Instructions you send to the TEE are encrypted using eciesjs: secp256k1 + HKDF-SHA256 + AES-256-GCM. The TEE's public key is hardware-sealed inside the enclave. Only the enclave can decrypt your instructions." />
            <CryptoBlock title="Authorization" text="Every instruction you send is covered by an EIP-712 typed signature. The TEE verifies your signature before doing anything. The vault verifies it again on-chain. Even if the TEE were fully compromised, an attacker cannot spend your notes without forging your EIP-712 signatures." />
            <CryptoBlock title="Recovery without the TEE" text="If the TEE goes down permanently, you do not need it to recover. You have your spending key. You scan NoteCreated events on-chain. You decrypt each blob locally. Your funds are there. No contract interaction required. No permission from anyone." />
          </div>
        </Section>

        <Hr />

        <Section id="flare-infra">
          <h2 className="text-[20px] font-bold">Built on Flare's Native Infrastructure</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">We are not bolting privacy onto Flare as an afterthought. We are built directly on Flare's core protocols.</p>
          <div className="mt-6 space-y-3">
            <InfraBlock title="FCC (Flare Confidential Compute)" text="The execution engine. Your instructions run inside tamper-proof hardware. Nobody can peek into the enclave, not us, not validators, not anyone. The TEE's private key is hardware-sealed and cannot be extracted by the operator." />
            <InfraBlock title="FTSO (Flare Time Series Oracle)" text="Real-time price feeds. Your swaps and limit orders use live oracle prices without revealing your trading strategy." />
            <InfraBlock title="FDC (Flare Data Connector)" text="Cross-chain verification. Prove things happened on Bitcoin or XRP Ledger without exposing who is asking." />
          </div>
        </Section>

        <Hr />

        <Section id="features">
          <h2 className="text-[20px] font-bold">What&apos;s Private</h2>
          <div className="mt-6 space-y-3">
            <Feature title="Swaps" desc="Through SparkDEX and Kinetic. Any token pair. No front-running. No sandwich attacks. No one copying your trades." />
            <Feature title="Lending" desc="Positions, liquidation levels, and leverage stay hidden." />
            <Feature title="Staking" desc="Earn rewards without broadcasting your holdings. Delegate to FTSO providers privately." />
            <Feature title="Transfers" desc="Send to any address on Flare. The recipient does not need to have used Encrypted Finance before." />
            <Feature title="FAssets" desc="FXRP, FBTC, FDOGE, FXLM. Mint, redeem, use Firelight vaults, Upshift vaults, bridge via LayerZero. All private." />
            <Feature title="Governance" desc="Vote without revealing your position. No social pressure. No vote buying." />
            <Feature title="Messaging" desc="Wallet-to-wallet, end-to-end encrypted. Only the recipient can read it." />
            <Feature title="Limit Orders" desc="Oracle-protected. No one sees your levels until execution." />
            <Feature title="Dark Pools and Sealed Auctions" desc="Place large trades without moving the market. Bid without revealing your price until reveal." />
            <Feature title="Delegation" desc="Wrap FLR, delegate, claim rewards. No public trace." />
          </div>
        </Section>

        <Hr />

        <Section id="selective-disclosure">
          <h2 className="text-[20px] font-bold">Selective Disclosure</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">Privacy does not mean hiding everything forever. You choose what to reveal, when, and to whom.</p>
          <p className="mt-3 text-[14px] text-white/50 leading-[1.8]">The TEE generates scoped, time-bound attestations on demand. You specify exactly what to prove. The TEE reads your encrypted notes internally, computes the proof, signs the attestation with its hardware-sealed key, and posts it on-chain. Nothing beyond what you requested leaves the enclave. Every proof has an expiry you set. You can revoke any proof at any time.</p>
          <div className="mt-6 space-y-3">
            <Feature title="Compliance proofs" desc="Prove you meet regulatory requirements without exposing your full history." />
            <Feature title="Solvency attestation" desc="Prove your balance exceeds a threshold without revealing the exact amount." />
            <Feature title="Audit trails" desc="Generate verifiable records for a specific counterparty covering a specific time window." />
            <Feature title="Identity verification" desc="Prove KYC level, country, or accredited investor status without linking to your on-chain activity." />
            <Feature title="Trade history" desc="Share specific trades with an auditor without revealing your full portfolio." />
            <Feature title="Tax export" desc="Export only what is needed for a specific tax year and jurisdiction, nothing more." />
          </div>
        </Section>

        <Hr />

        <Section id="security">
          <h2 className="text-[20px] font-bold">Security</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">This is not custodial. We never hold your keys.</p>
          <div className="mt-6 space-y-3">
            <Feature title="Your spending key stays on your device" desc="It is derived from your wallet signature and backed up as a BIP-39 mnemonic. The vault never sees it. The TEE never sees it." />
            <Feature title="The vault enforces rules independently of the TEE" desc="Every spend requires a valid EIP-712 user signature plus a note commitment hash match. Even if the TEE were fully compromised, an attacker cannot drain the vault without forging your signatures." />
            <Feature title="Four layers of double-spend prevention" desc="On-chain isSpent mapping, TEE pre-validation, instruction replay tracking, and per-user EIP-712 nonces." />
            <Feature title="Multi-TEE consensus" desc="Multiple FCC machines must agree on an instruction before the vault accepts it. One compromised machine cannot act alone." />
            <Feature title="If we go down, you do not lose anything" desc="Your spending key plus on-chain encrypted notes equals full recovery. No permission needed from anyone." />
          </div>
        </Section>

        <Hr />

        <Section id="gas">
          <h2 className="text-[20px] font-bold">Gas</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">You pay gas once on your deposit. After that, the execution wallet covers all gas costs. A small relay fee of 0.2 to 0.5 percent per transaction covers it. You never need to hold FLR for gas again.</p>
        </Section>

        <Hr />

        <Section id="faq">
          <h2 className="text-[20px] font-bold">FAQ</h2>
          <div className="mt-6 divide-y divide-white/[0.06]">
            <Faq q="How does it work in simple terms?" a="You deposit tokens once. After that, all your activity happens privately inside FCC, secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <Faq q="Can anyone see what I am doing?" a="Only your initial deposit is visible. After that, everything runs through a shared execution wallet. There is no link back to you." />
            <Faq q="Is a public key stored on-chain?" a="No. The ephemeral key in each note header is generated fresh per note and has no connection to your wallet. There is no public key registry. Ownership is determined entirely by who can decrypt, off-chain." />
            <Faq q="Can I send to someone who has never used Encrypted Finance?" a="Yes. The recipient does not need to have used Encrypted Finance before. The TEE holds the note in escrow until they register." />
            <Faq q="What if the service goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <Faq q="Why Flare?" a="Flare has native Confidential Compute built into the network. Hardware-level privacy that other chains do not offer natively yet." />
            <Faq q="Can the TEE steal my funds?" a="No. The FCC cannot move funds without your EIP-712 signature. Your keys, your funds." />
            <Faq q="Is this a mixer?" a="No. Mixers just shuffle tokens between wallets. Encrypted Finance is a full private DeFi execution layer. Swap, lend, stake, bridge, vote, and message without ever leaving privacy." />
            <Faq q="Who executes the trades?" a="A shared execution wallet. Protocols like SparkDEX see that wallet, not you. There is no way to link a trade back to your address." />
          </div>
        </Section>

        <div className="mt-14 pt-6 border-t border-white/[0.06]">
          <p className="text-[11px] text-white/15">2026 Encrypted Finance.</p>
        </div>
      </main>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-20 py-6">{children}</section>;
}
function Hr() {
  return <hr className="border-white/[0.06] my-2" />;
}
function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.1] text-[11px] font-mono text-white/40">{n}</div>
      <div>
        <p className="text-[13px] font-semibold text-white/90">{title}</p>
        <p className="text-[13px] text-white/40 leading-[1.7]">{text}</p>
      </div>
    </div>
  );
}
function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-wider text-white/25 font-medium">{label}</p>
      <p className="text-[12px] font-medium text-white/60 mt-0.5">{value}</p>
    </div>
  );
}
function CryptoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-4">
      <p className="text-[12px] font-bold text-white/70 mb-1">{title}</p>
      <p className="text-[12px] text-white/35 leading-[1.7]">{text}</p>
    </div>
  );
}
function InfraBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-4">
      <p className="text-[13px] font-bold text-white/80">{title}</p>
      <p className="mt-1 text-[12px] text-white/35 leading-[1.7]">{text}</p>
    </div>
  );
}
function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
      <p className="text-[13px] text-white/50 leading-[1.7]">
        <span className="font-medium text-white/80">{title}</span> {desc}
      </p>
    </div>
  );
}
function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-3.5 select-none">
        <span className="text-[13px] text-white/70 pr-4">{q}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20 transition-transform group-open:rotate-90">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-3.5 text-[13px] text-white/35 leading-[1.7]">{a}</p>
    </details>
  );
}
