import { PaginatedClass } from '../../../utils/pagination/paginated.dto';
import { Post } from '../entities/post.entity';

export class ReturnPostDto extends PaginatedClass(Post) {}
