import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Content Marketing | Digital Marketing Guide",
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
      title: "Content Marketing | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/content`,
      images: [
        {
          url: `${hostUrl}/1200x630_content.jpg`,
          width: 1200,
          height: 630,
          alt: "Content Marketing | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function ContentMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Content Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Content marketing focuses on creating valuable, relevant content to
          attract and retain an audience, building trust and driving profitable
          actions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Know Your Audience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Create buyer personas to understand your audience’s needs and tailor
            content to their interests and challenges.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Content Formats
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use blogs, videos, infographics, or podcasts to deliver value and
            align with your audience’s preferences.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Content Calendar
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Plan and publish content consistently with tools like Trello to
            align with campaigns and goals.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Distribution
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Promote content via email, social media, SEO, and paid ads to
            maximize reach and engagement.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Measure Success
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Track KPIs like traffic, engagement, and conversions with tools like
            Google Analytics to refine your strategy.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adapt & Evolve
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Continuously analyze feedback and trends to keep your content
            strategy dynamic and effective.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Content marketing builds trust and authority through consistent,
          valuable content that resonates with your audience.
        </p>
      </div>
    </div>
  );
}
