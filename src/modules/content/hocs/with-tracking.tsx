import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

type WithTracker = {
  (
    WrappedComponent: React.ComponentType<any>,
    options?: any
  ): React.ComponentType<any>;
};

const withTracker: WithTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page: string) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.send('pageview');
  };

  const HOC: React.FC = (props) => {
    const location = useLocation();
    useEffect(() => trackPage(location.pathname), [
      location.pathname,
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
