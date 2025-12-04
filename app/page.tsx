'use client';

import { useState } from "react";
import { Download, Sun, Moon, Palette } from "lucide-react";

export default function Page() {
  const resumeLink = "/Archie_Crawford_Resume.pdf"; // drop your PDF into /public

  const accentOptions = [
    { key: "cyanViolet", name: "Cyan/Violet", from: "from-cyan-400", to: "to-violet-400" },
    { key: "blueIndigo", name: "Blue/Indigo", from: "from-blue-400", to: "to-indigo-500" },
    { key: "orangeTeal", name: "Orange/Teal", from: "from-orange-400", to: "to-teal-400" },
    { key: "pinkPurple", name: "Pink/Purple", from: "from-pink-400", to: "to-purple-500" },
  ] as const;

  type Accent = typeof accentOptions[number];
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [accent, setAccent] = useState<Accent>(accentOptions[0]);

  const skills = [
    { group: "Security Platforms", items: ["Tanium Comply", "CrowdStrike Falcon", "Rapid7 InsightVM", "AppOmni", "Reco.ai", "Proofpoint"] },
    { group: "Endpoint / Device", items: ["Microsoft Intune", "Jamf", "SCCM", "Workspace ONE (migration)"] },
    { group: "Cloud & Identity", items: ["Azure AD", "Okta SSO/SAML", "Azure Key Vault"] },
    { group: "Automation & Languages", items: ["PowerShell", "Python", "SQL", "Bash"] },
    { group: "SIEM & Analytics", items: ["Splunk", "Elastic", "LogRhythm", "Windows Event Collector", "Rsyslog"] },
  ];

  const projects = [
    { title: "Endpoint Compliance Dashboard", badge: "Python + Streamlit",
      blurb: "Aggregates Tanium, Rapid7, and CrowdStrike into SQLite; real‑time analytics and executive KPIs.",
      image: "/screens/compliance-dashboard.png" },
    { title: "CIS Benchmark Automation", badge: "Tanium Comply + PowerShell",
      blurb: "Automated CIS controls reporting across Windows/macOS/Linux with scheduled remediation reports.",
      image: "/screens/cis-automation.png" },
    { title: "SaaS Access Governance", badge: "Okta + Reco.ai",
      blurb: "SSO integrations, anomaly monitoring, and least‑privilege workflows for internal apps.",
      image: "/screens/saas-governance.png" },
  ];

  const experience = [
    { role: "Senior Cyber Security Engineer", company: "Bankers Healthcare Group (BHG)",
      location: "Remote – Davie, FL", dates: "June 2022 – Present",
      points: [
        "Built Endpoint Compliance Dashboard (Python/Streamlit) integrating Tanium, Rapid7, CrowdStrike into SQLite.",
        "Automate CIS Benchmark compliance via Tanium Comply and PowerShell.",
        "SaaS monitoring with Reco.ai; Okta SSO integrations for internal apps.",
        "Azure Key Vault for secrets; scripted credential rotation and reporting.",
      ]},
    { role: "Security Engineer", company: "Ace Group LLC", location: "Atlanta, GA", dates: "Sept 2021 – Dec 2022",
      points: ["Okta SSO for SaaS; SCCM + PowerShell for patch and asset compliance.",
               "AppOmni posture assessments; Rapid7 scans and Wireshark network analysis."]},
    { role: "Cloud Security Engineer", company: "Community Loans of America", location: "Atlanta, GA", dates: "Jan 2019 – Nov 2021",
      points: ["Nextcloud on CentOS for secure PII workflows; Carbon Black + Elastic + AlienVault.",
               "Nessus / pen‑testing; LAMP hardening for internal apps."]},
  ];

  const bgBase = theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const panel = theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-slate-200";
  const subtext = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`min-h-screen w-full ${bgBase}`}
      style={{ backgroundImage: theme === "dark"
        ? `radial-gradient(1200px 600px at 80% -10%, rgba(110,231,255,.10), transparent), radial-gradient(1000px 500px at -20% 10%, rgba(167,139,250,.12), transparent)`
        : `radial-gradient(1200px 600px at 80% -10%, rgba(2,132,199,.08), transparent), radial-gradient(1000px 500px at -20% 10%, rgba(99,102,241,.08), transparent)` }}
    >
      <header className={\`sticky top-0 z-40 backdrop-blur \${theme==="dark"?"supports-[backdrop-filter]:bg-slate-950/50":"supports-[backdrop-filter]:bg-white/50"} border-b \${theme==="dark"?"border-white/5":"border-slate-200"}\`}>
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className={\`h-8 w-8 rounded-xl bg-gradient-to-br \${accent.from} \${accent.to} shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)]\`} />
            <span className={\`text-sm tracking-widest \${subtext}\`}>ARCHIE CRAWFORD JR</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#blog" className="hover:opacity-80">Blog</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={resumeLink} className={\`rounded-xl px-3 py-1.5 text-sm border \${panel} flex items-center gap-1\`}>
              <Download size={16}/> Résumé
            </a>
            <button onClick={() => setTheme(theme==="dark"?"light":"dark")} className={\`rounded-xl px-3 py-1.5 text-sm border \${panel} flex items-center gap-1\`}>
              {theme==="dark" ? <Sun size={16}/> : <Moon size={16}/>}{theme==="dark"?"Light":"Dark"}
            </button>
            <div className={\`rounded-xl px-2 py-1.5 text-sm border \${panel} hidden md:flex items-center gap-2\`}>
              <Palette size={16}/>
              {accentOptions.map(opt => (
                <button key={opt.key} onClick={()=>setAccent(opt)} className={\`h-4 w-8 rounded-full bg-gradient-to-r \${opt.from} \${opt.to} \${accent.key===opt.key?"ring-2 ring-white/50":""}\`} aria-label={opt.name} />
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className={\`text-xs tracking-widest mb-4 \${theme==="dark"?"text-cyan-300":"text-cyan-700"}\`}>SENIOR CYBER SECURITY ENGINEER</p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Information Security • Endpoint Compliance • Automation & SaaS Security
            </h1>
            <p className={\`mt-5 max-w-prose \${subtext}\`}>
              I build automated compliance and security analytics that reduce risk and accelerate decisions —
              from Tanium Comply reporting and CIS enforcement to SaaS access governance with Okta and Reco.ai.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className={\`rounded-2xl px-4 py-2 border \${panel} bg-gradient-to-r \${accent.from}/20 \${accent.to}/20\`}>View Projects</a>
              <a href="#contact" className={\`rounded-2xl px-4 py-2 border \${panel}\`}>Contact</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
              <div className={\`rounded-xl border p-3 \${panel}\`}>
                <div>Tanium • Intune</div><div className={subtext}>CrowdStrike • Rapid7</div>
              </div>
              <div className={\`rounded-xl border p-3 \${panel}\`}>
                <div>Okta • Reco.ai</div><div className={subtext}>Azure Key Vault</div>
              </div>
              <div className={\`rounded-xl border p-3 \${panel}\`}>
                <div>Python • PowerShell</div><div className={subtext}>Streamlit • SQL</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={\`rounded-3xl border p-6 shadow-2xl \${panel}\`}>
              <div className={\`rounded-2xl border p-4 \${panel}\`}>
                <div className={\`text-xs mb-2 \${subtext}\`}>Live KPI Mock</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Endpoints", value: "1,284" },
                    { label: "Compliant", value: "92%" },
                    { label: "Findings", value: "241" },
                    { label: "MTTR", value: "4.2d" },
                  ].map(k => (
                    <div key={k.label} className={\`rounded-xl p-4 \${panel}\`}>
                      <div className="text-2xl font-semibold">{k.value}</div>
                      <div className="text-[11px] tracking-widest opacity-70">{k.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={\`mt-4 text-[11px] opacity-70 \${subtext}\`}>*Demo data. Real dashboards available upon request.</div>
            </div>
            <div className={\`absolute -inset-2 -z-10 blur-2xl opacity-30 bg-gradient-to-r \${accent.from} \${accent.to} rounded-[32px]\`} />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          <span className={\`text-xs \${subtext}\`}>Selected engineering and security work</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.title} className={\`rounded-2xl border p-5 hover:shadow transition \${panel}\`}>
              <div className={\`rounded-lg overflow-hidden border mb-3 \${panel}\`}>
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              </div>
              <div className={\`text-xs mb-2 \${theme==="dark"?"text-cyan-300":"text-cyan-700"}\`}>{p.badge}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className={\`mt-2 text-sm \${subtext}\`}>{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-4">
          {experience.map(e => (
            <div key={e.company} className={\`rounded-2xl border p-5 \${panel}\`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-medium">{e.role} • {e.company}</div>
                  <div className={\`text-xs \${subtext}\`}>{e.location}</div>
                </div>
                <div className={\`text-xs \${subtext}\`}>{e.dates}</div>
              </div>
              <ul className={\`mt-3 list-disc pl-5 text-sm space-y-1 \${subtext}\`}>
                {e.points.map((pt, idx) => (<li key={idx}>{pt}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map(s => (
            <div key={s.group} className={\`rounded-2xl border p-5 \${panel}\`}>
              <div className="text-sm">
                <span className="font-medium">{s.group}:</span> <span className={subtext}>{s.items.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Notes & Blog</h2>
          <span className={\`text-xs \${subtext}\`}>Short write‑ups, how‑tos, and ideas</span>
        </div>
        <p className={subtext}>Coming soon.</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className={\`rounded-3xl border p-6 \${panel}\`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Let’s secure and automate something great.</h3>
              <p className={\`\${subtext} mt-1\`}>Based in Atlanta • Open to remote opportunities.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:Archie.Crawford1@gmail.com" className={\`rounded-2xl px-4 py-2 border \${panel}\`}>Email</a>
              <a href="tel:+17573535324" className={\`rounded-2xl px-4 py-2 border \${panel}\`}>Call</a>
              <a href="https://www.linkedin.com/in/archie-crawford-jr-9a71126a/" target="_blank" className={\`rounded-2xl px-4 py-2 border \${panel}\`}>LinkedIn</a>
            </div>
          </div>
          <div className={\`text-xs mt-4 \${subtext}\`}>
            Place your PDF at <code>/public/Archie_Crawford_Resume.pdf</code> or run <code>npm run generate:pdf</code> to create it from <code>public/resume.html</code>.
          </div>
        </div>
        <footer className={\`text-xs text-center mt-8 pb-10 \${subtext}\`}>
          © {new Date().getFullYear()} Archie Crawford Jr. Built with Next.js & Tailwind.
        </footer>
      </section>
    </div>
  );
}
