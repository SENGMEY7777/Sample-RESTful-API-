const validator = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  id: /^\d+$/,
  alphanumeric: /^[a-zA-Z0-9\s_-]+$/,
  uuid: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
  validateField(value, patternName) {
    if (!value) return false;
    const regex = this[patternName];
    return regex ? regex.test(String(value)) : false;
  }
};
module.exports = validator;
