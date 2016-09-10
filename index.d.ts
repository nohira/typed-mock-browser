declare var mockBrowser : MockBrowserWrapper;

declare module 'mock-browser' {
    export = mockBrowser;
}

interface MockBrowserWrapper {
    delegates : DelegatesWrapper;
    mocks : MocksWrapper;
}

interface MocksWrapper {
    MockBrowser : MockBrowser;
    MockStorage : MockStorage;
}

interface DelegatesWrapper {
    AbstractBrowser : AbstractBrowser;
}

interface AbstractBrowser {
    new (options : Options) : AbstractBrowser;
    extend(child : any, options : Options) : AbstractBrowser;
    getDocument() : Document;
    getWindow() : Window;
    getHistory() : History;
    getLocation() : Location;
    getLocalStorage() : WindowLocalStorage;
    getSessionStorage() : WindowSessionStorage;
    getNavigator() : Navigator;
}

interface Options {
    window? : Window;
    localStorage? : WindowLocalStorage;
    sessionStorage? : WindowSessionStorage;
}

interface MockBrowser extends AbstractBrowser {
    new (options) : MockBrowser;
    createDocument() : Document;
    createWindow() : Window;
}

interface MockStorage {
    new (data : any) : MockStorage;
    key(index : number) : any;
    setItem(key : string, value : any) : void;
    getItem(key : string) : any;
    removeItem(key : string) : void;
    clear() : void;
    length : number;
}