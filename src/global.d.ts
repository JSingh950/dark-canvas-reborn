declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.JPEG";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

export {};
