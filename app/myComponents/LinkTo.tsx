import { Link } from '@remix-run/react';
import { ReactNode } from 'react';

interface LinkToProps {
  paDonde: string;
  text: string;
  style: string;
  children?: ReactNode
  key?: React.Key | undefined | null;

}

const LinkTo = ({ key, paDonde, text, style, children }: LinkToProps) => {
  return (
    <Link to={paDonde} className={style} key={key}>
      {text}
      {children}
    </Link>
  );
};

export default LinkTo;
