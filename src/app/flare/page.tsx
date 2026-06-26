"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { DocsShell } from "@/components/docs/DocsShell";

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

const toc = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "fcc", label: "FCC" },
  { id: "features", label: "What's Private" },
  { id: "security", label: "Security" },
  { id: "faq", label: "FAQ" },
];

export default function FlarePage() {
  const [active, setActive] = useState("overview");

  return (
    <DocsShell
      nav={nav}
      toc={toc}
      active={active}
      onActiveChange={setActive}
      sidebarFooter={
        <a href="/chains" className="block px-3 text-[11px] text-foreground/35 transition-colors hover:text-foreground/60">
          All chains
        </a>
      }
    >
      <Section id="overview">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
          Flare
        </p>
        <h1 className="font-serif text-[32px] leading-tight md:text-[38px]">
          Private DeFi on Flare
        </h1>
        <p className="mt-5 text-[15px] leading-[1.8] text-foreground/55">
          One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
        </p>
        <p className="mt-3 text-[15px] leading-[1.8] text-foreground/55">
          Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one, not even us, can peek into.
        </p>
      </Section>

      <Hr />

      <Section id="problem">
        <h2 className="font-serif text-[26px]">The Problem</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
        </p>
      </Section>

      <Hr />

      <Section id="how-it-works">
        <h2 className="font-serif text-[26px]">How It Works</h2>
        <div className="mt-6 space-y-5">
          <Step n="1" title="You deposit once" text="Your tokens go into the EncryptedVault smart contract. This is your only on-chain transaction. After this, you are invisible." />
          <Step n="2" title="You sign instructions off-chain" text="Zero gas. You sign an encrypted instruction from your wallet. Nothing hits the chain yet." />
          <Step n="3" title="FCC executes privately" text="Your instruction runs inside Flare's secure hardware from a shared execution wallet. SparkDEX, Kinetic, Firelight see our contract address. No link back to you." />
          <Step n="4" title="You receive encrypted notes" text="Your balance lives on-chain as encrypted data. Only your key can read it. To everyone else it is unreadable noise." />
        </div>
      </Section>

      <Hr />

      <Section id="fcc">
        <h2 className="font-serif text-[26px]">FCC (Flare Confidential Compute)</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          All private execution on Flare runs inside FCC. TEE-based secure hardware built natively into the Flare network. No one, including Encrypted Finance, can see what happens inside. Your transactions are signed off-chain and executed from a shared wallet, breaking any on-chain link to your identity.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <InfoBox label="Encryption" value="ECIES" />
          <InfoBox label="Authorization" value="EIP-712 Signatures" />
          <InfoBox label="Trust" value="TEE Attestation" />
          <InfoBox label="Price Feeds" value="FTSO Oracle" />
        </div>
      </Section>

      <Hr />

      <Section id="cryptography">
        <h2 className="font-serif text-[26px]">How the Cryptography Actually Works</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          This section is for people who want to understand exactly what is happening under the hood. If you are not technical, skip to the next section.
        </p>
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
        <h2 className="font-serif text-[26px]">Built on Flare&apos;s Native Infrastructure</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          We are not bolting privacy onto Flare as an afterthought. We are built directly on Flare&apos;s core protocols.
        </p>
        <div className="mt-6 space-y-3">
          <InfraBlock title="FCC (Flare Confidential Compute)" text="The execution engine. Your instructions run inside tamper-proof hardware. Nobody can peek into the enclave, not us, not validators, not anyone. The TEE's private key is hardware-sealed and cannot be extracted by the operator." />
          <InfraBlock title="FTSO (Flare Time Series Oracle)" text="Real-time price feeds. Your swaps and limit orders use live oracle prices without revealing your trading strategy." />
          <InfraBlock title="FDC (Flare Data Connector)" text="Cross-chain verification. Prove things happened on Bitcoin or XRP Ledger without exposing who is asking." />
        </div>
      </Section>

      <Hr />

      <Section id="features">
        <h2 className="font-serif text-[26px]">What&apos;s Private</h2>
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
        <h2 className="font-serif text-[26px]">Selective Disclosure</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          Privacy does not mean hiding everything forever. You choose what to reveal, when, and to whom.
        </p>
        <p className="mt-3 text-[15px] leading-[1.8] text-foreground/55">
          The TEE generates scoped, time-bound attestations on demand. You specify exactly what to prove. The TEE reads your encrypted notes internally, computes the proof, signs the attestation with its hardware-sealed key, and posts it on-chain. Nothing beyond what you requested leaves the enclave. Every proof has an expiry you set. You can revoke any proof at any time.
        </p>
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
        <h2 className="font-serif text-[26px]">Security</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          This is not custodial. We never hold your keys.
        </p>
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
        <h2 className="font-serif text-[26px]">Gas</h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55">
          You pay gas once on your deposit. After that, the execution wallet covers all gas costs. A small relay fee of 0.2 to 0.5 percent per transaction covers it. You never need to hold FLR for gas again.
        </p>
      </Section>

      <Hr />

      <Section id="faq">
        <h2 className="font-serif text-[26px]">FAQ</h2>
        <div className="mt-6 divide-y divide-foreground/10">
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

      <div className="mt-14 border-t border-foreground/10 pt-6">
        <p className="text-[11px] text-foreground/30">2026 Encrypted Finance.</p>
      </div>
    </DocsShell>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-20 py-6">{children}</section>;
}

function Hr() {
  return <hr className="my-2 border-foreground/10" />;
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/15 font-mono text-[11px] text-foreground/40">
        {n}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-foreground/90">{title}</p>
        <p className="text-[14px] leading-[1.7] text-foreground/50">{text}</p>
      </div>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-foreground/10 bg-surface/60 px-3 py-2.5">
      <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/40">{label}</p>
      <p className="mt-0.5 text-[12px] font-medium text-foreground/70">{value}</p>
    </div>
  );
}

function CryptoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-surface/40 px-4 py-4">
      <p className="mb-1 text-[13px] font-bold text-foreground/75">{title}</p>
      <p className="text-[13px] leading-[1.7] text-foreground/50">{text}</p>
    </div>
  );
}

function InfraBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-surface/40 px-4 py-4">
      <p className="text-[14px] font-bold text-foreground/85">{title}</p>
      <p className="mt-1 text-[13px] leading-[1.7] text-foreground/50">{text}</p>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
      <p className="text-[14px] leading-[1.7] text-foreground/55">
        <span className="font-medium text-foreground/85">{title}</span> {desc}
      </p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer select-none items-center justify-between py-3.5">
        <span className="pr-4 text-[14px] text-foreground/75">{q}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-foreground/30 transition-transform group-open:rotate-90">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-3.5 text-[14px] leading-[1.7] text-foreground/50">{a}</p>
    </details>
  );
}
