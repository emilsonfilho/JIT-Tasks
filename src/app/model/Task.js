class Task {
  _title;
  _description;
  _is_finished;
  _priority_id;

  constructor(title, description, is_finished = false, priority_id, due_date) {
    this._title = title;
    this._description = description;
    this._is_finished = is_finished;
    this._priority_id = priority_id;
    this._due_date = due_date;
  }

  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get is_finished() {
    return this._is_finished;
  }
  get priority_id() {
    return this._priority_id;
  }
  get due_date() {
    return this._due_date;
  }

  set title(title) {
    this._title = title;
  }
  set description(description) {
    this._description = description;
  }
  set is_finished(is_finished) {
    this._is_finished = is_finished;
  }
  set priority_id(priority_id) {
    this._priority_id = priority_id;
  }
  set due_date(due_date) {
    this._due_date = due_date;
  }
}

export default Task;
