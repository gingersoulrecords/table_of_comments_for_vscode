// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "table-of-comments" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('table-of-comments.readEditorContent', function () {
        // The code you place here will be executed every time your command is executed

        // Check if there is an active text editor
        if (vscode.window.activeTextEditor) {
            // Get the document associated with the editor
            let document = vscode.window.activeTextEditor.document;

            // Get the text from the document
            let text = document.getText();

            // Log the text to the console
            console.log(text);
        }

        vscode.window.showInformationMessage('Hello World from Table of 2!');
    });

    context.subscriptions.push(disposable);


    //LOG EDITOR COMMENTS

    let logCommentsDisposable = vscode.commands.registerCommand('table-of-comments.logEditorComments', function () {
        // Check if there is an active text editor
        if (vscode.window.activeTextEditor) {
            // Get the document associated with the editor
            let document = vscode.window.activeTextEditor.document;

            // Get the text from the document
            let text = document.getText();

            // Match all CSS comments
            let comments = text.match(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g);

            // Log each comment to the console
            if (comments) {
                comments.forEach(comment => console.log(comment));
            }
        }
    });

    context.subscriptions.push(logCommentsDisposable);


}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
}
