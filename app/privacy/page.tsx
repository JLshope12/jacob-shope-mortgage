import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="September 3, 2026" sections={[
    { title: "Information you provide", content: <p>When you submit a contact or newsletter form, you may provide your name, email address, phone number, financing goals, and other details you choose to share.</p> },
    { title: "How information is used", content: <p>Information is used to respond to your request, provide mortgage-related information, deliver emails you requested, and improve this website. Information submitted for mortgage services may be handled through Mpire Financial&apos;s secure systems and applicable service providers.</p> },
    { title: "Email subscriptions", content: <p>The Real Estate Rundown is delivered through Kit. You may unsubscribe using the link included in any newsletter. Unsubscribing from the newsletter does not affect communications related to an active mortgage inquiry or transaction.</p> },
    { title: "Analytics and service providers", content: <p>This site may use analytics, scheduling, form, hosting, and email providers to operate the website. Those providers process information according to their own terms and privacy practices.</p> },
    { title: "Contact", content: <p>Questions may be sent to shope@mpirefi.com or (704) 614-5340.</p> },
  ]} />;
}
