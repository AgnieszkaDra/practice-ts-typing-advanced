const showErrorMessage = (form, fieldName, message) => {
    var _a;
    const existingError = form.querySelector(`span[id="${fieldName}-error"]`);
    if (existingError) {
        existingError.remove();
    }
    const label = form.querySelector(`label[for="${fieldName}"]`);
    if (label) {
        const errorMessage = document.createElement("span");
        errorMessage.id = `${fieldName}-error`;
        errorMessage.className = "error-message";
        errorMessage.textContent = message;
        (_a = label.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorMessage);
    }
};
export default showErrorMessage;
