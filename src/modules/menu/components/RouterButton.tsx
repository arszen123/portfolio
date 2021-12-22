import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const RouterButton: React.FC<ButtonProps & { to: string; }> = ({
  children, to, ...props
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Button
      as={Link}
      isActive={!!match}
      to={to}
      {...props}
    >
      {children}
    </Button>
  );
};
