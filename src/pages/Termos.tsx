import PageLayout from "@/components/layout/PageLayout";
import SubPageHero from "@/components/layout/SubPageHero";

export default function Termos() {
    return (
        <PageLayout>
            <SubPageHero
                title="Termos de Uso"
                subtitle="Condições gerais de uso do site da JJ & Amorim Corretora de Seguros."
                breadcrumbs={[{ label: "Início", href: "/" }, { label: "Termos de Uso" }]}
            />

            <section className="py-16 bg-card">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-slate max-w-none">
                    <h2>1. Aceitação dos Termos</h2>
                    <p>
                        Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que interrompa a navegação.
                    </p>

                    <h2>2. Descrição dos Serviços</h2>
                    <p>
                        O site da JJ & Amorim tem caráter informativo e de captação de cotações de seguros. Não constitui oferta direta de produtos de seguro, que são emitidos pelas seguradoras parceiras credenciadas pela SUSEP.
                    </p>

                    <h2>3. Responsabilidades do Usuário</h2>
                    <p>O usuário se compromete a:</p>
                    <ul>
                        <li>Fornecer informações verdadeiras e atualizadas nos formulários</li>
                        <li>Não utilizar o site para fins ilícitos</li>
                        <li>Não tentar acessar áreas restritas do sistema</li>
                        <li>Respeitar a propriedade intelectual do conteúdo</li>
                    </ul>

                    <h2>4. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo deste site (textos, imagens, logotipos, layout) é de propriedade da JJ & Amorim Corretora de Seguros ou de seus licenciadores. É proibida a reprodução sem autorização prévia por escrito.
                    </p>

                    <h2>5. Limitação de Responsabilidade</h2>
                    <p>
                        A JJ & Amorim não se responsabiliza por decisões tomadas com base nas informações contidas neste site. As condições definitivas dos seguros são aquelas previstas nas apólices emitidas pelas seguradoras.
                    </p>

                    <h2>6. Disponibilidade</h2>
                    <p>
                        Nos esforçamos para manter o site disponível 24 horas por dia, porém não garantimos acesso ininterrupto, podendo ocorrer manutenções programadas ou interrupções imprevistas.
                    </p>

                    <h2>7. Legislação Aplicável</h2>
                    <p>
                        Estes Termos são regidos pela legislação brasileira. Eventuais conflitos serão resolvidos no foro da comarca de São Bernardo do Campo - SP.
                    </p>

                    <h2>8. Contato</h2>
                    <p>
                        Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <strong>contato@jjamorimseguros.com.br</strong>.
                    </p>

                    <p className="text-sm text-slate-500 mt-8">Última atualização: Março de 2026.</p>
                </div>
            </section>
        </PageLayout>
    );
}
