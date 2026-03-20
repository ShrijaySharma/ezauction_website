import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  defaultHeroContent,
  defaultFeaturesContent,
  defaultSuccessStoriesContent,
  defaultHowItWorksContent,
  defaultCTAContent,
  defaultContactContent,
} from '../data/siteContent';

const STORAGE_KEY = 'ezauction_site_content';

const defaults = {
  hero: defaultHeroContent,
  features: defaultFeaturesContent,
  successStories: defaultSuccessStoriesContent,
  howItWorks: defaultHowItWorksContent,
  cta: defaultCTAContent,
  contact: defaultContactContent,
};

const SiteContentContext = createContext();

export const useSiteContent = () => {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider');
  return ctx;
};

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults so new fields are always present
        return {
          hero: { ...defaults.hero, ...parsed.hero },
          features: { ...defaults.features, ...parsed.features },
          successStories: { ...defaults.successStories, ...parsed.successStories },
          howItWorks: { ...defaults.howItWorks, ...parsed.howItWorks },
          cta: { ...defaults.cta, ...parsed.cta },
          contact: { ...defaults.contact, ...parsed.contact },
        };
      }
    } catch (e) {
      console.error('Failed to load saved content:', e);
    }
    return defaults;
  });

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateSection = (sectionName, data) => {
    setContent((prev) => ({
      ...prev,
      [sectionName]: { ...prev[sectionName], ...data },
    }));
  };

  const resetSection = (sectionName) => {
    setContent((prev) => ({
      ...prev,
      [sectionName]: defaults[sectionName],
    }));
  };

  const resetAll = () => {
    setContent(defaults);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <SiteContentContext.Provider value={{ content, updateSection, resetSection, resetAll }}>
      {children}
    </SiteContentContext.Provider>
  );
};
