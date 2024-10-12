import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChapterPage({ gitaData }) {
  const { chapterId } = useParams();
  const chapter = gitaData.chapters[chapterId];
  const verses = gitaData.verses[chapterId];

  if (!chapter) {
    return <h2>Chapter not found!</h2>;
  }

  return (
    <div className="chapter-detail">
      <h1>{chapter.name} - {chapter.name_meaning}</h1>
      <p>{chapter.chapter_summary}</p>
      <div className="verses">
        {verses
          ? Object.values(verses).map((verse, index) => (
              <div key={index} className="verse">
                <h3>Verse {verse.verse_number}</h3>
                <p><strong>Text:</strong> {verse.text}</p>
                <p><strong>Meaning:</strong> {verse.meaning}</p>
                <p><strong>Word Meanings:</strong> {verse.word_meanings}</p>
              </div>
            ))
          : <p>No verses found for this chapter.</p>
        }
      </div>
    </div>
  );
}
ChapterPage.propTypes = {
  gitaData: PropTypes.shape({
    chapters: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string,
        name_meaning: PropTypes.string,
        chapter_summary: PropTypes.string,
      })
    ),
    verses: PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.shape({
          verse_number: PropTypes.number,
          text: PropTypes.string,
          meaning: PropTypes.string,
          word_meanings: PropTypes.string,
        })
      )
    ),
  }).isRequired,
};

export default ChapterPage;
