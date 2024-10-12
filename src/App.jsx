import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChapterCard from './components/ChapterCard';
import ChapterPage from './components/ChapterPage';
import { LanguageContext } from './contexts/LanguageContext';

function App() {
  const { language } = useContext(LanguageContext);
  const [gitaData, setGitaData] = useState(null);

  useEffect(() => {
    // Dynamically load the correct language file
    import(`./data/gita-${language}.json`)
      .then((data) => setGitaData(data.default))
      .catch((error) => console.error('Error loading JSON data:', error));
  }, [language]); // Rerun this effect when language changes

  if (!gitaData) return <p>Loading...</p>;

  return (
    <Router>
      <div className="language-switcher">
        <LanguageSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<Home gitaData={gitaData} />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage gitaData={gitaData} />} />
      </Routes>
    </Router>
  );
}

function Home({ gitaData }) {
  return (
    <div className="chapter-list">
      <h1>Bhagavad Gita - Chapters</h1>
      <div className="chapters">
        {Object.keys(gitaData.chapters).map((key) => (
          <ChapterCard key={key} chapter={gitaData.chapters[key]} chapterId={key} />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  gitaData: PropTypes.shape({
    chapters: PropTypes.object.isRequired,
  }).isRequired,
};

function LanguageSwitcher() {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => switchLanguage('hindi')}>Hindi</button>
      <button onClick={() => switchLanguage('english')}>English</button>
    </div>
  );
}

export default App;
