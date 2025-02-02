import React from "react";

async function QuestionDetail({ params }: RouteParams) {
  const { id } = await params;
  return <div>QuestionDetail {id}</div>;
}

export default QuestionDetail;
