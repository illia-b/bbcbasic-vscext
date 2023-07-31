import * as vscode from 'vscode'

const tokens = [
	{ "value": "ABS", "bytes": [148] }, 
	{ "value": "ACS", "bytes": [149] }, 
	{ "value": "ADVAL", "bytes": [150] }, 
	{ "value": "AND", "bytes": [128] }, 
	{ "value": "APPEND", "bytes": [199, 142] }, 
	{ "value": "ASC", "bytes": [151] }, 
	{ "value": "ASN", "bytes": [152] }, 
	{ "value": "ATN", "bytes": [153] }, 
	{ "value": "AUTO", "bytes": [199, 143] }, 
	{ "value": "BEAT", "bytes": [198, 143] }, 
	{ "value": "BEATS", "bytes": [200, 158] }, 
	{ "value": "BGET", "bytes": [154] }, 
	{ "value": "BPUT", "bytes": [213] }, 
	{ "value": "CALL", "bytes": [214] }, 
	{ "value": "CASE", "bytes": [200, 142] }, 
	{ "value": "CHAIN", "bytes": [215] }, 
	{ "value": "CHR$", "bytes": [189] }, 
	{ "value": "CIRCLE", "bytes": [200, 143] }, 
	{ "value": "CLEAR", "bytes": [216] }, 
	{ "value": "CLG", "bytes": [218] }, 
	{ "value": "CLOSE", "bytes": [217] }, 
	{ "value": "CLS", "bytes": [219] }, 
	{ "value": "COLOR", "extraValue": "COLOUR", "bytes": [251] }, 
	{ "value": "COS", "bytes": [155] }, 
	{ "value": "COUNT", "bytes": [156] }, 
	{ "value": "CRUNCH", "bytes": [199, 144] }, 
	{ "value": "DATA", "bytes": [220] }, 
	{ "value": "DEF", "bytes": [221] }, 
	{ "value": "DEG", "bytes": [157] }, 
	{ "value": "DELETE", "bytes": [199, 145] }, 
	{ "value": "DIM", "bytes": [222] }, 
	{ "value": "DIV", "bytes": [129] }, 
	{ "value": "DRAW", "bytes": [223] }, 
	{ "value": "EDIT", "bytes": [199, 146] }, 
	{ "value": "ELLIPSE", "bytes": [200, 157] }, 
	{ "value": "ELSE", "bytes": [204], "extraBytes": [139] }, 
	{ "value": "END", "bytes": [224] }, 
	{ "value": "ENDCASE", "bytes": [203] }, 
	{ "value": "ENDIF", "bytes": [205] }, 
	{ "value": "ENDPROC", "bytes": [225] }, 
	{ "value": "ENDWHILE", "bytes": [206] }, 
	{ "value": "ENVELOPE", "bytes": [226] }, 
	{ "value": "EOF", "bytes": [197] }, 
	{ "value": "EOR", "bytes": [130] }, 
	{ "value": "ERL", "bytes": [158] }, 
	{ "value": "ERR", "bytes": [159] }, 
	{ "value": "ERROR", "bytes": [133] }, 
	{ "value": "EVAL", "bytes": [160] }, 
	{ "value": "EXP", "bytes": [161] }, 
	{ "value": "EXT", "bytes": [162] }, 
	{ "value": "FALSE", "bytes": [163] }, 
	{ "value": "FILL", "bytes": [200, 144] }, 
	{ "value": "FN", "bytes": [164] }, 
	{ "value": "FOR", "bytes": [227] }, 
	{ "value": "GCOL", "bytes": [230] }, 
	{ "value": "GET", "bytes": [165] }, 
	{ "value": "GET$", "bytes": [190] }, 
	{ "value": "GOSUB", "bytes": [228] }, 
	{ "value": "GOTO", "bytes": [229] }, 
	{ "value": "HELP", "bytes": [199, 147] }, 
	{ "value": "HIMEM", "bytes": [211], "extraBytes": [147] }, 
	{ "value": "IF", "bytes": [231] }, 
	{ "value": "INKEY", "bytes": [166] }, 
	{ "value": "INKEY$", "bytes": [191] }, 
	{ "value": "INPUT", "bytes": [232] }, 
	{ "value": "INSTALL", "bytes": [199, 159] }, 
	{ "value": "INSTR(", "bytes": [167] }, 
	{ "value": "INT", "bytes": [168] }, 
	{ "value": "LEFT$(", "bytes": [192] }, 
	{ "value": "LEN", "bytes": [169] }, 
	{ "value": "LET", "bytes": [233] }, 
	{ "value": "LIBRARY", "bytes": [200, 155] }, 
	{ "value": "LINE", "bytes": [134] }, 
	{ "value": "LIST", "bytes": [199, 148] }, 
	{ "value": "LN", "bytes": [170] }, 
	{ "value": "LOAD", "bytes": [199, 149] }, 
	{ "value": "LOCAL", "bytes": [234] }, 
	{ "value": "LOG", "bytes": [171] }, 
	{ "value": "LOMEM", "bytes": [210], "extraBytes": [146] }, 
	{ "value": "LVAR", "bytes": [199, 150] }, 
	{ "value": "MID$(", "bytes": [193] }, 
	{ "value": "MOD", "bytes": [131] }, 
	{ "value": "MODE", "bytes": [235] }, 
	{ "value": "MOUSE", "bytes": [200, 151] }, 
	{ "value": "MOVE", "bytes": [236] }, 
	{ "value": "NEW", "bytes": [199, 151] }, 
	{ "value": "NEXT", "bytes": [237] }, 
	{ "value": "NOT", "bytes": [172] }, 
	{ "value": "OF", "bytes": [202] }, 
	{ "value": "OFF", "bytes": [135] }, 
	{ "value": "OLD", "bytes": [199, 152] }, 
	{ "value": "ON", "bytes": [238] }, 
	{ "value": "OPENIN", "bytes": [142] }, 
	{ "value": "OPENOUT", "bytes": [174] }, 
	{ "value": "OPENUP", "bytes": [173] }, 
	{ "value": "OR", "bytes": [132] }, 
	{ "value": "ORIGIN", "bytes": [200, 145] }, 
	{ "value": "OSCLI", "bytes": [255] }, 
	{ "value": "OTHERWISE", "bytes": [127] }, 
	{ "value": "OVERLAY", "bytes": [200, 163] },
	{ "value": "PAGE", "bytes": [208], "extraBytes": [144] }, 
	{ "value": "PI", "bytes": [175] }, 
	{ "value": "PLOT", "bytes": [240] }, 
	{ "value": "POINT", "bytes": [200, 146] }, 
	{ "value": "POINT(", "bytes": [176] }, 
	{ "value": "POS", "bytes": [177] }, 
	{ "value": "PRINT", "bytes": [241] }, 
	{ "value": "PROC", "bytes": [242] }, 
	{ "value": "PTR", "bytes": [207], "extraBytes": [143] }, 
	{ "value": "QUIT", "bytes": [200, 152] }, 
	{ "value": "RAD", "bytes": [178] }, 
	{ "value": "READ", "bytes": [243] }, 
	{ "value": "RECTANGLE", "bytes": [200, 147] }, 
	{ "value": "REM", "bytes": [244] }, 
	{ "value": "RENUMBER", "bytes": [199, 153] }, 
	{ "value": "REPEAT", "bytes": [245] }, 
	{ "value": "REPORT", "bytes": [246] }, 
	{ "value": "RESTORE", "bytes": [247] }, 
	{ "value": "RETURN", "bytes": [248] }, 
	{ "value": "RIGHT$(", "bytes": [194] }, 
	{ "value": "RND", "bytes": [179] }, 
	{ "value": "RUN", "bytes": [249] }, 
	{ "value": "SAVE", "bytes": [199, 154] }, 
	{ "value": "SGN", "bytes": [180] }, 
	{ "value": "SIN", "bytes": [181] }, 
	{ "value": "SOUND", "bytes": [212] }, 
	{ "value": "SPC", "bytes": [137] }, 
	{ "value": "SQR", "bytes": [182] }, 
	{ "value": "STEP", "bytes": [136] }, 
	{ "value": "STEREO", "bytes": [200, 162] }, 
	{ "value": "STOP", "bytes": [250] }, 
	{ "value": "STR$", "bytes": [195] }, 
	{ "value": "STRING$", "bytes": [196] }, 
	{ "value": "SUM", "bytes": [198, 142] }, 
	{ "value": "SWAP", "bytes": [200, 148] }, 
	{ "value": "SYS", "bytes": [200, 153] },
	{ "value": "TAB(", "bytes": [138] }, 
	{ "value": "TAN", "bytes": [183] }, 
	{ "value": "TEMPO", "bytes": [200, 159] }, 
	{ "value": "TEXTLOAD", "bytes": [199, 155] }, 
	{ "value": "TEXTSAVE", "bytes": [199, 156] }, 
	{ "value": "THEN", "bytes": [140] }, 
	{ "value": "TIME", "bytes": [209], "extraBytes": [145] }, 
	{ "value": "TINT", "bytes": [200, 156] }, 
	{ "value": "TO", "bytes": [184] }, 
	{ "value": "TRACE", "bytes": [252] }, 
	{ "value": "TRUE", "bytes": [185] }, 
	{ "value": "TWIN", "bytes": [199, 157] }, 
	{ "value": "TWINO", "bytes": [199, 158] }, 
	{ "value": "UNTIL", "bytes": [253] }, 
	{ "value": "USR", "bytes": [186] }, 
	{ "value": "VAL", "bytes": [187] }, 
	{ "value": "VDU", "bytes": [239] }, 
	{ "value": "VOICE", "bytes": [200, 161] }, 
	{ "value": "VOICES", "bytes": [200, 160] }, 
	{ "value": "VPOS", "bytes": [188] }, 
	{ "value": "WAIT", "bytes": [200, 150] }, 
	{ "value": "WHEN", "bytes": [201] }, 
	{ "value": "WHILE", "bytes": [200, 149] }, 
	{ "value": "WIDTH", "bytes": [254] }	
]

const byteCodeToToken: string[] = []
const tokenCharsToBytes: any = {}
const tokenSizes: number[] = []

async function saveToBasic(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, args: any[]) {
	if (!checkFileExists(textEditor.document)) {
		return
	}

	let lineCount = textEditor.document.lineCount
	let binaryData = new Uint8Array(0)
	let bytes = new Uint8Array(255)
	let bufferSize = 0;
	for (let i = 0; i < lineCount; i++) {
		let line = textEditor.document.lineAt(i)
		let text = line.text
		let len = tokenizeLine(text, i + 1, bytes, 0)
		// append a range to the binaryData array
		// TODO
		binaryData = resize(binaryData, bufferSize + len)
		let subarray = bytes.subarray(0, len)
		binaryData.set(subarray, bufferSize)
		bufferSize += len
	}

	binaryData = resize(binaryData, bufferSize + 2)
	binaryData[bufferSize] = 0x0d
	binaryData[bufferSize + 1] = 0xff
	
	let binaryUri = getBinaryUri(textEditor.document.uri)
	await vscode.workspace.fs.writeFile(binaryUri, binaryData)
	vscode.window.showInformationMessage('Saved!')
}

function resize(array: Uint8Array, newSize: number) : Uint8Array {
	let newArray = new Uint8Array(newSize)
	newArray.set(array)
	return newArray
}

async function loadFromBasic(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, args: any[]) {
	if (!checkFileExists(textEditor.document)) {
		return
	}

	let binaryUri = getBinaryUri(textEditor.document.uri)
	let data = await vscode.workspace.fs.readFile(binaryUri)
	let lines = readLines(data)
	textEditor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, textEditor.document.lineCount, 0), lines.join('\n'))
		vscode.window.showInformationMessage('Loaded!')
	})
}

async function createFromBasic(binaryUri: vscode.Uri) {
	if (binaryUri.scheme !== 'file') {
		vscode.window.showErrorMessage('Can only open file that is saved on disk!')
		return
	}

	let data = await vscode.workspace.fs.readFile(binaryUri)
	let lines = readLines(data)
	let textUri = getTextUri(binaryUri)
	await vscode.workspace.fs.writeFile(textUri, Buffer.from(lines.join('\n')))
	vscode.commands.executeCommand('vscode.open', textUri)
}

function readLines(data: Uint8Array): string[] {
	let lines = []
	let cursor = 0
	let lineNumber = 0
	let lineLength = 0
	let line
	let byte
	while (cursor < data.length) {
		// read line marker
		byte = data[cursor++]
		if (data[cursor] === 0xff) {
			// end of file
			break;
		}
		lineNumber = data[cursor++] * 256 + data[cursor++]
		lineLength = data[cursor++] - 4

		lines.push(detokenizeLine(data, cursor, lineLength))
		line = lines[lines.length - 1]
		cursor += lineLength
	}
	return lines
}

function tokenizeLine(line: string, lineNumber: number, target: Uint8Array, offset: number): number {
	let lineCursor = 0
	let targetCursor = offset + 4
	let len = line.length
	let table = tokenCharsToBytes
	let bytes: number[] = []
	let nextChar
	while (lineCursor < len) {
		nextChar = line.charAt(lineCursor++)
		bytes.push(nextChar.charCodeAt(0))

		if (table[nextChar]) {
			table = table[nextChar]
			if(table['bytes']) {
				// found a token
				bytes = [...table['bytes']]
			}
		} else {
			for (let byte of bytes) {
				target[targetCursor++] = byte
			}
			table = tokenCharsToBytes
			bytes.length = 0
		}
	}
	for (let byte of bytes) {
		target[targetCursor++] = byte
	}

	target[offset] = 0x0D
	target[offset + 1] = lineNumber / 256
	target[offset + 2] = lineNumber % 256
	target[offset + 3] = targetCursor - offset
	return target[offset + 3]
}

function detokenizeLine(line: Uint8Array, offset: number, len: number): string {
	let out = ''
	let cursor = 0;
	while (cursor < len) {
		let tokenIndex = bytesToIndex(line, offset + cursor)
		if (tokenIndex >= 0) {
			let token = byteCodeToToken[tokenIndex]
			out += token
			cursor+= tokenSizes[tokenIndex]
		} else {
			out += String.fromCharCode(line[offset + cursor])
			cursor++
		}
	}
	return out
}

function assert(condition: boolean) {
	if (!condition) {
		throw new Error('File format error')
	}
}

function getBinaryUri(textUri: vscode.Uri) {
	let path = textUri.path.substring(0, textUri.path.lastIndexOf('.'))
	let binaryPath = path + ',ffb'
	return vscode.Uri.file(binaryPath)
}

function getTextUri(binaryUri: vscode.Uri) {
	let path = binaryUri.path.substring(0, binaryUri.path.lastIndexOf(','))
	let textPath = path + '.bbc'
	return vscode.Uri.file(textPath)
}

function checkFileExists(document: vscode.TextDocument): boolean {
	if (document.isUntitled) {
		vscode.window.showInformationMessage('Please save the file first!')
		return false
	}
	if (document.uri.scheme !== 'file') {
		vscode.window.showInformationMessage('File must be saved to disk!')
		return false
	}
	return true
}

function bytesToIndex(bytes: ArrayLike<number>, offset: number = 0): number {
	if (bytes[offset] < 0x7f) return -1
	let index = bytes[offset] - 0x7f
	if (index == 0x47) index = bytes[offset + 1] - 0x8e + 129
	if (index == 0x48) index = bytes[offset + 1] - 0x8e + 131
	if (index == 0x49) index = bytes[offset + 1] - 0x8e + 149
	return index
}

function prepareConversionTables() {
	for (let token of tokens) {

		// Bytes to token conversion table
		// using clever packing of one or multiple bytes into a single index
		byteCodeToToken[bytesToIndex(token.bytes)] = token.value
		tokenSizes[bytesToIndex(token.bytes)] = token.bytes.length
		if (token.extraBytes) {
			byteCodeToToken[bytesToIndex(token.extraBytes)] = token.value
			tokenSizes[bytesToIndex(token.extraBytes)] = token.extraBytes.length
		}
		// Token to bytes conversion table
		addTokenToTree(token.value, token.bytes)
		if (token.extraValue) addTokenToTree(token.extraValue, token.bytes)
	}
}

// Add token to bytes conversion table
// using a tree structure to store the token characters
function addTokenToTree(token: string, bytes: number[]) {
	let parent: {[key:string]: any} = tokenCharsToBytes
	for (let i = 0; i < token.length; i++) {
		if (parent[token.charAt(i)] === undefined) {
			parent[token.charAt(i)] = {}
		}
		parent = parent[token.charAt(i)]
	}
	parent['bytes'] = [...bytes]
}

export function activate(context: vscode.ExtensionContext) {
	prepareConversionTables()

	context.subscriptions.push(vscode.commands.registerTextEditorCommand('bbcbasic.save', saveToBasic))

	context.subscriptions.push(vscode.commands.registerTextEditorCommand('bbcbasic.load', loadFromBasic))

	context.subscriptions.push(vscode.commands.registerCommand('bbcbasic.open', createFromBasic))
}

export function deactivate() { }
