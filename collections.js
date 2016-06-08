var collections = (function() {

	var module = {};

	function Node(prev, val) {
		this._val = val;
		this._prev = prev;
	}

	function Queue(max_length) {
		this._first = null;
		this._last = null;
		this._length = 0;
		if(isNaN(max_length))
			this._max_length = Number.MAX_VALUE;
		else {
			this._max_length = max_length;
		}
	}

	Queue.prototype.push = function(new_elem) {
		var new_node = new Node(null, new_elem);
		if(this.isEmpty()) {
			this._last = this._first = new_node;
		} else {
			this._last._prev = new_node;
			this._last = new_node;
		}

		this._length++;

		if(this._length >= this._max_length) {
			this.pop();
		}
	}

	Queue.prototype.first = function() {
		if(_first !== null)
			return this._first._val;
		else
			return null;
	}

	Queue.prototype.pop = function() {
		if(this._first === null)
			return;

		var ret = this._first._val;
		this._first = this._first._prev;
		this._length--;
		return ret;
	}

	Queue.prototype.length = function() {
		return this._length;
	}

	Queue.prototype.isEmpty = function() {
		return this._length === 0 || this._first === null;
	}

	Queue.prototype.toArray = function() {
		var ret = new Array(this._length);
		var curr = this._first;
		var count = this._length -1;
		while(curr !== null) {
			ret[count] = curr._val;
			curr = curr._prev;
			count--;
		}
		return ret;
	}

	module.Queue = Queue;

	return module;
})();
