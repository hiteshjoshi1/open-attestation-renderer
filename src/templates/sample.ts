import { Document } from "@govtechsg/decentralized-renderer-react-components";

// export interface CustomTemplateCertificate extends Document {
//   name: string;
//   institute: string;
//   foo?: {
//     title: string;
//   };
// }

// export const customTemplateCertificate: CustomTemplateCertificate = {
//   name: "John Doe",
//   institute: "Institute of John Doe",
//   $template: {
//     name: "custom",
//     type: "EMBEDDED_RENDERER",
//     url: "http://localhost:3000"
//   },
//   foo: {
//     title: "Bar is awesome"
//   }
// };


export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "OpenAttestation Certificate of Completion",
  recipient: {
    name: "Hitesh Joshi"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};