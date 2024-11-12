import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.locale('zh-cn');
dayjs.extend(isBetween);

export default dayjs;
