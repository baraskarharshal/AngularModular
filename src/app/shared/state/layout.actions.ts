export class ShowSidenav {
    static readonly type = '[Layout] Show Sidenav';
    constructor(public factory: any, public param: { name, value } = null) { }
}

export class CloseSidenav {
    static readonly type = '[Layout] Close Sidenav';
    constructor() { }
}
