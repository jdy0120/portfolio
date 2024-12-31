function createSlug(text: string) {
  // 1. 한글을 소문자로 변환 (URL에서는 대소문자를 구분하지 않지만, 일반적으로 소문자를 사용)
  let slug = text.toLowerCase();

  // 2. 특수문자 제거 (한글, 영어 알파벳, 숫자, 공백, 하이픈만 허용)
  slug = slug.replace(/[^가-힣a-z0-9\s-]/g, "");

  // 3. 공백을 하이픈으로 변경
  slug = slug.replace(/\s+/g, "-");

  // 4. 연속된 하이픈을 하나로 변경
  slug = slug.replace(/--+/g, "-");

  // 5. 하이픈이 앞이나 뒤에 있으면 제거
  slug = slug.replace(/^-+/, "").replace(/-+$/, "");

  return slug;
}

export default createSlug;
