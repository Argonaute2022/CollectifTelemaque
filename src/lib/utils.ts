export const keys = <T extends Record<string, unknown>>(
  o: T,
): readonly (keyof T)[] => Object.keys(o);
