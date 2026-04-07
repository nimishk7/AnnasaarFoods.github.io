import { useState, useEffect } from 'react';

/**
 * Custom hook to track the currently visible section in the viewport.
 * @param {string[]} sectionIds Array of element IDs to track.
 * @param {object} options IntersectionObserver options.
 * @returns {string} The ID of the currently active section.
 */
export const useScrollSpy = (sectionIds, options = { threshold: 0.3, rootMargin: '0px 0px -40% 0px' }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
};
