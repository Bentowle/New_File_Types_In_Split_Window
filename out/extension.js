"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let disposableArduino = vscode.commands.registerCommand('extension.newArduinoFile', function () {
        vscode.workspace.openTextDocument({ content: '', language: 'cpp' }).then((doc) => {
            vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        });
    });
    let disposablePython = vscode.commands.registerCommand('extension.newPythonFile', function () {
        vscode.workspace.openTextDocument({ content: '', language: 'python' }).then((doc) => {
            vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        });
    });
    let disposableHtml = vscode.commands.registerCommand('extension.newHtmlFile', function () {
        vscode.workspace.openTextDocument({ content: '', language: 'html' }).then((doc) => {
            vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        });
    });
    context.subscriptions.push(disposableArduino, disposablePython, disposableHtml);
}
function deactivate() { }
module.exports = {
    activate,
    deactivate
};
//# sourceMappingURL=extension.js.map