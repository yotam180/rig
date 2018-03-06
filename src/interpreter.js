var RIG = function() {
	
	this.chars = {
		0x0: " ", // NOP
		0x1: "A", // push AX register
		0x2: "a", // pop to AX register
		0x3: "B", // push BX register
		0x4: "b", // pop to BX register
		0x5: "C", // push CX register
		0x6: "c", // pop to CX register
		0x7: "D", // push DX register
		0x8: "d", // pop to DX register
		0x9: "I", // push IX register
		0xa: "J", // push JX register
		0xb: "K", // push KX register
		0xc: "t", // Top-wise
		0xd: "T", // Top-safe
		0xe: "s", // Stack-wise
		0xf: "S", // Stack-safe
		0x10: "",
		0x11: "",
		0x12: "",
		0x13: "",
		0x14: "",
		0x15: "",
		0x16: "",
		0x17: "",
		0x18: "",
		0x19: "",
		0x1a: "",
		0x1b: "",
		0x1c: "",
		0x1d: "",
		0x1e: "",
		0x1f: "",
		0x20: "",
		0x21: "",
		0x22: "",
		0x23: "",
		0x24: "",
		0x25: "",
		0x26: "",
		0x27: "",
		0x28: "",
		0x29: "",
		0x2a: "",
		0x2b: "",
		0x2c: "",
		0x2d: "",
		0x2e: "",
		0x2f: "",
		0x30: "",
		0x31: "",
		0x32: "",
		0x33: "",
		0x34: "",
		0x35: "",
		0x36: "",
		0x37: "",
		0x38: "",
		0x39: "",
		0x3a: "",
		0x3b: "",
		0x3c: "",
		0x3d: "",
		0x3e: "",
		0x3f: "",
		0x40: "",
		0x41: "",
		0x42: "",
		0x43: "",
		0x44: "",
		0x45: "",
		0x46: "",
		0x47: "",
		0x48: "",
		0x49: "",
		0x4a: "",
		0x4b: "",
		0x4c: "",
		0x4d: "",
		0x4e: "",
		0x4f: "",
		0x50: "",
		0x51: "",
		0x52: "",
		0x53: "",
		0x54: "",
		0x55: "",
		0x56: "",
		0x57: "",
		0x58: "",
		0x59: "",
		0x5a: "",
		0x5b: "",
		0x5c: "",
		0x5d: "",
		0x5e: "",
		0x5f: "",
		0x60: "",
		0x61: "",
		0x62: "",
		0x63: "",
		0x64: "",
		0x65: "",
		0x66: "",
		0x67: "",
		0x68: "",
		0x69: "",
		0x6a: "",
		0x6b: "",
		0x6c: "",
		0x6d: "",
		0x6e: "",
		0x6f: "",
		0x70: "",
		0x71: "",
		0x72: "",
		0x73: "",
		0x74: "",
		0x75: "",
		0x76: "",
		0x77: "",
		0x78: "",
		0x79: "",
		0x7a: "",
		0x7b: "",
		0x7c: "",
		0x7d: "",
		0x7e: "",
		0x7f: "",
		0x80: "",
		0x81: "",
		0x82: "",
		0x83: "",
		0x84: "",
		0x85: "",
		0x86: "",
		0x87: "",
		0x88: "",
		0x89: "",
		0x8a: "",
		0x8b: "",
		0x8c: "",
		0x8d: "",
		0x8e: "",
		0x8f: "",
		0x90: "",
		0x91: "",
		0x92: "",
		0x93: "",
		0x94: "",
		0x95: "",
		0x96: "",
		0x97: "",
		0x98: "",
		0x99: "",
		0x9a: "",
		0x9b: "",
		0x9c: "",
		0x9d: "",
		0x9e: "",
		0x9f: "",
		0xa0: "",
		0xa1: "",
		0xa2: "",
		0xa3: "",
		0xa4: "",
		0xa5: "",
		0xa6: "",
		0xa7: "",
		0xa8: "",
		0xa9: "",
		0xaa: "",
		0xab: "",
		0xac: "",
		0xad: "",
		0xae: "",
		0xaf: "",
		0xb0: "",
		0xb1: "",
		0xb2: "",
		0xb3: "",
		0xb4: "",
		0xb5: "",
		0xb6: "",
		0xb7: "",
		0xb8: "",
		0xb9: "",
		0xba: "",
		0xbb: "",
		0xbc: "",
		0xbd: "",
		0xbe: "",
		0xbf: "",
		0xc0: "",
		0xc1: "",
		0xc2: "",
		0xc3: "",
		0xc4: "",
		0xc5: "",
		0xc6: "",
		0xc7: "",
		0xc8: "",
		0xc9: "",
		0xca: "",
		0xcb: "",
		0xcc: "",
		0xcd: "",
		0xce: "",
		0xcf: "",
		0xd0: "",
		0xd1: "",
		0xd2: "",
		0xd3: "",
		0xd4: "",
		0xd5: "",
		0xd6: "",
		0xd7: "",
		0xd8: "",
		0xd9: "",
		0xda: "",
		0xdb: "",
		0xdc: "",
		0xdd: "",
		0xde: "",
		0xdf: "",
		0xe0: "",
		0xe1: "",
		0xe2: "",
		0xe3: "",
		0xe4: "",
		0xe5: "",
		0xe6: "",
		0xe7: "",
		0xe8: "",
		0xe9: "",
		0xea: "",
		0xeb: "",
		0xec: "",
		0xed: "",
		0xee: "",
		0xef: "",
		0xf0: "",
		0xf1: "",
		0xf2: "",
		0xf3: "",
		0xf4: "",
		0xf5: "",
		0xf6: "",
		0xf7: "",
		0xf8: "",
		0xf9: "",
		0xfa: "",
		0xfb: "",
		0xfc: "",
		0xfd: "",
		0xfe: "",
		0xff: ""
	};

	
	var prod_code = "";
	var indent_level = 1;
	var LRR = "AX";
	
	this.code_generators = {
		/*
		Pushes the value of the registers into the top of the stack.
		*/
		"A": `stack.push(AX);`,
		"B": `stack.push(BX);`,
		"C": `stack.push(CX);`,
		"D": `stack.push(DX);`,

		/*
		Pops the top element of the stack into the registers.
		*/
		"a": `AX = stack.pop();`,
		"b": `BX = stack.pop();`,
		"c": `CX = stack.pop();`,
		"d": `DX = stack.pop();`,
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
		return `var AX = 0, BX = 1, CX = -1, DX = 2, IX = 0, JX = 0, KX = 0;`;
	};


	/*
	Appends a line of code to the output code.
	*/
	this.app = function(line) {
		prod_code += Array(indent_level).join("\t") + line + "\n";
	};

	/*
	Execute a code section.
	Parameters:
		code - the code string to execute.
		args - the list of arguments. They will be initially pushed to the stack.
	Return value:
		String - the compiled javascript code that can be run.
	*/
	this.compile = function(code, args) {
		// Resetting our headstart
		prod_code = "";
		indent_level = 1;
		LRR = "AX";
		var app = this.app;

		// Writing the base code.
		app(this.get_base_code());
		app(this.get_args_stack(args));

		// We create a code stream we can shift() every time we need another character.
		code = code.split("");

		// Reading the stream to its end.
		while (code.length) {
			// The final code we generate for the next symbol
			var to_append = -1;
			
			// The source code we take from the code "stream"
			var source = "";

			// The generator we wish to find in this.code_generator
			var generator = null;

			// While we don't have a result, or the code generator wishes us to continue taking characters.
			while (to_append == -1) {
				// Taking the next character.
				source += code.shift();

				// Finding the associative generator
				generator = this.code_generators[source];

				if (generator == undefined) {
					// If we don't find a generator, we assign to_append to exit the loop, then do nothing with it.
					to_append = undefined;
				}
				else if (generator.constructor.name == "Function") {
					// If the generator is a function, it should return the line of code.
					to_append = generator();
				}
				else if (generator.constructor.name == "String") {
					// If the generator is a string, it is the line of code.
					to_append = generator;
				}
				else {
					// Otherwise it could be -1, requesting more characters, or something less defined, which we cannot handle.
					to_append = generator;
				}
			}

			// Now we want to add the code lines.
			// But only if there's something to add.
			if (to_append) {
				to_append = to_append.split("\n");

				// We do it this way to keep the indentation level correct.
				for (var i = 0; i < to_append.length; i++) {
					app(to_append[i]); 
				}
			}
		}

		app("stack");
		return prod_code;
	};
};

var rig = new RIG();