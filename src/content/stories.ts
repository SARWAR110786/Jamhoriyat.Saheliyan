import type { PhotoSlot } from "./photos";

/**
 * Story metadata shared by the stories grid and the horizontal story slider.
 *
 * Nothing here is invented: every entry is either already published on the
 * site or explicitly marked "pending" until the team clears consent and
 * review. Photos are referenced by named slot, never by file path.
 */
export type Story = {
  title: string;
  category: string;
  excerpt: string;
  slot: PhotoSlot;
  date: string;
  read: string;
  featured?: boolean;
};

export const stories: Story[] = [
  {
    title: "“Before, I did not even know I was allowed to ask.”",
    category: "Women's voices",
    excerpt:
      "A network member describes the first time she made a Right to Information request, and what changed when other women made theirs alongside her.",
    slot: "storyOne",
    date: "Story pending consent",
    read: "4 min",
    featured: true,
  },
  {
    title: "Designing with women, not for them",
    category: "Feminist AI and civic tech",
    excerpt:
      "What 200 co-creation sessions taught us about prompts, language and knowing when a machine should stop talking.",
    slot: "aboutCircle",
    date: "Story pending review",
    read: "6 min",
  },
  {
    title: "What happens after the request is filed",
    category: "Women in democratic governance",
    excerpt:
      "The legal window is only the beginning. On follow-up, collective pressure and the offices that answer.",
    slot: "democracyTwo",
    date: "Story pending review",
    read: "5 min",
  },
  {
    title: "Water, relief and the information nobody publishes",
    category: "Climate justice and accountability",
    excerpt:
      "In climate-affected communities, the gap between what is planned and what is known is where accountability begins.",
    slot: "climateLandTwo",
    date: "Story pending review",
    read: "7 min",
  },
  {
    title: "Research brief: measuring what a question changes",
    category: "Research and policy briefs",
    excerpt:
      "A short note on our theory of change, the assumptions we are testing, and how we will report failure as well as success.",
    slot: "partnersRoom",
    date: "Brief pending review",
    read: "12 min",
  },
  {
    title: "A shared phone is not a shared right",
    category: "Digital rights and gender equality",
    excerpt:
      "Privacy, safety and the household politics of asking a question on a device that is not only yours.",
    slot: "storyTwo",
    date: "Story pending review",
    read: "6 min",
  },
  {
    title: "The civic network, in its own words",
    category: "Community-led innovation",
    excerpt:
      "157 women, three districts, one habit: raising a concern together rather than alone.",
    slot: "partnersGroup",
    date: "Story pending review",
    read: "5 min",
  },
  {
    title: "Two outcomes, described carefully",
    category: "Women's voices",
    excerpt:
      "Medicines at a hospital. A teacher back at school. What we can and cannot claim about either.",
    slot: "impactSchool",
    date: "Story pending review",
    read: "4 min",
  },
];

export const storyCategories = [
  "All",
  "Women's voices",
  "Feminist AI and civic tech",
  "Women in democratic governance",
  "Climate justice and accountability",
  "Research and policy briefs",
  "Digital rights and gender equality",
  "Community-led innovation",
];
