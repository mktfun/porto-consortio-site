import PageLayout from "@/components/layout/PageLayout";
import SubPageHero from "@/components/layout/SubPageHero";

export default function Privacidade() {
    return (
        <PageLayout>
            <SubPageHero
                title="Política de Privacidade"
                subtitle="Como coletamos, usamos e protegemos seus dados pessoais."
                breadcrumbs={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
            />

            <section className="py-16 bg-card">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-slate max-w-none">
                    <h2>1. Informações Gerais</h2>
                    <p>
                        A JJ & Amorim Corretora de Seguros (CNPJ: 21.364.352/0001-04), com sede em São Bernardo do Campo - SP, está comprometida com a proteção da privacidade e dos dados pessoais dos seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>

                    <h2>2. Dados Coletados</h2>
                    <p>Podemos coletar os seguintes tipos de dados:</p>
                    <ul>
                        <li><strong>Dados de identificação:</strong> nome, CPF/CNPJ, e-mail, telefone</li>
                        <li><strong>Dados profissionais:</strong> empresa, cargo, setor de atuação</li>
                        <li><strong>Dados de navegação:</strong> endereço IP, cookies, páginas visitadas</li>
                        <li><strong>Dados do formulário de cotação:</strong> tipo de carga, origem, destino, valor transportado</li>
                    </ul>

                    <h2>3. Finalidade do Tratamento</h2>
                    <p>Os dados são utilizados para:</p>
                    <ul>
                        <li>Responder solicitações de cotação de seguros</li>
                        <li>Entrar em contato para oferecer propostas personalizadas</li>
                        <li>Melhorar a experiência de navegação no site</li>
                        <li>Cumprir obrigações legais e regulatórias</li>
                    </ul>

                    <h2>4. Compartilhamento de Dados</h2>
                    <p>
                        Seus dados poderão ser compartilhados com seguradoras parceiras exclusivamente para fins de cotação e emissão de apólices. Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins de marketing.
                    </p>

                    <h2>5. Cookies</h2>
                    <p>
                        Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para entender como o site é utilizado. Você pode desativar os cookies nas configurações do seu navegador.
                    </p>

                    <h2>6. Segurança</h2>
                    <p>
                        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, incluindo criptografia SSL/TLS e armazenamento seguro em nuvem.
                    </p>

                    <h2>7. Direitos do Titular</h2>
                    <p>De acordo com a LGPD, você tem direito a:</p>
                    <ul>
                        <li>Acessar seus dados pessoais</li>
                        <li>Corrigir dados incompletos ou desatualizados</li>
                        <li>Solicitar a exclusão dos seus dados</li>
                        <li>Revogar o consentimento a qualquer momento</li>
                        <li>Solicitar a portabilidade dos dados</li>
                    </ul>

                    <h2>8. Contato</h2>
                    <p>
                        Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail: <strong>contato@jjamorimseguros.com.br</strong> ou pelo telefone <strong>(11) 3493-3605</strong>.
                    </p>

                    <p className="text-sm text-slate-500 mt-8">Última atualização: Março de 2026.</p>
                </div>
            </section>
        </PageLayout>
    );
}
