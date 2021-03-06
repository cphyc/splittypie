import Ember from "ember";

const {
    computed,
    get,
    Component,
} = Ember;

export default Component.extend({
    tagName: "li",
    classNames: ["user-form"],
    placeholder: computed("index", function () {
        const index = get(this, "index");

        return index === 0 ? "Your name" : "Your friend's name";
    }),

    actions: {
        delete(user) {
            this.sendAction("delete", user);
        },
    },
});
