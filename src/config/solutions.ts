// Public solution copy. One permanent URL serves organic visitors and future ads.
export const solutions = [
  {
    slug: "internal-knowledge", label: "Internal knowledge", title: "Your team’s knowledge. Easier to find and use.",
    description: "We turn an agreed set of company procedures and reference material into a searchable knowledge workflow, with source links and a clear path when the answer is missing.",
    problem: "The documents exist. The questions keep coming.",
    friction: "People search folders, ask the same colleague or work from an old answer. A useful knowledge system brings the relevant guidance into the workflow and makes it possible to check where an answer came from.",
    promise: "Start with one team and the questions they ask most.",
    steps: ["Approved procedures and reference files", "Find relevant guidance and show its source", "Check the answer or escalate the question"],
    deliverables: [
      ["Agree the knowledge sources", "Identify the documents, permissions and content owner for one team. Flag gaps, conflicting guidance and material that needs updating."],
      ["Build a source-linked answer workflow", "Configure search and answers around the approved material. Include links to supporting sources and a way to flag unanswered questions."],
      ["Test real staff questions", "Check representative questions with your team, including missing information and restricted material. Agree when staff must verify or escalate."],
      ["Make updates part of the handoff", "Document who maintains the sources, how changes reach the system and how staff report an incorrect or incomplete answer."],
    ],
    fit: ["A team repeatedly asks questions covered by existing documents.", "Someone can approve the guidance and keep it current.", "You can identify which information each user should access."],
    faqs: [
      ["Is this a RAG system?", "Retrieval-augmented generation, often called RAG, can help an AI answer from selected documents. We choose the approach around the sources, permissions and questions your team needs to handle."],
      ["Will every answer be correct?", "Source links help people check an answer; they do not guarantee accuracy. We test realistic questions, make gaps visible and agree when a person must check or escalate."],
      ["Can you connect all our business data?", "We begin with an agreed document set. Connecting transaction systems, keeping permissions synchronized or improving source material may need separate work, scoped before implementation."],
    ],
    cta: "Talk through your knowledge workflow", subject: "Internal knowledge workflow enquiry",
    prompt: "Which team needs answers, where does the guidance live, and what questions keep coming up?",
  },
  {
    slug: "email-workflows", label: "Email workflows", title: "An inbox that helps the work move.",
    description: "We set up email organization and drafting workflows around the way your team handles enquiries, requests and follow-ups, with people reviewing replies before they go out.",
    problem: "The inbox has become the task list.",
    friction: "Requests arrive by email. Someone sorts them, finds the background, writes a familiar reply and remembers to follow up. We help make that work easier to see and repeat.",
    promise: "Start with one inbox and one recurring kind of work.",
    steps: ["An enquiry or request arrives", "Organize it and prepare a useful draft", "Your team reviews, replies and follows through"],
    deliverables: [
      ["Agree what needs attention", "Map one inbox or request type, including categories, urgency, ownership and the information needed to respond."],
      ["Prepare drafts with useful context", "Set up drafting around approved business information, examples of your tone and clear rules for questions the workflow cannot answer."],
      ["Keep people in control", "Have staff review replies before sending. Agree access, sensitive information handling and when a request should go straight to a person."],
      ["Make follow-up repeatable", "Document how requests are tracked, who owns the next action and how your team operates and adjusts the workflow."],
    ],
    fit: ["Your team handles recurring enquiries or similar replies.", "Someone can define the right tone, information and escalation rules.", "You want drafting and organization help with human review."],
    faqs: [
      ["Will it send email automatically?", "The starting workflow prepares drafts for review. Staff decide what to send. Any later sending automation would need a separately agreed scope and controls."],
      ["Can it write in our voice?", "We can use approved examples of your writing to guide drafts. Your team reviews the results and corrects tone, facts and commitments before sending."],
      ["Do we need to change email platforms?", "We first review the tools you already use and what access they support. We agree any integrations or additional software costs before work begins."],
    ],
    cta: "Talk through your email workflow", subject: "Email workflow enquiry",
    prompt: "Which inbox or request type takes the most effort, and what does your team do by hand?",
  },
  {
    slug: "onboarding", label: "Team onboarding", title: "Help the next person learn how the work gets done.",
    description: "We turn existing training, documents and a trainer’s walkthrough into reusable onboarding for one role, with practical guides, checklists and a clear path for questions.",
    problem: "Good training depends on someone being available.",
    friction: "The same explanations get repeated. Useful details stay in one person’s head, and new staff piece the process together as they go. We help capture that knowledge in a form the next person can use.",
    promise: "Start with one role and the tasks they need to learn.",
    steps: ["Existing material and a trainer’s walkthrough", "Reviewed task guides and practice checklists", "A new starter follows the process with support"],
    deliverables: [
      ["Map the role’s first useful tasks", "Agree which activities the onboarding covers, the starting knowledge required and what a correct result looks like."],
      ["Capture the way your team works", "Use existing documents and a subject expert’s walkthrough to prepare practical instructions. Your team approves operational accuracy."],
      ["Build guides and practice checks", "Organize the material into a reusable path with task checklists, examples and checkpoints for a supervisor or trainer."],
      ["Hand over ownership", "Document who updates the material, how new staff ask questions and which activities still need supervised practice."],
    ],
    fit: ["You repeatedly train people for the same role or process.", "An experienced person can explain and review the work.", "You want practical task support alongside human training."],
    faqs: [
      ["Do we need finished training documents?", "Existing material helps, but a trainer’s walkthrough can be a starting point. We agree the capture and writing work before quoting the build."],
      ["Does this replace the trainer?", "A reusable workflow supports the trainer and new starter. Your team decides what needs supervision, practical assessment or specialist instruction."],
      ["Can we expand to other roles?", "Yes, after agreeing the next role’s scope and ownership. The first implementation helps establish a structure your team can maintain."],
    ],
    cta: "Talk through your onboarding", subject: "Team onboarding workflow enquiry",
    prompt: "Which role or process do you train repeatedly, and where do new starters need the most help?",
  },
];

export function solutionEmail(solution: typeof solutions[number]) {
  const body = `Hey Trellis Works,\n\nI'd like to discuss ${solution.label.toLowerCase()}.\n\nCompany:\n${solution.prompt}\n\nThanks,\n[Your name]`;
  return {
    gmail: `https://mail.google.com/mail/?${new URLSearchParams({ view: "cm", fs: "1", to: "info@trellisworks.ca", su: solution.subject, body })}`,
    mailto: `mailto:info@trellisworks.ca?${new URLSearchParams({ subject: solution.subject, body })}`,
  };
}
