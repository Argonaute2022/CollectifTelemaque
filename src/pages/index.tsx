import Image from "next/image";
import type { FunctionComponent } from "react";

import bookImageSrc from "../assets/book.png";
import citizensImageSrc from "../assets/citizens.png";
import columnsImageSrc from "../assets/columns.png";
import logoImageSrc from "../assets/collectif-telemaque.png";
import meetingsImageSrc from "../assets/meetings.png";
import type { ContentLocale } from "../contents";
import { contentLocaleFr } from "../contents/fr";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { keys } from "../lib/utils";

const mainContainerId = `main-container`;

const sections = {
  convictions: {
    btn: `btn-red`,
    bg: `bg-red-400`,
    bgLight: `bg-red-200`,
    hoverTextColor: `hover:text-red-400`,
    borderBottomColor: `border-b-red-400`,
    borderColor: `border-red-400`,
  },
  collective: {
    btn: `btn-green`,
    bg: `bg-green-400`,
    bgLight: `bg-green-200`,
    hoverTextColor: `hover:text-green-400`,
    borderBottomColor: `border-b-green-400`,
    borderColor: `border-green-400`,
  },
  actions: {
    btn: `btn-blue`,
    bg: `bg-blue-400`,
    bgLight: `bg-blue-200`,
    hoverTextColor: `hover:text-blue-400`,
    borderBottomColor: `border-b-blue-400`,
    borderColor: `border-blue-400`,
  },
  contact: {
    btn: `btn-red`,
    bg: `bg-red-400`,
    bgLight: `bg-red-200`,
    hoverTextColor: `hover:text-red-400`,
    borderBottomColor: `border-b-red-400`,
    borderColor: `border-red-400`,
  },
} as const;

const NavBar: FunctionComponent<{ content: ContentLocale }> = ({ content }) => {
  const activeSection = useScrollSpy(mainContainerId, keys(sections));
  return (
    <>
      <div className={`w-32 md:w-48`}>
        <Image alt={`Collectif Télémaque`} src={logoImageSrc} />
      </div>
      <div className={`hidden sm:flex flex-1 justify-around`}>
        <ul className={`flex flex-row items-center gap-3 text-lg`}>
          {keys(sections).map((section) => (
            <li key={section}>
              <a
                className={`${
                  sections[section].hoverTextColor
                } border-t-2 border-t-transparent border-b-2 ${
                  section === activeSection
                    ? sections[section].borderBottomColor
                    : `border-b-transparent`
                }`}
                href={`#${section}`}
              >
                {content.home.sections[section].title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`sm:hidden`}>{`Div`}</div>
    </>
  );
};

const MainSectionConvictions: FunctionComponent<{ content: ContentLocale }> = ({
  content,
}) => (
  <section className={`w-full flex flex-col`} id={`convictions`}>
    <div className={`${sections.convictions.bg} flex flex-col items-center`}>
      <div
        className={`
          container
          py-10 md:py-14
          text-right text-3xl font-semibold leading-normal text-white
          strong-underline
        `}
      >
        {content.home.sections.convictions.prelude}
      </div>
    </div>
    <div className={`flex flex-col items-center`}>
      <div
        className={`container py-6 md:py-10 flex flex-col gap-16 items-start`}
      >
        <h1 className={`text-5xl font-semibold relative`}>
          {content.home.sections.convictions.title}
          <div
            className={`absolute left-0 right-0 -bottom-1/4 opacity-50 h-1/2 ${sections.convictions.bg} -z-10`}
          />
        </h1>
        <div
          className={`flex flex-col gap-10 lg:items-center lg:flex-row w-full`}
        >
          <div
            className={`
              w-full lg:flex-1
              px-5 py-14
              flex flex-col items-center gap-14
              border-2 ${sections.convictions.borderColor}
              text-center text-xl leading-normal
            `}
          >
            {content.home.sections.convictions.description}
            <a
              className={`btn ${sections.convictions.btn} text-xl tracking-widest`}
              href={`#contact`}
            >
              {content.home.contactLink}
            </a>
          </div>
          <ul className={`w-full lg:flex-1 flex flex-col gap-12`}>
            {keys(content.home.sections.convictions.sections).map((section) => {
              const { title, description } =
                content.home.sections.convictions.sections[section];
              return (
                <li
                  className={`relative ${sections.convictions.bgLight} text-md px-4 py-5 text-center`}
                  key={section}
                >
                  <h2
                    className={`absolute left-4 -top-6 font-semibold text-3xl`}
                  >
                    {title}
                  </h2>
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const MainSectionCollective: FunctionComponent<{ content: ContentLocale }> = ({
  content,
}) => (
  <section className={`w-full flex flex-col`} id={`collective`}>
    <div className={`${sections.collective.bg} flex flex-col items-center`}>
      <div
        className={`
          container
          py-10 md:py-14
          text-right text-3xl font-semibold leading-normal text-white
          strong-underline
        `}
      >
        {content.home.sections.collective.prelude}
      </div>
    </div>
    <div className={`flex flex-col items-center`}>
      <div
        className={`container py-6 md:py-10 flex flex-col gap-16 items-start`}
      >
        <h1 className={`text-5xl font-semibold relative`}>
          {content.home.sections.collective.title}
          <div
            className={`absolute left-0 right-0 -bottom-1/4 opacity-50 h-1/2 ${sections.collective.bg} -z-10`}
          />
        </h1>
        <div
          className={`flex flex-col gap-10 lg:flex-row lg:items-stretch w-full`}
        >
          <div
            className={`w-full lg:flex-1 relative h-full flex justify-center items-center`}
          >
            <Image
              alt={content.home.sections.collective.title}
              src={citizensImageSrc}
            />
          </div>
          <div className={`w-full lg:flex-1 flex flex-col items-center gap-12`}>
            <div
              className={`relative px-4 py-10 w-full ${sections.collective.bgLight} text-md text-center`}
            >
              <h2
                className={`absolute left-4 -top-5 xs:-top-6 font-semibold text-2xl xs:text-3xl sm:text-5xl`}
              >
                {
                  content.home.sections.collective.sections.engagedCitizens
                    .title
                }
              </h2>
              {
                content.home.sections.collective.sections.engagedCitizens
                  .description
              }
            </div>

            <a
              className={`btn ${sections.collective.btn} text-xl tracking-widest`}
              href={`#contact`}
            >
              {content.home.contactLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const actionsSections = [
  {
    key: `book`,
    imageSrc: bookImageSrc,
  },
  {
    key: `meetings`,
    imageSrc: meetingsImageSrc,
  },
  {
    key: `columns`,
    imageSrc: columnsImageSrc,
  },
] as const;

const MainSectionActions: FunctionComponent<{ content: ContentLocale }> = ({
  content,
}) => (
  <section className={`w-full flex flex-col`} id={`actions`}>
    <div className={`${sections.actions.bg} flex flex-col items-center`}>
      <div
        className={`
          container
          py-10 md:py-14
          text-right text-3xl font-semibold leading-normal text-white
          strong-underline
        `}
      >
        {content.home.sections.actions.prelude}
      </div>
    </div>
    <div className={`flex flex-col items-center`}>
      <div
        className={`container py-6 md:py-10 flex flex-col gap-16 items-start`}
      >
        <h1 className={`text-5xl font-semibold relative`}>
          {content.home.sections.actions.title}
          <div
            className={`absolute left-0 right-0 -bottom-1/4 opacity-50 h-1/2 ${sections.actions.bg} -z-10`}
          />
        </h1>
        <ul className={`flex flex-col items-start w-full gap-16`}>
          {actionsSections.map(({ key, imageSrc }) => (
            <li
              className={`w-full flex flex-col gap-10 md:flex-row items-center`}
              key={key}
            >
              <div
                className={`w-full relative sm:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center items-center h-56`}
              >
                <Image
                  alt={content.home.sections.actions.sections[key].title}
                  className={`object-contain`}
                  fill
                  src={imageSrc}
                />
              </div>
              <div
                className={`relative p-10 w-full lg:flex-1 ${sections.actions.bgLight} text-md flex flex-col items-center lists gap-4 links links-blue`}
              >
                <h2
                  className={`absolute left-4 -top-5 xs:-top-6 font-semibold text-3xl`}
                >
                  {content.home.sections.actions.sections[key].title}
                </h2>
                {content.home.sections.actions.sections[key].description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
const MainSectionContact: FunctionComponent<{ content: ContentLocale }> = ({
  content,
}) => (
  <section className={`w-full flex flex-col`} id={`contact`}>
    <div className={`${sections.contact.bg} flex flex-col items-center`}>
      <div
        className={`
          container
          py-10 md:py-14
          text-right text-3xl font-semibold leading-normal text-white
          strong-underline
        `}
      >
        {content.home.sections.contact.prelude}
      </div>
    </div>
    <div className={`flex flex-col items-center`}>
      <div
        className={`container py-6 md:py-10 flex flex-col gap-16 items-start`}
      >
        <h1 className={`text-5xl font-semibold relative`}>
          {content.home.sections.contact.title}
          <div
            className={`absolute left-0 right-0 -bottom-1/4 opacity-50 h-1/2 ${sections.contact.bg} -z-10`}
          />
        </h1>
        <div className={`flex flex-col items-center w-full justify-center`}>
          <div
            className={`flex flex-col items-center justify-center ${sections.contact.bgLight} gap-6 p-10 max-w-md text-lg links links-red text-center`}
          >
            {content.home.sections.contact.description}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Main: FunctionComponent<{ content: ContentLocale }> = ({ content }) => {
  return (
    <main className={`flex flex-col flex-1`}>
      <MainSectionConvictions content={content} />
      <MainSectionCollective content={content} />
      <MainSectionActions content={content} />
      <MainSectionContact content={content} />
    </main>
  );
};

const Footer: FunctionComponent<{ content: ContentLocale }> = ({ content }) => {
  return (
    <footer className={`flex flex-row justify-center items-center p-4`}>
      {content.home.copyright}
    </footer>
  );
};

const HomePage: FunctionComponent = () => {
  return (
    <div
      className={`relative z-0 w-full min-h-screen max-h-screen flex flex-col`}
    >
      <nav
        className={`fixed z-30 h-20 px-4 flex flex-row w-full justify-between items-center`}
      >
        <NavBar content={contentLocaleFr} />
      </nav>
      <div
        className={`relative z-10 mt-20 overflow-x-clip overflow-y-scroll flex-1 flex flex-col`}
        id={mainContainerId}
      >
        <Main content={contentLocaleFr} />
        <Footer content={contentLocaleFr} />
      </div>
    </div>
  );
};

export default HomePage;
