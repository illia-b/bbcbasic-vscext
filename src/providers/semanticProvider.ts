import * as vscode from 'vscode';

const legend = new vscode.SemanticTokensLegend(
    ['parameter', 'variable', 'function', 'comment', 'string', 'number', 'keyword', 'operator'],
    ['declaration', 'defaultLibrary', 'system']
)

const provider: vscode.DocumentSemanticTokensProvider = {
    provideDocumentSemanticTokens(
        document: vscode.TextDocument,
    ): vscode.ProviderResult<vscode.SemanticTokens> {
        const tokensBuilder = new vscode.SemanticTokensBuilder();
        return tokensBuilder.build();
    }
};

const selector = { language: 'bbcbasic', scheme: 'file' };

vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);