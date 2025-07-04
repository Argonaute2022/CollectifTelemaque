import Markdown from "react-markdown";

import type { ContentLocale } from ".";

export const contentLocaleFr: ContentLocale = {
  legal: {
    title: `Mentions légales`,
    metaDescription: `Mentions légales du site telemaque.eu`,
    content: (
      <Markdown>{`
# Informations légales

Directeur de la publication: Philippe Sabucco

Hébergeur: Netlify
    `}</Markdown>
    ),
  },
  home: {
    title: `Collectif Télémaque`,
    metaDescription: `Le Collectif Télémaque rassemble des universitaires, fonctionnaires, cadres du secteur privé, militants, élus et syndicalistes qui ne se résignent pas à la mort annoncée de la gauche de gouvernement.`,
    contactLink: `Suivre nos activités !`,
    sections: {
      convictions: {
        title: `Nos convictions`,
        prelude: (
          <Markdown>{`Des citoyen.ne.s engagé.e.s pour la refondation idéologique d’une **gauche de gouvernement**.`}</Markdown>
        ),
        description: (
          <Markdown>{`
La gauche réformiste, prise en étau entre une gauche protestataire condamnée à vivre dans l’opposition et un centre droit qui penche toujours plus à droite, est menacée dans son existence même.
Pourtant, elle seule, en alliant radicalité et crédibilité, peut permettre de renouer avec un progrès social réel.

Pour cela, elle doit reconstruire un projet en s’appuyant sur les quatre piliers indissociables qui forgent son identité idéologique : le progrès social, la transition écologique, la construction européenne et la démocratie pluraliste.
        `}</Markdown>
        ),
        sections: {
          social: {
            title: `Social`,
            description: `Le progrès social est le souci constant de la gauche réformiste, dont la finalité est la protection et l’émancipation des classes populaires, des classes moyennes et des personnes victimes de discriminations.`,
          },
          ecology: {
            title: `Écologie`,
            description: `Sans la transition écologique, aucun progrès n'est possible. Face à un capitalisme prédateur, il s'agit de poursuivre un développement humain soucieux de justice sociale et se gardant de ses propres excès.`,
          },
          europe: {
            title: `Europe`,
            description: `L'Europe est le bon échelon pour répondre aux défis de notre temps - lutte contre le dérèglement climatique, régulation du capitalisme mondialisé - et construire collectivement un nouveau modèle de société à vocation mondiale.`,
          },
          democracy: {
            title: `Démocratie`,
            description: `Le respect des principes démocratiques est au premier rang de nos valeurs. L'approfondissement démocratique doit être continu et prendre appui sur la complémentarité de ses différentes formes (représentative, sociale, participative…).`,
          },
        },
      },
      collective: {
        title: `Notre collectif`,
        prelude: (
          <Markdown>{`Des citoyen.ne.s engagé.e.s qui mènent de front les combats pour le **climat** et la **justice sociale**.`}</Markdown>
        ),
        sections: {
          engagedCitizens: {
            title: `Des citoyens engagés`,
            description: (
              <Markdown>{`
Le Collectif Télémaque rassemble des universitaires, fonctionnaires, cadres du secteur privé, militants, élus et syndicalistes qui ne se résignent pas à la mort annoncée de la gauche de gouvernement.

D’inspiration sociale-démocrate, le Collectif Télémaque entend contribuer à la vie des idées, au débat politique et à la refondation idéologique d’une gauche réformiste.
            `}</Markdown>
            ),
          },
        },
      },
      actions: {
        title: `Nos actions`,
        prelude: (
          <Markdown>{`Des citoyen.ne.s engagé.e.s qui assument pleinement l’aventure collective de la **construction européenne**.`}</Markdown>
        ),
        sections: {
          book: {
            title: `Un ouvrage collectif`,
            description: (
              <Markdown>{`
Un [livre fondateur](https://www.jean-jaures.org/publication/la-gauche-du-reel-un-progressisme-pour-aujourdhui/) qui présente nos réflexions de fond
              
Voir aussi dans la presse [La gauche du "pragmatisme exigeant"](https://www.lemonde.fr/idees/article/2019/05/09/la-gauche-du-pragmatisme-exigeant_5459850_3232.html) et [La gauche qui veut (re)gouverner](https://www.liberation.fr/debats/2019/03/05/la-gauche-qui-veut-regouverner_1713191/)
              `}</Markdown>
            ),
          },
          meetings: {
            title: `Des rencontres`,
            description: (
              <Markdown>{`
Une journée [Gauche: des questions qui dérangent](https://www.engageons-nous.org/gauche_des_questions_qui_derangent?utm_campaign=_invit_gauche_quest_qui_derang&utm_medium=email&utm_source=appeldegauche) co-organisée le 26/11/2022 avec [Engageons-nous](https://www.engageons-nous.org/), [Inventer à gauche](https://www.inventeragauche.com/), et [Nouvelle société](https://www.nouvellesociete.fr/), avec la participation de Yamina Saheb, Jean Peyrelevade, Dominique Bourg, Arancha González, Denis MacShane, Pascal Lamy, Caroline Fourest, Julia Christ et Alain Bergounioux. 

Une journée d'étude sur [La République en crise](https://www.nouvellesociete.fr/la_r_publique_en_crise), le 13/5/2023, organisée par le Lab de la social-démocratie, en association avec de nombreux clubs de réflexion, associations et partis ([voir le discours prononcé par Baptiste Bondu au nom de Télémaque](./files-for-downloads/Discours-Telemaque-13mai2023.pdf)).

Une réunion de [La Convention](https://www.la-convention.fr/) à Paris, le 10/3/2024 ([voir le discours prononcé par Baptiste Bondu au nom de Télémaque](./files-for-downloads/Discours-Telemaque-Convention-10mars2024.pdf)). 

Des échanges avec des intellectuels pour nourrir nos réflexions (Irène Théry, François Dubet, Laurent Cordonier, Jean-Laurent Cassely...)
              `}</Markdown>
            ),
          },
          columns: {
            title: `Des prises de position`,
            description: (
              <Markdown>{`
Des tribunes dans la presse

* [Non, la gauche de gouvernement n'est pas morte](https://www.lemonde.fr/idees/article/2022/05/04/non-la-gauche-de-gouvernement-n-est-pas-morte_6124727_3232.html) (Le Monde, 04/05/2022)
* [Ne pas avoir mis de garde-fous pour empêcher le RN de voter la motion de censure de la Nupes fut une erreur](https://www.lemonde.fr/idees/article/2022/11/08/ne-pas-avoir-mis-de-garde-fous-pour-empecher-le-rn-de-voter-la-motion-de-censure-de-la-nupes-fut-une-erreur_6148988_3232.html) (Le Monde, 08/11/2022)
* [Un Parlement qui fonctionne](https://www.telos-eu.com/fr/politique-francaise-et-internationale/un-parlement-qui-fonctionne.html) (Telos, 07/02/2023)
* [La gauche et l’Europe: et si on regardait du côté allemand?](https://www.telos-eu.com/fr/politique-francaise-et-internationale/la-gauche-et-leurope-et-si-on-regardait-du-cote-al.html) (Telos, 20/02/2023)
* [Pour sauver la planète, regardons… le passé](https://lejournal.info/article/pour-sauver-la-planete-regardons-le-passe/) (Le Journal, 17/07/2023)
* [Ne ratons pas le rendez-vous des élections européennes ! La gauche réformiste doit se rassembler ](https://www.lemonde.fr/idees/article/2024/01/31/ne-ratons-pas-le-rendez-vous-des-elections-europeennes-la-gauche-reformiste-doit-se-rassembler_6214060_3232.html) (Le Monde, 31/01/2024)
* [L’Europe doit se donner les moyens de lutter contre le projet impérialiste et anti-occidental de Vladimir Poutine](https://www.lemonde.fr/idees/article/2024/03/19/l-europe-doit-se-donner-les-moyens-de-lutter-contre-le-projet-imperialiste-et-anti-occidental-de-vladimir-poutine_6222853_3232.html) (Le Monde, 19/03/2024)
* [Le jour d’après Netanyahou](https://lejournal.info/article/le-jour-dapres-netanyahou/) (Le Journal, 28/05/2024)
* [Partout où le RN pourra l’emporter et où la gauche sera en troisième position, ses représentants devront appeler à voter pour la droite ou le centre](https://www.lemonde.fr/idees/article/2024/06/25/pour-un-barrage-efficace-les-representants-de-la-gauche-devront-refuser-toute-triangulaire-au-second-tour-et-appeler-a-voter-pour-les-candidats-de-la-droite-et-du-centre_6243644_3232.html) (Le Monde, 25/06/2024)
* [Pour une culture de la négociation ](https://www.telos-eu.com/fr/pour-une-culture-de-la-negociation.html) (Telos, 30/09/24)
* [Déserts médicaux : « L’accent doit être mis sur le recrutement local des médecins afin d’ancrer leur pratique, durablement, dans les territoires »](https://www.lemonde.fr/idees/article/2025/01/24/deserts-medicaux-l-accent-doit-etre-mis-sur-le-recrutement-local-des-medecins-afin-d-ancrer-leur-pratique-durablement-dans-les-territoires_6514087_3232.html) (Le Monde, 27/01/2025)
* [Europe : un angélisme dangereux](https://lejournal.info/article/europe-un-angelisme-dangereux/) (Le Journal, 21/03/2025)
* [L’Assemblée nationale doit permettre la recherche du compromis et la fabrique du consensus](https://www.lemonde.fr/idees/article/2025/05/21/l-assemblee-nationale-doit-permettre-la-recherche-du-compromis-et-la-fabrique-du-consensus_6607591_3232.html) (Le Monde, 21/05/2025)
* [Retraites : cessons de sacrifier les jeunes !](https://lejournal.info/article/retraites-cessons-de-sacrifier-les-jeunes/) (Le Journal, 28/06/2025)

Des manifestes collectifs

* [Manifeste pour une gauche sociale‐démocrate, républicaine, humaniste et écologique](https://assets.nationbuilder.com/appeldegauche/mailings/353/attachments/original/Manifeste_pour_une_gauche_sociale-de%CC%81mocrate__re%CC%81publicaine__humaniste_et_e%CC%81cologique_%28et_signataires_040922%29.pdf?1662369866)
              `}</Markdown>
            ),
          },
        },
      },
      contact: {
        title: `Rejoignez-nous`,
        prelude: (
          <Markdown>{`Des citoyen.ne.s engagé.e.s qui militent pour un approfondissement continu de la **démocratie**`}</Markdown>
        ),
        description: (
          <Markdown>{`
Si notre projet vous intéresse, que vous souhaitez nous rejoindre ou simplement recevoir plus d'information, n'hésitez pas à nous écrire :

[contact@telemaque.eu](mailto:contact@telemaque.eu)
          `}</Markdown>
        ),
      },
    },
  },
  copyright: `Collectif Télémaque © ${new Date().getFullYear()}`,
  twitter: {
    href: `https://twitter.com/colltelemaque`,
  },
};
