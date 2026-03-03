import PageLayout from "@/components/layout/PageLayout";
import InsurancePageTemplate from "@/components/layout/InsurancePageTemplate";
import { Truck } from "lucide-react";

export default function RctrC() {
    return (
        <PageLayout>
            <InsurancePageTemplate
                title="RCTR-C"
                tagline="Responsabilidade Civil do Transportador Rodoviário de Carga — proteção obrigatória para transportadores."
                icon={Truck}
                description={`O seguro RCTR-C é obrigatório para transportadores rodoviários de carga e cobre os prejuízos causados às mercadorias transportadas em caso de acidentes rodoviários.

Esta modalidade protege o transportador contra reclamações do embarcador (dono da carga) quando ocorrem danos durante o transporte, como colisão, capotagem, tombamento, incêndio e explosão do veículo transportador.`}
                coverages={[
                    "Colisão, capotagem e tombamento",
                    "Incêndio e explosão do veículo",
                    "Queda de pontes, viadutos e aterros",
                    "Abalroamento e derrapagem",
                    "Descarrilamento em balsas ou navios",
                    "Limpeza de pista e salvamento da carga",
                    "Despesas de socorro e salvamento",
                ]}
                audience={[
                    "Empresas de transporte rodoviário de cargas",
                    "Transportadores autônomos (TAC)",
                    "Cooperativas de transporte",
                    "Empresas de mudanças",
                    "Operadores logísticos",
                    "Transportadores de cargas fracionadas",
                ]}
                highlights={[
                    { label: "Obrigatório desde", value: "1995" },
                    { label: "Vigência da apólice", value: "12 meses" },
                    { label: "Indenização", value: "100%" },
                    { label: "Rede de vistoria", value: "Nacional" },
                ]}
            />
        </PageLayout>
    );
}
