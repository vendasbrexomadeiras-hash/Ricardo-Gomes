import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  Swords, 
  Settings, 
  UserCircle,
  ChevronRight,
  Store,
  Calendar,
  Medal,
  Settings2,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';

interface NavItemProps {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
  return (
    <a 
      href="#" 
      className={`flex flex-col items-center justify-center px-4 py-1 transition-colors tap-highlight-none active:scale-90 duration-200 ${
        active 
          ? 'bg-primary-container/40 text-secondary rounded-xl' 
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      <span className="text-[10px] font-semibold uppercase tracking-tighter mt-1">{label}</span>
    </a>
  );
}

interface SettingsCardProps {
  icon: typeof Store;
  title: string;
  description: string;
  badge?: string;
  isFeatured?: boolean;
}

function SettingsCard({ icon: Icon, title, description, badge, isFeatured }: SettingsCardProps) {
  return (
    <motion.button 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left group"
    >
      <div className={`bg-surface-container-low p-6 rounded-xl flex items-center justify-between transition-all duration-300 hover:bg-surface-container-high ${
        isFeatured ? 'border-l-4 border-secondary/50' : ''
      }`}>
        <div className="flex items-center gap-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
            isFeatured ? 'bg-secondary-container/20 text-secondary' : 'bg-primary-container text-primary'
          }`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-on-surface group-hover:text-secondary transition-colors">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {badge && (
                <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {badge}
                </span>
              )}
              <p className="text-on-surface-variant text-xs">{description}</p>
            </div>
          </div>
        </div>
        <ChevronRight size={20} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_8px_32px_0_rgba(0,35,102,0.15)]">
        <div className="flex items-center gap-3">
          <img 
            alt="Projeto Vidas Logo" 
            className="w-8 h-8 rounded-full border border-primary/20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2gVb0EgWWXDE69RLaHExZLwqYfixFNqMDSaIggsunR4RNGaV-mwxUi0v0b-VClIskuVfdcalZIC45sF2wXZHUc4wgCXeSNJkJ-ffgeJXeQZMT7RXKQi-nj4MnqNR2iX6bK88xua1J0Qu-AxUxE20k-XxlFH0uuHRFpi7AYFGutubHrwNhH_yDPHgEpe6ZiY1VzFPFPoHqzPE1-HoLJjWU_EPxCDTSmF9gdCba8qvPJ6bkroOXMYtNbJK7ITeBgcZB22kuMxRRy1fc"
            referrerPolicy="no-referrer"
          />
          <h1 className="font-headline tracking-widest font-black uppercase text-xl text-primary">
            Projeto Vidas
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <UserCircle size={28} className="text-primary hover:opacity-80 transition-opacity cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 pt-24 pb-32 px-6 max-w-2xl mx-auto w-full">
        {/* Hero Section */}
        <section className="mb-12 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline text-4xl font-extrabold text-on-surface mb-2 tracking-tight"
          >
            Configurações do Projeto
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant font-light text-sm"
          >
            Um Projeto de Transformação e Evolução.
          </motion.p>
        </section>

        {/* Bento Style List */}
        <div className="grid gap-6">
          <SettingsCard 
            icon={Store} 
            title="Perfil da Academia" 
            description="Endereço, telefone e identidade visual." 
          />
          <SettingsCard 
            icon={Calendar} 
            title="Gerenciar Aulas" 
            description="Configuração de grade horária e modalidades." 
          />
          <SettingsCard 
            icon={Medal} 
            title="Regras de Graduação" 
            description="Critérios de mérito." 
            badge="Regra de 65 Aulas"
            isFeatured
          />
          <SettingsCard 
            icon={Settings2} 
            title="Ajustes do Aplicativo" 
            description="Notificações, tema e segurança." 
          />
        </div>

        {/* Support Section */}
        <section className="mt-12 pt-12 border-t border-outline-variant/10">
          <h4 className="font-headline text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">
            Suporte e Conta
          </h4>
          <div className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between p-3 hover:bg-surface-container/50 rounded-lg transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <HelpCircle size={20} className="text-on-surface-variant" />
                <span className="text-sm">Central de Ajuda</span>
              </div>
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-error/10 rounded-lg transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <LogOut size={20} className="text-error" />
                <span className="text-sm text-error">Sair da Conta</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-on-surface-variant/40 font-medium tracking-widest uppercase italic">
              Projeto Vidas v1.0.0 • Transformação e Evolução
            </p>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-surface/90 backdrop-blur-lg z-50 pb-safe border-t border-outline-variant/10">
        <NavItem icon={LayoutDashboard} label="Início" />
        <NavItem icon={Wallet} label="Pagamentos" />
        <NavItem icon={Swords} label="Aulas" />
        <NavItem icon={Settings} label="Ajustes" active />
      </nav>
    </div>
  );
}
