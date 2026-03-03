import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

interface SubPageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: { label: string; href?: string }[];
}

export default function SubPageHero({ title, subtitle, breadcrumbs }: SubPageHeroProps) {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3b5bdb]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6" aria-label="Breadcrumb">
                    {breadcrumbs.map((crumb, i) => (
                        <span key={i} className="flex items-center">
                            {i > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
                            {crumb.href ? (
                                <Link to={crumb.href} className="hover:text-[#3b5bdb] transition-colors">{crumb.label}</Link>
                            ) : (
                                <span className="text-slate-900 dark:text-white font-medium">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
                <h1 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>
                )}
            </div>
        </section>
    );
}
