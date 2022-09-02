const isArray = Array.isArray;

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
if (!isArray(this)) return false;
if (this.length !== other.length) return false
if (isArray(this) !== isArray(other)) return false


for (let i = 0; i < this.length; i++) {
  if (isArray(this[i]) !== isArray(other[i])) return false;
  
  if (!isArray(this[i]) && !isArray(other[i])) continue;
  
  if (!this[i].sameStructureAs(other[i])) return false;    
}

return true;
};


