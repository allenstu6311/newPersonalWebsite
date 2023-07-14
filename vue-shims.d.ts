declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module '*.pdf' {
    const value: string;
    export default value;
  }