


export class SearchPostDto {

    title?: string;
    limit?: number;
    take?:  10;
    body?: string;
    views?: 'DESC' | 'ASC';
    tag?: string;
}
