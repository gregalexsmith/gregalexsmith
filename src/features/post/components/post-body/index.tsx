import markdownStyles from './styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
