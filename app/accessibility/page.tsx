import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Accessibility", alternates: { canonical: "/accessibility" } };

export default function AccessibilityPage() {
  return <LegalPage title="Accessibility" updated="September 3, 2026" sections={[
    { title: "Our commitment", content: <p>We are working to make this website usable for as many people as possible, including people who use assistive technology.</p> },
    { title: "Need help?", content: <p>If you have difficulty accessing information or using a feature, call (704) 614-5340 or email shope@mpirefi.com. Please describe the page and the help you need, and we will provide the information through another method when possible.</p> },
    { title: "Feedback", content: <p>Accessibility feedback is welcome and helps us improve the site.</p> },
  ]} />;
}
