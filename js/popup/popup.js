const db = new worddb();
const tmp = new template();
const vue = new view(tmp);
const cnt = new controller(vue, db);

