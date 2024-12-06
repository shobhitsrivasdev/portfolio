import React, { useState, useEffect } from "react";

const TypeWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText === currentWord) {
            setIsDeleting(true);
            setTimeout(() => {}, 2000);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return <span className="text-blue-600">{currentText}|</span>;
};

export default TypeWriter;
