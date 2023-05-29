import GlobalDataManager from './testdata/GlobalDataManager'
before(()=>{
    GlobalDataManager().setup();
})
after(()=>{
    GlobalDataManager().teardown();
})