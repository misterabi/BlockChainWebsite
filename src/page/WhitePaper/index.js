import React from "react"
import { Hero } from "components/layouts"
import { useNavigate } from "react-router-dom";

function WhitePaper() {
    const navigate = useNavigate();

    const datas = {
        title: "//Introduction//",
        subtitle: "//Découvrez notre plateforme innovante//",
        texts: [
            "Dans un monde où la falsification de diplômes constitue un défi croissant, la nécessité de solutions innovantes et fiables se fait de plus en plus pressante. CertifToken émerge comme une réponse révolutionnaire à ce problème en proposant une approche décentralisée pour la certification des diplômes.",
            "L'usurpation de diplômes est un problème mondial qui peut avoir des conséquences graves, tant pour les individus que pour les institutions éducatives. Les diplômes contrefaits peuvent entraîner des erreurs d'embauche, des pertes financières et une dégradation de la confiance dans les systèmes éducatifs. CertifToken se positionne comme une solution novatrice pour lutter contre cette menace. En utilisant la technologie blockchain de Etherum.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ]
    };
    const options1 = {
        imagePosition: "right",
        theme: "dark"
    };
    const options2 = {
        imagePosition: "right",
        theme: "light"
    };
    const datas1 = {
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        title: "//Pourquoi Ethereum ?//",
        texts: [
            "Ethereum a été choisi comme base pour CertifToken en raison de sa robustesse, de sa sécurité et de sa capacité à prendre en charge des contrats intelligents. La flexibilité offerte par la blockchain Ethereum permet une mise en œuvre transparente et évolutive de notre solution. De plus, l'utilisation d'Ethereum garantit une large adoption et une compatibilité avec d'autres projets basés sur la blockchain, renforçant ainsi l'écosystème de la certification éducative décentralisée.",
           ]
    };
    const datas2 = {
        title: "//Caractéristiques Uniques de CertifToken : ?//",
        texts: [
            "Décentralisation : En utilisant la blockchain Ethereum, CertifToken élimine la nécessité d'une autorité centrale, offrant ainsi une solution décentralisée et résistante à la censure.",
            "Sécurité Renforcée : La technologie blockchain assure une sécurité renforcée, réduisant les risques de fraude et garantissant l'intégrité des données certifiées.",
            "Interopérabilité : CertifToken est conçu pour être compatible avec d'autres projets basés sur la blockchain, facilitant ainsi l'adoption et l'intégration au sein de l'écosystème éducatif."
           ]
    };
    const datas3 = {
        image: "https://www.myeasyoptic.com/wp-content/uploads/2020/01/avantages.png",
        title: "//Avantages par rapport à certains Concurrents ://",
        texts: [
            "CertifToken se distingue de ses concurrents par son adoption de la technologie blockchain Ethereum, assurant une certification décentralisée des diplômes pour une sécurité et une transparence inégalées.",
            "L'interopérabilité avec d'autres projets blockchain facilite son intégration dans l'écosystème éducatif. CertifToken offre une expérience utilisateur conviviale, simplifiant la génération, la vérification et l'intégration des diplômes certifiés. Grâce à des tarifs personnalisés, CertifToken promeut l'accessibilité pour divers établissements éducatifs.",
            "Sa sécurité renforcée protège contre la falsification, et son engagement envers un service clientèle de qualité garantit satisfaction et support. CertifToken se positionne comme une solution agile, prête à s'adapter aux évolutions réglementaires et aux besoins dynamiques du secteur, offrant une alternative innovante aux méthodes traditionnelles de certification des diplômes."

        ]
    }
    const datas4 = {
        image: "https://cdn-icons-png.flaticon.com/512/1877/1877064.png",
        title: "//Modèle économique //",
        texts: [
            "CertifToken, plateforme de certification décentralisée des diplômes basée sur Ethereum, adopte un modèle économique diversifié pour générer des revenus. Les établissements paient des frais pour émettre des tokens certifiés, tandis que des frais de licence annuels sont facturés pour l'accès à la plateforme. Des services premium sont offerts aux diplômés moyennant des frais supplémentaires.",
            " CertifToken explore également la monétisation grâce à des partenariats, des espaces publicitaires, des services de formation et de consultation payants. Une tarification différenciée s'adapte à la taille des établissements. Les stratégies de croissance incluent l'expansion géographique, des partenariats stratégiques et des investissements continus dans l'innovation.",
            " Ce modèle économique flexible vise à garantir la viabilité et la croissance de CertifToken dans le domaine de la certification éducative décentralisée."
           ]
    }
    const datas5 = {
        title: "//Cas d'Utilisation : CertifToken dans la Certification des Diplômes//",
        texts: [
            "Cas d'utilisation:",
            "Téléchargement du diplôme / Verification de l'autheticité / Stockage du diplôme / Validation du diplôme",
            "Scenario d'application:",
            "Sophie vient de terminer ses études universitaires et a obtenu un diplôme en informatique. Son université utilise CertifToken pour certifier électroniquement les diplômes, offrant une solution transparente et sécurisée pour la validation des réussites académiques.",
            "Sarah, responsable des ressources humaines dans une entreprise, reçoit une candidature pour un poste stratégique. Le candidat, John, mentionne dans son CV qu'il détient un diplôme clé pour le rôle.Sarah accède à la plateforme CertifToken et utilise la fonction de vérification en scannant le code QR sur le diplôme de John. La plateforme affiche instantanément les détails du diplôme, y compris le nom de l'institution, le type de diplôme, et la date d'obtention.La vérification immédiate garantit à Sarah que le diplôme de John est authentique. Elle peut prendre des décisions d'embauche en toute confiance, sachant que les informations éducatives fournies sont vérifiées et sécurisées par la blockchain Ethereum."
           ]
    }
    const datas6 = {
        title: "//Collaboration//",
        texts: [
            "Collaboration avec les Établissements Éducatifs:CertifToken collaborera étroitement avec les établissements éducatifs pour intégrer la solution de certification décentralisée dans leurs processus. Des partenariats seront établis pour assurer une émission fluide et sécurisée des tokens CertifToken pour chaque diplôme délivré.",
            "Intégration avec les Plateformes RH et d'Emploi :CertifToken cherchera à collaborer avec des plateformes de recrutement, des entreprises RH et des services d'emploi en ligne. L'intégration de CertifToken dans ces plateformes simplifiera le processus de vérification des diplômes pour les employeurs et renforcera la crédibilité des candidats."
           ]
    };
    const datas7 = {
        title: "//Réglementation//",
        image: "https://douane.gouv.cd/wp-content/uploads/2022/04/Reglementation-icone-II.png",
        texts: [
            "Conformité aux Normes Éducatives: CertifToken s'engage à respecter les normes éducatives internationales et locales. La solution sera conçue pour être flexible et adaptable aux réglementations spécifiques de chaque région, facilitant ainsi son adoption à l'échelle mondiale.",
            "Consultation avec les Autorités Réglementaires :CertifToken collaborera avec les autorités éducatives et les organismes de réglementation pour garantir que la solution répond aux exigences légales en matière de certification des diplômes. Des consultations régulières seront menées pour s'assurer de la conformité aux normes et aux lois en vigueur",
            "Protection de la Vie Privée et Sécurité des Données :CertifToken mettra en place des mesures de sécurité robustes pour protéger les données sensibles associées aux diplômes certifiés. La solution sera développée en accord avec les meilleures pratiques en matière de protection de la vie privée, assurant la confidentialité des informations des utilisateurs.",
            "Suivi des Évolutions Réglementaires :CertifToken maintiendra une veille constante sur les évolutions réglementaires dans le domaine de l'éducation et de la technologie. Des mises à jour régulières seront effectuées pour garantir que la solution reste conforme aux normes en constante évolution."
           ]
    };
    const datas8 = {
        title: "//Dev et feuille de route//",
        texts: [
            "La phase de développement de CertifToken se concentre sur la mise en œuvre d'une architecture technique robuste, utilisant la blockchain Ethereum pour garantir la sécurité, la transparence et la vérifiabilité des diplômes. La plateforme s'attache à résoudre les défis liés à la contrefaçon et à l'usurpation de diplômes en exploitant les avantages de la décentralisation. CertifToken favorise également l'interopérabilité en s'intégrant harmonieusement avec d'autres projets basés sur la blockchain, et met en place des mesures de sécurité renforcées pour protéger la confidentialité des données.",
            "La feuille de route de CertifToken commence par une phase de développement initial, impliquant la conception de l'architecture, la création d'un prototype, et des tests préliminaires. Après un lancement pilote avec quelques partenaires, CertifToken envisage une expansion progressive, basée sur l'adoption par les utilisateurs et les retours du marché. La feuille de route met en avant la recherche de partenariats stratégiques avec des acteurs clés du secteur de l'éducation, de l'emploi, et de la technologie pour renforcer la position de CertifToken sur le marché. En continuant à recueillir les commentaires des utilisateurs, la plateforme vise des améliorations continues, tout en explorant des évolutions futures et des développements technologiques."
       ],buttons: [
        {
            text: "En savoir plus",
            onClick: () => {navigate('/roadmap')}
        },
    ]
    };
    const datas9 = {
        title: "//Résumé//",
        texts: [
            "CertifToken se distingue par son approche novatrice de la certification décentralisée des diplômes, basée sur la blockchain Ethereum, garantissant sécurité et transparence. La plateforme favorise l'interopérabilité avec d'autres projets blockchain et met en œuvre des mesures de sécurité renforcées pour prévenir la falsification des diplômes. La feuille de route de CertifToken prévoit un lancement pilote, suivi d'une expansion progressive, la recherche de partenariats stratégiques, et des améliorations continues grâce aux retours des utilisateurs. La vision de CertifToken inclut une évolution constante, explorant des partenariats sectoriels, et anticipant les développements technologiques futurs pour maintenir sa position innovante sur le marché de la certification éducative décentralisée.",
       ]
    };
    return (
        <div>
            <Hero datas={datas} options={options1}></Hero>
            <Hero datas={datas1} options={options2}></Hero>
            <Hero datas={datas2} options={options1}></Hero>
            <Hero datas={datas3} options={options2}></Hero>
            <Hero datas={datas4} options={options1}></Hero>
            <Hero datas={datas5} options={options2}></Hero>
            <Hero datas={datas6} options={options1}></Hero>
            <Hero datas={datas8} options={options2}></Hero>
            <Hero datas={datas7} options={options1}></Hero>
            <Hero datas={datas9} options={options2}></Hero>
        </div>
    )
  }
  
  export default WhitePaper
  