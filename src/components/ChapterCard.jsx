import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChapterCard({ chapter, chapterId }) {
  return (
    <div className="chapter-card">
      <Link to={`/chapter/${chapterId}`}>
        <h2>{chapter.name}</h2>
        <p>{chapter.name_meaning}</p>
        <p>Verses: {chapter.verses_count}</p>
      </Link>
    </div>
  );
}
ChapterCard.propTypes = {
  chapter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    name_meaning: PropTypes.string.isRequired,
    verses_count: PropTypes.number.isRequired,
  }).isRequired,
  chapterId: PropTypes.string.isRequired,
};

export default ChapterCard;
