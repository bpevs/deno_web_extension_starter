import browserAPI from "./utilities/browser.ts";

browserAPI.tabs.onUpdated.addListener(() => {
  console.log("tab-updated");
});
