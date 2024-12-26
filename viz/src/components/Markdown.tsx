import { FC } from "react";
import MarkdownToJSX from "markdown-to-jsx";

interface MarkdownProps {
  children: string;
}

const Markdown: FC<MarkdownProps> = ({ children }) => {
  return (
    <span className="markdown-content">
      <MarkdownToJSX
        options={{
          overrides: {
            a: {
              props: {
                className: "underline",
                target: "_blank",
                rel: "noopener noreferrer",
              },
            },
            p: {
              props: {
                className: "mb-2",
              },
            },
          },
        }}
      >
        {children}
      </MarkdownToJSX>
    </span>
  );
};

export default Markdown;
