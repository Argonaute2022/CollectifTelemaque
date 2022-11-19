import Markdown from "react-markdown";

import type { ContentLocale } from ".";

export const contentLocaleFr: ContentLocale = {
  home: {
    contactLink: `Suivre nos activités !`,
    copyright: `Collectif Télémaque © ${new Date().getFullYear()}`,
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

Pour cela, elle devra reconstruire un projet en s’appuyant sur les quatre piliers indissociables qui forgent son identité idéologique : le progrès social, la transition écologique, la construction européenne et la démocratie pluraliste.
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
            description: `'Europe est le bon échelon pour répondre aux défis de notre temps - lutte contre le dérèglement climatique, régulation du capitalisme mondialisé - et construire collectivement un nouveau modèle de société à vocation mondiale.`,
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
Le Collectif Télémaque rassemble des *universitaires*, *fonctionnaires*, *cadres du secteur privé*, militants, élus et syndicalistes qui ne se résignent pas à la mort annoncée de la gauche de gouvernement.

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
              <Markdown>{`Un [livre fondateur](https://www.jean-jaures.org/publication/la-gauche-du-reel-un-progressisme-pour-aujourdhui/) qui présente nos réflexions de fond`}</Markdown>
            ),
          },
          meetings: {
            title: `Des rencontres`,
            description: (
              <Markdown>{`
Des échanges avec des intellectuels pour nourrir nos réflexions
              `}</Markdown>
            ),
          },
          columns: {
            title: `Des tribunes`,
            description: (
              <Markdown>{`
Des prises de position relayées dans la presse

* [Non, la gauche de gouvernement n'est pas morte](https://www.lemonde.fr/idees/article/2022/05/04/non-la-gauche-de-gouvernement-n-est-pas-morte_6124727_3232.html)
* [Ne pas avoir mis de garde-fous pour empêcher le RN de voter la motion de censure de la Nupes fut une erreur](https://www.lemonde.fr/idees/article/2022/11/08/ne-pas-avoir-mis-de-garde-fous-pour-empecher-le-rn-de-voter-la-motion-de-censure-de-la-nupes-fut-une-erreur_6148988_3232.html)
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
    twitter: {
      href: `https://twitter.com/colltelemaque`,
    },
  },
};
