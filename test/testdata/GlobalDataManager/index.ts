export interface GlobalDataManager{
    setup():void;
    teardown():void;
}
export class DBGlobalDataManager implements GlobalDataManager{
    static INSTANCE:DBGlobalDataManager;
    private constructor(){
    }
    static get(){
        if(!this.INSTANCE){
            this.INSTANCE=new DBGlobalDataManager()
        }
        return this.INSTANCE;
    }
    setup(): void {
        console.log('test data: Setup Global test data via DB')
    }
    teardown(): void {
        console.log('test data: Teardown Global test data via DB')
    }
}
export default function get(){
    return DBGlobalDataManager.get();
}