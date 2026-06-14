import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import phase1Preview from '../assets/images/phase 1 - alt.png';
import phase2Preview from '../assets/images/phase 2 - alt.png';
import phase3Preview from '../assets/images/phase 3 - alt.png';

const phases = [
  {
    label: 'Phase 1',
    title: 'The Foundation',
    valueProp: 'Master the fundamentals and build a portfolio that gets you noticed, whether you\'re in college or teaching yourself.',
    preview: phase1Preview,
    focus: 'Learning & Building',
    price: '$15',
    link: 'https://buy.stripe.com/14A9ASctE36o54Wbav77O04',
    details: [
      'Semester-by-semester 4-year roadmap with GPA, LeetCode, and recruiting targets',
      'Curated resource syllabus with the best free courses and tools',
      'Portfolio-ready project spec with full system architecture',
      'AI prompts to generate a personalized study plan',
    ],
  },
  {
    label: 'Phase 2',
    title: 'The Application Engine',
    valueProp: 'Get your resume past the screen. Start getting responses.',
    preview: phase2Preview,
    focus: 'Sourcing & Networking',
    price: '$25',
    link: 'https://buy.stripe.com/4gMbJ065ggXefJA5Qb77O05',
    details: [
      'Amazon-standard resume template with annotated examples',
      '4 copy-paste LinkedIn/email outreach scripts',
      'Referral strategy that routes your resume to the top of the pile',
      'Recruiting calendar with exact deadlines',
      'Pre-built job tracker with pipeline views',
    ],
  },
  {
    label: 'Phase 3',
    title: 'The Interview Blueprint',
    valueProp: 'Walk into every interview with a framework, not just hope.',
    preview: phase3Preview,
    focus: 'Interviewing',
    price: '$29',
    link: 'https://buy.stripe.com/eVq7sK79keP6cxo3I377O06',
    details: [
      '5-stage technical interview communication framework',
      '6-stage system design framework with a full worked example',
      'Behavioral STAR cheat sheet with 3 fully-written sample answers',
      'Meta AI-assisted coding round breakdown (2026)',
      'Pre-interview checklist',
    ],
  },
];

const bundle = {
  label: 'Bundle',
  title: 'Complete Bundle: All 3 Phases',
  valueProp: 'The full end-to-end system from day one to your first offer.',
  includes: 'Everything in Phase 1 + Phase 2 + Phase 3',
  price: '$49',
  originalPrice: '$69',
  savings: 'save $20',
  link: 'https://buy.stripe.com/eVq00ialwgXe54W1zV77O03',
};

const heroPhoto = 'https://raw.githubusercontent.com/phillip-che/phillipche-site/refs/heads/main/src/assets/images/IMG_0111.JPG';

const CareerPlaybook = () => {
  usePageTitle('FAANG Career Playbook');

  return (
    <div className="pb-20">
      {/* ===================== SECTION 1: HERO ===================== */}
      <FadeInSection>
        <div className="flex flex-col sm:flex-row items-start gap-5 mb-4">
          <div
            role="img"
            aria-label="Phillip Che"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex-shrink-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${heroPhoto})`,
              backgroundSize: '115%',
              backgroundPosition: '81% 66%',
            }}
          />
          <div>
            <motion.h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              A step-by-step system for landing 6-figure FAANG offers, built by the engineers who did it.
            </motion.h1>
            <motion.p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
              A 3-phase Notion playbook covering everything from building your foundation to landing the offer: roadmap, resume, outreach scripts, interview frameworks, and more.
            </motion.p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Built by engineers at
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-medium">Amazon</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-medium">Google</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-medium">Microsoft</span>
        </div>
      </FadeInSection>

      {/* ===================== SECTION 2: WHO THIS IS FOR ===================== */}
      <FadeInSection delay={0.1}>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">This is for you if...</h2>
          <ul className="space-y-2">
            {[
              "You want to land a Big Tech internship or full-time offer, whether you're a student, self-taught, or switching careers",
              "You don't know where to start, what to learn first, or how to stand out",
              "You've been applying but not hearing back, or bombing interviews you thought you were ready for",
              "You want a structured, no-fluff system instead of scattered YouTube videos and Reddit threads",
            ].map((item) => (
              <li key={item} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2.5">
                <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      {/* ===================== SECTION 2.5: FOUNDER STORY ===================== */}
      <FadeInSection delay={0.15}>
        <div className="mb-8 border-l-2 border-indigo-400 pl-5 py-1 space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Junior year of high school, I was running a private Discord community with 200 paying members. Tools, resources, software I built myself. That's what got me into programming.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            I took it all the way through junior year of college before pivoting, grinding LeetCode from zero, applying during the worst hiring year in a decade, and converting an Amazon internship into a full-time offer out of Cal Poly Pomona.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Not a target school. No pipeline. No handouts. I had to figure out the actual mechanics of how hiring works because nothing was going to be given to me.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            This is what I figured out, pressure-tested with engineers at Google and Microsoft. I wish I'd had it in Year 1.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 italic pt-1">
            — Phillip, SDE @ Amazon
          </p>
        </div>
      </FadeInSection>

      {/* ===================== SECTION 3: PHASE CARDS ===================== */}
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <FadeInSection key={phase.label} delay={0.2 + index * 0.1}>
            <a
              href={phase.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-200 dark:border-gray-800 p-5 transition-colors hover:border-indigo-400 dark:hover:border-indigo-400 cursor-pointer"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                    {phase.label}
                  </span>
                  <h2 className="text-lg font-medium mt-0.5">{phase.title}</h2>
                </div>
                <span className="text-lg font-semibold">{phase.price}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
                {phase.valueProp}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-medium text-gray-700 dark:text-gray-300">Focus:</span> {phase.focus}
              </p>

              {/* What's inside — always visible */}
              <ul className="space-y-1.5 mb-4">
                {phase.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Preview — cropped to show content, fade at bottom */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={phase.preview}
                  alt={`${phase.title} preview`}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </a>
          </FadeInSection>
        ))}

        {/* Bundle Card — most visually prominent */}
        <FadeInSection delay={0.5}>
          <a
            href={bundle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border-2 border-indigo-500 dark:border-indigo-400 p-6 relative transition-colors hover:border-indigo-300 dark:hover:border-indigo-300 cursor-pointer"
          >
            {/* Best Value badge */}
            <span className="absolute top-0 right-4 -translate-y-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500 text-white">
              Best Value
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <div>
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                  {bundle.label}
                </span>
                <h2 className="text-lg font-medium mt-0.5">{bundle.title}</h2>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold">{bundle.price}</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">{bundle.originalPrice}</span>
                <span className="block text-xs text-indigo-400">{bundle.savings}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
              {bundle.valueProp}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">Includes:</span> {bundle.includes}
            </p>
          </a>
        </FadeInSection>
      </div>

      {/* ===================== SECTION 5: TRUST FOOTER ===================== */}
      <FadeInSection delay={0.6}>
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {/* TODO: Replace email below with your preferred contact email */}
            Questions before buying? Reach me at{' '}
            <a href="mailto:phillipche1@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              phillipche1@gmail.com
            </a>
            {' '}or join the{' '}
            <a href="https://discord.gg/mnp8Gf2mP2" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              community Discord
            </a>
            {' '}to ask questions.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            After purchase, your Notion link will be delivered to your email within minutes.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};

export default CareerPlaybook;
