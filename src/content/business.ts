export const business = {
  name: 'Dogs Tail and Paws',
  tagline: 'Walks, cuddles and care when you can’t be there.',
  phone: '07895 599393',
  phoneHref: 'tel:+447895599393',
  email: 'dogstailandpaws@gmail.com',
  areas: ['Boulton Moor', 'Alvaston', 'Chellaston', 'Shelton Lock', 'Spondon', 'Allestree', 'Quarndon'],
  qualifications: ['Pet First Aid Trained', 'DBS Checked', 'Dog Walking Certificate', 'Fully Insured'],
  services: [
    { number: '01', title: 'Solo & group dog walks', description: 'Tailored walks for exercise, enrichment and fun, whether your dog prefers one-to-one attention or social group walks.', icon: 'walk' },
    { number: '02', title: 'Puppy visits', description: 'Short visits for toilet breaks, playtime, reassurance and help with your puppy’s daily routine.', icon: 'paw' },
    { number: '03', title: 'Feeding & welfare visits', description: 'Pop-in visits for feeding, fresh water, toilet breaks and general wellbeing checks.', icon: 'bowl' },
    { number: '04', title: 'Pet sitting', description: 'Caring support to keep your pet comfortable, happy and settled while you’re away.', icon: 'home' }
  ]
} as const;
