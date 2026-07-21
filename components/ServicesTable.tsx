// components/ServicesTable.tsx
import React from "react";

interface ServicesTableProps {
  isDarkMode: boolean;
}

const ServicesTable: React.FC<ServicesTableProps> = ({ isDarkMode }) => {
  return (
    <div className="relative bg-gradient-to-b from-white/90 via-transparent to-white/100 dark:from-black/90 dark:via-transparent dark:to-black/80 p-6 sm:p-8 rounded-2xl shadow-lg overflow-hidden">
      <h2 className="font-bold font-italic text-center lg:text-3xl lg:text-left mb-6 text-gray-900 dark:text-gray-100">WHAT WE DO</h2>
      <table className="w-full border-separate border-spacing-y-6 text-sm sm:text-base lg:text-lg">
        <thead>
          <tr>
            <th className="text-left font-bold text-black dark:text-gray-200 pb-2 border-b border-gray-300 dark:border-gray-700">SERVICE</th>
            <th className="text-left font-bold text-black dark:text-gray-200 pb-2 border-b border-gray-300 dark:border-gray-700">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "Brand & Product Strategy",
              price: "From $5k - $50k",
              desc: (
                <>
                  For founders who need to turn an idea into a clear, compelling, and fundable vision.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Brand identity design & creative direction</li>
                    <li>Go-to-market strategy & positioning</li>
                    <li>UX research & product visioning</li>
                    <li>Pitch deck & investor narrative design</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Software Development",
              price: "From $20k - $150k+",
              desc: (
                <>
                  For businesses ready to scale their digital systems or bring intelligent products to life.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Full-stack web & mobile app development</li>
                    <li>AI integration (chatbots, automation, analytics, LLM-powered tools)</li>
                    <li>API architecture & data pipeline design</li>
                    <li>Product prototyping & MVP builds</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Design & Creative Direction",
              price: "From $10k - $75k+",
              desc: (
                <>
                  For teams that want to communicate powerfully and beautifully.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>UI/UX design systems</li>
                    <li>Motion & interactive design</li>
                    <li>Visual storytelling, branding, and launch campaigns</li>
                    <li>Marketing website & content design</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Venture Studio Partnerships",
              price: "Equity + Revenue Share",
              desc: (
                <>
                  For founders who want more than an agency — they want a partner.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Fractional product & technology leadership</li>
                    <li>Co-building and incubation for early-stage startups</li>
                    <li>Equity-based collaborations (build for ownership)</li>
                    <li>Investor readiness & growth architecture</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Qreative Labs",
              price: "Custom / By Inquiry",
              desc: (
                <>
                  Where innovation meets research.
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Custom research and development projects</li>
                    <li>Internal experiments, prototypes, and concept launches</li>
                    <li>AI tools, wellness tech, and creative ventures from our studio</li>
                    <li>Open collaborations with VCs, engineers, and thinkers</li>
                  </ul>
                </>
              ),
            },
          ].map(({ title, price, desc }) => (
            <tr key={title} className="align-top">
              <td className="pt-4 pr-4 font-semibold text-gray-900 dark:text-gray-100 w-1/3">
                <div className="flex flex-col">
                  <span>{title}</span>
                  <span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full mt-1 w-fit whitespace-nowrap">
                    {price}
                  </span>
                </div>
              </td>
              <td className="pt-4 text-gray-700 dark:text-gray-300">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;