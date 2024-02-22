import { Link } from '@remix-run/react';

interface LinkToProps {
  paDonde: string;
  text: string;
  style: string;
  onClick?: () => void;
}

const LinkTo = ({ paDonde, text, style, onClick }: LinkToProps) => {
  return (
    <Link to={paDonde} className={style} onClick={onClick}>
      {text}
    </Link>
  );
};

export default LinkTo;
