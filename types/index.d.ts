    
// -- Example Usage: 
// -- cypress/tsconfig.json
// {
//   "compilerOptions": {
//      "types": ["cypress", "cypress-plugin-snapshots"]
//    }
// }

declare namespace Cypress {
  interface Chainable<Subject = any> {
    toMatchSnapshot(options?: Partial<{
      ignoreExtralFields: boolean,
      ignoreExtraArrayItems: boolean,
      normalizeJson: boolean,
      replace: any,
      name: string
    }>): Chainable<null>;

    toMatchImageSnapshot(options?: Partial<{
      imageConfig: Partial<{
        createDiffImage: boolean,
        threshold: number,
        thresholdType: "percent" | "pixels",
        resizeDevicePixelRatio: boolean
      }>,
      // Config passed to cy.screenshot
      screenshotConfig: Partial<{
        log: boolean;
        blackout: Array<string>;
        capture: 'fullPage' | 'viewport' | 'runner';
        clip: null | { x: number, y: number, width: number, height: number };
        disableTimersAndAnimations: boolean;
        padding: null | number | Array<number>;
        scale: boolean;
        timeout: number;
        overwrite: boolean;
        onBeforeScreenshot: (target: Document | HTMLElement) => void;
        onAfterScreenshot: (target: Document | HTMLElement, properties: { path: string, dimensions: any }) => void;
      }>,
      name: string,
      separator: string
    }>): Chainable<null>;
  }
}
