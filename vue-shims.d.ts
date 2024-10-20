declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.pdf" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare class SwiperComponent {
  constructor(container: string | HTMLElement, options?: SwiperOptions);
}

declare module "gsap" {
  interface SplitText {
    new (target: string | HTMLElement, vars: object): any;
  }
}

interface __VLS_WithComponent {}
