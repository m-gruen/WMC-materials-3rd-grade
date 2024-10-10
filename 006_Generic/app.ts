import { ArrayList, IList } from "./list";

type Flora = {
    a: boolean,
    b: string[]
};

const list: ArrayList<string> = new ArrayList();
list.add("Fifa");
list.add("Hobby Horsing");

const list2: IList<number> = new ArrayList();
list2.add(1);
list2.add(2);

const list3: ArrayList<Flora> = new ArrayList();
list3.add({ 
    a: true, 
    b: ["aaa", "bbb"] 
});

const list4: ArrayList<{ a: boolean, b: string[] }> = new ArrayList();
list4.add({ 
    a: false, 
    b: ["yyy", "zzz"] 
});


console.log(list.getAtIndex(0));
console.log(list.getAtIndex(1));
console.log(list.getAtIndex(2));

