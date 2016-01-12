interface IException {
    message: string;
    id?: number;
}

interface IExceptionArrayItem {
    [index: number]: IException;
}

interface IErrorHandler {
    exceptions: IExceptionArrayItem[];
    logException(message: string, id?: number): void;
}

interface IExceptionHandlerSettings {
    logAllExceptions: boolean;
}

class ErrorHandler implements IErrorHandler {
    exceptions: IExceptionArrayItem[];
    logAllExceptions: boolean;

    constructor(settings: IExceptionHandlerSettings) {
        this.logAllExceptions = settings.logAllExceptions;
    }

    logException(message: string, id?: number): void {
        this.exceptions.push({ message, id });
    }
}
