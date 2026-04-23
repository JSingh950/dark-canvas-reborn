export function setGoogleTranslateCookie(from: string, to: string) {
  try {
    const domain = window.location.hostname;
    // set cookie for current domain and root path
    const cookie = `googtrans=/${from}/${to};path=/;domain=${domain}`;
    document.cookie = cookie;
  } catch (e) {
    // ignore
  }
}

export function getCurrentGoogleLang(): string {
  const match = document.cookie.match(/(?:^|; )googtrans=\/([^/]+)\/([^;]+)/);
  if (match) return match[2];
  return "en";
}

export function loadGoogleTranslate(cb?: () => void) {
  if (typeof window === "undefined") return;
  // If already loaded, call cb
  if ((window as any).google && (window as any).google.translate) {
    cb && cb();
    return;
  }

  (window as any).googleTranslateElementInit = function () {
    try {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ko",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      );
    } catch (e) {
      // ignore
    }
    cb && cb();
  };

  const id = "google-translate-script";
  if (!document.getElementById(id)) {
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.head.appendChild(s);
  }
}
