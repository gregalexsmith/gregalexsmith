import classNames from 'classnames';

type Props = {
  title: string;
  date: string;
};

const formatDate = (date: Date | string) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <h1
        className={classNames(
          'mt-12 mb-6 text-center',
          'font-bold leading-tight tracking-tighter',
          'text-3xl',
          'md:text-left md:text-4xl md:leading-none',
          'lg:text-5xl'
        )}>
        {title}
      </h1>
      <div>
        <div className="mb-3 text-lg">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      </div>
    </>
  );
};
