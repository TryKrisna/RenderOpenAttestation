// import { CocTemplate } from "./template";

// export const templates = [
//   {
//     id: "certificate",
//     label: "Certificate",
//     template: CocTemplate,
//   },
// ];
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";

export const registry: TemplateRegistry<any> = {
  COC: templates,
};