var RIG = function() {
	
	this.chars = {
		0x0: "ɵ",
		0x1: "א",
		0x2: "ב",
		0x3: "ג",
		0x4: "ד",
		0x5: "ה",
		0x6: "ו",
		0x7: "ז",
		0x8: "ח",
		0x9: "ט",
		0xa: "י",
		0xb: "כ",
		0xc: "ל",
		0xd: "מ",
		0xe: "נ",
		0xf: "ס",
		0x10: "ע",
		0x11: "פ",
		0x12: "צ",
		0x13: "ק",
		0x14: "ר",
		0x15: "ש",
		0x16: "ת",
		0x17: "ן",
		0x18: "ך",
		0x19: "ף",
		0x1a: "ץ",
		0x1b: "ם",
		0x1c: "־",
		0x1d: "ɰ",
		0x1e: "ɱ",
		0x1f: "ɳ",
		0x20: " ",
		0x21: "!",
		0x22: "\"",
		0x23: "#",
		0x24: "$",
		0x25: "%",
		0x26: "&",
		0x27: "'",
		0x28: "(",
		0x29: ")",
		0x2a: "*",
		0x2b: "+",
		0x2c: ",",
		0x2d: "-",
		0x2e: ".",
		0x2f: "/",
		0x30: "0",
		0x31: "1",
		0x32: "2",
		0x33: "3",
		0x34: "4",
		0x35: "5",
		0x36: "6",
		0x37: "7",
		0x38: "8",
		0x39: "9",
		0x3a: ":",
		0x3b: ";",
		0x3c: "<",
		0x3d: "=",
		0x3e: ">",
		0x3f: "?",
		0x40: "@",
		0x41: "A",
		0x42: "B",
		0x43: "C",
		0x44: "D",
		0x45: "E",
		0x46: "F",
		0x47: "G",
		0x48: "H",
		0x49: "I",
		0x4a: "J",
		0x4b: "K",
		0x4c: "L",
		0x4d: "M",
		0x4e: "N",
		0x4f: "O",
		0x50: "P",
		0x51: "Q",
		0x52: "R",
		0x53: "S",
		0x54: "T",
		0x55: "U",
		0x56: "V",
		0x57: "W",
		0x58: "X",
		0x59: "Y",
		0x5a: "Z",
		0x5b: "[",
		0x5c: "\\",
		0x5d: "]",
		0x5e: "^",
		0x5f: "_",
		0x60: "`",
		0x61: "a",
		0x62: "b",
		0x63: "c",
		0x64: "d",
		0x65: "e",
		0x66: "f",
		0x67: "g",
		0x68: "h",
		0x69: "i",
		0x6a: "j",
		0x6b: "k",
		0x6c: "l",
		0x6d: "m",
		0x6e: "n",
		0x6f: "o",
		0x70: "p",
		0x71: "q",
		0x72: "r",
		0x73: "s",
		0x74: "t",
		0x75: "u",
		0x76: "v",
		0x77: "w",
		0x78: "x",
		0x79: "y",
		0x7a: "z",
		0x7b: "{",
		0x7c: "|",
		0x7d: "}",
		0x7e: "~",
		0x7f: "ɸ",
		0x80: "ɮ",
		0x81: "ʘ",
		0x82: "ʤ",
		0x83: "ʥ",
		0x84: "",
		0x85: "",
		0x86: "",
		0x87: "",
		0x88: "",
		0x89: "",
		0x8a: "",
		0x8b: "",
		0x8c: "",
		0x8d: "ʬ",
		0x8e: "ʯ",
		0x8f: "Ψ",
		0x90: "Ω",
		0x91: "ϯ",
		0x92: "Ͼ",
		0x93: "Д",
		0x94: "Й",
		0x95: "И",
		0x96: "П",
		0x97: "Ю",
		0x98: "Э",
		0x99: "",
		0x9a: "",
		0x9b: "",
		0x9c: "",
		0x9d: "Ӽ",
		0x9e: "Ԑ",
		0x9f: "",
		0xa0: "Ը",
		0xa1: "¡",
		0xa2: "¢",
		0xa3: "£",
		0xa4: "¤",
		0xa5: "¥",
		0xa6: "¦",
		0xa7: "§",
		0xa8: "Պ",
		0xa9: "©",
		0xaa: "ª",
		0xab: "«",
		0xac: "¬",
		0xad: "Զ",
		0xae: "®",
		0xaf: "Ֆ",
		0xb0: "°",
		0xb1: "±",
		0xb2: "²",
		0xb3: "³",
		0xb4: "´",
		0xb5: "µ",
		0xb6: "¶",
		0xb7: "·",
		0xb8: "թ",
		0xb9: "¹",
		0xba: "º",
		0xbb: "»",
		0xbc: "¼",
		0xbd: "½",
		0xbe: "¾",
		0xbf: "¿",
		0xc0: "À",
		0xc1: "Á",
		0xc2: "Â",
		0xc3: "Ã",
		0xc4: "Ä",
		0xc5: "Å",
		0xc6: "Æ",
		0xc7: "Ç",
		0xc8: "È",
		0xc9: "É",
		0xca: "Ê",
		0xcb: "Ë",
		0xcc: "Ì",
		0xcd: "Í",
		0xce: "Î",
		0xcf: "Ï",
		0xd0: "Ð",
		0xd1: "Ñ",
		0xd2: "Ò",
		0xd3: "Ó",
		0xd4: "Ô",
		0xd5: "Õ",
		0xd6: "Ö",
		0xd7: "×",
		0xd8: "Ø",
		0xd9: "Ù",
		0xda: "Ú",
		0xdb: "Û",
		0xdc: "Ü",
		0xdd: "Ý",
		0xde: "Þ",
		0xdf: "ß",
		0xe0: "à",
		0xe1: "á",
		0xe2: "â",
		0xe3: "ã",
		0xe4: "ä",
		0xe5: "å",
		0xe6: "æ",
		0xe7: "ç",
		0xe8: "è",
		0xe9: "é",
		0xea: "ê",
		0xeb: "ë",
		0xec: "ì",
		0xed: "í",
		0xee: "î",
		0xef: "ï",
		0xf0: "ð",
		0xf1: "ñ",
		0xf2: "ò",
		0xf3: "ó",
		0xf4: "ô",
		0xf5: "õ",
		0xf6: "ö",
		0xf7: "÷",
		0xf8: "ø",
		0xf9: "ù",
		0xfa: "ú",
		0xfb: "û",
		0xfc: "ü",
		0xfd: "ý",
		0xfe: "þ",
		0xff: "ÿ",
	};
	
	this.code_generators = {
		/*
		This sign represents an action that will not modify the stack. 
		For example, ɵ+ will accumulate the stack but leave it untouched. It will store the result in AX.
		*/
		"ɵ": -1,

		/*
		Accumulates the stack.
		Destroys the stack, leaving one element which is the sum of the stack.
		For example, running `+` on the stack [1, 2, 3] will leave the stack like that: [6]
		*/
		"+": `stack = [stack.reduce((x, y) => x + y)];`,

		/*
		Safely accumulates the stack.
		For example, running `+` on the stack [1, 2, 3] put in AX the value 6.
		*/
		"ɵ+": `AX = stack.reduce((x, y) => x + y);`,

		/*
		Clears the stack from all its elements.
		*/
		".": `stack = [];`,

		/*
		Duplicates the last element in the stack.
		For example, running on stack [1, 2, 3] will leave the stack like that: [1, 2, 3, 3]
		*/
		",": `stack.push(stack[stack.length - 1]);`,
		
		/*
		Checks if the stack contains the value of AX.
		Destroys the stack.
		Leaving the stack with [1] if it contained the value, or [0] otherwise.
		*/
		":": `stack = ~stack.indexOf(AX) ? [1] : [0];`
	};

	/*
	Parses the arguments into a stack constructor expression for compilation.
	Parameters:
		args - array of strings representing the arguments to the program.
	Return value:
		String - the code that constructs the stack according to the parameters.
	*/
	this.get_args_stack = function(args) {
		stack = [];
		for (var i = 0; i < args.length; i++) {
			try {
				stack.push(eval(args[i]));
			}
			catch (err) {
				stack.push(args[i]);
			}
		}
		return "var stack = " + JSON.stringify(stack) + ";";
	};

	/*
	Defines the base code for the program (creates the registers, alternative stack, etc).
	*/
	this.get_base_code = function() {
		return `var AX = null, BX = null, CX = null, DX = null, IX = null, JX = null, KX = null;`;
	};


	this.code = "";
	this.indent_level = 1;

	/*
	Appends a line of code to the output code.
	*/
	this.app = function(line) {
		this.code += Array(this.indent_level).join("\t") + line + "\n";
	};

	/*
	Execute a code section.
	Parameters:
		code - the code string to execute.
		args - the list of arguments. They will be initially pushed to the stack.
	Return value:
		String - the compiled javascript code that can be run.
	*/
	this.exec = function(code, args) {
		// Resetting our headstart
		this.code = "";
		this.indent_level = 1;
		var app = this.app;

		// Writing the base code.
		app(get_base_code());
		app(get_args_stack(args));


		return this.code;
	};
};

var rig = new RIG();