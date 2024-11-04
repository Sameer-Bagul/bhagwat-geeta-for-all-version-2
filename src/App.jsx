import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import ChapterPage from './components/ChapterPage';
import { LanguageContext } from './contexts/LanguageContext';
import './App.css'; // Import a CSS file for styling

function App() {
  const { language } = useContext(LanguageContext);
  const [gitaData, setGitaData] = useState(null);

  useEffect(() => {
    import(`./data/gita-${language}.json`)
      .then((data) => setGitaData(data.default))
      .catch((error) => console.error('Error loading JSON data:', error));
  }, [language]);

  if (!gitaData) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home gitaData={gitaData} />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage gitaData={gitaData} />} />
      </Routes>
    </Router>
  );
}

export default App;
