import React from "react";

interface Props {
  letter: string[];
}

const Text = ({ letter }: Props) => {
  const [text, setText] = React.useState("");
  const [nowLetter, setNowLetter] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typeSpeed, setTypeSpeed] = React.useState(300);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (isDeleting) {
        setTypeSpeed(300);
        setText(letter[nowLetter].substring(0, text.length - 1));
      } else {
        setTypeSpeed(100);
        setText(letter[nowLetter].substring(0, text.length + 1));
      }

      if (text.length === 0 && isDeleting) {
        setIsDeleting(false);
        setNowLetter((nowLetter + 1) % letter.length);
      }

      if (text.length === letter[nowLetter].length) {
        setTypeSpeed(1000);
        setIsDeleting(true);
      }
    }, typeSpeed);
    return () => clearTimeout(interval);
  });
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Text;
