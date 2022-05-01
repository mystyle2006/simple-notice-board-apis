import { GetKeywordAlarmFindGroupByWriterDto } from '../dto/get-keyword-alarm-find-group-by-writer.dto';

export const sendAlarmLogic = ({
  writer,
  compareString,
  keywords,
  message,
}: GetKeywordAlarmFindGroupByWriterDto): void => {
  const keywordList = keywords.split(',');
  const isMatched = keywordList.find((keyword) =>
    `${compareString}`.includes(keyword),
  );

  if (isMatched) {
    console.info(message);
  }
};
