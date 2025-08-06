import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Email Marketing | Digital Marketing Guide",
    description:
      "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
    keywords: [
      "digital marketing",
      "ads",
      "analytics",
      "content",
      "email",
      "seo",
      "social",
    ],
    openGraph: {
      title: "Email Marketing | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/email`,
      images: [
        {
          url: `${hostUrl}/1200x630_email.jpg`,
          width: 1200,
          height: 630,
          alt: "Email Marketing | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function EmailMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Email Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Email marketing is a cost-effective way to nurture leads and drive
          conversions by sending tailored messages to a targeted audience.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Build a Quality List
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use lead magnets like eBooks or discounts to grow a permission-based
            email list, ensuring compliance with GDPR and CAN-SPAM.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Segmentation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Divide your list by demographics or interests for personalized
            messaging that boosts open and click-through rates.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Compelling Subject Lines
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Craft concise, curiosity-driven subject lines with personalization
            to increase email open rates.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Responsive Design
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Create mobile-friendly emails with tools like Mailchimp to ensure
            great visuals across devices.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Automation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Set up automated sequences like welcome emails or abandoned cart
            reminders to save time and maintain engagement.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Analytics & Testing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use A/B testing and track metrics like open and conversion rates to
            optimize campaigns.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Email marketing builds lasting relationships through personalization,
          automation, and data-driven optimization.
        </p>
      </div>
    </div>
  );
}
