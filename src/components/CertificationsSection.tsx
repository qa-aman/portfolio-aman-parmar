import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12">Certifications</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Scaled Agile
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Certified as a SAFe® 5.1 Agilist, demonstrating a deep understanding of the Scaled Agile Framework (SAFe), Lean-Agile principles, and practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;