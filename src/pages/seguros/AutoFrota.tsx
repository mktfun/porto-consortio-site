import PageLayout from "@/components/layout/PageLayout";
import InsurancePageTemplate from "@/components/layout/InsurancePageTemplate";
import { Car } from "lucide-react";

export default function AutoFrota() {
    return (
        <PageLayout>
            <InsurancePageTemplate
                title="Auto Frota"
                tagline="Proteção completa para frotas de veículos comerciais e utilitários."
                icon={Car}
                description={`O seguro Auto Frota é a solução ideal para empresas que possuem múltiplos veículos em operação. Com condições especiais de negociação, oferecemos coberturas amplas que protegem todo o seu patrimônio sobre rodas.

Diferente de apólices individuais, o seguro frota permite gerenciar todas as coberturas em um único contrato, com condições personalizadas e descontos progressivos conforme o tamanho da frota.`}
                coverages={[
                    "Colisão, incêndio e roubo (compreensiva)",
                    "Danos a terceiros (RCF-V)",
                    "Acidentes pessoais de passageiros (APP)",
                    "Assistência 24 horas com reboque",
                    "Vidros, faróis e retrovisores",
                    "Carro reserva durante o sinistro",
                    "Cobertura para acessórios e equipamentos",
                ]}
                audience={[
                    "Transportadoras com frota própria",
                    "Empresas de logística e distribuição",
                    "Locadoras de veículos",
                    "Cooperativas de transporte",
                    "Empresas com veículos utilitários",
                    "Autônomos com mais de 3 veículos",
                ]}
                highlights={[
                    { label: "Desconto por frota", value: "Até 30%" },
                    { label: "Veículos cobertos", value: "3 a 500+" },
                    { label: "Assistência", value: "24/7" },
                    { label: "Cotação em", value: "2 horas" },
                ]}
            />
        </PageLayout>
    );
}
