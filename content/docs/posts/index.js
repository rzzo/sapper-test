import { getDateFromPrettyDate, getPrettyDate } from '../../../src/utils/date';
import docs from './*.md';

docs.sort((a, b) => {
    const aDate = getDateFromPrettyDate(a.date);
    const bDate = getDateFromPrettyDate(b.date);

    return bDate - aDate;
  });

export default docs;
