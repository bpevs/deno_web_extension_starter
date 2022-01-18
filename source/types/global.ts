/**
 * Workaround to allow us type definition on chrome extension globals
 */

export { };

declare global {
  var browser: any
  var chrome: any
}
