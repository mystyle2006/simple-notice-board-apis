import { GetPaginatedDto } from '../../../utils/dto/get-paginated.dto';

export class GetPaginatedPostDto extends GetPaginatedDto {
  keyword: string;
}
