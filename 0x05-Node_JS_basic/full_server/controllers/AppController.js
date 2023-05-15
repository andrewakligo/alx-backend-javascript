/**
 * Contains the miscellaneous route handlers.
 * @author Andrew Akligo <https://github.com/andrewakligo>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
