import browserAPI from "browser";

browserAPI.tabs.onUpdated.addListener(() => {
  console.log("tab-updated");
});
