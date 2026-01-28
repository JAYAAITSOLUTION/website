// Client and Partner Logo Data
// Centralized data structure for all logo assets

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface RegulatoryBody {
  id: number;
  name: string;
  logo: string;
}

// Clients - 19 total from old website
// Source: landing/public/company/ and landing/public/companies/
export const clients: Client[] = [
  { id: 1, name: "Arohi", logo: "/logos/clients/arohi.png" },
  { id: 2, name: "Axis Bank", logo: "/logos/clients/axis.png" },
  { id: 3, name: "Bajaj", logo: "/logos/clients/bajaj.png" },
  { id: 4, name: "DCB Bank", logo: "/logos/clients/dcb-bank.png" },
  { id: 5, name: "Greater Bank", logo: "/logos/clients/greater-bank.png" },
  { id: 6, name: "HDFC Sales", logo: "/logos/clients/hdfc-sales.png" },
  { id: 7, name: "ICICI Bank", logo: "/logos/clients/icici-bank.png" },
  { id: 8, name: "ICICI Lombard", logo: "/logos/clients/icici-lombard.png" },
  { id: 9, name: "IndusInd Bank", logo: "/logos/clients/indusind-bank.png" },
  { id: 10, name: "Kotak Life", logo: "/logos/clients/kotak-life.png" },
  { id: 11, name: "Oman Development Bank", logo: "/logos/clients/oman-development-bank.png" },
  { id: 12, name: "SBI General", logo: "/logos/clients/sbi-general.png" },
  // Generic names for unidentified page9 images - update with actual names when identified
  { id: 13, name: "Client Partner 1", logo: "/logos/clients/page9-img5.jpeg" },
  { id: 14, name: "Client Partner 2", logo: "/logos/clients/page9-img6.jpeg" },
  { id: 15, name: "Client Partner 3", logo: "/logos/clients/page9-img7.jpeg" },
  // { id: 16, name: "Client Partner 4", logo: "/logos/clients/page9-img8.jpeg" },
  { id: 17, name: "Client Partner 5", logo: "/logos/clients/page9-img9.png" },
  { id: 18, name: "Client Partner 6", logo: "/logos/clients/page9-img10.png" },
  { id: 19, name: "Client Partner 7", logo: "/logos/clients/page9-img17.png" },
];

// Strategic Partners - 21 total from old website
// Source: landing/public/partners/strategic/
export const partners: Partner[] = [
  { id: 1, name: "Accops", logo: "/logos/partners/accops.jpg" },
  { id: 2, name: "AppDynamics", logo: "/logos/partners/app-dynamics.jpg" },
  { id: 3, name: "Arcon", logo: "/logos/partners/arcon.png" },
  { id: 4, name: "Beyond", logo: "/logos/partners/beyond.jpg" },
  { id: 5, name: "BMC", logo: "/logos/partners/bmc.png" },
  { id: 6, name: "Broadcom", logo: "/logos/partners/broadcom.png" },
  { id: 7, name: "Cisco", logo: "/logos/partners/cisco.jpg" },
  { id: 8, name: "Citrix", logo: "/logos/partners/citrix.png" },
  { id: 9, name: "Commvault", logo: "/logos/partners/commvault.png" },
  { id: 10, name: "CyberArk", logo: "/logos/partners/cyberark.png" },
  { id: 11, name: "Forcepoint", logo: "/logos/partners/forcepoint.png" },
  { id: 12, name: "Fortinet", logo: "/logos/partners/fortinet.png" },
  { id: 13, name: "ManageEngine", logo: "/logos/partners/manageengine.png" },
  { id: 14, name: "Palo Alto", logo: "/logos/partners/paloalto.jpg" },
  { id: 15, name: "RSA", logo: "/logos/partners/rsa.png" },
  { id: 16, name: "Seclore", logo: "/logos/partners/seclore.png" },
  { id: 17, name: "Silver Peak", logo: "/logos/partners/silverpeak.png" },
  { id: 18, name: "Tenable", logo: "/logos/partners/tenable.png" },
  { id: 19, name: "Versa", logo: "/logos/partners/versa.png" },
  { id: 20, name: "Vyom Labs", logo: "/logos/partners/vyomlab.png" },
  { id: 21, name: "Cisco", logo: "/logos/partners/cisco.png" }, // Alternative Cisco logo
];

// Regulatory Bodies - 8 total from old website
// Source: landing/public/regulatories/
export const regulatoryBodies: RegulatoryBody[] = [
  { id: 1, name: "ADHICS", logo: "/logos/regulatory/adhics.webp" },
  { id: 2, name: "CERT-IN", logo: "/logos/regulatory/CERTIN.png" },
  { id: 3, name: "IRDAI", logo: "/logos/regulatory/IRDA.png" },
  { id: 4, name: "NBFC", logo: "/logos/regulatory/nbfc.png" },
  { id: 5, name: "NESA", logo: "/logos/regulatory/NESA.png" },
  { id: 6, name: "NIST", logo: "/logos/regulatory/NIST.png" },
  { id: 7, name: "RBI", logo: "/logos/regulatory/rbi.png" },
  { id: 8, name: "SEBI", logo: "/logos/regulatory/sebi.png" },
];
