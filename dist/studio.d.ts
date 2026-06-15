type StudioOptions = {
    dir: string;
};
export declare function createStudioHandler(options: StudioOptions): (request: Request, context: {
    params: Promise<{
        path?: string[];
    }>;
}) => Promise<Response>;
export {};
