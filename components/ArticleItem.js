import React from "react";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`article/${article.id}`}>
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
