import { formatDate } from "@/lib/utils";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  const heroImage = "/images/privacy-hero.png";
  const heroTitle = "Our Privacy Policy";

  const author = {
    name: "Dylan J Crow",
    profile: { avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
  };
  const authorRole = "Associate";
  const date = "29th May 2025";

  return (
    <div className="min-h-screen bg-[#07051A] text-white min-w-screen flex flex-col items-center justify-center  max-w-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={heroTitle}
          className="absolute inset-0 z-0 object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h2 className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-start md:text-6xl w-[90%] max-w-[1000px]">
            We Care About Your <br /> Privacy
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 mx-auto max-w-[1000px] w-[90%]">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-widest rounded-full bg-[#181A2A] text-white border border-[#2BFFFF1A]">
            Bring your business to the best value
          </span>
          <h1 className="pt-10 mb-4 text-3xl font-bold leading-tight md:text-4xl">
            {heroTitle}
          </h1>

          <Separator className="w-full my-10 mb-10" />
        </div>

        {/* Author and Main Image */}
        {/* <div className="flex flex-col items-center gap-8 mb-20 md:flex-row h-[500px]">
          <div className="flex flex-col items-center md:items-start bg-[#232526] h-84 w-64 rounded-sm p-5 pb-2 box-border">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 mb-2">
              <img
                src={author.profile?.avatarUrl}
                alt={author.name}
                className="w-full h-[80%] rounded-none object-cover"
              />
              <div className="flex flex-col items-center justify-center w-full h-[20%] gap-1">
                <div className="text-xl font-bold">{author.name}</div>
                <div className="tracking-widest text-gray-400 uppercase text-md">
                  {authorRole}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 w-full bg-[#131313]">
            <img
              src="/images/post09.png"
              alt={heroTitle}
              className="object-contain w-full h-full shadow-lg rounded-2xl"
            />
          </div>
        </div> */}

        {/* Date */}
        {/* <div className="mb-6 text-sm font-semibold text-gray-400">
          {formatDate(date)}
        </div> */}

        {/* Content */}
        <div className="mb-0 text-lg leading-relaxed prose prose-invert max-w-none" />
        <div className="text-lg leading-relaxed prose prose-invert max-w-none privacy-content">
          <style>
            {`
              .privacy-content h1 {
                @apply text-2xl font-bold;
                padding-bottom: 1rem;
              }
              .privacy-content h2 {
                @apply text-xl font-bold;
                padding-bottom: 0.2rem;
                padding-top: 1.5rem;
                font-size: 1.8rem;
              }
              .privacy-content p {
                font-size: 1.1rem;
              }
            `}
          </style>
          {/* <h1>Privacy Policy</h1> */}
          <p>
            <strong>Effective Date:</strong> 29th May 2025
            <br />
            <strong>Last Updated:</strong> 29th May 2025
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect a variety of business-related data to power our lead
            enrichment services. This includes names, email addresses, phone
            numbers, job titles, company names, industries, and LinkedIn profile
            URLs. For billing purposes, we collect payment-related details
            through secure third-party gateways, although we do not store card
            data directly. Additionally, we collect technical data such as IP
            addresses, device information, and browser types to analyze website
            usage. When you register, we collect your login credentials and
            subscription details. Our API infrastructure also logs request
            metadata, including timestamps and usage volume.
          </p>

          <h2>2. How We Collect Data</h2>
          <p>
            Data is collected directly from users through lead capture forms,
            file uploads (e.g., CSVs), and registration forms. We also integrate
            with CRMs and other platforms to automatically sync lead data. Our
            APIs allow customers to send us real-time data, which is used solely
            for enrichment. In addition, we enhance records using publicly
            available business databases. Lastly, we gather behavioral data
            through the use of cookies and web analytics tools like Google
            Analytics.
          </p>

          <h2>3. Purpose of Data Use</h2>
          <p>
            We use the collected data to validate, enrich, and score leads using
            artificial intelligence. This helps us provide personalized insights
            to our users and improve the quality and targeting of their
            campaigns. It also allows for better syncing with customer CRMs.
            Data is used for account management, billing, and support
            communication. Beyond operations, we use anonymized data to develop
            new features, optimize performance, and ensure the platform remains
            secure and compliant with applicable laws.
          </p>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR), our processing
            of personal data is justified by several legal bases. We rely on
            contractual necessity when offering services to subscribed users. We
            process B2B lead data based on our legitimate interest in providing
            enrichment services. Where required, we request user consent—for
            example, for the use of cookies and marketing communications.
            Lastly, we may process data to fulfill legal obligations imposed by
            regulatory bodies.
          </p>

          <h2>5. Data Storage & Retention</h2>
          <p>
            All data is stored securely on trusted cloud providers like AWS or
            DigitalOcean. Lead data is retained for as long as your account
            remains active or as needed for our operational purposes. Anonymized
            logs may be stored longer for platform analytics. If you request
            deletion of your data or close your account, we will delete all
            associated data, unless we are legally required to retain it.
          </p>

          <h2>6. Your Rights (GDPR, CCPA, Indian IT Rules)</h2>
          <p>
            You have the right to access the personal or business data we hold
            about you. You may request corrections if your data is inaccurate or
            outdated. You can also request that we delete your information, in
            line with the “Right to be Forgotten.” We support data portability,
            so you may export your data upon request. Additionally, you can opt
            out of marketing or enrichment services and restrict or object to
            specific forms of data processing.
          </p>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <strong>[Insert Contact Email]</strong>.
          </p>

          <h2>7. Third-Party APIs & Data Sharing</h2>
          <p>
            We integrate with trusted third-party services such as ZeroBounce,
            Twilio, and NeverBounce to provide lead validation and enrichment.
            We only share data with processors who are contractually obligated
            to handle it responsibly and confidentially under strict data
            processing agreements (DPAs). We do not sell or disclose your data
            to unauthorized third parties under any circumstances.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            To deliver a global service, your data may be transferred and
            processed in countries outside your own, including India, the United
            States, and the European Union. We implement appropriate safeguards
            such as Standard Contractual Clauses (SCCs) to ensure that
            international transfers comply with all relevant data protection
            laws.
          </p>

          <h2>9. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies to manage sessions, analyze user behavior, and store
            preferences for a better user experience. Tools like Google
            Analytics and Meta Pixel help us understand how users interact with
            our platform. You have the option to control or reject cookies via
            our cookie banner. Where applicable, we also respect “Do Not Track”
            (DNT) browser settings.
          </p>

          <h2>10. Data Security Practices</h2>
          <p>
            We take data security seriously. All data is encrypted both in
            transit and at rest. Access to internal systems is tightly
            controlled through role-based permissions and two-factor
            authentication (2FA). We regularly perform vulnerability assessments
            and security audits, and all data access is logged and monitored to
            detect suspicious behavior.
          </p>

          <h2>11. Children & Minors</h2>
          <p>
            Our platform is intended exclusively for users who are 18 years or
            older. We do not knowingly collect personal information from minors.
            If we become aware of such data, it will be deleted immediately and
            permanently from our systems.
          </p>

          <h2>12. Data Breach Notification</h2>
          <p>
            In the event of a data breach, we will investigate and contain the
            issue without delay. Users affected by the breach will be notified
            within 72 hours, in accordance with GDPR requirements. We will also
            inform the appropriate data protection authorities and take all
            necessary steps to remediate the situation and prevent recurrence.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to this
            Privacy Policy or your personal data, you may contact us at:
          </p>
          <p>
            <strong>Privacy Officer – Valid Leads</strong>
            <br />
            Email: <strong>[Insert Contact Email]</strong>
            <br />
            Address: <strong>[Insert Company Address]</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
