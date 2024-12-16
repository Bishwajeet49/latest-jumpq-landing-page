import React from "react";

export default function Button(props: { Element: string; label: string; type?: string; emphasis: string; to?: string; ui: string }) {
  const { Element, label, type, emphasis, to, ui } = props;

  const spanElement = React.createElement("span", {
    className: (emphasis === "primary" ? "text-white" : "text-primary dark:text-white") + ' span',
    children: label,
  });

  return React.createElement(Element, {
    href: to,
    className: ui +
        (emphasis === "primary"
            ? " before:bg-primary"
            : " before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800"),
    type: type,
    children: spanElement
  });
}
