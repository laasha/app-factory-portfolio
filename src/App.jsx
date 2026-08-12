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
  Globe,
  PartyPopper,
  Sprout,
  GraduationCap,
  Brain,
  Compass,
  Radio,
  Eye,
  Wrench,
  Scale,
  Briefcase,
  LayoutDashboard,
  Search,
  BookOpen,
  Sun,
  BookMarked,
  Heart,
  Palette
} from 'lucide-react';

const allProjects = [
  // 01_flagship
  {
    id: 'party-pass',
    title: 'Party Pass (sufra.fun)',
    subtitle: 'Event Ticketing & Nightlife Platform',
    category: 'Flagship',
    description: 'ღონისძიებების, წვეულებებისა და ბილეთების მართვის თანამედროვე პლატფორმა.',
    icon: PartyPopper,
    liveUrl: 'https://sufra.fun',
    githubUrl: 'https://github.com/laasha/party-pass',
    localPath: 'D:\\Projects\\01_flagship\\party-pass',
    status: 'Live',
    readiness: { frontend: 100, backend: 95, overall: 98 },
    tech: ['React', 'Next.js', 'Vercel', 'Tailwind'],
    color: '#ec4899'
  },
  {
    id: 'tese-agrotech',
    title: 'Tese Agrotech (tese.ge)',
    subtitle: 'Smart Agriculture & Drone Monitoring Platform',
    category: 'Flagship',
    description: 'აგრო-ტექნოლოგიური პლატფორმა დრონების მონიტორინგისა და სოფლის მეურნეობის ციფრული მართვისთვის.',
    icon: Sprout,
    liveUrl: 'https://tese.ge',
    githubUrl: 'https://github.com/laasha/tese-agrotech',
    localPath: 'D:\\Projects\\01_flagship\\tese-agrotech',
    status: 'Live',
    readiness: { frontend: 98, backend: 90, overall: 94 },
    tech: ['React', 'Python Backend', 'Vercel', 'GIS'],
    color: '#10b981'
  },
  {
    id: 'auto-service',
    title: 'Auto Service Tbilisi',
    subtitle: 'AI-Powered Auto Ecosystem & Realtime Bidding',
    category: 'Flagship',
    description: 'საქართველოში პირველი სრულად ციფრული ავტო-ეკოსისტემა. AI დიაგნოსტიკა, WebSocket ტენდერები, Escrow დეპოზიტები და B2B ფლოტი.',
    icon: Car,
    liveUrl: 'https://auto-service-tbilisi.vercel.app/',
    githubUrl: 'https://github.com/laasha/auto-service',
    localPath: 'D:\\Projects\\01_flagship\\auto-service',
    status: 'Active',
    readiness: { frontend: 95, backend: 45, overall: 70 },
    tech: ['React 19', 'Vite', 'Supabase Arch', 'WebSockets'],
    color: '#06b6d4'
  },

  // 02_ai-edtech
  {
    id: 'ib-lesson-analyzer',
    title: 'IB Lesson Analyzer',
    subtitle: 'AI Curriculum & Lesson Plan Diagnostic',
    category: 'AI & EdTech',
    description: 'IB საერთაშორისო სტანდარტის გაკვეთილების გეგმებისა და კურიკულუმის AI ანალიზატორი.',
    icon: GraduationCap,
    localPath: 'D:\\Projects\\02_ai-edtech\\ib-lesson-analyzer',
    status: 'Deployed',
    readiness: { frontend: 90, backend: 75, overall: 82 },
    tech: ['React', 'TypeScript', 'Vercel', 'Gemini AI'],
    color: '#6366f1'
  },
  {
    id: 'pyp-behavior-tracker',
    title: 'IB PYP Behavior Tracker',
    subtitle: 'Student Behavior & Inquiry Analytics',
    category: 'AI & EdTech',
    description: 'დაწყებითი საფეხურის (PYP) მოსწავლეთა ქცევისა და აკადემიური პროგრესის მონიტორინგის სისტემა.',
    icon: Brain,
    localPath: 'D:\\Projects\\02_ai-edtech\\pyp-behavior-tracker',
    status: 'Deployed',
    readiness: { frontend: 88, backend: 70, overall: 79 },
    tech: ['React', 'TypeScript', 'Vercel'],
    color: '#8b5cf6'
  },
  {
    id: 'newton-admission',
    title: 'Newton Admission Wizard',
    subtitle: 'School Registration & Entry Assessment Portal',
    category: 'AI & EdTech',
    description: 'ნიუტონის თავისუფალი სკოლის მიღებისა და რეგისტრაციის ციფრული პორტალი.',
    icon: Compass,
    localPath: 'D:\\Projects\\02_ai-edtech\\newton-admission',
    status: 'Deployed',
    readiness: { frontend: 92, backend: 80, overall: 86 },
    tech: ['React', 'TypeScript', 'Node.js'],
    color: '#3b82f6'
  },
  {
    id: 'newton-pyp-planner',
    title: 'Newton School PYP Planner',
    subtitle: 'IB Curriculum & PYP Unit Planner Tool',
    category: 'AI & EdTech',
    description: 'ნიუტონის სკოლის IB PYP პროგრამის კურიკულუმისა და იუნიტების დაგეგმვის სისტემა.',
    icon: BookOpen,
    localPath: 'D:\\Projects\\02_ai-edtech\\newton-school-pyp-planner',
    status: 'Ready for Deploy',
    readiness: { frontend: 89, backend: 70, overall: 80 },
    tech: ['React', 'TypeScript', 'Vite'],
    color: '#8b5cf6'
  },
  {
    id: 'ai-career-companion',
    title: 'AI Career Companion',
    subtitle: 'Career Guidance & Skill Advisory AI',
    category: 'AI & EdTech',
    description: 'კარიერული განვითარების, უნარებისა და პროფესიული ორიენტაციის AI კონსულტანტი.',
    icon: Briefcase,
    localPath: 'D:\\Projects\\02_ai-edtech\\ai-career-companion',
    status: 'Ready for Deploy',
    readiness: { frontend: 88, backend: 65, overall: 76 },
    tech: ['React', 'Vite', 'Gemini AI'],
    color: '#10b981'
  },
  {
    id: 'newton-pyp-compass',
    title: 'Newton PYP Compass',
    subtitle: 'Elementary IB Learning Compass',
    category: 'AI & EdTech',
    description: 'დაწყებითი კლასების IB PYP სწავლების ციფრული კომპასი.',
    icon: Compass,
    localPath: 'D:\\Projects\\02_ai-edtech\\newton-pyp-compass',
    status: 'Ready for Deploy',
    readiness: { frontend: 86, backend: 60, overall: 73 },
    tech: ['React', 'TypeScript'],
    color: '#3b82f6'
  },
  {
    id: 'nfs-ai-portal',
    title: 'Newton Free School AI Portal',
    subtitle: 'Unified AI Ecosystem for Newton School',
    category: 'AI & EdTech',
    description: 'ნიუტონის თავისუფალი სკოლის AI სერვისებისა და პორტალების ერთიანი პლატფორმა.',
    icon: GraduationCap,
    localPath: 'D:\\Projects\\02_ai-edtech\\nfs-ai-portal',
    status: 'Ready for Deploy',
    readiness: { frontend: 90, backend: 75, overall: 82 },
    tech: ['React', 'TypeScript', 'Node.js'],
    color: '#6366f1'
  },
  {
    id: 'spectrogram',
    title: 'Spectrogram Visualizer',
    subtitle: 'Realtime Audio Frequency Visualizer',
    category: 'Spatial & Audio',
    description: 'აუდიო სიხშირეებისა და ხმის სპექტროგრამის რეალური დროის ვიზუალიზატორი.',
    icon: Radio,
    localPath: 'D:\\Projects\\03_spatial-audio\\spectrogram',
    status: 'Ready for Deploy',
    readiness: { frontend: 89, backend: 65, overall: 77 },
    tech: ['WebAudio API', 'Canvas API', 'React'],
    color: '#f43f5e'
  },
  {
    id: 'english-learning-hub',
    title: 'English Learning Hub',
    subtitle: 'Interactive Language & Vocabulary Platform',
    category: 'AI & EdTech',
    description: 'ინტერაქტიული პლატფორმა ინგლისური ენის შესასწავლად და სიტყვათა მარაგის გასამდიდრებლად.',
    icon: BookOpen,
    localPath: 'D:\\Projects\\02_ai-edtech\\english-learning-hub',
    status: 'Ready for Deploy',
    readiness: { frontend: 85, backend: 60, overall: 72 },
    tech: ['React', 'Vite', 'Tailwind'],
    color: '#f59e0b'
  },
  {
    id: 'psychometric-testing',
    title: 'Psychometric Testing Platform',
    subtitle: 'Psychological & Cognitive Assessment Engine',
    category: 'AI & EdTech',
    description: 'ფსიქომეტრული და კოგნიტური უნარების ტესტირების პროფესიონალური პლატფორმა.',
    icon: Activity,
    localPath: 'D:\\Projects\\02_ai-edtech\\psychometric-testing',
    status: 'Ready for Deploy',
    readiness: { frontend: 87, backend: 65, overall: 76 },
    tech: ['React', 'Vite', 'ChartJS'],
    color: '#14b8a6'
  },
  {
    id: 'peertutoring',
    title: 'PeerTutoring Platform',
    subtitle: 'Student-to-Student Mentorship Network',
    category: 'AI & EdTech',
    description: 'მოსწავლეთა და სტუდენტთა შორის ურთიერთსწავლებისა და მენტორობის პლატფორმა.',
    icon: GraduationCap,
    localPath: 'D:\\Projects\\02_ai-edtech\\peertutoring',
    status: 'Ready for Deploy',
    readiness: { frontend: 80, backend: 55, overall: 67 },
    tech: ['React', 'TypeScript'],
    color: '#06b6d4'
  },
  {
    id: 'story-generator',
    title: 'ამბების გენერატორი (Story Generator)',
    subtitle: 'AI Interactive Storytelling Engine',
    category: 'AI & EdTech',
    description: 'ინტერაქტიული მოთხრობებისა და ზღაპრების AI გენერატორი ბავშვებისა და მოსწავლეებისთვის.',
    icon: BookMarked,
    localPath: 'D:\\Projects\\02_ai-edtech\\story-generator',
    status: 'Ready for Deploy',
    readiness: { frontend: 86, backend: 70, overall: 78 },
    tech: ['React', 'Gemini AI', 'Tailwind'],
    color: '#ec4899'
  },
  {
    id: 'teacher-resource-finder',
    title: 'რესურსების მოძიება მასწავლებლებისთვის',
    subtitle: 'Educational Resource Search Platform',
    category: 'AI & EdTech',
    description: 'პედაგოგებისთვის სასწავლო მასალების, ტესტებისა და რესურსების AI საძიებო სისტემა.',
    icon: Search,
    localPath: 'D:\\Projects\\02_ai-edtech\\teacher-resource-finder',
    status: 'Ready for Deploy',
    readiness: { frontend: 84, backend: 65, overall: 74 },
    tech: ['React', 'Node.js'],
    color: '#3b82f6'
  },
  {
    id: 'everything-inside-you',
    title: 'ყველაფერი შენში (Everything Inside You)',
    subtitle: 'Mindfulness & Self-Development Portal',
    category: 'AI & EdTech',
    description: 'პერსონალური განვითარების, მინდფულნესისა და ფსიქოლოგიური მხარდაჭერის პლატფორმა.',
    icon: Heart,
    localPath: 'D:\\Projects\\02_ai-edtech\\everything-inside-you',
    status: 'Ready for Deploy',
    readiness: { frontend: 85, backend: 50, overall: 67 },
    tech: ['React', 'Vite'],
    color: '#f43f5e'
  },

  // 03_spatial-audio
  {
    id: 'mediapipe-web-midi',
    title: 'MediaPipe Web MIDI Controller',
    subtitle: 'Hand Gesture AI Sound & MIDI Synthesizer',
    category: 'Spatial & Audio',
    description: 'ხელის მოძრაობისა და ჟესტების AI ამოცნობა Web MIDI სინთეზატორების სამართავად.',
    icon: Radio,
    localPath: 'D:\\Projects\\03_spatial-audio\\mediapipe-web-midi',
    status: 'Deployed',
    readiness: { frontend: 94, backend: 80, overall: 87 },
    tech: ['MediaPipe AI', 'Web MIDI API', 'React'],
    color: '#f43f5e'
  },
  {
    id: 'vr-ar-portal',
    title: 'VR/AR Learning Portal',
    subtitle: '3D Immersive Spatial Educational Web App',
    category: 'Spatial & Audio',
    description: 'ინტერაქტიული 3D და AR/VR საგანმანათლებლო პორტალი.',
    icon: Eye,
    localPath: 'D:\\Projects\\03_spatial-audio\\vr-ar-portal',
    status: 'Ready for Deploy',
    readiness: { frontend: 86, backend: 60, overall: 73 },
    tech: ['Three.js', 'WebXR', 'React'],
    color: '#a855f7'
  },
  {
    id: 'flag-recognition',
    title: 'Flag Recognition Trainer',
    subtitle: 'AI Visual Computer Vision Trainer',
    category: 'Spatial & Audio',
    description: 'კომპიუტერული ხედვის AI მოდელი დროშებისა და გეოგრაფიული სიმბოლოების საცნობად.',
    icon: Zap,
    localPath: 'D:\\Projects\\03_spatial-audio\\flag-recognition',
    status: 'Deployed',
    readiness: { frontend: 90, backend: 70, overall: 80 },
    tech: ['TensorFlow.js', 'React', 'Vite'],
    color: '#eab308'
  },
  {
    id: 'aeropsych-os',
    title: 'AeroPsych OS',
    subtitle: 'Aviation Psychology Diagnostic System',
    category: 'Spatial & Audio',
    description: 'ავიაციის პილოტებისა და ეკიპაჟის ფსიქო-ფიზიოლოგიური მონიტორინგის OS.',
    icon: Cpu,
    localPath: 'D:\\Projects\\03_spatial-audio\\aeropsych-os',
    status: 'Ready for Deploy',
    readiness: { frontend: 82, backend: 50, overall: 66 },
    tech: ['React', 'Web Audio API'],
    color: '#3b82f6'
  },
  {
    id: 'neuro-synthesis-os',
    title: 'Neuro Synthesis OS',
    subtitle: 'Neural Sound Synthesis Engine',
    category: 'Spatial & Audio',
    description: 'ნეირონული აუდიო სინთეზატორი და აკუსტიკური ტალღების გენერატორი.',
    icon: Radio,
    localPath: 'D:\\Projects\\03_spatial-audio\\neuro-synthesis-os',
    status: 'Ready for Deploy',
    readiness: { frontend: 84, backend: 55, overall: 69 },
    tech: ['WebAudio Synth', 'React', 'Vite'],
    color: '#10b981'
  },
  {
    id: 'magic-solar-system-ar',
    title: 'ჯადოსნური მზის სისტემა (AR)',
    subtitle: 'Augmented Reality Solar System Experience',
    category: 'Spatial & Audio',
    description: 'გაფართოებული რეალობის (AR) 3D მზის სისტემა ასტრონომიის შესასწავლად.',
    icon: Sun,
    localPath: 'D:\\Projects\\03_spatial-audio\\magic-solar-system-ar',
    status: 'Ready for Deploy',
    readiness: { frontend: 88, backend: 60, overall: 74 },
    tech: ['WebXR', 'Three.js', 'React'],
    color: '#eab308'
  },
  {
    id: 'nimitta',
    title: 'Nimitta Digital Art & Music',
    subtitle: 'Audiovisual Art Showcase Ecosystem',
    category: 'Spatial & Audio',
    description: 'აუდიო-ვიზუალური ხელოვნების, მუსიკისა და ციფრული პროექტების ეკოსისტემა.',
    icon: Palette,
    localPath: 'D:\\Projects\\03_spatial-audio\\nimitta',
    status: 'Ready for Deploy',
    readiness: { frontend: 90, backend: 70, overall: 80 },
    tech: ['React', 'WebAudio API'],
    color: '#a855f7'
  },

  // 04_web3-apps
  {
    id: 'infiniteweb-dashboard',
    title: 'Infiniteweb AI Dashboard',
    subtitle: 'Multi-Agent AI Control Center',
    category: 'Web3 & Apps',
    description: 'მრავალ-აგენტიანი AI სისტემებისა და ავტომატიზაციების ცენტრალიზებული დეშბორდი.',
    icon: LayoutDashboard,
    localPath: 'D:\\Projects\\04_web3-apps\\infiniteweb-dashboard',
    status: 'Ready for Deploy',
    readiness: { frontend: 88, backend: 65, overall: 76 },
    tech: ['React', 'TypeScript', 'Node.js'],
    color: '#6366f1'
  },
  {
    id: 'navito-lifeline',
    title: 'Navito 3.0 LifeLine Suite',
    subtitle: 'Unified Emergency & Navigation Ecosystem',
    category: 'Web3 & Apps',
    description: 'სანავიგაციო და საგანგებო სიტუაციების მართვის ერთიანი ციფრული ეკოსისტემა.',
    icon: Compass,
    localPath: 'D:\\Projects\\04_web3-apps\\navito-lifeline',
    status: 'Ready for Deploy',
    readiness: { frontend: 91, backend: 70, overall: 80 },
    tech: ['React', 'Vite', 'Leaflet / Maps'],
    color: '#ef4444'
  },
  {
    id: 'narnari-events',
    title: 'NARNARI Events',
    subtitle: 'Electronic Music Gathering & Ticketing Engine',
    category: 'Web3 & Apps',
    description: 'NARNARI-ს იუბილესა და ელექტრონული მუსიკის ივენთების მართვის პლატფორმა. QR ფასდაკლებები და სკანერი.',
    icon: Music,
    liveUrl: 'https://narnari-events.vercel.app/',
    localPath: 'D:\\Projects\\04_web3-apps\\narnari-events',
    status: 'Active',
    readiness: { frontend: 90, backend: 80, overall: 85 },
    tech: ['React 19', 'TypeScript', 'Firebase', 'Gemini AI'],
    color: '#a855f7'
  },
  {
    id: 'syncboard',
    title: 'SyncBoard Dashboard',
    subtitle: 'Realtime Collaboration Canvas',
    category: 'Web3 & Apps',
    description: 'გუნდური მუშაობისა და რეალური დროის სინქრონული დაფა.',
    icon: LayoutDashboard,
    localPath: 'D:\\Projects\\04_web3-apps\\syncboard',
    status: 'Ready for Deploy',
    readiness: { frontend: 85, backend: 60, overall: 72 },
    tech: ['React', 'WebSockets'],
    color: '#06b6d4'
  },
  {
    id: 'lost-and-found',
    title: 'Lost & Found Georgia',
    subtitle: 'Community Item Recovery Portal',
    category: 'Web3 & Apps',
    description: 'დაკარგული და ნაპოვნი ნივთების/ცხოველების ძიებისა და პოვნის პლატფორმა.',
    icon: Search,
    localPath: 'D:\\Projects\\04_web3-apps\\lost-and-found',
    status: 'Ready for Deploy',
    readiness: { frontend: 87, backend: 65, overall: 76 },
    tech: ['React', 'Vite', 'Supabase Spec'],
    color: '#f59e0b'
  },
  {
    id: 'garant-construction',
    title: 'Garant Construction Management',
    subtitle: 'Building & Construction Progress Tracker',
    category: 'Web3 & Apps',
    description: 'სამშენებლო ობიექტების, მასალებისა და პროცესების ციფრული მართვა.',
    icon: Wrench,
    localPath: 'D:\\Projects\\04_web3-apps\\garant-construction',
    status: 'Active',
    readiness: { frontend: 83, backend: 55, overall: 69 },
    tech: ['React', 'Node.js'],
    color: '#78716c'
  },
  {
    id: 'nestani-beauty-academy',
    title: 'Nestani Beauty Academy',
    subtitle: 'Beauty School & Appointment Booking',
    category: 'Web3 & Apps',
    description: 'სილამაზის აკადემიის კურსების, რეგისტრაციისა და ჯავშნების პლატფორმა.',
    icon: Sparkles,
    localPath: 'D:\\Projects\\04_web3-apps\\nestani-beauty-academy',
    status: 'Active',
    readiness: { frontend: 88, backend: 60, overall: 74 },
    tech: ['React', 'Vite', 'Tailwind'],
    color: '#ec4899'
  },
  {
    id: 'legal-helper-ge',
    title: 'Legal Helper GE',
    subtitle: 'AI Legal Advice & Document Assistant',
    category: 'Web3 & Apps',
    description: 'იურიდიული კონსულტაციებისა და დოკუმენტების AI ასისტენტი საქართველოში.',
    icon: Scale,
    localPath: 'D:\\Projects\\04_web3-apps\\legal-helper-ge',
    status: 'Active',
    readiness: { frontend: 86, backend: 65, overall: 75 },
    tech: ['React', 'OpenAI/Gemini API'],
    color: '#6366f1'
  },
  {
    id: 'gza',
    title: 'GZA Project',
    subtitle: 'Route & Road Network Platform',
    category: 'Web3 & Apps',
    description: 'გზებისა და მარშრუტების დაგეგმვა/მონიტორინგის პლატფორმა.',
    icon: Compass,
    localPath: 'D:\\Projects\\04_web3-apps\\gza',
    status: 'Ready for Deploy',
    readiness: { frontend: 84, backend: 55, overall: 69 },
    tech: ['React', 'Maps API'],
    color: '#10b981'
  },

  // 06_tools
  {
    id: 'world-architect',
    title: 'World Architect (Nano Interface)',
    subtitle: 'AI Generative Environment Builder',
    category: 'Tools & Utilities',
    description: 'სამყაროების, გარემოსა და ნანო-ინტერფეისების გენერატიული AI ინსტრუმენტი.',
    icon: Briefcase,
    localPath: 'D:\\Projects\\06_tools\\world-architect',
    status: 'Local Only',
    readiness: { frontend: 82, backend: 40, overall: 61 },
    tech: ['React', 'Canvas API', 'AI Prompts'],
    color: '#8b5cf6'
  },
  {
    id: 'auto-mouse-keyboard',
    title: 'Auto Mouse Keyboard Automation',
    subtitle: 'Go Language Desktop Automation Tool',
    category: 'Tools & Utilities',
    description: 'მაუსისა და კლავიატურის ავტომატიზაციის Go ენაზე დაწერილი Desktop ინსტრუმენტი.',
    icon: Wrench,
    localPath: 'D:\\Projects\\06_tools\\auto-mouse-keyboard',
    status: 'CLI / Utility',
    readiness: { frontend: 70, backend: 90, overall: 80 },
    tech: ['Go (Golang)', 'Desktop Automation'],
    color: '#10b981'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Flagship', 'AI & EdTech', 'Spatial & Audio', 'Web3 & Apps', 'Tools & Utilities'];

  const filteredProjects = allProjects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCount = allProjects.length;

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header / Hero */}
      <header style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            <Sparkles size={16} /> Master Projects Ecosystem (`D:\Projects`)
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            სრული ციფრული <br />
            <span className="gradient-text">პროექტების პორტფოლიო</span>
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '750px',
            margin: '0 auto 40px'
          }}>
            კონსოლიდირებული {totalCount}-ვე პროექტი: Flagship აპლიკაციები, AI & EdTech პლატფორმები, Spatial Audio, AR/VR და Web3 ინსტრუმენტები.
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
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{totalCount} პროექტი</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>კონსოლიდირებულია D:\Projects-ში</div>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ color: 'var(--accent-emerald)', marginBottom: '8px' }}><CheckCircle2 size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{totalCount} Git Initialized</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>მზად არის GitHub Push-ისთვის</div>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ color: 'var(--accent-purple)', marginBottom: '8px' }}><Cpu size={24} /></div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>6 კატეგორია</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Flagship, AI, Spatial, AR/VR, Web3</div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          padding: '20px',
          borderRadius: '16px',
          background: 'rgba(18, 24, 38, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeCategory === cat ? 'var(--accent-indigo)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 0, 0, 0.3)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder={`ძებნა ${totalCount}-ვე პროექტში...`} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                outline: 'none',
                fontSize: '0.875rem',
                width: '200px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="glass-card" style={{ padding: '24px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        padding: '10px',
                        borderRadius: '10px',
                        background: `${project.color}15`,
                        color: project.color
                      }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{project.title}</h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-indigo)', fontWeight: 600 }}>{project.category}</span>
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: project.liveUrl ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      color: project.liveUrl ? '#34d399' : '#fbbf24',
                      border: `1px solid ${project.liveUrl ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                      fontWeight: 600
                    }}>
                      {project.status}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Readiness Progress Bar */}
                  <div style={{ marginBottom: '16px', background: 'rgba(0, 0, 0, 0.2)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>საერთო მზაობა:</span>
                      <span style={{ fontWeight: 700, color: project.color }}>{project.readiness.overall}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${project.readiness.overall}%`, height: '100%', background: project.color, borderRadius: '3px' }} />
                    </div>
                  </div>

                  {/* Path & Tech Tags */}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px', wordBreak: 'break-all' }}>
                    📁 <code style={{ color: '#9ca3af' }}>{project.localPath}</code>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.7rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#d1d5db'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          flex: 1,
                          padding: '8px 12px',
                          borderRadius: '6px',
                          background: project.color,
                          color: '#fff',
                          fontWeight: 600,
                          textDecoration: 'none',
                          fontSize: '0.8rem'
                        }}
                      >
                        <Globe size={15} /> Live Demo
                      </a>
                    )}
                    <a 
                      href={`https://github.com/laasha/${project.id}`} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#e5e7eb',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '0.8rem'
                      }}
                    >
                      <Code2 size={15} /> GitHub Repo
                    </a>
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
        © 2026 APP Factory Master Portfolio. {totalCount} პროექტი კონსოლიდირებულია `D:\Projects`-ში.
      </footer>
    </div>
  );
}
