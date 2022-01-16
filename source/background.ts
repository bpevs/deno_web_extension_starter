declare var chrome: any;
declare var browser: any;

(chrome || browser).tabs.onUpdated.addListener(() => {
  console.log("tab-updated");
});
