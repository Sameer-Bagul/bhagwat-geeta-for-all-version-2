import ChapterCard from './ChapterCard';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Home({ gitaData }) {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div className="home-container">
      <section className="intro-section">
        <h2 className="intro-title">The Bhagavad Gita</h2>
        <p className="intro-subtitle">
          Discover the timeless wisdom that has guided countless souls.
        </p>
        <p className="intro-description">
          The Bhagavad Gita, often referred to simply as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a sacred text of the Hindu religion and is considered one of the most important spiritual classics. The Gita synthesizes Hindu ideas about dharma, theistic devotion, and the yogic paths to liberation (moksha).
        </p>

        <p className="intro-LangSelection">
          Select your preferred language for the Bhagavad Gita
        </p>
        {/* Language Switcher Section */}
        <div className="language-switcher">
          <button onClick={() => switchLanguage('hindi')}>Hindi</button>
          <button onClick={() => switchLanguage('english')}>English</button>
        </div>
      </section>



      {/* Chapters Grid Section */}
      <section className="chapters-section">

        <h2 className="chapters-title">Chapters</h2>

        <p className="chapters-description">
          Explore the chapters of the Bhagavad Gita, each offering profound wisdom and guidance. Click on a chapter to delve deeper into its teachings and significance.
        </p>

        <div className="chapters-grid">
          {Object.keys(gitaData.chapters).map((key) => (
            <ChapterCard key={key} chapter={gitaData.chapters[key]} chapterId={key} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-description">
          This website is dedicated to providing a comprehensive understanding of the Bhagavad Gita. Our goal is to offer insights and interpretations that resonate with readers from all walks of life.
        </p>
      </footer>
    </div>
  );
}

Home.propTypes = {
  gitaData: PropTypes.shape({
    chapters: PropTypes.object.isRequired,
  }).isRequired,
};

export default Home;
