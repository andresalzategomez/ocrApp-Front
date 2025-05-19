export interface DataReponse {
    count: number;
    response: string;
    errorCode: string;
    errorDescription: string;
    apiTraceId: string;
    data: any;
}

export class CustomError {
    errorCode: string;
    errorDescription: string;
    params: any;
    constructor(errorCode: string, errorDescription: string, ...params) {
        this.params = { ...params };
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
    }
}