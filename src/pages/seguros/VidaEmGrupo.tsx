import PageLayout from "@/components/layout/PageLayout";
import InsurancePageTemplate from "@/components/layout/InsurancePageTemplate";
import { Heart } from "lucide-react";

export default function VidaEmGrupo() {
    return (
        <PageLayout>
            <InsurancePageTemplate
                title="Vida em Grupo"
                tagline="Proteção financeira para colaboradores e suas famílias — tranquilidade para toda a equipe."
                icon={Heart}
                description={`O seguro de Vida em Grupo é essencial para empresas que valorizam seus colaboradores. Oferece cobertura financeira em casos de falecimento, invalidez ou doenças graves, garantindo amparo à família do segurado.

Além de ser um diferencial competitivo na atração e retenção de talentos, o seguro Vida em Grupo pode ser deduzido do Imposto de Renda da empresa, representando uma solução inteligente do ponto de vista fiscal e humano.`}
                coverages={[
                    "Morte natural ou acidental",
                    "Invalidez permanente total ou parcial por acidente (IPA)",
                    "Invalidez funcional permanente total por doença (IFPD)",
                    "Doenças graves (câncer, AVC, infarto)",
                    "Auxílio funeral individual e familiar",
                    "Diária de internação hospitalar (DIH)",
                    "Assistência nutricional e psicológica",
                ]}
                audience={[
                    "Empresas de transporte e logística",
                    "Pequenas e médias empresas (PMEs)",
                    "Cooperativas de trabalho",
                    "Associações profissionais",
                    "Empresas com regime CLT",
                    "Microempreendedores com funcionários",
                ]}
                highlights={[
                    { label: "Funcionários mín.", value: "3+" },
                    { label: "Dedução IR", value: "Sim" },
                    { label: "Cobertura 24h", value: "Global" },
                    { label: "Carência", value: "Zero" },
                ]}
            />
        </PageLayout>
    );
}
