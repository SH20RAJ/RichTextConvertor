# Rich Text Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/rich-text-converter.svg)](https://www.npmjs.com/package/rich-text-converter)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FRichTextConvertor&labelColor=%23ff8a65&countColor=%23d9e3f0&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FRichTextConvertor)

A JavaScript library to convert normal text into rich text with support for hashtags, mentions, bold, and underline.

## Installation

### Using npm

You can install this package via npm:

```bash
npm install rich-text-converter
```

### CDN Integration

You can also use the library directly from a CDN:

```html
<!-- Include RichTextConvertor.js from jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/RichTextConvertor/RichTextConvertor.js"></script>
```

## Usage

```javascript
// Create a new instance of RichTextConverter
const converter = new RichTextConverter();

// Example usage
const inputText = "Check out #trending topics and mention @user in this **cool** __text__!";
const richText = converter.convert(inputText);

console.log(richText);
```

## Configuration

You can customize the conversion by providing your own configurations for hashtags, mentions, bold, and underline styles:

```javascript
const config = {
  hashtags: {
    url: 'https://example.com/hashtag/$1',
  },
  mentions: {
    url: 'https://example.com/user/$1',
  },
  bold: {
    replace: '<strong>$1</strong>',
  },
  underline: {
    replace: '<u>$1</u>',
  },
};

const converter = new RichTextConverter(config);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License
```

## Badges

- [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
- [![npm version](https://badge.fury.io/js/rich-text-converter.svg)](https://www.npmjs.com/package/rich-text-converter)
- ![visitors](https://visitor-badge.glitch.me/badge?page_id=SH20RAJ.RichTextConvertor)

## Credits

This library is created and maintained by [SH20RAJ](https://github.com/SH20RAJ).

If you find any issues or have suggestions, feel free to open an [issue](https://github.com/SH20RAJ/RichTextConvertor/issues) or contribute by submitting a [pull request](https://github.com/SH20RAJ/RichTextConvertor/pulls).
