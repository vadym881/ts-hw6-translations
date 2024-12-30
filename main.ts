import { AppTranslations } from "./models/app-translations";
import { Translations } from "./models/translations";

const hello = new Translations("hello");
hello.assignValue("EN", "Hello");
hello.assignValue("IT", "Salve");
hello.assignValue("DE", "Hallo");
hello.assignValue("Latin", "Ave");
console.log(hello);

const dog = new Translations("dog");
dog.assignValue("EN", "Dog");
dog.assignValue("IT", "Cane");
dog.assignValue("DE", "Hund");
console.log(dog);

const cat = new Translations("cat");
cat.assignValue("EN", "Cat");
cat.assignValue("IT", "Gatto");
cat.assignValue("DE", "Katze");
cat.assignValue("ES");
cat["ggg"] = "ggg"; // don't know how to solve this issue
console.log(cat);

const app = new AppTranslations([hello, dog, cat]);
console.log(app);
console.log(app.getTranslation("dog"));
console.log(app.getTranslation("dogg"));
