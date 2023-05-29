export interface UserManager{
    create():User;
    delete(user:User):void;
}
export type User = {

}
export class DBUserManager implements UserManager{
    static INSTANCE:DBUserManager;
    private constructor(){
    }
    static get(){
        if(!this.INSTANCE){
            this.INSTANCE=new DBUserManager()
        }
        return this.INSTANCE;
    }
    create(): User {
        console.log('test data: Setup User Test Data via DB')
        return {}
    }
    delete(user:User): void {
        console.log('test data: Teardown User test data via DB')
    }
}
export default function get(){
    return DBUserManager.get();
}