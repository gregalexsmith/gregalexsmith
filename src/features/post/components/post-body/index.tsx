import markdownStyles from './styles.module.css';

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => {
  return (
    <div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
