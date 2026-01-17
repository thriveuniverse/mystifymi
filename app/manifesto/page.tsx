export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Title & Subtitle – bigger, centered, with breathing room */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-green-strong mb-4">
          2026 Manifesto
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 italic">
          Permission to ask endless questions, reclaim curiosity, and make space for the brain.
        </p>
      </div>

      {/* Main content – prose for beautiful readability */}
      <div className="prose prose-lg md:prose-xl prose-headings:text-green-strong prose-p:text-gray-800 prose-li:text-gray-800 max-w-none space-y-8">
        <p>
          I remember reading when my kids were tiny that it was really important to value their voice.  
          So I tried to answer <strong>all</strong> their questions — even when there were fifty in a row (or at least it felt like that many…).
        </p>

        <p>
          Adult questions are just as important, but they’re much harder to answer - 
          until AI came along.
        </p>

        <p>
          The internet is full of praise for AI’s benefits, but it’s missing some of the quieter, more human ones:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            AI doesn’t run out of patience  
            <em>(at least not usually — though I may have pushed a few models to the digital equivalent of “when does this end?”).</em>
          </li>
          <li>
            AI lets you ask the questions that would irritate other people.
          </li>
          <li>
            If an answer doesn’t feel logical to me — even if the data says it’s right —  
            I can keep digging until it makes sense.
          </li>
        </ul>

        <p>
          Very few humans have the stamina for that level of curiosity.
        </p>

        <p>
          I think adults need to give their brains permission to roam again.
        </p>

        <p>
          We’ve been told for decades to prioritise <em>“me time.”</em>
        </p>

        <blockquote className="border-l-4 border-green-soft pl-6 italic text-gray-700 my-10">
          What if 2026 becomes the year of <strong>brain time</strong>?
        </blockquote>

        <p>
          Time to free your mind to chase corners of curiosity it never had the energy — or safety — to explore before.
        </p>

        <p>
          AI isn’t just a tool for answers.  
          It’s a patient companion for questions.
        </p>

        <p>
          It lets you be as relentlessly inquisitive as a toddler…  
          without anyone rolling their eyes.
        </p>

        <p>
          So maybe this year, give your brain the gift of endless asking.
        </p>

        <p>
          Who knows what beautiful, unexpected places it might lead to?
        </p>

        {/* Signature – warm and personal */}
        <p className="mt-16 text-right text-xl italic text-gray-600">
          With love from a very question-filled corner of France,<br />
          <span className="font-medium text-green-strong">Mirrie ✨</span>
        </p>
      </div>
    </div>
  );
}