import React, { useEffect } from 'react';
import { ActivePage } from '../../types';
import { updateRouteSeo } from '../../utils/seo';

interface SeoHeadProps {
  activePage: ActivePage;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ activePage }) => {
  useEffect(() => {
    updateRouteSeo(activePage);
  }, [activePage]);

  return null;
};
