import Ember from 'ember';

const { inject: { service }, computed } = Ember;
const { keys } = Object;

export default Ember.Controller.extend({
  cookies: service(),

  allCookies: computed(function() {
    let cookieService = this.get('cookies');
    cookieService.write('now', new Date().getTime());

    let cookies = cookieService.read();
    return keys(cookies).reduce((acc, key) => {
      let value = cookies[key];
      acc.push({ name: key, value });

      return acc;
    }, []);
  })
});
