var Err = {
	END_OF_CODE: 0x01,
	INVALID_NOTE: 0x02
}

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
		0x10: "+", // Sum/Accumulation
		0x11: "-",
		0x12: "*",
		0x13: "/",
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

	var src_code = [];
	var prod_code = "";
	var indent_level = 1;
	var LRR = "AX";
	var self = this;


	var registers = {
		"a": "AX",
		"b": "BX",
		"c": "CX",
		"d": "DX",
		"i": "IX",
		"j": "JX",
		"k": "KX"
	};
	
	/*
	Functions that generate code!
	*/
	this.code_generators = {
		"E": -1,
		"t": -1,
		"T": -1,
		"s": -1,
		"S": -1,

		/*
		Add(a)
		Adds parameter A to all elements in the stack.
		*/
		"+": function() {
			var a = self.take(registers);
			if (is_err(a)) {
				return a;
			}

			return `stack = stack.map(x => x + ` + a + `);`;
		}
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
	Checks if a number is a valid float for rig compilers to understand.
	Valid float examples:
	5
	5.5
	5.58
	5. (=5)
	.5 (=0.5)
	*/
	function isNum(x) {
		return x.match(/^(\d*)(\.)?(\d+)?$/);
	}

	function is_err(x) {
		return x.constructor.name == "Array" && x.length == 2 && x[0].constructor.name == "Number" && x[1].constructor.name == "String";
	}

	/*
	Takes the next acceptable element, according to a given set of elements that can be taken.
	Parameters:
		handles - can be an array with acceptable input names, or a dictionary which's keys are the acceptable input names.
	Return value:
		The received element.
	*/
	this.take = function(handles) {
		var el = "";
		var handle_found = null;
		var is_num = false;

		// We take characters until a handle is found.
		while (true) {
			// Checking for end of input (guard block)
			if (src_code.length == 0) {
				if (isNum(el)) {
					return el;
				}

				return [Err.END_OF_CODE, el];
			}

			// Taking the next element of the array
			el += src_code.shift();


			// Looking for a handle
			if (handles.constructor.name == "Array") {
				handle_found = ~handles.indexOf(el) ? 1 : 0; // 1 - found in array, 0 - not found in array
			}
			else if (handles.constructor.name == "Object") {
				handle_found = handles.hasOwnProperty(el) ? 3 : 2; // 3 - found in dict, 2 - not found in dict
			}

			// If we have a valid number, continue taking inputs.
			// We add "0" to the test because we want "15." to pass isNaN (it is a beginning of a decimal)
			if (isNum(el)) {
				is_num = true;
				continue;
			}

			// If we had a valid number but just got a wrong char,
			// we unshift it back into the source code and return the number.
			if (is_num) {
				src_code.unshift(el[el.length - 1]);
				return el.substr(0, el.length - 1);
			}
			is_num = false;

			if (handle_found == 0) {
				continue;
			}
			else if (handle_found == 1) {
				return el;
			}
			else if (handle_found == 2) {
				return [Err.INVALID_NOTE, el];
			}
			else if (handles[el] == -1) {
				continue;
			}
			else {
				return el;
			}
		}
	};

	/*
	Begins a new compilation cycle with code.
	*/
	this.init = function(code) {
		prod_code = "";
		indent_level = 1;
		LRR = "AX";
		src_code = code.split("");
	}

	/*
	Execute a code section.
	Parameters:
		args - the list of arguments. They will be initially pushed to the stack.
	Return value:
		String - the compiled javascript code that can be run.

	NOT WORKING, UNDER DEVELOPMENT.
	*/
	this.compile = function(args) {
		// Resetting our headstart
		var app = this.app;

		// Writing the base code.
		app(this.get_base_code());
		app(this.get_args_stack(args));

		while (src_code.length) {
			var el = this.take(this.code_generators);
			var handle = null;

			// Stopping compilation on error.
			if (is_err(el)) {
				return el;
			}

			if (isNum(el)) {
				handle = "stack.push(" + el + ");";
			}
			else {
				handle = this.code_generators[el];
				handle = handle(); // Executing the code generator.

				if (is_err(handle)) {
					return handle;
				}
			}

			// Adding the generated code line by line
			handle = handle.split("\n");
			for (var i = 0; i < handle.length; i++) {
				app(handle[i]);
			}
		}

		app("stack");
		return prod_code;
	};
};

var rig = new RIG();