export interface ResponseError {
    type: string;
    message: string;
}
export interface Paginable<T> {
    data: T[];
    total: number;
    prev?: string;
    next?: string;
    error?: ResponseError;
}
