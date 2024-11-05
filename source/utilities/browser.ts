const userAgent: string = navigator?.userAgent || "";
const isFirefox = /firefox/i.test(userAgent);
const isDeno = /deno/i.test(userAgent);

// deno-lint-ignore no-explicit-any
let browserAPI = (globalThis as any).chrome;
// deno-lint-ignore no-explicit-any
if (isFirefox) browserAPI = (globalThis as any).browser;
if (isDeno) {
  const listeners = {
    addListener: () => {},
    removeListener: () => {},
    hasListener: () => {},
  };

  browserAPI = {
    permissions: {
      contains: () => {},
      request: () => {},
    },
    runtime: {
      onMessage: listeners,
      openOptionsPage: () => {},
      lastError: {
        message: "",
      },
    },
    storage: {
      sync: {
        get: () => {},
        set: () => {},
      },
    },
    tabs: {
      onUpdated: listeners,
      query: () => {},
      sendMessage: () => {},
    },
  };
}

export default browserAPI;
