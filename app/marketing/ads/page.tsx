import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Digital Advertising | Digital Marketing Guide",
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
      title: "Digital Advertising | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/marketing/ads`,
      images: [
        {
          url: `${hostUrl}/1200x630_ads.jpg`,
          width: 1200,
          height: 630,
          alt: "Digital Advertising | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function AdvertisingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Digital Advertising
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Digital advertising promotes products or services online through
          targeted channels like search engines, social media, and websites.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Types of Ads
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Includes SEM (PPC), display ads, social media ads, video ads, and
            native ads, each with unique targeting capabilities.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Search Engine Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bid on keywords via platforms like Google Ads to appear in search
            results and drive targeted traffic.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Social Media Ads
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Leverage platforms like Facebook and TikTok for precise targeting
            with formats like carousel ads and stories.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Video Advertising
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Engage audiences with short-form videos on YouTube or Instagram
            Reels for strong brand awareness.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Budgeting & Bidding
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Choose CPC, CPM, or CPA models based on goals like awareness or
            conversions to optimize ad spend.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Performance Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Monitor CTR, ROAS, and impressions with tools like Google Analytics
            to optimize campaigns.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Digital advertising drives growth with targeted strategies, compelling
          creatives, and continuous optimization.
        </p>
      </div>
    </div>
  );
}
