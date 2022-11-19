import { useEffect, useState } from "react";

export const useScrollSpy = <T extends string>(
  containerId: string,
  ids: readonly T[],
): null | T => {
  const [current, setCurrent] = useState<null | T>(null);

  useEffect(() => {
    const onUpdate = (): void => {
      let next: null | {
        id: T;
        absTop: number;
      } = null;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (typeof top === `number`) {
          const absTop = Math.abs(top);
          console.log({ id, absTop });
          if (!next) {
            next = {
              id,
              absTop,
            };
          } else if (absTop < next.absTop) {
            next = {
              id,
              absTop,
            };
          }
        }
      }
      setCurrent(next ? next.id : null);
    };
    document.getElementById(containerId)?.addEventListener(`scroll`, onUpdate);
    document.addEventListener(`resize`, onUpdate);
    const raf = requestAnimationFrame(onUpdate);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener(`resize`, onUpdate);
      document
        .getElementById(containerId)
        ?.removeEventListener(`scroll`, onUpdate);
    };
  }, [containerId, ids.join(` `)]);

  return current;
};
