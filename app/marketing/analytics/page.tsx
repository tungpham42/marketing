import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Digital Marketing Analytics | Digital Marketing Guide",
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
      title: "Digital Marketing Analytics | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/marketing/analytics`,
      images: [
        {
          url: `${hostUrl}/1200x630_analytics.jpg`,
          width: 1200,
          height: 630,
          alt: "Digital Marketing Analytics | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Digital Marketing Analytics
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Digital marketing analytics involves measuring, analyzing, and
          optimizing marketing performance to make data-driven decisions that
          enhance campaign effectiveness and business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Key Metrics
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Track metrics like click-through rate (CTR), conversion rate, return
            on investment (ROI), and engagement to gauge campaign success.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Analytics Tools
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use tools like Google Analytics, SEMrush, and HubSpot to monitor
            traffic, user behavior, and campaign performance in real-time.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Data Collection
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Collect data from multiple sources, including websites, social
            media, and email campaigns, to gain a holistic view of performance.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            A/B Testing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Run A/B tests on ads, emails, or landing pages to identify what
            drives the best results and optimize accordingly.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Reporting
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Create clear, actionable reports with tools like Looker Studio to
            share insights and align strategies with business goals.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Optimization
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use insights from analytics to refine campaigns, improve targeting,
            and maximize ROI over time.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Analytics empowers marketers to make informed decisions, optimize
          strategies, and drive measurable growth through data.
        </p>
      </div>
    </div>
  );
}
