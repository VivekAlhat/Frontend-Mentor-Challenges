const ArticleInfo = ({ article }) => {
  const { id, image, alt, heading, content } = article;

  return (
    <div className="flex">
      <img src={image} alt={alt} className="h-[120px]" />
      <div className="space-y-2 px-4 sm:px-8">
        <h1 className="text-grayish-blue font-semibold text-3xl">{id}</h1>
        <h2 className="text-very-dark-blue font-bold text-xl cursor-pointer hover:text-soft-red">
          {heading}
        </h2>
        <p className="text-dark-grayish-blue">{content}</p>
      </div>
    </div>
  );
};

export default ArticleInfo;
