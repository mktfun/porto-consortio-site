# -*- coding: utf-8 -*-
import os

with open("converted.jsx", "r", encoding="utf-8") as f:
    jsx_content = f.read()

# Make dark mode toggle dynamic
jsx_content = jsx_content.replace(
    '<button aria-label="Toggle Dark Mode"\n                        className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">\n                        <Sun className="w-5 h-5" />\n                    </button>',
    '<button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">{isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>'
)

form_section = """
    <section id="cotacao" className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#3b5bdb] opacity-20 rounded-full blur-3xl"></div>
            <div className="relative z-10 px-8 py-16 md:p-12 text-center md:text-left md:flex md:items-start md:justify-between gap-12">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-4">Pronto para operar com tranquilidade?</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Faça uma cotação gratuita hoje e descubra como podemos proteger o seu negócio.
                    </p>
                    <ul className="space-y-4 text-slate-300 text-left">
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3" /> Condições negociadas com as melhores seguradoras</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3" /> Especialistas em logística rodoviária</li>
                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#f59e0b] mr-3" /> Resposta para sua cotação em até 2 horas</li>
                    </ul>
                </div>
                
                <div className="md:w-1/2 bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-xl w-full text-left relative z-20">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Receba sua cotação</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome / Empresa *</label>
                                <input required value={form.nome} onChange={update('nome')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Sua empresa" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">E-mail corporativo *</label>
                                <input required value={form.email} onChange={update('email')} type="email" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="voce@empresa.com" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">WhatsApp *</label>
                                <input required value={form.whats} onChange={update('whats')} type="tel" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="(00) 00000-0000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tipo de Carga</label>
                                <select value={form.tipo} onChange={update('tipo')} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white">
                                    <option value="">Selecione...</option>
                                    <option value="Geral">Carga Geral</option>
                                    <option value="Refrigerada">Refrigerada</option>
                                    <option value="Perigosa">Produtos Perigosos</option>
                                    <option value="Granel">Granel</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Origem Principal</label>
                                <input value={form.origem} onChange={update('origem')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: São Paulo, SP" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Destino Principal</label>
                                <input value={form.destino} onChange={update('destino')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: Todo Brasil" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Valor Médio Transportado (R$)</label>
                            <input value={form.valor} onChange={update('valor')} type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent outline-none transition-all dark:text-white" placeholder="Ex: 150.000" />
                        </div>
                        
                        <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center px-4 py-3 bg-[#3b5bdb] hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-[#3b5bdb]/30 transition-all duration-300 disabled:opacity-70">
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Solicitar Cotação"}
                        </button>
                        
                        <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center">
                            <Lock className="w-3 h-3 mr-1" /> Seus dados estão seguros
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
"""

import re
jsx_content = re.sub(r'<section className="py-20 px-4">.*?</section>', form_section, jsx_content, flags=re.DOTALL)

react_full = f"""import {{ useState, useEffect }} from "react";
import {{ useNavigate }} from "react-router-dom";
import {{ useToast }} from "@/hooks/use-toast";
import {{ supabase }} from "@/integrations/supabase/client";

import {{
  Sun, Moon, ArrowRight, Phone, ShieldCheck, AlertTriangle, Truck, Package, Ship, Star, StarHalf, Lock, Facebook, Camera, Briefcase, Mail, MapPin, CheckCircle2, Loader2, MessageCircle
}} from "lucide-react";

export default function Index() {{
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [form, setForm] = useState({{
    nome: "", email: "", whats: "", tipo: "", origem: "", destino: "", valor: "",
  }});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {{ toast }} = useToast();

  useEffect(() => {{
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }}, [isDarkMode]);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({{ ...prev, [field]: e.target.value }}));

  const handleSubmit = async (e: React.FormEvent) => {{
    e.preventDefault();
    setIsSubmitting(true);
    try {{
      const {{ error }} = await supabase.from('leads').upsert(
        {{
          email: form.email,
          name: form.nome,
          phone: form.whats,
          insurance_type: 'Transporte',
          last_step_index: 3,
          is_completed: true,
          rd_station_synced: false,
          custom_fields: {{
            cargo_type: form.tipo,
            origin: form.origem,
            destination: form.destino,
            estimated_value: form.valor
          }}
        }},
        {{ onConflict: 'email', ignoreDuplicates: false }}
      );
      if (error) throw error;
      navigate('/sucesso');
    }} catch (err) {{
      console.error(err);
      toast({{
        title: "Erro ao enviar",
        description: "Ocorreu um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive"
      }});
    }} finally {{
      setIsSubmitting(false);
    }}
  }};

  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen">
{jsx_content}
    </div>
  );
}}
"""

with open("src/pages/Index.tsx", "w", encoding="utf-8") as f:
    f.write(react_full)
