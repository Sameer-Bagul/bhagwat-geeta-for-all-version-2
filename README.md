# Bhagavad Gita React App

This project is a React (Vite) application that displays the 18 chapters of the Bhagavad Gita. Users can view the chapters and click on any chapter to read all the verses (shlokas) of the selected chapter. The app fetches the chapter and verse data from a local JSON file, providing both Hindi and English translations and meanings of the verses.

## Features

- **Chapter Navigation**: Displays 18 chapters of the Bhagavad Gita.
- **Verse Display**: Each chapter contains all its verses with Hindi text, translations, and meanings.
- **JSON-Driven**: Data is fetched from a structured JSON file (`gita.json`), making it easy to update or modify.
- **React Router**: Navigates between the home page and chapter details using React Router.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool.
- **React Router**: Declarative routing for React.
- **CSS**: Custom styling for layout and design.

## Project Structure

```bash
gita-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ChapterCard.jsx  # Displays chapter cards
│   │   ├── ChapterPage.jsx  # Displays verses for a specific chapter
│   ├── data/
│   │   ├── gita.json        # Contains the chapter and verse data in JSON format
│   ├── App.jsx              # Main app with routing logic
│   ├── main.jsx             # Entry point of the React app
│   ├── index.css            # Global CSS for the app
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sameer-Bagul/gita-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd gita-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the App

To start the development server, run:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000).

### Build for Production

To create a production build, run:

```bash
npm run build
```

The optimized output will be created in the `dist` directory.

## Usage

- On the homepage, all the chapters of the Bhagavad Gita will be listed.
- Click on any chapter card to view all the verses of that chapter, along with their meanings and word translations.
  
## Customizing the Data

If you want to update the chapter or verse data, modify the `gita.json` file located in the `src/data/` directory. The JSON structure is as follows:

```json
{
  "chapters": {
     "1": {
        "chapter_number": "1",
        "name": "Arjuna Vishada Yoga",
        "name_meaning": "Arjuna's Dilemma",
        "verses_count": 47,
        "chapter_summary": "Summary of Chapter 1...",
        "verse_numbers": [...]
     },
     ...
  },
  "verses": {
     "1": {
        "1": {
          "text": "Verse text in Hindi...",
          "meaning": "Meaning in Hindi...",
          "word_meanings": "Word-by-word translation in Hindi..."
        },
        ...
     },
     ...
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests. Contributions are welcome!

---

**Note**: This project was built to deepen understanding of the Bhagavad Gita and to create a digital tool for learning. All the content is derived from freely available translations of the Bhagavad Gita.
```

