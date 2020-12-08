import '../styles/index.scss';
import ToDoModel from './MVC/model.js';
import ToDoView from './MVC/view.js';
import ToDoController from './MVC/controller';


const model = new ToDoModel();
const view = new ToDoView(model, document.getElementById('ToDo'));
const controller = new ToDoController(model, view);
