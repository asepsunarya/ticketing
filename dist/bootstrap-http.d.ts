export declare class Http {
    private initServer;
    private server;
    private module;
    private name;
    constructor(module: any, name: string);
    start(): (req: any, res: any) => Promise<any>;
}
