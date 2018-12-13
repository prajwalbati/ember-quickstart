import Component from '@ember/component';

export default Component.extend({
    actions: {
        showPerson(person) {
          alert(person);
          console.log(person);
        }
    },
    willRender() {
        console.log("At the beggining");
    },
    didRender() {
        console.log("REndered");
    }
});
