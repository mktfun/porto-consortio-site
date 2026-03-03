import PageLayout from "@/components/layout/PageLayout";
import InsurancePageTemplate from "@/components/layout/InsurancePageTemplate";
import { Briefcase } from "lucide-react";

export default function Empresarial() {
    return (
        <PageLayout>
            <InsurancePageTemplate
                title="Seguro Empresarial"
                tagline="Proteção completa para o patrimônio físico da sua empresa — do escritório ao galpão."
                icon={Briefcase}
                description={`O Seguro Empresarial protege as instalações, equipamentos, estoques e a operação da sua empresa contra uma série de riscos que podem comprometer a continuidade do negócio.

Desde incêndios e explosões até furtos e danos elétricos, a cobertura é personalizada de acordo com o perfil de risco e as necessidades específicas de cada empresa. Ideal para galpões, escritórios, armazéns e centros de distribuição.`}
                coverages={[
                    "Incêndio, raio e explosão",
                    "Roubo e furto qualificado de bens",
                    "Danos elétricos a equipamentos",
                    "Vendaval, granizo e alagamento",
                    "Responsabilidade civil do estabelecimento",
                    "Lucros cessantes (perda de receita)",
                    "Quebra de vidros e letreiros",
                ]}
                audience={[
                    "Transportadoras com galpões e armazéns",
                    "Centros de distribuição e cross-docking",
                    "Escritórios administrativos",
                    "Oficinas e garagens de frota",
                    "Lojas e pontos comerciais",
                    "Indústrias de pequeno e médio porte",
                ]}
                highlights={[
                    { label: "Tipos de cobertura", value: "20+" },
                    { label: "Franquia", value: "Flexível" },
                    { label: "Vistoria", value: "Gratuita" },
                    { label: "Vigência", value: "12 meses" },
                ]}
            />
        </PageLayout>
    );
}
