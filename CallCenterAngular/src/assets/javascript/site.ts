interface StorageInterface {
  get: (key: string) => string | null;
  set: (key: string, value: string) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const storageUtil = (): StorageInterface => {
  return {
    get: (key: string): string | null => {
      const value = sessionStorage.getItem(key);
      return value ? decodeURI(value) : null;
    },
    set: (key: string, value: string): void => {
      const encodeVal = encodeURI(value);
      sessionStorage.setItem(key, encodeVal);
    },
    remove: (key: string): void => {
      sessionStorage.removeItem(key);
    },
    clear: (): void => {
      sessionStorage.clear();
    },
  };
};

export const storage = storageUtil();
