import classNames from 'classnames';
import { ReactNode } from 'react';

type SingleColumnProps = {
  children: ReactNode;
  className?: string;
};

export const SingleColumn = ({ children, className }: SingleColumnProps) => (
  <div
    className={classNames(
      'px-2 sm:mx-auto w-full sm:w-[80%] md:w-[60%]',
      className,
    )}
  >
    {children}
  </div>
);
