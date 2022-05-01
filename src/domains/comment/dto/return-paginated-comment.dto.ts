import { PaginatedClass } from '../../../utils/pagination/paginated.dto';
import { Comment } from '../entities/comment.entity';

export class ReturnPaginatedCommentDto extends PaginatedClass(Comment) {}
