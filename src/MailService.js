export default class MailService {
  messages = [{id: 0, text: `Hej på la!`}, {id: 1, text: `Jävla tomte`}, {id: 2, text: `Blääääää!`}];

  update(id, text) {
    this.messages = this.messages.map(m => (m.id === id ? {id, text} : m));
    console.log(this.messages);
  }
}
