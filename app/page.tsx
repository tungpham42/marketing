import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Home | Digital Marketing Guide",
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
      title: "Home | Digital Marketing Guide",
      description:
        "Digital marketing analytics involves measuring, analyzing, and optimizing marketing performance to make data-driven decisions that enhance campaign effectiveness and business growth.",
      type: "website",
      url: hostUrl,
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Digital Marketing Guide",
        },
      ],
      siteName: "Digital Marketing Guide",
    },
  };
}

const categories = [
  { slug: "seo", title: "SEO" },
  { slug: "content", title: "Content Marketing" },
  { slug: "email", title: "Email Marketing" },
  { slug: "social", title: "Social Media" },
  { slug: "ads", title: "Advertising" },
  { slug: "analytics", title: "Analytics" },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          Explore Digital Marketing Topics
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Dive into the world of digital marketing with our expertly curated
          guides on SEO, content, email, social media, and advertising.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <li
              key={cat.slug}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <Link
                href={`/marketing/${cat.slug}`}
                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {cat.title}
              </Link>
              <p className="mt-2 text-gray-600">
                Discover key strategies and insights for{" "}
                {cat.title.toLowerCase()}.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
