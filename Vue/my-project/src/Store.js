const Storage_Key = "Vue_TodoItems";


export default{
    fetch(){
        console.log(window.localStorage.getItem(Storage_Key));
        return JSON.parse(window.localStorage.getItem(Storage_Key) || "[]");
    },
    save(items){
        window.localStorage.setItem(Storage_Key,JSON.stringify(items));
    }
}