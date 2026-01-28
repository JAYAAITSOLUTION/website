import { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "IT Solutions - Monitoring & Security Solutions",
  description: "Explore our comprehensive range of 15+ monitoring and security solutions designed to protect your enterprise.",
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
