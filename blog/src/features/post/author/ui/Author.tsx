"use client";

import React from "react";
import { AuthorStyles } from "./Author.styles";

const Author = () => {
  return (
    <AuthorStyles.Container>
      <AuthorStyles.Author>Author</AuthorStyles.Author>
      <AuthorStyles.Date>Date</AuthorStyles.Date>
    </AuthorStyles.Container>
  );
};

export default Author;
