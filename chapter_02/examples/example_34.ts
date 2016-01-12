function LogOutput(target: Function, key: string, descriptor: any) {
    var originalMethod = descriptor.value;
    var newMethod = function(...args: any[]): any {
        var result: any = originalMethod.apply(this, args);
        if (!this.loggedOutput) {
            this.loggedOutput = new Array<any>();
        }
        this.loggedOutput.push({
            method: key,
            parameters: args,
            output: result,
            timestamp: new Date()
        });
        return result;
    };

    descriptor.value = newMethod;
}
