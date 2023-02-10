// import { v2 } from "@govtechsg/open-attestation";

// export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
//   name: string;
//   institute: string;
//   foo?: {
//     title: string;
//   };
//   $template: v2.TemplateObject;
// }

// export const customTemplateCertificate: CustomTemplateCertificate = {
//   name: "John Doe",
//   institute: "Institute of John Doe",
//   issuers: [
//     {
//       name: "institute of blockchain"
//     }
//   ],
//   $template: {
//     name: "custom",
//     type: v2.TemplateType.EmbeddedRenderer,
//     url: "http://localhost:3000"
//   },
//   foo: {
//     title: "Bar is awesome"
//   }
// };


import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  issuers: [
    {
      name: "My name",
      // 
      documentStore: "0x198CEdb0A4B0E328FF890f865E23601bFbFdD8d0",
      // documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "raw-beige-bat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "John Doe",
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};