import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// Build from one source of truth so lesson pages, references, and the map stay aligned.
process.chdir(fileURLToPath(new URL('..', import.meta.url)));
for (const directory of ['lessons', 'reference', 'assets']) fs.mkdirSync(directory, { recursive: true });

const sources = {
  grammar: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html',
  comma: 'https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html',
  paragraph: 'https://writingcenter.unc.edu/tips-and-tools/paragraphs/',
  style: 'https://press.uchicago.edu/ucp/books/book/chicago/S/bo207248847.html',
  plain: 'https://digital.gov/guides/plain-language/',
  logic: 'https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide',
  nsf: 'https://www.nsf.gov/policies/pappg/24-1/ch-2-proposal-preparation',
};

const sourceLabels = {
  grammar: 'Purdue OWL: Grammar',
  comma: 'Purdue OWL: Commas',
  paragraph: 'UNC Writing Center: Paragraphs',
  style: 'Williams and Bizup, Style: Lessons in Clarity and Grace',
  plain: 'Digital.gov Plain Language Guide',
  logic: 'W.K. Kellogg Foundation Logic Model Guide',
  nsf: 'NSF Proposal Preparation Instructions',
};

const lessons = [
  {
    title: 'Writing as Deliberate Choice',
    phase: 'I. Build the map',
    lede: 'Writing is a chain of decisions: situation, purpose, reader, structure, sentence, word, and revision. Good prose makes the intended relationship among those decisions easy to see.',
    mission: 'Your goal is not to sound impressive. It is to help a particular reader understand something accurately and then know what to think, decide, or do.',
    outcomes: [
      'Map a writing problem from situation to revision instead of starting with isolated wording.',
      'Separate grammatical correctness from rhetorical fitness.',
      'Treat voice as a pattern of choices that can adapt without becoming generic.',
    ],
    map: ['situation', 'purpose', 'reader', 'structure', 'language', 'revision'],
    concepts: [
      ['The rhetorical situation', 'Every piece of writing has a situation: a writer with knowledge and limits, a reader with questions and constraints, a purpose, a medium, and stakes. A grant response, a maintenance email, and a personal reflection may describe the same event but require different choices because their situations differ.'],
      ['Grammar and rhetoric', 'Grammar gives you available structures. Rhetoric is the judgment of choosing among them for this reader and purpose. A short sentence is not automatically clear, and a long sentence is not automatically bad.'],
      ['The working sequence', 'Start by naming what the reader needs to understand or decide. Then choose an order that answers that need, shape the paragraphs and sentences, choose precise words, and revise against the reader task.'],
    ],
    examples: [
      {
        label: 'A grant opening',
        before: 'IMPACT is committed to leveraging innovative solutions to increase access for vulnerable populations.',
        after: 'Funding would place 20 information kiosks in community sites where residents already seek help, giving them another way to find verified local services.',
        note: 'The second sentence names the work, location, population, and practical result. It is not merely shorter; its structure lets a reviewer see the case.',
      },
      {
        label: 'A practical email',
        before: 'I wanted to reach out regarding the ongoing situation with the maintenance issue.',
        after: 'I am following up because no maintenance staff has visited, and the leak is still active.',
        note: 'The direct version preserves a calm tone while putting the situation and consequence where the reader can act on them.',
      },
    ],
    decisionTitle: 'Before drafting',
    decisions: [
      'What must this reader understand, decide, or do?',
      'What evidence or context will let the reader trust the answer?',
      'What order will make the answer easiest to recover?',
      'What wording will sound like a responsible person in this situation?',
    ],
    traps: ['Starting with a polished sentence before naming the point.', 'Treating institutional language as a model of good prose.', 'Confusing brevity with clarity.'],
    carry: 'Use this map whenever a draft feels wrong. The problem may not be a word problem. It may be an unclear purpose, missing evidence, or an order that asks the reader to reconstruct the argument.',
    source: 'style',
    refs: ['reference/prose-diagnostics.html', 'reference/voice-baseline.html'],
  },
  {
    title: 'The Sentence Map: Core, Roles, and Parts',
    phase: 'I. Build the map',
    lede: 'A sentence becomes easier to revise when you can see its clause core: subject, finite verb, and whatever completes the verb. Modifiers add detail, but they should not hide the main action.',
    mission: 'You already write sentences intuitively. This map gives you a reliable way to inspect them when a sentence becomes dense, ambiguous, or difficult to revise.',
    outcomes: [
      'Find the finite verb and subject in a complicated sentence.',
      'Distinguish objects and complements from modifiers.',
      'Use sentence anatomy to decide what deserves the main position.',
    ],
    map: ['subject', 'finite verb', 'object or complement', 'modifiers'],
    concepts: [
      ['Find the finite verb first', 'A finite verb carries tense or agrees with the subject. Finding it helps you count clauses and see where the sentence is doing its main work. Verbals such as <em>to connect</em> and <em>verified</em> can appear without being the finite verb.'],
      ['Find the subject', 'The subject is the grammatical anchor of the clause, not always the person who acts. In passive voice, the subject may be the thing acted upon. Ask whether the chosen subject is the topic you want the reader to follow.'],
      ['Separate core from detail', 'Objects and complements complete the verb or identify the subject. Modifiers describe, limit, locate, or qualify another element. A modifier can be useful and still be misplaced or too far from what it describes.'],
    ],
    examples: [
      {
        label: 'Sentence anatomy',
        before: 'Through the implementation of a coordinated referral process, residents in crisis can be connected to verified local services by IMPACT 211.',
        after: 'IMPACT 211 connects residents in crisis to verified local services through a coordinated referral process.',
        note: 'The revised sentence makes the actor and action visible first. The process remains available as a modifier rather than carrying the sentence in the background.',
      },
      {
        label: 'A revision diagnosis',
        before: 'The program, after reviewing the data from three sites, which had been collected over six months, showed improvement.',
        after: 'After six months of data collection at three sites, the program showed improvement.',
        note: 'The first version buries the core inside nested modifiers. The second preserves the useful context while giving the reader a clean path to the claim.',
      },
    ],
    decisionTitle: 'Sentence inspection order',
    decisions: [
      'Circle the finite verb or verbs.',
      'Underline each subject and connect it to its verb.',
      'Mark objects and complements that complete the verb.',
      'Bracket modifiers and ask what each one attaches to.',
      'Ask whether the grammatical subject is also the right topic.',
    ],
    traps: ['Calling every noun the subject.', 'Treating every introductory phrase as clutter.', 'Moving words without first identifying the sentence core.'],
    carry: 'Sentence anatomy is not a parsing contest. It is a diagnostic map. Use it when you need to recover the actor, action, relationship, or emphasis in a sentence.',
    source: 'grammar',
    refs: ['reference/sentence-anatomy.html', 'reference/glossary.html'],
  },
  {
    title: 'Relationships and Boundaries',
    phase: 'I. Build the map',
    lede: 'Clauses let you show whether ideas are equal, sequential, causal, conditional, contrasting, or concessive. Punctuation and conjunctions should reveal that relationship instead of leaving the reader to guess.',
    mission: 'Grant arguments and professional explanations depend on visible relationships: need leads to response, evidence supports a claim, and a condition limits a promise.',
    outcomes: [
      'Distinguish independent and dependent clauses.',
      'Choose coordination or subordination based on the relationship you mean.',
      'Repair fragments, run-ons, and comma splices by changing the structure deliberately.',
    ],
    map: ['idea A', 'relationship', 'idea B'],
    concepts: [
      ['Independent and dependent clauses', 'An independent clause can stand as a sentence. A dependent clause contains a subject-verb core but makes the reader wait for completion. Words such as <em>because</em>, <em>although</em>, <em>when</em>, and <em>if</em> often signal the dependency.'],
      ['Coordination and subordination', 'Coordination presents units as peers: “The survey closed, and staff analyzed the results.” Subordination makes one idea the frame: “After the survey closed, staff analyzed the results.” Neither is inherently better; the choice changes emphasis.'],
      ['Boundaries are meaning', 'A period separates. A semicolon keeps two independent clauses close without naming the relationship. A coordinating conjunction names a familiar relationship. A dependent clause makes time, cause, condition, contrast, or concession explicit.'],
    ],
    examples: [
      {
        label: 'One event, three relationships',
        before: 'The survey closed, staff analyzed the results.',
        after: 'After the survey closed, staff analyzed the results.',
        note: 'The original is a comma splice. A period would separate the events; “and” would present them as peers; “after” makes sequence the frame.',
      },
      {
        label: 'A grant qualification',
        before: 'The pilot will expand access. It depends on host sites promoting the kiosks.',
        after: 'The pilot can expand access if host sites promote the kiosks.',
        note: 'The conditional form prevents the second sentence from sounding like an unrelated afterthought or an unconditional promise.',
      },
    ],
    decisionTitle: 'Choose the relationship first',
    decisions: [
      'What is the relationship: addition, contrast, cause, time, condition, or concession?',
      'Should the two ideas feel equal, or should one frame the other?',
      'Would a reader misread the relationship if the sentence were split?',
      'Choose the boundary mark or conjunction that makes the intended relationship visible.',
    ],
    traps: ['Fixing a comma splice with a semicolon without considering the relationship.', 'Using “however” as a substitute for a complete sentence structure.', 'Stacking dependent clauses until the main point disappears.'],
    carry: 'When a sentence feels tangled, do not begin by moving commas. Name the relationship between the ideas, then build the sentence that can carry it.',
    source: 'comma',
    refs: ['reference/punctuation-and-sentence-boundaries.html', 'reference/glossary.html'],
  },
  {
    title: 'Sentence Reliability: Attachment, Agreement, Pronouns, and Voice',
    phase: 'II. Control sentences',
    lede: 'Reliable sentences make responsibility, reference, time, and agency recoverable. Modifiers should attach clearly, subjects and verbs should agree, pronouns should point somewhere definite, and voice should foreground the right participant.',
    mission: 'In professional and grant writing, a small grammatical ambiguity can misstate who acted, who benefited, or what the organization actually knows. Reliability is part of credibility.',
    outcomes: [
      'Repair a misplaced modifier and an ambiguous pronoun.',
      'Use tense and aspect to place work accurately in time.',
      'Choose active or passive voice based on topic and responsibility, not fashion.',
    ],
    map: ['actor', 'action', 'time', 'referent', 'topic'],
    concepts: [
      ['Attachment', 'An introductory modifier should logically describe the grammatical subject that follows it. “After reviewing the data, the report was revised” implies that the report reviewed the data.'],
      ['Reference and agreement', 'A pronoun saves space only when its antecedent is clear and its number and person fit. Subject-verb agreement is usually simple, but long phrases between subject and verb can conceal the real subject.'],
      ['Voice and time', 'Active voice foregrounds an actor. Passive voice foregrounds the acted-on thing or omits an unknown actor. Tense locates an action; aspect presents it as ongoing, completed, or prior. Use the form that tells the truth about responsibility and sequence.'],
    ],
    examples: [
      {
        label: 'Modifier and responsibility',
        before: 'After reviewing the data, the report was revised by staff, and it clarified the need.',
        after: 'After reviewing the data, staff revised the report. The revised report clarified the need.',
        note: 'The revision gives the reviewer an accountable actor and removes the vague pronoun “it.” Two sentences are justified because the actor and result deserve separate focus.',
      },
      {
        label: 'Active and passive voice',
        before: 'Five hundred records were verified during the pilot.',
        after: 'Staff verified 500 records during the pilot.',
        note: 'The active version is stronger when staff performance matters. The passive version remains appropriate when the records are the topic or the actor is unknown or irrelevant.',
      },
    ],
    decisionTitle: 'Reliability check',
    decisions: [
      'Who or what performed each important action?',
      'Does every modifier attach to the intended noun?',
      'Can every pronoun be traced without rereading?',
      'Is the tense accurate, and does the aspect show the action as ongoing or complete when needed?',
      'Should the reader notice the actor, the affected thing, or the process?',
    ],
    traps: ['Treating passive voice as automatically weak.', 'Adding a pronoun to avoid repeating a noun when the reference becomes unclear.', 'Assuming a comma can fix a modifier whose subject is wrong.'],
    carry: 'Before polishing a sentence, verify its factual relationships. A smooth sentence that assigns the wrong actor or time is still a failed sentence.',
    source: 'grammar',
    refs: ['reference/sentence-anatomy.html', 'reference/prose-diagnostics.html', 'reference/glossary.html'],
  },
  {
    title: 'Parallelism, Word Order, and Emphasis',
    phase: 'II. Control sentences',
    lede: 'Readers compare parallel forms quickly. They also give extra attention to the beginning and ending of a sentence. Use form and position to show what belongs together and what deserves emphasis.',
    mission: 'Lists of activities, outcomes, and responsibilities are common in grant applications. Parallel structure makes those lists usable instead of forcing the reviewer to re-parse each item.',
    outcomes: [
      'Make comparable items grammatically comparable.',
      'Place familiar information before new information when that improves the reader’s path.',
      'Use sentence openings and endings deliberately rather than decorating every sentence.',
    ],
    map: ['known topic', 'development', 'new point'],
    concepts: [
      ['Parallel forms', 'Units that a reader should compare should look and behave alike: “install kiosks, train hosts, and collect data.” Parallelism is both a correctness aid and a way to show the structure of a plan.'],
      ['Known and new information', 'A sentence often works best when it begins from something the reader already knows and ends with the point the reader needs to absorb. This is a tendency, not a rigid rule.'],
      ['Emphasis positions', 'Beginnings orient the reader; endings land with force. Put the topic early and the consequence, qualification, or key term late when that arrangement serves the purpose.'],
    ],
    examples: [
      {
        label: 'A project list',
        before: 'The pilot will install kiosks, train hosts, and data will be collected.',
        after: 'The pilot will install kiosks, train hosts, and collect data.',
        note: 'The corrected list gives all three activities the same grammatical form. The reader can now compare them immediately.',
      },
      {
        label: 'A sentence ending',
        before: 'The program used a new referral process to improve access for residents.',
        after: 'For residents who cannot reach an office during business hours, the new referral process provides another path to verified services.',
        note: 'The second version establishes the affected residents first and ends on the practical result. The first may be preferable when the program, not the residents, is the topic.',
      },
    ],
    decisionTitle: 'Shape the comparison',
    decisions: [
      'Which units should the reader compare?',
      'Do those units use matching grammatical forms?',
      'What is already available in the reader’s context?',
      'What word or consequence deserves the final position?',
    ],
    traps: ['Making every sentence end with a dramatic word.', 'Treating parallelism as a demand for repetitive triplets.', 'Moving the subject away from the topic simply to vary sentence openings.'],
    carry: 'Use parallelism to expose the shape of a plan. Use word order to control the reader’s starting point and landing point. Both are tools for thought, not ornament.',
    source: 'style',
    refs: ['reference/sentence-anatomy.html', 'reference/prose-diagnostics.html'],
  },
  {
    title: 'Punctuation as Structural Control',
    phase: 'II. Control sentences',
    lede: 'Punctuation marks relationships and boundaries. It is not primarily a record of where the writer pauses to breathe. Find the structure first, then choose the mark that supports the intended reading.',
    mission: 'Reliable punctuation lets reviewers move through a dense application without spending attention on reconstruction. It also prevents a punctuation choice from changing the claim.',
    outcomes: [
      'Choose among periods, coordinators, semicolons, colons, and dashes.',
      'Distinguish essential from nonessential material.',
      'Use commas after identifying the sentence structure rather than by ear alone.',
    ],
    map: ['clause boundary', 'relationship', 'reader expectation'],
    concepts: [
      ['Boundaries', 'A period gives a complete stop. A comma plus a coordinating conjunction joins two independent clauses. A semicolon keeps closely related independent clauses together without naming the relationship.'],
      ['Announcements and turns', 'A colon follows a complete clause and announces an explanation, list, or consequence. A dash creates a stronger interruption or turn when the syntax allows it.'],
      ['Essential and nonessential material', 'Restrictive material identifies which person or thing the reader should select. Nonrestrictive material comments on an already identified noun and is set off with commas. The commas can change the meaning.'],
    ],
    examples: [
      {
        label: 'One relationship, several marks',
        before: 'The data were incomplete, we delayed the report.',
        after: 'The data were incomplete; we delayed the report.',
        note: 'The semicolon is one valid repair when the writer wants close continuation without naming cause. A period would create more separation; “so” would state the consequence.',
      },
      {
        label: 'Meaning and commas',
        before: 'Sites that serve walk-in clients need signage.',
        after: 'Our downtown site, which serves walk-in clients, needs signage.',
        note: 'The first clause identifies the sites in question. The second adds information about an already identified site. The comma pair is not decorative.',
      },
    ],
    decisionTitle: 'Punctuation order',
    decisions: [
      'Locate every independent clause.',
      'Decide whether the ideas should be separated, joined as peers, or kept closely related.',
      'Decide whether each modifier is essential to identification.',
      'Choose the mark that tells the reader what to expect next.',
    ],
    traps: ['Using a comma because the sentence feels long.', 'Using a semicolon where one side is not an independent clause.', 'Putting a colon after an incomplete setup.'],
    carry: 'Keep the punctuation reference nearby, but make the judgment first. The mark is the visible result of a structural decision.',
    source: 'comma',
    refs: ['reference/punctuation-and-sentence-boundaries.html', 'reference/glossary.html'],
  },
  {
    title: 'Clarity and Information Flow',
    phase: 'II. Control sentences',
    lede: 'Clarity is partly an information-order problem. Readers need a recognizable starting point, a visible relationship, and a useful arrival. Put the actor or topic where it can orient the reader, then move toward the new point.',
    mission: 'Funders read quickly and comparatively. A clear sentence reduces recovery work so the reviewer can judge the need, response, and evidence instead of decoding the prose.',
    outcomes: [
      'Recognize when a sentence hides its actor or topic.',
      'Order familiar and new information for a smoother path.',
      'Revise dense prose without reducing an important qualification or limit.',
    ],
    map: ['reader knows', 'sentence develops', 'reader learns'],
    concepts: [
      ['The subject as a guide', 'A meaningful grammatical subject gives the reader a topic to follow. When possible, make an actor, affected population, or concrete thing carry the sentence instead of an abstract process.'],
      ['Old to new', 'Readers often understand a sentence more easily when it begins with information already active in the context and ends with what is newly important. Paragraphs can establish the old information before the sentence arrives at the new point.'],
      ['Clarity is not simplification', 'Plain language can preserve technical accuracy and necessary nuance. The goal is not to remove complexity but to make its structure visible.'],
    ],
    examples: [
      {
        label: 'Actor and action',
        before: 'The improvement of access was achieved through the implementation of kiosks.',
        after: 'The kiosks improved access.',
        note: 'The revision gives the sentence a concrete actor and an active verb. Add the population, location, or evidence in the next sentence if the claim needs qualification.',
      },
      {
        label: 'Information flow',
        before: 'A new way for residents to find services is what the pilot provides through community sites.',
        after: 'The pilot gives residents another way to find services at community sites.',
        note: 'The second version starts with the program as the active topic and ends with the practical arrangement. It is easier to extend into evidence or a next sentence.',
      },
    ],
    decisionTitle: 'Information-flow check',
    decisions: [
      'What is the reader already thinking about?',
      'What should be the sentence topic?',
      'What is the new point or consequence?',
      'Can the reader identify the actor and relationship on the first pass?',
    ],
    traps: ['Replacing every noun with a verb even when the concept itself is the topic.', 'Removing qualifiers that protect accuracy.', 'Calling a sentence clear merely because each individual word is familiar.'],
    carry: 'When prose feels stiff, first test the order of information and the choice of subject. Word-level trimming comes after the reader’s path is sound.',
    source: 'style',
    refs: ['reference/prose-diagnostics.html', 'reference/sentence-anatomy.html'],
  },
  {
    title: 'Concrete Prose: Verbs, Nominalizations, Precision, and Jargon',
    phase: 'II. Control sentences',
    lede: 'Concrete prose makes claims that readers can picture, check, and use. Strong verbs help, but the larger goal is to expose actors, actions, quantities, and limits instead of hiding them inside abstractions or specialized language.',
    mission: 'Grant writing needs professional vocabulary, but it also needs a reviewer to understand what the funding will make possible. Specificity is more persuasive than uplift.',
    outcomes: [
      'Spot nominalizations that hide an action or actor.',
      'Replace vague impact claims with observable particulars.',
      'Keep necessary technical terms while translating them for an outside reader.',
    ],
    map: ['claim', 'actor and action', 'particulars', 'limit'],
    concepts: [
      ['Nominalizations', 'A nominalization turns an action or quality into a noun: <em>implementation</em>, <em>assessment</em>, or <em>improvement</em>. Nouns are not bad. The diagnostic question is whether the noun hides an actor or action the reader needs.'],
      ['Specificity', 'A specific claim names who, what, where, when, how much, or compared with what. “Significant impact” gives the reader a conclusion without the particulars needed to evaluate it.'],
      ['Jargon and translation', 'Retain a technical term when it carries necessary meaning, but define it once or place it beside a plain description. Do not make a reader learn organizational language before receiving the point.'],
    ],
    examples: [
      {
        label: 'Recover the action',
        before: 'Staff conducted an assessment of residents’ needs before the implementation of the pilot.',
        after: 'Staff assessed residents’ needs before launching the pilot.',
        note: 'The revision does not ban nouns; it uses verbs where the action is what matters. Keep “assessment” if the assessment itself is the object being compared or evaluated.',
      },
      {
        label: 'Replace inflated impact',
        before: 'The program had a significant impact on access to services.',
        after: 'The program gave 1,480 residents housing referrals through a verified directory.',
        note: 'The second claim is narrower but stronger. A reviewer can ask how the number was counted and what happened after the referral.',
      },
    ],
    decisionTitle: 'Make a claim usable',
    decisions: [
      'Who performs the action?',
      'What observable thing happened?',
      'What number, place, timeframe, or comparison makes the claim specific?',
      'What technical term needs translation?',
      'What does the evidence not prove?',
    ],
    traps: ['Deleting every abstract noun and losing a needed concept.', 'Using a synonym to hide repetition without increasing precision.', 'Treating “innovative,” “robust,” or “transformative” as evidence.'],
    carry: 'A concrete sentence is not necessarily simplistic. It is a sentence that gives the reader enough material to understand and evaluate the claim.',
    source: 'plain',
    refs: ['reference/prose-diagnostics.html', 'reference/glossary.html'],
  },
  {
    title: 'Cadence, Cohesion, and Paragraphs',
    phase: 'III. Shape thought',
    lede: 'Paragraphs are units of thought, not containers with a required number of sentences. Cohesion links the sentences; cadence gives the prose felt movement. Both should serve the reader’s understanding rather than perform style.',
    mission: 'Your natural writing already has tendencies in pace and sequencing. This lesson gives you language for keeping the useful tendencies while shaping a paragraph into a clear handoff.',
    outcomes: [
      'Give each paragraph one controlling job.',
      'Link sentences through repeated terms, clear references, sequence, and actual relationships.',
      'Vary sentence length and openings for function rather than decoration.',
    ],
    map: ['controlling idea', 'development', 'evidence', 'interpretation', 'handoff'],
    concepts: [
      ['The paragraph job', 'A paragraph may orient, explain, prove, compare, qualify, or recommend. Its sentences should cooperate toward that job. A paragraph that feels wordy may contain two competing ideas rather than too many words.'],
      ['Cohesion', 'Cohesion comes from repeated key terms, clear pronouns, parallel structures, logical sequence, and meaningful transitions. A transition word cannot create a relationship that the ideas do not have.'],
      ['Cadence', 'Cadence is the movement created by syntax, stress, sound, and sentence length. A short sentence can land a consequence. A longer sentence can hold conditions and evidence. Variation should make the thought easier to feel and follow.'],
    ],
    examples: [
      {
        label: 'From list to paragraph',
        before: 'The pilot uses community sites. The sites host kiosks. Staff update the directory. Residents can find services. The program tracks usage.',
        after: 'The pilot extends access through community sites that host information kiosks. Staff update the directory so residents can find verified services, and the program tracks usage to show whether the additional entry point is being used.',
        note: 'The revision gives the paragraph one job: explain how the pilot extends access. The repeated topic becomes a chain instead of five disconnected starts.',
      },
      {
        label: 'A useful landing',
        before: 'The team met, reviewed the data, discussed several options, and made plans for the next quarter.',
        after: 'After reviewing the data, the team met to decide what the next quarter required. The decision depended on one question: which barrier should the pilot address first?',
        note: 'The short second sentence creates a landing and points the next paragraph toward a decision.',
      },
    ],
    decisionTitle: 'Paragraph inspection',
    decisions: [
      'Write the paragraph’s actual job in the margin.',
      'Identify the controlling idea and the evidence that develops it.',
      'Check each pronoun and repeated term for a clear link.',
      'Remove transitions that merely announce movement without naming a relationship.',
      'Read the ending: does it resolve, qualify, or hand off the thought?',
    ],
    traps: ['Making every paragraph the same length.', 'Adding “Additionally” or “However” instead of fixing the logic.', 'Varying sentence length so aggressively that the paragraph loses its topic.'],
    carry: 'A reader should be able to say what a paragraph is doing and why its next sentence belongs. That is cohesion at the scale where most professional prose succeeds or fails.',
    source: 'paragraph',
    refs: ['reference/prose-diagnostics.html', 'reference/revision-ladder.html'],
  },
  {
    title: 'Argument and Document Architecture',
    phase: 'III. Shape thought',
    lede: 'A document is an argument at several scales. The purpose determines the sections; each section answers a reader question; each paragraph develops one claim; sentences make the relationships visible.',
    mission: 'A grant application is not a collection of isolated answers. A professional document earns trust when its parts reinforce one another without repeating the same information mechanically.',
    outcomes: [
      'Distinguish claim, evidence, interpretation, and qualification.',
      'Order sections according to the reader’s decision path.',
      'Use headings and paragraph openings to orient a busy reader.',
    ],
    map: ['reader question', 'claim', 'evidence', 'interpretation', 'next question'],
    concepts: [
      ['Claims need interpretation', 'Evidence does not speak for itself. A claim tells the reader what to believe or understand; evidence supports it; interpretation explains why the evidence matters; qualification keeps the claim within what the evidence can support.'],
      ['Architecture follows decisions', 'Order sections by the questions the reader must answer. A proposal may move from need to response to capacity to evidence to measures to budget, but the exact order should follow the funder’s instructions and decision path.'],
      ['Headings are promises', 'A useful heading tells the reader what information follows. A paragraph opening should orient the reader to the claim, not merely repeat the section label.'],
    ],
    examples: [
      {
        label: 'Evidence with interpretation',
        before: '211 recorded 15,087 Waukesha contacts.',
        after: '211 recorded 15,087 Waukesha contacts in the reporting period. That volume indicates sustained demand for navigation and supports testing an additional, accessible entry point.',
        note: 'The second version does not pretend the number proves every part of the proposal. It states the reasonable inference and keeps the proposed response proportionate.',
      },
      {
        label: 'Section order',
        before: 'Organization history -> board biography -> need -> proposed project -> measures',
        after: 'Defined need -> proposed response -> capacity to deliver -> expected change -> measures and budget',
        note: 'The second order follows the reviewer’s decision path. Organizational facts can appear where they establish relevance or capacity instead of delaying the case.',
      },
    ],
    decisionTitle: 'Build the argument',
    decisions: [
      'What question is the reader trying to answer?',
      'What is your direct answer?',
      'What evidence supports it?',
      'What does the evidence allow you to infer?',
      'What limitation or uncertainty should a credible reader see?',
    ],
    traps: ['Confusing more data with a stronger case.', 'Leading with institutional biography because it is easy to reuse.', 'Repeating the same claim in every field instead of giving each field a distinct job.'],
    carry: 'Structure is not a cosmetic outline added after drafting. It is the visible shape of the reasoning the reader must perform.',
    source: 'paragraph',
    refs: ['reference/grant-application-map.html', 'reference/revision-ladder.html'],
  },
  {
    title: 'Voice, Tone, Register, and Professional Writing',
    phase: 'III. Shape thought',
    lede: 'Voice is the recurring pattern of choices a writer makes: specificity, syntax, pace, diction, stance, qualification, and relationship to the reader. Tone changes with the situation; register changes with the discourse community. Voice is not a costume or a collection of quirks.',
    mission: 'You want to develop a voice that remains recognizably yours in personal writing while adapting responsibly to emails, reports, and grant applications. Adaptation should change the fit, not erase the person thinking.',
    outcomes: [
      'Describe voice as observable choices rather than a mysterious personality trait.',
      'Separate personal voice from tone and professional register.',
      'Carry natural directness and specificity into grant writing without sounding casual or generic.',
      'Identify the language patterns you want to preserve, strengthen, or avoid.',
    ],
    map: ['writer identity', 'situation', 'reader', 'register', 'repeatable choices'],
    concepts: [
      ['Voice is a pattern', 'A voice emerges from choices repeated across pieces: whether the writer names particulars, how quickly the writer reaches the point, how sentences move, how much uncertainty is acknowledged, and what the writer assumes about the reader. It is not the same as being informal or unusual.'],
      ['Tone and register are adjustable', 'Tone is the stance toward this reader and situation: warm, urgent, measured, skeptical, grateful, or firm. Register is the expected level of formality and specialized vocabulary. The same writer can change both while retaining a preference for visible action and concrete detail.'],
      ['Grant voice', 'A credible grant voice is specific, accountable, humane, and proportionate to the evidence. It can make a persuasive case without inflated promises, generic nonprofit uplift, or borrowed certainty.'],
      ['How to find your own voice', 'Study your actual writing for recurring strengths and risks. Preserve what makes the writing sound like you when it helps the reader: directness, particularity, practical context, calmness, humor, or force. Then adapt the amount of explanation, formality, and qualification to the audience.'],
    ],
    examples: [
      {
        label: 'One underlying preference, three situations',
        before: 'Personal: “I’m following up because no maintenance staff has visited, and the leak is still active.”',
        after: 'Professional: “Please schedule a maintenance visit this week; the leak remains active.”<br>Grant: “Funding would support staff who verify local service information and give residents a reliable next step.”',
        note: 'The register and subject change, but the underlying preferences remain: state the situation, name the action, and avoid theatrical language.',
      },
      {
        label: 'Credibility over uplift',
        before: 'This transformative investment will revolutionize access for our most vulnerable neighbors.',
        after: 'The pilot will test whether 20 community kiosks give residents a useful additional way to find verified resources.',
        note: 'The second sentence still advocates for funding. Its voice is persuasive because it names a testable promise and leaves room for what the project may teach.',
      },
    ],
    decisionTitle: 'Build a provisional voice profile',
    decisions: [
      'What do your strongest pieces do naturally?',
      'Which details, sentence shapes, and degrees of directness recur?',
      'What should remain recognizable across personal and professional writing?',
      'What must change for the reader, stakes, medium, or register?',
      'Which habits make the prose sound generic, inflated, or unlike you?',
    ],
    traps: ['Trying to sound like an admired writer instead of learning what effect their choices create.', 'Treating polished institutional language as professional voice.', 'Using casualness as proof of authenticity.', 'Removing every qualification until advocacy becomes overclaiming.'],
    carry: 'Your voice is not something you need to invent before you can write. It is something you can observe, name, protect, and refine. The practice phase will test this provisional profile against real drafts; the knowledge phase gives you the categories for seeing what happens.',
    source: 'style',
    refs: ['reference/voice-baseline.html', 'reference/glossary.html'],
  },
  {
    title: 'Revision as Diagnosis and Workflow',
    phase: 'III. Shape thought',
    lede: 'Revision is not a final polish pass. It is diagnosis: identify what the reader needs, locate the failure, change the level that caused it, and then verify the result in a separate pass.',
    mission: 'Your goal is to revise without outsourcing judgment to a tool or a vague feeling that the prose is “better.” A repeatable workflow lets you decide what kind of change a draft needs.',
    outcomes: [
      'Distinguish developmental, structural, paragraph, sentence, copyediting, and proofreading work.',
      'Use a reverse outline to find missing or competing paragraph jobs.',
      'Run separate passes for purpose, evidence, information flow, sentence control, and consistency.',
    ],
    map: ['purpose', 'structure', 'evidence', 'paragraph', 'sentence', 'copy', 'proof'],
    concepts: [
      ['Revise at the right level', 'A comma cannot repair a missing argument. A stronger verb cannot repair an answer that does not address the prompt. Start at the highest level where the problem appears and move downward.'],
      ['Reverse outline', 'After drafting, write the actual job of each paragraph in the margin. Compare that sequence with the reader’s questions. A paragraph with two jobs may need to split; a paragraph with no distinct job may need to move or disappear.'],
      ['Separate passes', 'Each pass should ask one kind of question: purpose, structure, evidence, links, sentence emphasis, copy, then proof. Separating passes reduces the temptation to polish a sentence while ignoring a larger problem.'],
    ],
    examples: [
      {
        label: 'Diagnose before trimming',
        before: 'The paragraph explains the need, describes the organization’s history, lists three staff roles, and introduces the evaluation plan.',
        after: 'Need paragraph -> why the condition matters.<br>Capacity paragraph -> why this organization can respond.<br>Evaluation paragraph -> how change will be observed.',
        note: 'If a paragraph feels wordy because it contains competing jobs, cutting adjectives will not solve the problem. Reorganize first, then edit sentences.',
      },
      {
        label: 'A revision log',
        before: 'Use “clients” in one field, “residents” in another, and “participants” in a third without explanation.',
        after: 'Choose the term that fits the population being described, record the decision, and check every occurrence across the application.',
        note: 'A small decision log protects consistency and prevents later polishing from introducing contradictions.',
      },
    ],
    decisionTitle: 'Revision pass order',
    decisions: [
      'Purpose: What must this reader understand, decide, or do?',
      'Structure: Does the order answer the reader’s questions?',
      'Evidence: Are claims supported, interpreted, and qualified?',
      'Paragraphs: Does each paragraph have one job and a handoff?',
      'Sentences: Are actors, actions, relationships, and emphasis visible?',
      'Copy and proof: Are terms, numbers, citations, and formatting consistent?',
    ],
    traps: ['Editing from the first sentence to the last without changing levels.', 'Treating a thesaurus pass as revision.', 'Letting an AI rewrite conceal the fact that the argument is still incomplete.'],
    carry: 'The practice phase will give you drafts to revise. For now, learn the order of questions so that later practice strengthens judgment instead of creating random preferences.',
    source: 'style',
    refs: ['reference/revision-ladder.html', 'reference/prose-diagnostics.html'],
  },
  {
    title: 'Reading Funder Questions and Building Application Architecture',
    phase: 'IV. Write for funders',
    lede: 'A grant prompt is both a specification and a reviewer’s question. Before drafting, extract its required elements, verbs, limits, timeframe, and evidence standard, then map each answer into one coherent application argument.',
    mission: 'Grant writing combines prose judgment with compliance. A beautiful answer that misses the question is still unsuccessful.',
    outcomes: [
      'Turn a funder prompt into a response matrix before drafting.',
      'Distinguish activities, claims, evidence, outcomes, and measures.',
      'Make application fields reinforce one another without copying the same paragraph everywhere.',
    ],
    map: ['prompt', 'direct answer', 'evidence', 'measure', 'field placement'],
    concepts: [
      ['Read the verbs and limits', '“Describe,” “explain,” “identify,” “estimate,” and “demonstrate” ask for different work. Capture word or character limits, required timeframes, populations, locations, attachments, and evidence expectations before writing.'],
      ['Build a response matrix', 'For each prompt element, record the direct answer, supporting evidence, where it will appear, and what remains uncertain. The matrix prevents attractive context from displacing the required answer.'],
      ['One argument, distinct fields', 'The application should tell one coherent story, but each field has a job. Need establishes the condition; project design answers what will happen; capacity establishes feasibility; measures show how the result will be observed.'],
    ],
    examples: [
      {
        label: 'Prompt to matrix',
        before: 'Prompt: “Describe outcomes and measurement.” Draft: “The project will provide referrals and improve access.”',
        after: 'Outcome: residents report knowing a next step after using the kiosk.<br>Indicator: percentage of surveyed users reporting that knowledge.<br>Method: brief exit survey, collected during the pilot and reported by site.',
        note: 'The revised planning notes answer the prompt’s hidden questions: what changes, how will it be observed, when, and through what source?',
      },
      {
        label: 'Direct answer first',
        before: 'Three paragraphs of organizational history before answering what the grant will fund.',
        after: 'First sentence: “The grant will support two staff functions that keep the kiosk directory accurate and connect residents to verified services.”',
        note: 'Context can follow once the reviewer knows what the request is and why the context matters.',
      },
    ],
    decisionTitle: 'Before drafting a field',
    decisions: [
      'What exact question is the funder asking?',
      'What is the direct answer in one sentence?',
      'What evidence makes that answer credible?',
      'What does this field need that another field should not repeat?',
      'What limit or instruction controls the shape of the answer?',
    ],
    traps: ['Drafting from the organization’s preferred story instead of the funder’s question.', 'Calling activities outcomes.', 'Pasting a successful old answer without adapting its evidence and scope.'],
    carry: 'The response matrix is a bridge between prose craft and grant craft. It gives every later sentence a job before you ask it to sound polished.',
    source: 'nsf',
    refs: ['reference/grant-application-map.html', 'reference/revision-ladder.html'],
  },
  {
    title: 'Need, Population, Evidence, and Ethical Specificity',
    phase: 'IV. Write for funders',
    lede: 'A needs statement names a condition, who experiences it, the local context, and the evidence that supports the claim. It distinguishes the underlying need from the requested service and describes people with accuracy and respect.',
    mission: 'A credible grant writer does not inflate hardship to create urgency. Specificity, local evidence, and careful limits make the case stronger and protect the people being described.',
    outcomes: [
      'Separate a condition from a service request.',
      'Connect population, place, evidence, and relevance.',
      'Use respectful population language and avoid claims the evidence cannot support.',
    ],
    map: ['condition', 'population', 'place', 'evidence', 'relevance'],
    concepts: [
      ['Need versus request', '“Residents requested food assistance” reports demand. “Food insecurity limits reliable access to meals” names a condition. A proposal may need both, but they answer different questions.'],
      ['Local specificity', 'General statistics establish context; local evidence establishes relevance. Cite and date external statistics, define the geography, and explain why the selected population and location belong in this request.'],
      ['Ethical specificity', 'Describe barriers, conditions, and agency without reducing people to deficits. Avoid unsupported claims about what a population believes, needs, or will do. State what the organization knows and how it knows it.'],
    ],
    examples: [
      {
        label: 'From service request to condition',
        before: 'Residents requested food assistance, so the program needs more referrals.',
        after: 'Residents requested food assistance, indicating that some households lack reliable access to meals. The project will test whether verified, local referrals help residents identify a next step.',
        note: 'The revised version distinguishes observed demand, the underlying condition, and the proposed response. It does not claim that a referral equals food access.',
      },
      {
        label: 'Evidence with limits',
        before: 'Our community faces an unprecedented crisis affecting everyone.',
        after: 'During the reporting period, 211 recorded 15,087 Waukesha contacts. The volume shows sustained demand for navigation, but it does not by itself show whether each contact resulted in a service connection.',
        note: 'The qualified version is more trustworthy because it says both what the evidence supports and what it cannot establish.',
      },
    ],
    decisionTitle: 'Needs-statement check',
    decisions: [
      'What condition exists, apart from the requested service?',
      'Who experiences it, and how are they defined?',
      'Where and when is the evidence from?',
      'What does the evidence demonstrate, and what remains uncertain?',
      'Why is this organization and response relevant to this condition?',
    ],
    traps: ['Using emotional intensity as a substitute for evidence.', 'Treating a broad population label as if it were a precise definition.', 'Using a national statistic without explaining local relevance.'],
    carry: 'A strong needs statement creates urgency through clarity. It lets the reviewer see the condition, the people affected, the evidence, and the reasonable scale of the proposed response.',
    source: 'logic',
    refs: ['reference/grant-application-map.html', 'reference/prose-diagnostics.html'],
  },
  {
    title: 'Project Design, Capacity, Collaboration, and Sustainability',
    phase: 'IV. Write for funders',
    lede: 'A project becomes credible when the reader can trace resources to activities, outputs, and intended outcomes, and can see who is responsible for each part. Capacity, collaboration, equity, and sustainability need operational evidence rather than labels.',
    mission: 'Funders are deciding whether the proposed work can happen as described. The writing should make dependencies, roles, safeguards, and continuation conditions visible.',
    outcomes: [
      'Describe a project as a chain from resources through activities to outcomes.',
      'Support capacity claims with systems, expertise, partnerships, or prior execution.',
      'Describe collaboration and sustainability as roles and conditions rather than aspirations.',
    ],
    map: ['resources', 'activities', 'outputs', 'outcomes', 'conditions'],
    concepts: [
      ['The project chain', 'Resources enable activities; activities produce outputs; outputs contribute to outcomes. The chain is not a promise that every activity causes the final change. It is a disciplined way to expose the path and its assumptions.'],
      ['Capacity as evidence', '“We have strong capacity” is a conclusion. Evidence may include relevant expertise, staffing, systems, prior execution, data practices, safeguards, and relationships that have a defined function.'],
      ['Collaboration and sustainability', 'Collaboration describes who does what, how decisions are made, and what each role contributes. Sustainability describes what will continue, with which resources, under what conditions, and with what uncertainty.'],
    ],
    examples: [
      {
        label: 'Capacity in functions',
        before: 'Funding will support CRSs and Database Curators to strengthen community access.',
        after: 'Funding will support CRSs who help residents interpret options and Database Curators who verify service information. The two functions depend on one another: navigators need current information, and directory updates need feedback from resident-facing staff.',
        note: 'The second version explains what each role does and why both are necessary. It turns job titles into evidence of a feasible operating model.',
      },
      {
        label: 'Collaboration in roles',
        before: 'We will leverage robust community partnerships to advance equity and sustainability.',
        after: 'Host sites will identify kiosk placement, promote access, and report barriers. IMPACT will maintain the directory, train staff, and review usage by site before deciding whether the model can continue.',
        note: 'The revision names accountable actions and makes the continuation decision conditional on evidence.',
      },
    ],
    decisionTitle: 'Feasibility check',
    decisions: [
      'Who does what, for whom, where, and when?',
      'What resource or role does each activity depend on?',
      'What output will show that the activity occurred?',
      'What operational evidence supports capacity?',
      'What barrier, safeguard, or uncertainty should the reviewer see?',
      'What exactly continues after the grant, and with what resources?',
    ],
    traps: ['Listing partners without assigning functions.', 'Calling a staffing plan an outcome.', 'Promising sustainability without naming resources or conditions.', 'Using equity language without describing a design choice or accountability mechanism.'],
    carry: 'Credibility is often a chain of small operational particulars. The reader should not have to infer who will do the work or why the organization can carry it out.',
    source: 'logic',
    refs: ['reference/grant-application-map.html', 'reference/glossary.html'],
  },
  {
    title: 'Outcomes, Measures, Budgets, and Whole-Application Credibility',
    phase: 'IV. Write for funders',
    lede: 'The final grant-writing judgment is coherence: the need, project, budget, measures, and claims must describe the same work at the same scale. Credible voice emerges when the application is specific, proportionate, and internally consistent.',
    mission: 'This lesson brings the system together. The reviewer should be able to trace money to work, work to outputs, outputs to intended change, and intended change to a measure without finding inflated promises or contradictions.',
    outcomes: [
      'Distinguish outputs, outcomes, indicators, and measures.',
      'Write a budget narrative that connects cost to necessary function and result.',
      'Review an application horizontally and vertically for credibility and consistency.',
      'Recognize grant voice as accountable persuasion, not generic institutional uplift.',
    ],
    map: ['need', 'work', 'cost', 'output', 'outcome', 'measure', 'limit'],
    concepts: [
      ['Measure the right thing', 'An output is a delivered unit or completed activity. An outcome is a change in knowledge, behavior, condition, or system performance. An indicator is an observable sign; a measure needs a source, method, timing, and often a denominator and limitation.'],
      ['Budget as reasoning', 'A budget narrative explains why a cost is necessary, reasonable, and connected to the work. A dollar amount becomes persuasive when the reader can see the function it makes possible and the result that function supports.'],
      ['Horizontal and vertical review', 'Vertically, check whether each answer satisfies its prompt. Horizontally, trace central claims, numbers, population definitions, geography, timeframe, and terms across fields. Consistency is part of trust.'],
      ['Credible grant voice', 'The strongest application sounds like accountable people making a serious case: direct about the need, concrete about the work, honest about limits, and persuasive without pretending certainty.'],
    ],
    examples: [
      {
        label: 'Activity, output, outcome, measure',
        before: 'The project will provide 500 referrals and improve residents’ lives.',
        after: 'Output: staff verify 500 records and provide referrals through the pilot. Outcome: residents report knowing a next step after using the service. Measure: the percentage of surveyed participants reporting that knowledge, collected at the point of use and interpreted as awareness rather than proof of service receipt.',
        note: 'The revised chain distinguishes what the organization does, what residents may experience, and what the evidence can actually establish.',
      },
      {
        label: 'Budget and consistency',
        before: 'The budget supports outreach statewide, while the project description says it will serve Southeastern Wisconsin.',
        after: 'The application defines the pilot geography as Southeastern Wisconsin in every field. The budget narrative explains that $100,000 supports CRS and curator capacity that makes 24/7 navigation and verified referrals possible during the pilot.',
        note: 'The second version links scope, geography, cost, function, and result. It also removes a contradiction that would weaken trust even if every individual sentence were grammatical.',
      },
    ],
    decisionTitle: 'Final credibility review',
    decisions: [
      'Does every field answer its prompt directly?',
      'Do need, activities, outputs, outcomes, measures, and budget describe one coherent scale of work?',
      'Can every important number, population label, geography, and timeframe be traced and reconciled?',
      'Does each measure name a source, method, timing, and limitation?',
      'Does the language sound specific, accountable, and human rather than inflated or generated?',
    ],
    traps: ['Calling a referral proof that a service was received.', 'Claiming outcomes from activity counts alone.', 'Treating consistency as copyediting instead of credibility.', 'Using strong adjectives where operational evidence is needed.'],
    carry: 'You now have the knowledge map for the next phase. Practice will not ask you to memorize isolated rules; it will ask you to diagnose real writing, make choices, and explain why those choices fit the reader and purpose.',
    source: 'nsf',
    refs: ['reference/grant-application-map.html', 'reference/revision-ladder.html', 'reference/prose-diagnostics.html'],
  },
];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function pad(number) {
  return String(number).padStart(4, '0');
}

function lessonPath(index) {
  return `lessons/${pad(index + 1)}-${slug(lessons[index].title)}.html`;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderList(items, className = '') {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderConcepts(concepts) {
  return concepts.map(([title, body]) => `<article class="concept"><h3>${title}</h3><p>${body}</p></article>`).join('');
}

function renderExamples(examples) {
  return examples.map((example) => `<article class="example"><div class="example-label">${example.label}</div><div class="example-versions"><div class="version less-controlled"><span class="version-label">Less controlled</span><p>${example.before}</p></div><div class="version more-deliberate"><span class="version-label">More deliberate</span><p>${example.after}</p></div></div><p class="example-note">${example.note}</p></article>`).join('');
}

function renderLesson(index, lesson) {
  const previous = index > 0 ? `<a href="../${lessonPath(index - 1)}">&larr; ${lessons[index - 1].title}</a>` : '<span></span>';
  const next = index < lessons.length - 1 ? `<a href="../${lessonPath(index + 1)}">${lessons[index + 1].title} &rarr;</a>` : '<span></span>';
  const references = lesson.refs.map((reference) => `<a href="../${reference}">${reference.split('/').pop().replace('.html', '').replaceAll('-', ' ')}</a>`).join(' <span class="link-separator">·</span> ');
  const sourceUrl = sources[lesson.source];

  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${pad(index + 1)} ${escapeHtml(lesson.title)}</title>
<link rel="stylesheet" href="../assets/course.css">
<body>
<main class="page lesson-page">
  <header class="lesson-header">
    <a class="course-mark" href="../COURSE-MAP.html">Deliberate Prose / Knowledge phase</a>
    <div class="lesson-number">${String(index + 1).padStart(2, '0')}</div>
    <p class="phase-label">${lesson.phase}</p>
    <h1>${lesson.title}</h1>
    <p class="lede">${lesson.lede}</p>
  </header>
  <div class="lesson-status"><span>Read for understanding</span><span>Practice and testing come later</span></div>
  <aside class="mission"><strong>Why this matters.</strong> ${lesson.mission}</aside>
  <section class="lesson-section outcomes-section">
    <div class="section-kicker">By the end of this lesson</div>
    ${renderList(lesson.outcomes, 'outcomes')}
  </section>
  <section class="lesson-section">
    <div class="section-kicker">The map</div>
    <div class="map-flow">${lesson.map.map((item, mapIndex) => `<span class="map-node">${item}</span>${mapIndex < lesson.map.length - 1 ? '<span class="map-arrow">&rarr;</span>' : ''}`).join('')}</div>
  </section>
  <section class="lesson-section">
    <div class="section-kicker">Core ideas</div>
    <div class="concept-grid">${renderConcepts(lesson.concepts)}</div>
  </section>
  <section class="lesson-section worked-section">
    <div class="section-kicker">Worked choices</div>
    ${renderExamples(lesson.examples)}
  </section>
  <section class="lesson-section decision-section">
    <div class="section-kicker">Use this decision rule</div>
    <h2>${lesson.decisionTitle}</h2>
    ${renderList(lesson.decisions, 'decision-list')}
  </section>
  <section class="lesson-section traps-section">
    <div class="section-kicker">Watch for these traps</div>
    ${renderList(lesson.traps, 'trap-list')}
  </section>
  <aside class="carry-forward"><strong>Carry forward.</strong> ${lesson.carry}</aside>
  <section class="lesson-section references-section">
    <div class="section-kicker">Return to these</div>
    <p>${references}</p>
    <p class="source"><strong>Primary source:</strong> <a href="${sourceUrl}">${sourceLabels[lesson.source]}</a></p>
    <p class="teacher-note">If a distinction is unclear, ask about it before practice begins. The goal of this phase is a complete map, not silent confusion.</p>
  </section>
  <nav class="lesson-nav">${previous}${next}</nav>
</main>
</body>
</html>
`;
}

function reference(title, body) {
  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link rel="stylesheet" href="../assets/course.css">
<body>
<main class="page reference-page">
  <header class="reference-header">
    <a class="course-mark" href="../COURSE-MAP.html">Deliberate Prose / Reference</a>
    <h1>${title}</h1>
  </header>
  ${body}
  <nav class="reference-nav"><a href="../COURSE-MAP.html">Course map</a><a href="../${lessonPath(0)}">Begin lesson 1</a></nav>
</main>
</body>
</html>
`;
}

// Generated lessons are disposable outputs. Durable content belongs in this file.
for (const file of fs.readdirSync('lessons')) {
  if (file.endsWith('.html')) fs.unlinkSync(`lessons/${file}`);
}
lessons.forEach((lesson, index) => fs.writeFileSync(lessonPath(index), renderLesson(index, lesson)));

fs.writeFileSync('reference/glossary.html', reference('Glossary', `
<p class="lede">Terms are useful only when they help you see and revise a real choice.</p>
<table>
  <tr><th>Term</th><th>Working definition</th></tr>
  <tr><td>clause</td><td>A group of words with a subject and finite verb; an independent clause can stand alone.</td></tr>
  <tr><td>predicate</td><td>Everything said about the subject, including its verb and complements.</td></tr>
  <tr><td>complement</td><td>A word or phrase that completes a verb's meaning, such as an object or subject complement.</td></tr>
  <tr><td>modifier</td><td>A word, phrase, or clause that limits, describes, or otherwise specifies another element.</td></tr>
  <tr><td>coordination</td><td>Joining units as grammatical peers, often with <em>and</em>, <em>but</em>, <em>or</em>, or a semicolon.</td></tr>
  <tr><td>subordination</td><td>Making one clause depend on another to express time, cause, condition, contrast, or concession.</td></tr>
  <tr><td>syntax</td><td>The arrangement of words, phrases, and clauses in a sentence.</td></tr>
  <tr><td>cadence</td><td>The felt movement of prose created by syntax, stress, sound, and sentence shape.</td></tr>
  <tr><td>nominalization</td><td>A noun formed from a verb or adjective, such as <em>implementation</em> from <em>implement</em>.</td></tr>
  <tr><td>parallelism</td><td>Using matching grammatical forms for units readers should compare.</td></tr>
  <tr><td>rhetorical situation</td><td>The writer, reader, purpose, medium, constraints, and stakes surrounding a piece of writing.</td></tr>
  <tr><td>rhetoric</td><td>The deliberate use of language and structure for a reader, purpose, and situation.</td></tr>
  <tr><td>cohesion</td><td>The links that make sentences and paragraphs feel connected.</td></tr>
  <tr><td>voice</td><td>The recurring pattern of choices in a writer's syntax, vocabulary, pace, stance, specificity, and qualification.</td></tr>
  <tr><td>tone</td><td>The writer's stance toward a particular reader and situation.</td></tr>
  <tr><td>register</td><td>The expected level of formality and specialized vocabulary in a context.</td></tr>
  <tr><td>antecedent</td><td>The noun or noun phrase a pronoun refers to.</td></tr>
  <tr><td>aspect</td><td>The verb form that presents an action as ongoing, completed, or prior.</td></tr>
  <tr><td>claim</td><td>A proposition the writer asks the reader to accept or act on.</td></tr>
  <tr><td>evidence</td><td>Information that supports a claim when its relevance and limits are explained.</td></tr>
  <tr><td>output</td><td>A direct product of activities: sessions held, records verified, or people served.</td></tr>
  <tr><td>outcome</td><td>A change expected to result from the work: knowledge, behavior, condition, or system performance.</td></tr>
  <tr><td>indicator</td><td>An observable sign used as evidence of an output or outcome.</td></tr>
  <tr><td>measure</td><td>A defined method, source, timing, and unit for observing an indicator.</td></tr>
</table>`));

fs.writeFileSync('reference/punctuation-and-sentence-boundaries.html', reference('Punctuation and Sentence Boundaries', `
<p class="lede">Find the clause structure and intended relationship before choosing the mark.</p>
<table>
  <tr><th>Mark</th><th>Requirement</th><th>Choice and effect</th></tr>
  <tr><td>Period</td><td>Ends an independent clause.</td><td>Separates ideas and gives a full stop.</td></tr>
  <tr><td>Comma + coordinator</td><td>Joins two independent clauses with <em>and, but, for, or, nor, so, yet</em>.</td><td>Names a familiar, relatively light relationship.</td></tr>
  <tr><td>Semicolon</td><td>Joins closely related independent clauses.</td><td>Maintains continuity without naming the relationship.</td></tr>
  <tr><td>Colon</td><td>Follows a complete clause before an explanation, list, or consequence.</td><td>Creates expectation and emphasis.</td></tr>
  <tr><td>Dash</td><td>Optional where syntax permits.</td><td>Creates an interruption, turn, or emphatic addition.</td></tr>
  <tr><td>Comma pair</td><td>Sets off nonessential material.</td><td>Signals that the material comments on an already identified noun or clause.</td></tr>
</table>
<div class="callout"><strong>Boundary test.</strong> Does each side have a subject and finite verb, and could each side stand alone? If yes, choose a period, semicolon, or comma plus coordinating conjunction based on the relationship.</div>`));

fs.writeFileSync('reference/sentence-anatomy.html', reference('Sentence Anatomy', `
<div class="map-flow"><span class="map-node">subject</span><span class="map-arrow">&rarr;</span><span class="map-node">finite verb</span><span class="map-arrow">&rarr;</span><span class="map-node">object / complement</span><span class="map-arrow">+</span><span class="map-node">modifiers</span></div>
<table>
  <tr><th>Find first</th><th>Why</th></tr>
  <tr><td>Finite verb</td><td>It locates a clause core and lets you count clauses.</td></tr>
  <tr><td>Subject</td><td>It reveals who or what carries the sentence grammatically.</td></tr>
  <tr><td>Objects and complements</td><td>They show what the action affects or what the subject becomes.</td></tr>
  <tr><td>Modifiers</td><td>They add precision but can create ambiguity when detached.</td></tr>
</table>`));

fs.writeFileSync('reference/prose-diagnostics.html', reference('Prose Diagnostics', `
<p class="lede">Start with the likely cause, not the surface symptom.</p>
<table>
  <tr><th>Symptom</th><th>Likely cause</th><th>First diagnostic move</th></tr>
  <tr><td>Stiff or inflated</td><td>Abstract nouns, weak verbs, jargon, or borrowed institutional language</td><td>Circle nominalizations; restore actors and verbs; replace claims with particulars.</td></tr>
  <tr><td>Hard to follow</td><td>Unclear information order or hidden relationships</td><td>Underline old information and new information; map the clause cores.</td></tr>
  <tr><td>Monotonous</td><td>Repeated openings, lengths, or syntactic shapes</td><td>Map sentence openings and clause shapes; vary by function.</td></tr>
  <tr><td>Wordy</td><td>Often a structure problem, not extra words</td><td>Write each paragraph's actual job; split competing ideas before trimming.</td></tr>
  <tr><td>Weak ending</td><td>The point is buried before the final position</td><td>Move the consequence, qualification, or key term to the ending.</td></tr>
  <tr><td>Generic voice</td><td>Unowned abstractions, inflated verbs, and no concrete particulars</td><td>Replace uplift with an observable action, person, place, number, or limit.</td></tr>
  <tr><td>Untrustworthy grant claim</td><td>Scope, numbers, populations, or causal claims do not align</td><td>Trace the claim horizontally across the application and record its evidence.</td></tr>
</table>`));

fs.writeFileSync('reference/revision-ladder.html', reference('Revision Ladder', `
<p class="lede">Move from the largest consequence for the reader to the smallest surface detail.</p>
<ol class="revision-list">
  <li><strong>Purpose:</strong> What must this reader understand, decide, or do?</li>
  <li><strong>Structure:</strong> Does the order answer the reader's questions?</li>
  <li><strong>Evidence:</strong> Are claims supported, interpreted, and appropriately qualified?</li>
  <li><strong>Paragraph:</strong> Does each paragraph have one job and a clear handoff?</li>
  <li><strong>Sentence:</strong> Are actors, actions, relationships, and emphasis visible?</li>
  <li><strong>Voice:</strong> Does the wording sound specific, natural, and fit for this reader?</li>
  <li><strong>Copyedit:</strong> Are usage, punctuation, terms, numbers, and citations consistent?</li>
  <li><strong>Proof:</strong> Are final formatting and surface errors resolved?</li>
</ol>`));

fs.writeFileSync('reference/grant-application-map.html', reference('Grant Application Map', `
<div class="map-flow"><span class="map-node">funder question</span><span class="map-arrow">&rarr;</span><span class="map-node">direct answer</span><span class="map-arrow">&rarr;</span><span class="map-node">specific evidence</span><span class="map-arrow">&rarr;</span><span class="map-node">credible measure</span></div>
<table>
  <tr><th>Field</th><th>Reader needs to see</th></tr>
  <tr><td>Need / population</td><td>Defined condition, affected people, local evidence, relevance, and limits.</td></tr>
  <tr><td>Project</td><td>Who will do what, for whom, where, when, and why it is feasible.</td></tr>
  <tr><td>Capacity / collaboration</td><td>Operational evidence and distinct partner roles.</td></tr>
  <tr><td>Outputs / outcomes / evaluation</td><td>Work completed, expected change, indicator, method, timing, and limitations.</td></tr>
  <tr><td>Budget / sustainability</td><td>Necessary use of funds and credible continuation conditions.</td></tr>
  <tr><td>Whole application</td><td>Consistent population, geography, scope, terms, numbers, timeframe, and level of promise.</td></tr>
</table>`));

fs.writeFileSync('reference/voice-baseline.html', reference('Voice Baseline: Version 1', `
<p class="lede">A provisional profile based primarily on the available personal emails. It describes observable habits, not a grade or permanent identity. Practice will test and revise it.</p>
<h2>Evidence boundaries</h2>
<table>
  <tr><th>Evidence</th><th>What it can show</th><th>What it cannot show</th></tr>
  <tr><td>Personal emails</td><td>Current natural professional habits: direct requests, concrete problem lists, practical context, modest tone.</td><td>Full range across high-stakes writing or formal prose.</td></tr>
  <tr><td>Submitted grants</td><td>Work genre, IMPACT context, funder questions, and institutional language.</td><td>Natural individual voice when the drafts had significant AI assistance.</td></tr>
  <tr><td>Admired writing</td><td>Taste for forceful direction, concrete particulars, purposeful long sentences, clear turns, and an explicit point of view.</td><td>A template to imitate; its polemical register will not fit every professional situation.</td></tr>
</table>
<h2>Working strengths to protect</h2>
<ul>
  <li>Gets to the operational problem quickly and gives relevant context.</li>
  <li>Uses concrete particulars: maintenance items, software names, observed discrepancies, and consequences.</li>
  <li>Maintains a calm, respectful, low-theater tone even when making a complaint.</li>
  <li>Shows an intuitive reader model: recipients receive enough information to act.</li>
</ul>
<h2>Craft opportunities</h2>
<ul>
  <li>Sentence boundaries and agreement can make directness more reliable under speed.</li>
  <li>Syntax and paragraph sequencing can turn a list of facts into a shaped case.</li>
  <li>Sentence endings, transitions, and qualification can sharpen emphasis without making the prose ornate.</li>
  <li>Professional requests can put the desired action even earlier while keeping the natural, practical tone.</li>
</ul>
<h2>How the voice can travel</h2>
<table>
  <tr><th>Context</th><th>Adapt the register</th><th>Keep the underlying preference</th></tr>
  <tr><td>Personal writing</td><td>Allow more idiosyncrasy, reflection, imagery, or emotional range.</td><td>Concrete observation and an honest point of view.</td></tr>
  <tr><td>Professional writing</td><td>Put the request, problem, or implication early; give enough context to act.</td><td>Directness, practical detail, and calmness.</td></tr>
  <tr><td>Grant writing</td><td>Make the case accountable, evidence-based, and proportionate to the prompt.</td><td>Specificity, visible action, respect for people, and honest limits.</td></tr>
</table>
<div class="callout"><strong>Voice test.</strong> If a sentence sounds polished but could have been written by any organization, inspect its actors, particulars, and degree of certainty. Replace generic uplift with something only this writer or organization can responsibly say.</div>`));

const modules = [
  ['I. Build the map', 0, 2, 'See the whole writing system and learn the sentence relationships that make thought visible.'],
  ['II. Control sentences', 3, 7, 'Make sentences reliable, readable, specific, and deliberately paced.'],
  ['III. Shape thought', 8, 11, 'Build paragraphs and arguments, then carry a natural voice into professional writing.'],
  ['IV. Write for funders', 12, 15, 'Translate the system into prompt reading, grant architecture, evidence, measures, and credibility.'],
];

let map = `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Course Map</title>
<link rel="stylesheet" href="assets/course.css">
<body>
<main class="page map-page">
  <header class="map-header">
    <p class="course-mark">Deliberate Prose / Knowledge phase</p>
    <h1>Course Map</h1>
    <p class="lede">16 lessons that provide the information needed before practice: writing judgment, sentence control, prose structure, voice, and grant application credibility.</p>
  </header>
  <div class="orientation-grid">
    <div><span class="section-kicker">This phase teaches</span><p>A complete map of the choices you will later practice: what to notice, what it means, and how to decide.</p></div>
    <div><span class="section-kicker">This phase does not test</span><p>No quizzes, gates, or required retrieval yet. The practice phase begins when you say you are ready.</p></div>
  </div>`;

for (const [moduleTitle, start, end, description] of modules) {
  map += `<section class="map-module"><div class="module-heading"><h2>${moduleTitle}</h2><p>${description}</p></div><div class="map-lesson-list">`;
  for (let index = start; index <= end; index += 1) {
    const lesson = lessons[index];
    map += `<a class="map-lesson" href="${lessonPath(index)}"><span class="map-lesson-number">${String(index + 1).padStart(2, '0')}</span><span><strong>${lesson.title}</strong><small>${lesson.lede}</small></span><span class="map-lesson-arrow">&rarr;</span></a>`;
  }
  map += '</div></section>';
}

map += `<section class="transition-section"><span class="section-kicker">When the map is complete</span><h2>Then practice begins</h2><p>After lesson 16, tell the agent you are ready for practice. The next phase will use your authentic writing and grant tasks, with feedback, retrieval, revision, and spaced return to earlier concepts.</p><a class="primary-link" href="${lessonPath(0)}">Begin lesson 1 &rarr;</a></section>
  <section class="reference-index"><span class="section-kicker">Reference desk</span><div class="reference-links"><a href="reference/voice-baseline.html">Voice baseline</a><a href="reference/prose-diagnostics.html">Prose diagnostics</a><a href="reference/revision-ladder.html">Revision ladder</a><a href="reference/grant-application-map.html">Grant application map</a><a href="reference/punctuation-and-sentence-boundaries.html">Punctuation</a><a href="reference/glossary.html">Glossary</a></div></section>
</main>
</body>
</html>
`;
fs.writeFileSync('COURSE-MAP.html', map);
