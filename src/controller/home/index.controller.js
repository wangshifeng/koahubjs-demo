export default class extends koahub.http {

    constructor() { //构造函数
        super();
    }

    index() {
        super.view('hello koahubjs');
    }
}