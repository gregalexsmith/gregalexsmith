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
      <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
        {title}
      </h1>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-lg">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      </div>
    </>
  );
};
