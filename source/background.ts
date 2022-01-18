import "./types/global.ts";

(chrome || browser).tabs.onUpdated.addListener(() => {
  console.log("tab-updated");
});
