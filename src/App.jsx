import React, { useState } from 'react';
import { 
  Car, 
  Music, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Activity, 
  Sparkles, 
  Rocket, 
  Code2,
  Zap,
  Globe
} from 'lucide-react';

const projects = [
  {
    id: 'auto-service',
    title: 'Auto Service Tbilisi',
    subtitle: 'AI-Powered Auto Ecosystem & Realtime Bidding',
    description: 'საქართველოში პირველი სრულად ციფრული ავტო-ეკოსისტემა. მოიცავს AI ხმის დიაგნოსტიკას (94% სიზუსტით), WebSocket რეალურ დროში ტენდერებს, უსაფრთხო Escrow დეპოზიტებს, QR საგარანტიო ტალონებსა და B2B კორპორატიული ფლოტის მართვას.',
    icon: Car,
    liveUrl: 'https://auto-service-tbilisi.vercel.app/',
    githubUrl: 'https://github.com/laasha/------------.git',
    status: 'Active',
    readiness: {
      frontend: 95,
      backend: 45,
      overall: 80
    },
    metrics: [
      { label: 'AI Diagnostic Precision', value: '94%' },
      { label: 'Realtime Bids', value: '1-Sec' },
      { label: 'QR Guarantee', value: '6-Month' },
      { label: 'Fairness Index', value: '98%' }
    ],
    features: [
      '🤖 AI Voice & Sound Diagnostic Engine',
      '📡 Realtime WebSocket Live Bidding',
      '🔐 Escrow & TBC / Apple Pay Deposit',
      '📜 6-Month QR-Code Digital Warranty',
      '🔑 1-Click Ownership Transfer',
      '📊 B2B Corporate Fleet Manager'
    ],
    tech: ['React 19', 'Vite', 'Supabase Architecture', 'WebSockets', 'PostGIS Geometry', 'Escrow Engine'],
    color: '#06b6d4'
  },
  {
    id: 'narnari-events',
    title: 'NARNARI Events',
    subtitle: 'Electronic Music Gathering & Ticketing Engine',
    description: 'NARNARI-ს იუბილესა და ელექტრონული მუსიკის ივენთების მართვის პლატფორმა. მოიცავს ავტომატურ QR ფასდაკლების კოდებს, სტუმრების რეგისტრაციას, Admin Dashboard-სა და Ticket Scanner მობილურ აპლიკაციას.',
    icon: Music,
    liveUrl: 'https://narnari-events.vercel.app/',
    githubUrl: 'https://github.com/laasha/Narnari-Events.git',
    status: 'Active',
    readiness: {
      frontend: 90,
      backend: 80,
      overall: 85
    },
    metrics: [
      { label: 'Event Series', value: '#04' },
      { label: 'QR Scanner', value: 'Instant' },
      { label: 'Multilingual', value: 'GE / EN' },
      { label: 'AI Audio', value: 'Live' }
    ],
    features: [
      '🎟️ Dynamic QR Discount Code Generator',
      '📊 Admin Guest Management Dashboard',
      '📱 Built-in Ticket Scanner Interface',
      '🌐 Seamless GE/EN Localization',
      '🎵 Ambient Player & Audio Experience'
    ],
    tech: ['React 19', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind CSS', 'Motion'],
    color: '#a855f7'
  }
];

export default function App() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header / Hero */}
      <header style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            color: '#818cf8',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            <Sparkles size={16} /> APP Factory Portfolio Ecosystem
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            ინოვაციური ციფრული <br />
            <span className="gradient-text">პროექტები & პლატფორმები</span>
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 40px'
          }}>
            APP Factory-ს მიერ შემუშავებული მაღალი სიზუსტის ვებ-აპლიკაციები, AI ინტეგრაციები და რეალური დროის ეკოსისტემები.
          </p>

          {/* Overall Stats Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '40px'
          }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}><Rocket size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>2 აქტიური</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>გამოქვეყნებული პროექტი</div>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ color: 'var(--accent-emerald)', marginBottom: '8px' }}><CheckCircle2 size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>92.5%</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Frontend Production Readiness</div>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ color: 'var(--accent-purple)', marginBottom: '8px' }}><Cpu size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>AI & WebSockets</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>თანამედროვე არქიტექტურა</div>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Showcase Section */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Layers style={{ color: 'var(--accent-indigo)' }} />
          პროექტების ჩამონათვალი & მზაობის სტატუსი
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="glass-card" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                {/* Background ambient glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '250px',
                  height: '250px',
                  background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                  {/* Left Column: Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: `${project.color}15`,
                        color: project.color
                      }}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{project.title}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{project.subtitle}</p>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
                      {project.metrics.map((m, idx) => (
                        <div key={idx} style={{
                          padding: '10px 14px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.label}</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: project.color }}>{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          background: project.color,
                          color: '#fff',
                          fontWeight: 600,
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          boxShadow: `0 4px 14px ${project.color}40`
                        }}
                      >
                        <Globe size={18} /> Live Demo ნახვა
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Readiness Breakdown & Features */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Activity size={18} style={{ color: 'var(--accent-amber)' }} />
                      მზაობის ინდიკატორები (Readiness)
                    </h4>

                    {/* Progress Bars */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                          <span>გამოქვეყნებისთვის მზად (Frontend / UI):</span>
                          <span style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>{project.readiness.frontend}%</span>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${project.readiness.frontend}%`, height: '100%', background: '#10b981', borderRadius: '4px' }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                          <span>რეალური გამოყენებისთვის (Backend & Live DB):</span>
                          <span style={{ fontWeight: 700, color: 'var(--accent-amber)' }}>{project.readiness.backend}%</span>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${project.readiness.backend}%`, height: '100%', background: '#f59e0b', borderRadius: '4px' }} />
                        </div>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <h5 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px' }}>
                      ძირითადი ფუნქციონალი:
                    </h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem' }}>
                      {project.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '20px' }}>
                      {project.tech.map((t, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.75rem',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          color: '#d1d5db'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: '80px',
        textAlign: 'center',
        padding: '32px 24px',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
      }}>
        © 2026 APP Factory Portfolio Ecosystem. ყველა უფლება დაცულია.
      </footer>
    </div>
  );
}
