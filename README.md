# React-BAN-Autocomplete 📍

Elevate your React applications with react-ban-autocomplete, a sleek and efficient address input component. This package is crafted to enhance user interaction through streamlined address searching and selection.

## Features ✨

*  *Efficient Address Lookup:* Utilizes `api-adresse.data.gouv.fr` to fetch address suggestions swiftly and accurately.
* *Flexible and Easy to Integrate:* Designed to fit effortlessly into your existing React projects.
* *Customizable UI:* Tailor the appearance to match your app's styling and theme.
* *Responsive Design:* Ensures a seamless user experience across various devices.

## Installation 🔧

Install the package using npm:

```bash
npm install react-ban-autocomplete
```

Or using yarn:

```bash
yarn add react-ban-autocomplete
```

## Usage 🚀

Here's a quick guide to get you started:

```jsx
import React from 'react';
import AutocompleteBan from 'react-ban-autocomplete';

const App = () => {
  return <AutocompleteBan maxResults={5} />;
};

export default App;
```

## Props and Configuration 🛠️

* *maxResults:* (Optional) Max number of address suggestions to display.
* *minCharacters:* (Optional) Minimum characters to start search.


## Contributing 🤝

Contributions are welcome! If you're looking to contribute, please follow our contributing guidelines.

## License 📜

react-ban-autocomplete is MIT licensed. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments 🙏

A special thanks to Thibaut Gery for the inspiration provided by the [ban-autocomplete-react project](https://github.com/ThibautGery/ban-autocomplete-react).
