typeof window < "u" && (async () => {
  const e = (await import("./bridge-B8Xne9sm.js")).SanityOSBridge;
  if (e && !customElements.get("sanity-bridge")) {
    customElements.define("sanity-bridge", e);
    const t = document.createElement("sanity-bridge");
    document.body.appendChild(t);
  }
})();
