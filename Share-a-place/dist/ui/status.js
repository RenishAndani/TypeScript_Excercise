export function showLoading() {
    const statusElement = document.getElementById("status");
    statusElement.textContent = "searching...";
}
export function showError(message) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = message;
}
export function clearStatus() {
    const statusElement = document.getElementById("status");
    statusElement.textContent = "";
}
//# sourceMappingURL=status.js.map