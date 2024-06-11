import verFlavor from "./appFlavorAndVersion";

export function getApiBaseUrl() {
  switch (verFlavor.APP_FLAVOR) {
    case verFlavor.FlavorType.DEV:
      return "https://brain-pearl-one.vercel.app/";
    case verFlavor.FlavorType.LOCAL:
      return "  http://127.0.0.1:8000/";
  }
}
