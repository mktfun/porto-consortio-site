import PageLayout from "@/components/layout/PageLayout";
import SubPageHero from "@/components/layout/SubPageHero";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";

export default function SobreNos() {
    return (
        <PageLayout>
            <SubPageHero
                title="Sobre a JJ & Amorim"
                subtitle="Mais de uma década protegendo cargas, frotas e famílias com transparência e atendimento humanizado."
                breadcrumbs={[{ label: "Início", href: "/" }, { label: "Sobre Nós" }]}
            />

            {/* História */}
            <section className="py-20 bg-white dark:bg-[#1e293b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-base text-[#3b5bdb] font-semibold tracking-wide uppercase mb-2">Nossa História</h2>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Nascemos da estrada</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                A JJ & Amorim Corretora de Seguros nasceu da vivência direta com o segmento de transporte rodoviário de cargas. Fundada em São Bernardo do Campo - SP, a corretora foi criada com o propósito de oferecer soluções de seguros verdadeiramente especializadas para transportadoras e embarcadores.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Com mais de 10 anos de atuação, construímos nossa reputação na transparência, agilidade e no comprometimento genuíno com a proteção dos nossos clientes e parceiros.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Hoje atendemos centenas de empresas em todo o território nacional, com uma equipe dedicada que entende os desafios reais da logística brasileira.
                            </p>
                        </div>
                        <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-6">
                            <div className="bg-[#f8fafc] dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <Clock className="w-8 h-8 text-[#3b5bdb] mx-auto mb-3" />
                                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">+10</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Anos de Mercado</div>
                            </div>
                            <div className="bg-[#f8fafc] dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <Users className="w-8 h-8 text-[#3b5bdb] mx-auto mb-3" />
                                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">+999</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Clientes Ativos</div>
                            </div>
                            <div className="bg-[#f8fafc] dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <Award className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
                                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">R$ 7M+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Sinistros Pagos</div>
                            </div>
                            <div className="bg-[#f8fafc] dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                                <ShieldCheck className="w-8 h-8 text-green-500 mx-auto mb-3" />
                                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">96%</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Satisfação</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão, Valores */}
            <section className="py-20 bg-[#f8fafc] dark:bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">🎯 Missão</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Proteger o patrimônio e a operação dos nossos clientes com soluções de seguro transparentes, ágeis e personalizadas para o setor de transportes.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">👁️ Visão</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Ser referência nacional em corretagem de seguros para transporte de cargas, reconhecida pela excelência no atendimento e pela inovação tecnológica.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">💎 Valores</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Transparência total, atendimento humanizado, agilidade nas respostas, compromisso com resultados e parceria genuína com nossos clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
