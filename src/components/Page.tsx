import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent, ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { IoMenuSharp, IoCloseSharp, IoLogoTwitter } from "react-icons/io5";

import logoImageSrc from "../assets/collectif-telemaque.png";
import type { ContentLocale } from "../contents";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { keys } from "../lib/utils";
import { sections } from "../styles/sections";

const mainContainerId = `main-container`;

const NavBar: FunctionComponent<{
  content: ContentLocale;
  onScrollTop: () => unknown;
}> = ({ content, onScrollTop }) => {
  const activeSection = useScrollSpy(mainContainerId, keys(sections));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link
        aria-label={content.home.title}
        className={`w-32 md:w-48`}
        href={`/`}
        onClick={() => {
          setIsOpen(false);
          onScrollTop();
        }}
      >
        <Image alt={content.home.title} src={logoImageSrc} />
      </Link>
      <div className={`hidden sm:flex flex-1 justify-around`}>
        <ul className={`flex flex-row items-center gap-3 text-lg`}>
          {keys(sections).map((section) => (
            <li key={section}>
              <Link
                className={`${
                  sections[section].hoverTextColor
                } border-t-2 border-t-transparent border-b-2 ${
                  section === activeSection
                    ? sections[section].borderBottomColor
                    : `border-b-transparent`
                }`}
                href={`/#${section}`}
              >
                {content.home.sections[section].title}
              </Link>
            </li>
          ))}
          <li>
            <a
              aria-label={`Twitter`}
              className={`flex flex-col pt-0.5 items-center justify-center ${sections.contact.hoverTextColor} border-t-2 border-t-transparent border-b-2 border-b-transparent`}
              href={content.twitter.href}
              rel={`noopener noreferrer`}
              target={`_blank`}
            >
              <IoLogoTwitter size={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className={`sm:hidden`}>
        <button
          aria-label={`Menu`}
          className={`w-10 h-10 flex flex-col items-center justify-center rounded-full hover:bg-gray-100`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp size={32} /> : <IoMenuSharp size={32} />}
        </button>
      </div>
      <div
        className={`
          sm:hidden
          fixed top-20 left-0 z-20 w-screen          
          overflow-y-auto
          ${
            isOpen ? `translate-x-0` : `translate-x-full`
          } transition-transform ease-linear duration-75
          bg-white
        `}
        onClick={() => setIsOpen(false)}
        style={{
          height: `calc(100vh - 5rem)`,
        }}
      >
        <ul className={`flex flex-col items-center w-full gap-8 text-3xl`}>
          {keys(sections).map((section) => (
            <li key={section}>
              <Link
                className={`${
                  sections[section].hoverTextColor
                } border-t-2 border-t-transparent border-b-2 ${
                  section === activeSection
                    ? sections[section].borderBottomColor
                    : `border-b-transparent`
                }`}
                href={`/#${section}`}
              >
                {content.home.sections[section].title}
              </Link>
            </li>
          ))}
          <li>
            <a
              aria-label={`Twitter`}
              className={`flex flex-col items-center justify-center ${sections.contact.hoverTextColor} border-t-2 border-t-transparent border-b-2 border-b-transparent`}
              href={content.twitter.href}
              rel={`noopener noreferrer`}
              target={`_blank`}
            >
              <IoLogoTwitter size={40} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Footer: FunctionComponent<{ content: ContentLocale }> = ({ content }) => {
  return (
    <footer className={`flex flex-col items-center justify-center gap-3 p-4`}>
      <ul className={`flex flex-row items-center gap-3`}>
        {keys(sections).map((section) => (
          <li key={section}>
            <Link
              className={`${sections[section].hoverTextColor}`}
              href={`/#${section}`}
            >
              {content.home.sections[section].title}
            </Link>
          </li>
        ))}
        <li>
          <a
            aria-label={`Twitter`}
            className={`flex flex-col pt-0.5 items-center justify-center ${sections.contact.hoverTextColor} border-t-2 border-t-transparent border-b-2 border-b-transparent`}
            href={content.twitter.href}
            rel={`noopener noreferrer`}
            target={`_blank`}
          >
            <IoLogoTwitter size={20} />
          </a>
        </li>
      </ul>
      <ul
        className={`flex flex-row items-center justify-center flex-wrap gap-4`}
      >
        <li>{content.copyright}</li>
        <li className={`links`}>
          <Link href={`/legal`}>{content.legal.title}</Link>
        </li>
      </ul>
    </footer>
  );
};

export const Page: FunctionComponent<{
  children: ReactNode;
  content: ContentLocale;
}> = ({ children, content }) => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const onScrollTop = useCallback(() => {
    mainContainerRef.current?.scrollTo({ top: 0 });
  }, [mainContainerRef]);
  return (
    <div
      className={`relative z-0 w-full min-h-screen max-h-screen flex flex-col`}
    >
      <nav
        className={`fixed z-30 h-20 px-4 flex flex-row w-full justify-between items-center shadow-[0_2px_1px_-2px_gray]`}
      >
        <NavBar content={content} onScrollTop={onScrollTop} />
      </nav>
      <div
        className={`relative z-10 mt-20 overflow-x-clip overflow-y-scroll flex-1 flex flex-col`}
        id={mainContainerId}
        ref={mainContainerRef}
      >
        <main className={`flex flex-col flex-1`}>{children}</main>
        <Footer content={content} />
      </div>
    </div>
  );
};
