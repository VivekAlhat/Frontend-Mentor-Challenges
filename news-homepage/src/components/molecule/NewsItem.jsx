const NewsItem = ({ heading, content }) => {
  return (
    <div className="space-y-2 py-10">
      <h2 className="text-off-white cursor-pointer font-bold text-2xl hover:text-soft-orange">
        {heading}
      </h2>
      <p className="text-grayish-blue font-semibold text-lg">{content}</p>
    </div>
  );
};

export default NewsItem;
