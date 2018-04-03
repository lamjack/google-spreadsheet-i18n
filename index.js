/**
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @Author: jack <jack@wizmacau.com>
 * @copyright WIZ TECHNOLOGY
 * @link https://wizmacau.com
 * @link https://github.com/lamjack
 * @version
 **/

var helper = require('./helper');

module.exports = function(options) {
    return helper.spreadsheetToJson(options);
};
