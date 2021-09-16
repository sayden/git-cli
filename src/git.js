/**
 * Created by Mario Castro (mariocaster@gmail.com) on 4/18/15.
 * Updated by Fabio Costa on 9/15/2021.
 */

var execPromise = require('./execPromise');
var prepareCommandOptions = require('./prepareCommandOptions');

/**
 * @module Git
 * @param {object} options
 * @param {string} options.workingDirectory - Working path to set git to work in
 * @param {string} options.dryRun - Do not run command, only logs them
 * @param {string} options.logging - Logs all commands
 * @param {string} options.forceExit - Forces the app to exit when an error occurs
 */
function Git(options) {
    options = options || {};

    this.workingDirectory = options.workingDirectory || '.';
    this.dryRun = options.dryRun || false;
    this.logging = options.logging || false;
    this.forceExit = options.forceExit || false;
    
    this.options = {
        workingDirectory: this.workingDirectory,
        dryRun: this.dryRun,
        logging: this.logging,
        forceExit: this.forceExit
    };
}

/**
 * Executes 'git add '
 * @method add
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.add = function (commandOptions, execOptions, options) {
    return execPromise('git add ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git bisect '
 * @method bisect
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.bisect = function (commandOptions, execOptions, options) {
    return execPromise('git bisect ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git branch '
 * @method branch
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.branch = function (commandOptions, execOptions, options) {
    return execPromise('git branch ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git checkout '
 * @method checkout
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.checkout = function (commandOptions, execOptions, options) {
    return execPromise('git checkout ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git clean '
 * @method clean
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.clean = function (commandOptions, execOptions, options) {
    return execPromise('git clean ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git clone '
 * @method clone
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.clone = function (commandOptions, execOptions, options) {
    return execPromise('git clone ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git commit '
 * @method commit
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.commit = function (commandOptions, execOptions, options) {
    return execPromise('git commit ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git config '
 * @method config
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.config = function (commandOptions, execOptions, options) {
    return execPromise('git config ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git diff '
 * @method diff
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.diff = function (commandOptions, execOptions, options) {
    return execPromise('git diff ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git fetch '
 * @method fetch
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.fetch = function (commandOptions, execOptions, options) {
    return execPromise('git fetch ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git grep '
 * @method grep
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.grep = function (commandOptions, execOptions, options) {
    return execPromise('git grep ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git init '
 * @method init
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.init = function (commandOptions, execOptions, options) {
    return execPromise('git init ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git log '
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.log = function (commandOptions, execOptions, options) {
    return execPromise('git log ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git merge '
 * @method merge
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.merge = function (commandOptions, execOptions, options) {
    return execPromise('git merge ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git mv '
 * @method mv
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.mv = function (commandOptions, execOptions, options) {
    return execPromise('git mv ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git pull'
 * @method pull
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.pull = function (commandOptions, execOptions, options) {
    return execPromise('git pull ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'hub pull-request '
 * @method pullRequest
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.pullRequest = function (commandOptions, execOptions, options) {
    return execPromise('hub pull-request ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git push '
 * @method push
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.push = function (commandOptions, execOptions, options) {
    return execPromise('git push ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git rebase '
 * @method rebase
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.rebase = function (commandOptions, execOptions, options) {
    return execPromise('git rebase ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git remote '
 * @method remote
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.remote = function (commandOptions, execOptions, options) {
    return execPromise('git remote ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git reset '
 * @method reset
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.reset = function (commandOptions, execOptions, options) {
    return execPromise('git reset ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git rm '
 * @method rm
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.rm = function (commandOptions, execOptions, options) {
    return execPromise('git rm ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git show '
 * @method show
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.show = function (commandOptions, execOptions, options) {
    return execPromise('git show ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git status '
 * @method status
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.status = function (commandOptions, execOptions, options) {
    return execPromise('git status ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes 'git tag '
 * @method tag
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.tag = function (commandOptions, execOptions, options) {
    return execPromise('git tag ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

/**
 * Executes a method over git directly. Like 'git [commandOptions]'
 * @method git
 * @param {string} [commandOptions]
 * @param {object} [execOptions]
 * @returns {promise<object>}
 */
Git.prototype.git = function(commandOptions, execOptions, options) {
    return execPromise('git ' + prepareCommandOptions(commandOptions), execOptions, options || this.options);
};

module.exports = Git;