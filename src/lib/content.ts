import type { ImageProps } from "next/image";

export const company = {
  name: "Renovarte Pisos",
  descriptor: "Limpeza técnica, polimento e restauração de pisos nobres",
  phoneDisplay: "+55 62 98468-0782",
  whatsappNumber: "5562984680782",
  city: "Goiânia",
  region: "GO",
  address: "Endereco comercial a definir",
  logo: "/images/brand/renovarte-logo-transparent.png",
};

export const whatsappMessage =
  "Olá, vim pelo site da Renovarte Pisos e gostaria de solicitar um orçamento para limpeza pós-obra/restauração de pedra. Posso enviar fotos e vídeos do local?";

export const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const phoneHref = "tel:+5562984680782";

export const navItems = [
  { label: "Início", id: "inicio" },
  { label: "Antes e Depois", id: "antes-depois" },
  { label: "Serviços", id: "servicos" },
  { label: "Pedras", id: "pedras" },
  { label: "Processo", id: "processo" },
  { label: "Arquitetos", id: "arquitetos" },
  { label: "FAQ", id: "faq" },
];

export const qualityCards = [
  {
    title: "Pó fino de obra",
    text: "Remoção técnica de resíduos que ficam impregnados em poros, juntas e microtexturas do piso.",
  },
  {
    title: "Cimento, rejunte e tinta",
    text: "Tratamento por superfície para reduzir riscos de ataque químico, manchas permanentes e perda de brilho.",
  },
  {
    title: "Pedras opacas ou manchadas",
    text: "Diagnóstico do acabamento para definir limpeza profunda, polimento, cristalização ou proteção.",
  },
  {
    title: "Entrega de alto padrão",
    text: "Acabamento final pensado para vistoria, sessão de fotos, entrega de chaves e ocupação do imóvel.",
  },
];

export type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  stone: string;
  environment: string;
  before: ImageProps["src"];
  after: ImageProps["src"];
  ambient: ImageProps["src"];
  imageFit?: "cover" | "contain";
  tags: string[];
};

export const cases: CaseStudy[] = [
  {
    title: "Sala pós-obra mobiliada",
    problem: "Ambiente ainda com aparência de obra, piso marcado e sem leitura de entrega.",
    solution: "Limpeza técnica final, revisão visual e preparação do piso para receber mobiliário.",
    result: "Sala limpa, mobiliada e pronta para apresentação do imóvel.",
    stone: "Mármore claro",
    environment: "Sala principal",
    before: "/images/stone/transition-before.png",
    after: "/images/stone/transition-after.jpeg",
    ambient: "/images/stone/transition-after.jpeg",
    imageFit: "contain",
    tags: ["Pós-obra", "Transição", "Alto padrão"],
  },
  {
    title: "Travertino em área externa",
    problem: "Piso travertino externo com encardimento, marcas climáticas e perda de uniformidade.",
    solution: "Limpeza profunda, enxágue técnico e revisão do acabamento natural.",
    result: "Travertino mais claro, uniforme e valorizado na área de circulação.",
    stone: "Travertino",
    environment: "Área externa",
    before: "/images/stone/travertino-before.png",
    after: "/images/stone/travertino-after.png",
    ambient: "/images/stone/travertino-after.png",
    tags: ["Travertino", "Limpeza técnica", "Área externa"],
  },
  {
    title: "Banheiro em mármore branco",
    problem: "Manchas de produto inadequado, marcas de rejunte e opacidade no piso.",
    solution: "Avaliação de absorção, limpeza seletiva e polimento progressivo.",
    result: "Mármore com reflexo suave, sem aspecto encardido na entrega.",
    stone: "Mármore branco",
    environment: "Banheiro premium",
    before: "/images/stone/banheiro-marmore-before.png",
    after: "/images/stone/banheiro-marmore-after.png",
    ambient: "/images/stone/banheiro-after.png",
    tags: ["Mármore", "Polimento", "Banheiros"],
  },
  {
    title: "Escada em Bege Bahia",
    problem: "Degraus externos encardidos, com sujeira acumulada e perda de presença visual.",
    solution: "Lavagem técnica, remoção de sujidade e revisão da superfície degrau a degrau.",
    result: "Escada renovada, com pedra mais clara e leitura de acesso valorizada.",
    stone: "Bege Bahia",
    environment: "Escadas e acesso externo",
    before: "/images/stone/escada-before.png",
    after: "/images/stone/escada-after.png",
    ambient: "/images/stone/escada-restaurada.png",
    tags: ["Escadas", "Restauração", "Área externa"],
  },
  {
    title: "Bancada Crema Marfil",
    problem: "Mármore com marcas de uso, perda de brilho e leitura irregular na superfície.",
    solution: "Limpeza controlada, restauração do acabamento e orientação de manutenção.",
    result: "Bancada mais luminosa, com veios valorizados e aparência renovada.",
    stone: "Crema Marfil",
    environment: "Bancada e lavabo",
    before: "/images/stone/bancada-before.png",
    after: "/images/stone/bancada-after.png",
    ambient: "/images/stone/bancada-restaurada.png",
    tags: ["Mármore", "Bancada", "Polimento"],
  },
  {
    title: "Piso de granito residencial",
    problem: "Granito escurecido pelo uso, marcas de circulação e reflexo apagado.",
    solution: "Limpeza técnica, restauração de brilho e revisão de uniformidade.",
    result: "Piso de granito com reflexo recuperado e aspecto mais limpo.",
    stone: "Granito",
    environment: "Área interna",
    before: "/images/stone/granito-before.png",
    after: "/images/stone/granito-after.png",
    ambient: "/images/stone/porcelanato-restauracao.png",
    tags: ["Granito", "Restauração", "Brilho"],
  },
  {
    title: "Bancada de granito",
    problem: "Bancada com marcas de uso, pontos opacos e perda de leitura do acabamento.",
    solution: "Limpeza técnica, tratamento da superfície e revisão do brilho da pedra.",
    result: "Granito com acabamento mais uniforme e aparência renovada para uso diário.",
    stone: "Granito",
    environment: "Bancada",
    before: "/images/stone/bancada-granito-before.png",
    after: "/images/stone/bancada-granito-after.png",
    ambient: "/images/stone/bancada-granito-after.png",
    tags: ["Granito", "Bancada", "Restauração"],
  },
  {
    title: "Hall de entrada",
    problem: "Área de entrada com piso marcado, aspecto sujo e baixa valorização visual.",
    solution: "Limpeza técnica, remoção de sujidade aderida e revisão do acabamento final.",
    result: "Hall mais claro, apresentável e pronto para receber moradores e visitantes.",
    stone: "Pedra natural",
    environment: "Hall de entrada",
    before: "/images/stone/hall-entrada-before.png",
    after: "/images/stone/hall-entrada-after.jpg",
    ambient: "/images/stone/hall-entrada-after.jpg",
    tags: ["Hall", "Pós-obra", "Entrada"],
  },
  {
    title: "Piso de mármore",
    problem: "Mármore claro com poeira de obra, manchas superficiais e aparência apagada.",
    solution: "Limpeza fina, recuperação de leitura da pedra e revisão de uniformidade.",
    result: "Piso de mármore limpo, claro e com acabamento mais compatível com alto padrão.",
    stone: "Mármore",
    environment: "Área social",
    before: "/images/stone/piso-marmore-before.png",
    after: "/images/stone/piso-marmore-after.jpg",
    ambient: "/images/stone/piso-marmore-after.jpg",
    tags: ["Mármore", "Piso", "Pós-obra"],
  },
];

export const services = [
  {
    title: "Limpeza pós-obra premium",
    description:
      "Limpeza fina para imóveis recém-entregues, com cuidado técnico sobre pisos, bancadas, escadas, halls e áreas gourmet.",
    deliveries: ["Remoção de pó fino", "Tratamento de respingos", "Revisão por ambiente"],
    use: "Indicada para entrega de chaves, vistoria e ocupação imediata.",
  },
  {
    title: "Restauração de mármore",
    description:
      "Recuperação de brilho, uniformidade e presença visual em mármores naturais com desgaste, manchas ou opacidade.",
    deliveries: ["Diagnóstico da pedra", "Polimento progressivo", "Acabamento protegido"],
    use: "Indicada para banheiros, escadas, salas, halls e bancadas.",
  },
  {
    title: "Restauração de granito",
    description:
      "Tratamento para granitos em pisos e bancadas, reduzindo marcas de uso e melhorando leitura de cor e acabamento.",
    deliveries: ["Limpeza profunda", "Remoção de manchas possíveis", "Proteção contra absorção"],
    use: "Indicada para cozinhas, churrasqueiras, áreas gourmet e circulação.",
  },
  {
    title: "Polimento de pedras naturais",
    description:
      "Processo técnico para recuperar brilho e nível visual sem descaracterizar a pedra ou exagerar o acabamento.",
    deliveries: ["Lixas e discos adequados", "Controle de resíduos", "Nivelamento visual"],
    use: "Indicado para pedras opacas, riscadas ou sem uniformidade.",
  },
  {
    title: "Cristalização de mármore",
    description:
      "Acabamento para ganho de brilho e resistência visual em superfícies de mármore que aceitam o procedimento.",
    deliveries: ["Teste de compatibilidade", "Cristalização controlada", "Revisão de reflexo"],
    use: "Indicada para mármores em áreas internas de alto padrão.",
  },
  {
    title: "Impermeabilização de pedras",
    description:
      "Aplicação de proteção para reduzir absorção de líquidos, óleos e agentes que podem causar manchas.",
    deliveries: ["Teste de absorção", "Aplicação técnica", "Orientação de cura"],
    use: "Indicada para bancadas, áreas gourmet, banheiros e pedras porosas.",
  },
  {
    title: "Remocao de manchas",
    description:
      "Avaliação de origem da mancha e tratamento possível sem prometer milagres onde houve dano permanente.",
    deliveries: ["Leitura do dano", "Teste localizado", "Tratamento por etapas"],
    use: "Indicada para cimento, tinta, gordura, ferrugem leve e marcas de obra.",
  },
  {
    title: "Manutenção preventiva",
    description:
      "Rotina planejada para preservar brilho, proteção e aparência de pisos nobres em imóveis exigentes.",
    deliveries: ["Plano de cuidado", "Limpeza periódica", "Relatório de orientação"],
    use: "Indicada para residências, condomínios, escritórios e projetos assinados.",
  },
];

export const materials = [
  "Mármore",
  "Granito",
  "Travertino",
  "Limestone",
  "Quartzo",
  "Silestone",
  "Nanoglass",
  "Marmoglass",
  "Porcelanato polido",
  "Granilite",
  "Ardósia",
  "Pedras naturais",
];

export const processSteps = [
  {
    title: "Diagnóstico visual",
    text: "Fotos, vídeos e leitura inicial da pedra, do ambiente e do histórico da obra.",
  },
  {
    title: "Proposta técnica",
    text: "Definição do escopo, etapas, cuidados, prazos e condições para execução.",
  },
  {
    title: "Proteção do ambiente",
    text: "Cuidado com marcenaria, metais, vidros, rodapés e áreas sensíveis ao redor.",
  },
  {
    title: "Execução especializada",
    text: "Limpeza, polimento, restauração ou impermeabilização conforme a necessidade.",
  },
  {
    title: "Revisão de acabamento",
    text: "Conferência de brilho, uniformidade, bordas e pontos de maior exposição.",
  },
  {
    title: "Orientação de manutenção",
    text: "Cuidados de uso, produtos recomendados e rotina para preservar o resultado.",
  },
];

export const architectCards = [
  "Entrega de chaves",
  "Sessão de fotos",
  "Vistoria final",
  "Obra residencial premium",
  "Condomínios de luxo",
  "Projetos assinados",
];

export const problems = [
  "piso de mármore opaco",
  "granito manchado",
  "travertino sem brilho",
  "pó de obra impregnado",
  "cimento seco no piso",
  "respingos de tinta",
  "rejunte sobre pedra",
  "bancada manchada",
  "escada desgastada",
  "banheiro com marcas de obra",
  "área gourmet engordurada",
  "piso riscado",
  "pedra esbranquiçada",
  "superfície sem uniformidade",
  "obra entregue com aparência suja",
];

export const environments = [
  { name: "Sala principal", image: "/images/stone/transition-after.jpeg" },
  { name: "Área gourmet", image: "/images/stone/crema-restauracao.png" },
  { name: "Banheiros e lavabos", image: "/images/stone/banheiro-after.png" },
  { name: "Escadas e halls", image: "/images/stone/escada-restaurada.png" },
  { name: "Cozinhas premium", image: "/images/stone/bancada-restaurada.png" },
  { name: "Fachadas e varandas", image: "/images/stone/travertino-after.png" },
];

export const authorityPoints = [
  "avaliação por tipo de superfície",
  "produtos adequados",
  "equipamentos profissionais",
  "técnicas de polimento e proteção",
  "controle de resíduos",
  "cuidado com áreas sensíveis",
  "resultado visual documentado",
];

export const testimonials = [
  {
    role: "Arquiteta responsável por obra residencial",
    text: "O formato ideal de depoimento deve destacar previsibilidade, cuidado com acabamentos e entrega visual da obra.",
  },
  {
    role: "Proprietário de casa em condomínio",
    text: "Um bom relato real pode mostrar como a restauração evitou troca desnecessária de pedra e reduziu transtorno.",
  },
  {
    role: "Engenheiro de obra",
    text: "Para obras, o melhor depoimento costuma falar de prazo, proteção do ambiente e revisão final antes da vistoria.",
  },
];

export const faqs = [
  {
    question: "A limpeza pós-obra comum pode danificar mármore ou granito?",
    answer:
      "Pode, especialmente quando usa produtos ácidos, abrasivos ou procedimentos genéricos. Pedras naturais pedem avaliação por tipo de superfície e acabamento.",
  },
  {
    question: "Como saber se a pedra precisa de limpeza, polimento ou restauração?",
    answer:
      "A análise considera brilho, manchas, riscos, porosidade, resíduos de obra e histórico de produtos usados. Fotos e vídeos ajudam no primeiro diagnóstico.",
  },
  {
    question: "É possível remover cimento seco de piso nobre?",
    answer:
      "Em muitos casos sim, mas depende do tempo, da pedra e do produto usado anteriormente. O ideal e testar uma area pequena antes de ampliar o tratamento.",
  },
  {
    question: "Mármore manchado sempre volta ao estado original?",
    answer:
      "Nem sempre. Algumas manchas são superficiais, outras penetram ou alteram a pedra. A proposta técnica deve separar o que é recuperável do que é dano permanente.",
  },
  {
    question: "Qual a diferença entre polimento e cristalização?",
    answer:
      "O polimento corrige e refina a superfície por etapas. A cristalização é um acabamento específico para alguns mármores, usado para ganho de brilho e resistência visual.",
  },
  {
    question: "A impermeabilizacao impede qualquer mancha?",
    answer:
      "Não. Ela reduz absorção e dá mais tempo para limpeza, mas não torna a pedra invulnerável. Manutenção e uso correto continuam importantes.",
  },
  {
    question: "Dá para fazer orçamento por foto?",
    answer:
      "Dá para iniciar uma análise por fotos, vídeos, metragem aproximada e localização. Em casos sensíveis, a visita técnica confirma o escopo.",
  },
  {
    question: "Vocês atendem arquitetos, engenheiros e construtoras?",
    answer:
      "Sim. A etapa final de limpeza técnica e restauração ajuda a valorizar entrega de chaves, vistoria, fotos e apresentação do projeto.",
  },
  {
    question: "Quanto tempo dura uma limpeza pós-obra premium?",
    answer:
      "Depende da metragem, do nível de resíduo e dos materiais envolvidos. A proposta deve considerar proteção do ambiente e revisão final.",
  },
  {
    question: "O servico gera muito po ou sujeira?",
    answer:
      "O processo é planejado com controle de resíduos e proteção do entorno. Quando há polimento, a equipe define a técnica mais adequada para o ambiente.",
  },
  {
    question: "Porcelanato polido tambem pode ser tratado?",
    answer:
      "Sim, mas ele exige leitura própria. O tratamento muda conforme acabamento, nível de risco, manchas e recomendação do fabricante.",
  },
  {
    question: "Antes de trocar a pedra, vale tentar restaurar?",
    answer:
      "Na maioria dos casos vale diagnosticar primeiro. Restauração pode preservar material nobre, reduzir custo e manter a linguagem original do projeto.",
  },
];
