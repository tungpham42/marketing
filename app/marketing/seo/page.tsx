import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "SEO | Digital Marketing Guide",
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
      title: "SEO | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: `${hostUrl}/marketing/seo`,
      images: [
        {
          url: `${hostUrl}/1200x630_seo.jpg`,
          width: 1200,
          height: 630,
          alt: "SEO | Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

export default function SEOPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Search Engine Optimization (SEO)
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          SEO enhances your website’s visibility in search engine results,
          driving more traffic and potential customers to your business through
          strategic content and technical optimizations.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Types of SEO
          </h2>
          <p className="text-gray-600 leading-relaxed">
            On-page SEO focuses on content and meta tags, off-page SEO builds
            backlinks, and technical SEO optimizes site speed and mobile
            responsiveness.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Keyword Research
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Identify popular search terms and use them strategically in
            high-quality content to boost visibility without keyword stuffing.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Content Creation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Create original, comprehensive content like blogs and multimedia,
            and update older posts for renewed SEO performance.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Technical SEO
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ensure fast load times, mobile responsiveness, and proper site
            architecture using tools like Google Search Console.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Link Building
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Earn backlinks from reputable sites through guest posts and
            shareable content to boost authority.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Analytics
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Monitor keyword rankings and traffic with tools like Google
            Analytics and SEMrush to refine your strategy.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 mt-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          SEO is a long-term strategy. Focus on quality content, technical
          optimization, and backlinks to achieve lasting visibility and growth.
        </p>
      </div>
    </div>
  );
}
