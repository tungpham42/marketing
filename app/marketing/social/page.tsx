import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Social Media Marketing | Digital Marketing Guide",
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
      title: "Social Media Marketing | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/marketing/social`,
      images: [
        {
          url: `${hostUrl}/1200x630_social.jpg`,
          width: 1200,
          height: 630,
          alt: "Social Media Marketing | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function SocialMediaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Social Media Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Social media marketing is the practice of using social media platforms
          to promote products, services, or brands and engage with audiences.
          Platforms like Facebook, Instagram, X, LinkedIn, and TikTok allow
          businesses to connect with users in creative and impactful ways.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Set Clear Goals
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A successful social media strategy begins with clearly defined
            goals, such as increasing brand awareness, generating leads, or
            fostering customer loyalty. Pair each goal with measurable KPIs like
            engagement rate or conversions.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Choose the Right Platforms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each platform has unique demographics and content formats. LinkedIn
            is ideal for B2B, while Instagram and TikTok excel in visual
            storytelling for consumer engagement.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Create Engaging Content
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Content is king. Use diverse formats like videos, stories, and
            polls, and maintain consistency with a content calendar to keep your
            audience engaged.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Community Management
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Respond to comments and messages, and use social listening tools
            like Hootsuite to track conversations and manage your brand’s
            reputation.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Leverage Paid Ads
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Amplify your reach with targeted ads like boosted posts or carousel
            ads, using platform tools to focus on specific audiences.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Analytics & Optimization
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Track metrics like engagement and conversion rates with platform
            analytics or tools like Buffer to refine your strategy.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          In summary, social media marketing is about strategy, creativity, and
          connection. Build trust and visibility with a dynamic approach to
          content and engagement.
        </p>
      </div>
    </div>
  );
}
