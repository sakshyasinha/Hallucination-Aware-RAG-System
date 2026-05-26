export default function RagReliabilityFrontend() {
  const retrievedChunks = [
    "React was released in 2012.",
    "React was officially released in 2013 by Facebook.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-2">
            Hallucination-Aware RAG System
          </h1>
          <p className="text-gray-600 text-lg">
            Retrieval Reliability & Contradiction Detection
          </p>
        </div>

        {/* Question Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">User Question</h2>

          <div className="flex gap-3">
            <input
              type="text"
              value="When was React released?"
              readOnly
              className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 text-lg outline-none"
            />

            <button className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition">
              Ask
            </button>
          </div>
        </div>

        {/* Retrieved Chunks */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Retrieved Chunks</h2>

            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              Conflicting Evidence Detected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {retrievedChunks.map((chunk, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-4 bg-gray-50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">
                    Chunk {index + 1}
                  </h3>

                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Retrieved
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">{chunk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Answer */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">AI Answer</h2>

            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              Ambiguous Response
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-lg leading-relaxed text-gray-700">
            In the given context, there are two conflicting statements.
            One suggests React was released in 2012, while another says
            React was officially released in 2013 by Facebook.
          </div>
        </div>

        {/* Verification Result */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Verification Result</h2>

            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Verdict: Conflicting Context
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
              <h3 className="text-xl font-semibold mb-3">
                Reason
              </h3>

              <p className="text-gray-700 leading-relaxed">
                The retrieved context contains contradictory information
                regarding React's release year.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
              <h3 className="text-xl font-semibold mb-3">
                Evidence
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>• React was released in 2012.</li>
                <li>
                  • React was officially released in 2013 by Facebook.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl shadow-lg p-5">
            <h3 className="text-gray-500 mb-2">Chunks Retrieved</h3>
            <p className="text-3xl font-bold">2</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-5">
            <h3 className="text-gray-500 mb-2">Hallucination Risk</h3>
            <p className="text-3xl font-bold">Medium</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-5">
            <h3 className="text-gray-500 mb-2">Groundedness</h3>
            <p className="text-3xl font-bold">62%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
