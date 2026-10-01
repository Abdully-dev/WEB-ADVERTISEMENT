// Shared motion timing for the editorial reveal system.
export const motion = {
  duration: { fast: 0.3, base: 0.7, slow: 1.1 },
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  stagger: 0.08,
} as const;

export const revealStyle = (delay = 0) => ({
  transitionDelay: `${delay}s`,
});
