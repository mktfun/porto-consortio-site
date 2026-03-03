import PageLayout from "@/components/layout/PageLayout";
import InsurancePageTemplate from "@/components/layout/InsurancePageTemplate";
import { Package } from "lucide-react";

export default function RcDc() {
    return (
        <PageLayout>
            <InsurancePageTemplate
                title="RC-DC"
                tagline="Responsabilidade Civil por Desaparecimento de Carga — proteção contra roubo e furto."
                icon={Package}
                description={`O seguro RC-DC protege o transportador contra o desaparecimento total ou parcial da carga durante o transporte por roubo, furto ou extorsão.

É uma cobertura complementar ao RCTR-C e passou a ser essencial no Brasil, onde os índices de roubo de carga são alarmantes, especialmente em rotas de risco. A RC-DC garante a reposição do valor das mercadorias, protegendo o patrimônio do transportador e a confiança do embarcador.`}
                coverages={[
                    "Roubo e furto qualificado da carga",
                    "Extorsão mediante sequestro do motorista",
                    "Desaparecimento total do veículo com carga",
                    "Desaparecimento parcial da mercadoria",
                    "Estelionato e apropriação indébita",
                    "Gerenciamento de risco integrado",
                    "Rastreamento e monitoramento veicular",
                ]}
                audience={[
                    "Transportadoras em rotas de alto risco",
                    "Empresas com cargas de alto valor agregado",
                    "Operadores de e-commerce e last-mile",
                    "Transportadores de eletrônicos e farmacêuticos",
                    "Empresas de carga fracionada",
                    "Qualquer transportador com histórico de sinistro",
                ]}
                highlights={[
                    { label: "Roubos/ano no Brasil", value: "17 mil+" },
                    { label: "Cobertura", value: "Total" },
                    { label: "Vistoria prévia", value: "Incluída" },
                    { label: "Processo de sinistro", value: "Ágil" },
                ]}
            />
        </PageLayout>
    );
}
