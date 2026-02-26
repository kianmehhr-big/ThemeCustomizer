chrome.storage.sync.get(
  ["headerColor", "footerColor", "sectionColor", "articleColor", "textColor", "linkColor"],
  (colors) => {
    const hasCustomColors = Object.values(colors).some(color => color);
    if (!hasCustomColors) return;
    const appliedColors = {
      header: colors.headerColor || "#1E90FF",
      footer: colors.footerColor || "#555555",
      section: colors.sectionColor || "#F0F0F0",
      article: colors.articleColor || "#FFFFFF",
      text: colors.textColor || "#000000",
      link: colors.linkColor || "#FF4500"
    };
    const style = document.createElement("style");
    style.textContent = `
      header, .header, .top-bar, #header { background-color: ${appliedColors.header} !important; color: ${appliedColors.text} !important; }
      footer, .footer, .bottom, #footer { background-color: ${appliedColors.footer} !important; color: ${appliedColors.text} !important; }
      section, .section { background-color: ${appliedColors.section} !important; color: ${appliedColors.text} !important; }
      article, .article, .news-detail, .content { background-color: ${appliedColors.article} !important; color: ${appliedColors.text} !important; }
      body, div, p, span, a, li, h1, h2, h3, h4, h5, h6, strong, em, article, section, header, footer {
        color: ${appliedColors.text} !important;
      }
      a { color: ${appliedColors.link} !important; }
    `;
    document.head.appendChild(style);
  }
);