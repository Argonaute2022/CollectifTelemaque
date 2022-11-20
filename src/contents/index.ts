import type { ReactNode } from "react";

export type ContentLocale = {
  legal: {
    title: string;
    metaDescription: string;
    content: ReactNode;
  };
  home: {
    title: string;
    metaDescription: string;
    contactLink: string;
    sections: {
      convictions: {
        title: string;
        prelude: ReactNode;
        description: ReactNode;
        sections: {
          social: {
            title: string;
            description: ReactNode;
          };
          ecology: {
            title: string;
            description: ReactNode;
          };
          europe: {
            title: string;
            description: ReactNode;
          };
          democracy: {
            title: string;
            description: ReactNode;
          };
        };
      };
      collective: {
        title: string;
        prelude: ReactNode;
        sections: {
          engagedCitizens: {
            title: string;
            description: ReactNode;
          };
        };
      };
      actions: {
        title: string;
        prelude: ReactNode;
        sections: {
          book: {
            title: string;
            description: ReactNode;
          };
          meetings: {
            title: string;
            description: ReactNode;
          };
          columns: {
            title: string;
            description: ReactNode;
          };
        };
      };
      contact: {
        title: string;
        prelude: ReactNode;
        description: ReactNode;
      };
    };
  };
  copyright: string;
  twitter: {
    href: string;
  };
};
