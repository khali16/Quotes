import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <>
      <h1>Quote Detail page</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
      {/* 
      <Route path={`/quotes/${params.queoteId}/comments`}>
      <Comments />
      </Route>
      */}
    </>
  );
};

export default QuoteDetail;
