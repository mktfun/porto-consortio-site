import { motion } from "framer-motion";
import { CheckCircle, Search, Phone, Shield, ArrowRight, Star, ExternalLink, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";


const steps = [
    {
        icon: Search,
        title: "Análise de Risco",
        description: "Cruzamos seus dados de logística com as melhores seguradoras parceiras.",
    },
    {
        icon: Phone,
        title: "Contato Especializado",
        description: "Um de nossos especialistas entrará em contato via WhatsApp.",
    },
    {
        icon: Shield,
        title: "Proteção Ativa",
        description: "Aprovação em minutos para a sua carga voltar à estrada protegida.",
    },
];

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background flex flex-col pt-16">

            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 md:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="max-w-md w-full text-center"
                >
                    {/* Animated Success Icon */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="mb-6 md:mb-8 inline-flex"
                    >
                        <div className="relative">
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/10 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                                >
                                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 1 }}
                                animate={{ scale: 1.6, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/20"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-foreground mb-3"
                    >
                        Cotação Recebida!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-base text-muted-foreground mb-8 px-2"
                    >
                        Nossa equipe de análise de risco já recebeu suas informações e iniciou a cotação nas melhores seguradoras.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-card border border-border rounded-xl p-5 md:p-6 mb-8"
                    >
                        <h2 className="text-sm font-semibold text-foreground mb-4 text-left uppercase tracking-wide">
                            Próximos Passos
                        </h2>
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    className="flex items-start gap-3 text-left"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <step.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-0.5">
                                        <h3 className="font-medium text-foreground mb-0.5 text-sm">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="space-y-3"
                    >
                        <button
                            onClick={() => window.open(window.location.href, "_self")}
                            className="w-full py-3.5 px-6 bg-primary text-primary-foreground rounded-xl font-medium transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            Cotar Outra Carga
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="flex gap-3 w-full">
                            <button
                                onClick={() => window.open("https://search.google.com/local/writereview?placeid=ChIJJccNKahDzpQR9Hc-bGNri8k&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2", "_blank")}
                                className="flex-1 py-3 px-4 border-2 border-primary/20 text-primary rounded-xl font-medium transition-all hover:bg-primary/5 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <Star className="w-4 h-4" />
                                <span className="hidden sm:inline">Avaliar</span>
                                <span className="sm:hidden">Avaliar</span>
                            </button>
                            <button
                                onClick={() => navigate("/")}
                                className="flex-1 py-3 px-4 border-2 border-primary/20 text-primary rounded-xl font-medium transition-all hover:bg-primary/5 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </button>
                        </div>

                        <button
                            onClick={() => window.open("https://jjamorimseguros.com.br", "_blank")}
                            className="w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1.5"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Site Institucional
                        </button>
                    </motion.div>
                </motion.div>
            </main>

        </div>
    );
};

export default Success;
