class RichTextConverter {
  constructor(config = {}) {
    // Default configurations
    this.config = {
      hashtags: {
        pattern: /#(\w+)/g,
        url: 'https://example.com/tags/$1',
      },
      mentions: {
        pattern: /@(\w+)/g,
        url: 'https://example.com/profiles/$1',
      },
      bold: {
        pattern: /\*\*(.*?)\*\*/g,
        replace: '<strong>$1</strong>',
      },
      underline: {
        pattern: /__(.*?)__/g,
        replace: '<u>$1</u>',
      },
      ...config, // Merge with user provided configurations
    };
  }

  convert(text) {
    let convertedText = text;

    // Convert hashtags to links
    if (this.config.hashtags && this.config.hashtags.pattern) {
      const { pattern, url } = this.config.hashtags;
      convertedText = convertedText.replace(pattern, `<a href="${url}">#$1</a>`);
    }

    // Convert mentions to links
    if (this.config.mentions && this.config.mentions.pattern) {
      const { pattern, url } = this.config.mentions;
      convertedText = convertedText.replace(pattern, `<a href="${url}">@$1</a>`);
    }

    // Apply other Markdown styles
    if (this.config.bold && this.config.bold.pattern) {
      const { pattern, replace } = this.config.bold;
      convertedText = convertedText.replace(pattern, replace);
    }

    if (this.config.underline && this.config.underline.pattern) {
      const { pattern, replace } = this.config.underline;
      convertedText = convertedText.replace(pattern, replace);
    }

    return convertedText;
  }
}

// Export RichTextConverter for use in Node.js or CommonJS environments
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = RichTextConverter;
}

// For use in browser or with AMD style loaders like RequireJS
if (typeof define === 'function' && define.amd) {
  define('RichTextConverter', [], function () {
    return RichTextConverter;
  });
}
