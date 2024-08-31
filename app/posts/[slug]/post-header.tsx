type Props = {
  title: string;
  date: string;
};

const formatDate = (date: Date | string) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <h1 className="title1">{title}</h1>
      <div>
        <div className="mb-3 text-lg">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      </div>
    </>
  );
};
